import React, { useState, useEffect } from 'react';
import BigBanner from '../../components/BigBanner/BigBanner';
import client from '../../contentful/createClient';
import postListToSliderData from '../../util/postListToSliderData';
import EditorsPicked from '../../components/EditorsPicked/EditorsPicked';

const EditorPicked = () => {
  const [blog, setBlog] = useState();
  const [error, setError] = useState(false);

  const getBlog = async (isSubscribed) => {
    try {
      const res = await client.getEntries({
        content_type: 'authorPicks',
      });

      const entries = res.includes.Entry.map((i) => {
        const fields = i.fields;
        return {
          ...fields,
          uploadedDate: i.sys.createdAt,
          id: i.sys.id,
        };
      });

      const final = await postListToSliderData(entries);
      if(isSubscribed) {
        setBlog(final);
      }
    } catch (error) {
      if(isSubscribed) {
        setError(error);
      }
    }
  };

  useEffect(() => {
    let isSubscribed = true;

    getBlog(isSubscribed);

    return () => {
      isSubscribed = false;
    };
  }, []);

  if(!blog || error) {
    return null;
  }

  return (
    <EditorsPicked
      blog={blog}
    />
  );
};

export default EditorPicked;

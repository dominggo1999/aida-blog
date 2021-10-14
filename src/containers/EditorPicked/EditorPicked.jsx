import { useState, useEffect } from 'react';
import BigBanner from '../../components/BigBanner/BigBanner';
import client from '../../contentful/createClient';
import postListToSliderData from '../../util/postListToSliderData';
import EditorsPicked from '../../components/EditorsPicked/EditorsPicked';

const EditorPicked = () => {
  const [blog, setBlog] = useState();

  const getBlog = async () => {
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

      setBlog(final);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  if(!blog) {
    return null;
  }

  return (
    <EditorsPicked
      blog={blog}
    />
  );
};

export default EditorPicked;

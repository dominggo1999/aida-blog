import React, { useState, useEffect } from 'react';
import client from '../contentful/createClient';
import postListToSliderData from '../util/postListToSliderData';

const useGetBlogList = (params, setLoading) => {
  const { categoryId, tagId, pageNumber } = params;
  const [error, setError] = useState(false);

  let query = {
    content_type: 'blogPost',
    skip: 0,
  };
  const [total, setTotal] = useState(0);
  const [blogList, setBlogList] = useState();
  let pageTitle = 'All Article';

  const page = parseInt(pageNumber, 10);

  const pageNumberValid = (page) => {
    return page > 1 && typeof page === 'number';
  };

  if(!pageNumber) {
    // Semua blog untuk halaman 1
    if(!categoryId && !tagId) {
      query = {
        ...query,
        limit: 5,
      };
    }

    // Semua blog di category id halaman 1
    if(categoryId) {
      query = {
        ...query,
        'fields.category.sys.contentType.sys.id': 'category',
        'fields.category.fields.category[match]': categoryId,
        limit: 5,
      };
      pageTitle = categoryId;
    }

    // Semua blog di tag id halaman 1
    if(tagId) {
      query = {
        ...query,
        limit: 5,
        'fields.tags': tagId,
      };
      pageTitle = tagId;
    }
  }

  if(pageNumberValid(page)) {
    // Semua blog di halaman ke sekian
    if(!categoryId && !tagId) {
      query = {
        ...query,
        limit: 5,
        skip: (page - 1) * 5,
      };
    }

    // Semua blog di category id di halaman ke sekian
    if(categoryId && !tagId) {
      query = {
        ...query,
        limit: 5,
        skip: (page - 1) * 5,
        'fields.category.sys.contentType.sys.id': 'category',
        'fields.category.fields.category[match]': categoryId,
      };
      pageTitle = categoryId;
    }

    // Semua blog di tag id di halaman ke sekian
    if(!categoryId && tagId) {
      query = {
        ...query,
        limit: 5,
        skip: (page - 1) * 5,
        'fields.tags': tagId,
      };
      pageTitle = tagId;
    }
  }

  const getBlog = async (isSubscribed) => {
    try {
      const res = await client.getEntries(query);
      setTotal(res.total);
      const entries = res.items.map((i) => {
        const fields = i.fields;
        return {
          ...fields,
          uploadedDate: i.sys.createdAt,
          id: i.sys.id,
        };
      });

      const final = await postListToSliderData(entries);

      if(isSubscribed) {
        setBlogList(final);
        setLoading(false);
      }
    } catch (error) {
      if(isSubscribed) {
        setError(true);
      }
    }
  };

  useEffect(() => {
    let isSubscribed = true;

    setLoading(true);
    getBlog(isSubscribed);

    return () => {
      isSubscribed = false;
    };
  }, [params]);

  return [blogList, total, pageTitle, error];
};

export default useGetBlogList;

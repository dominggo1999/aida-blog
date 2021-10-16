import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import client from '../contentful/createClient';
import postListToSliderData from '../util/postListToSliderData';
import { capitalize } from '../util/capitalize';

const useGetBlogList = (params, setLoading) => {
  const { categoryId, tagId, pageNumber } = params;
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
    if(!categoryId && !tagId) {
      query = {
        ...query,
        limit: 5,
      };
    }

    if(categoryId) {
      query = {
        ...query,
        'fields.category.sys.contentType.sys.id': 'category',
        'fields.category.fields.category[match]': categoryId,
        limit: 5,
      };
      pageTitle = categoryId;
    }

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
    if(!categoryId && !tagId) {
      query = {
        ...query,
        limit: 5,
        skip: (page - 1) * 5,
      };
    }

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

  const getBlog = async () => {
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
      setBlogList(final);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getBlog();
  }, [params]);

  return [blogList, total, pageTitle];
};

export default useGetBlogList;

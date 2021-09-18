import { createClient } from 'contentful';
import { useEffect, useState } from 'react';
import BlogContent from '../containers/BlogContent/BlogContent';
import { BlogPlaceholder } from '../components/Wrapper/BlogPlaceholder';
import { scrollToTop } from '../util/scrollToTop';

const client = createClient({
  accessToken: process.env.REACT_APP_CONTENTFUL_API_KEY,
  space: process.env.REACT_APP_SPACE_ID,
});

const blogSlug = 'makan-bang';

const BlockSingle = () => {
  const [blog, setBlog] = useState();

  const getBlog = async () => {
    const res = await client.getEntries({
      content_type: 'blog',
      'fields.slug': blogSlug,
    });

    const blog = res.items[0];
    setBlog(blog);
    scrollToTop();
  };

  useEffect(() => {
    getBlog();
  }, []);

  if(!blog) return <BlogPlaceholder />;

  return (
    <>
      <BlogContent blog={blog} />
    </>
  );
};

export default BlockSingle;

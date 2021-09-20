import { createClient } from 'contentful';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BlogContent from '../containers/BlogContent/BlogContent';
import { BlogPlaceholder } from '../components/Wrapper/BlogPlaceholder';
import { scrollToTop } from '../util/scrollToTop';
import BlogHeader from '../components/BlogHeader/BlogHeader';

const client = createClient({
  accessToken: process.env.REACT_APP_CONTENTFUL_API_KEY,
  space: process.env.REACT_APP_SPACE_ID,
});

const blogSlug = 'makan-bang';

const BlockSingle = () => {
  const history = useHistory();
  const [blog, setBlog] = useState();

  const getBlog = async () => {
    try {
    // THIS SHOULD BE ON TRYCATCH BLOCK
      const res = await client.getEntries({
        content_type: 'blog',
        'fields.slug': blogSlug,
      });

      // REDIRECT TO 404 PAGE IF BLOCK DOESN'T

      const blog = res.items[0];
      if(blog) {
        setBlog(blog);
      }else{
        history.push('/404');
      }

      scrollToTop();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlog();
  }, []);

  if(!blog) return <BlogPlaceholder />;

  return (
    <>
      <BlogHeader blog={blog} />
      <BlogContent blog={blog} />
    </>
  );
};

export default BlockSingle;

import { createClient } from 'contentful';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import BlogContent from '../containers/BlogContent/BlogContent';
import { BlogPlaceholder } from '../components/Wrapper/BlogPlaceholder';
import { scrollToTop } from '../util/scrollToTop';
import BlogHeader from '../components/BlogHeader/BlogHeader';
import EditorsPicked from '../containers/EditorsPicked/EditorsPicked';
import { SpaceTop } from '../components/Wrapper/SpaceTop';
import { ReadingSection } from '../components/Wrapper/ReadingSection';
import Container from '../components/Wrapper/Container';
import AboutWriterCard2 from '../components/AboutWriterCard2/AboutWriterCard2';
import BlogBottom from '../components/BlogBottom/BlogBottom';

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
      <SpaceTop />
      <Container>
        <ReadingSection>
          <BlogHeader blog={blog} />
          <BlogContent blog={blog} />
          <hr />
          <BlogBottom blog={blog} />
          <AboutWriterCard2 />
        </ReadingSection>
      </Container>
      <EditorsPicked />
    </>
  );
};

export default BlockSingle;

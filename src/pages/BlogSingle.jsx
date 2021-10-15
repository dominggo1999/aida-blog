import { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { createClient } from 'contentful-management';
import BlogContent from '../containers/BlogContent/BlogContent';
import { scrollToTop } from '../util/scrollToTop';
import BlogHeader from '../components/BlogHeader/BlogHeader';
import EditorPicked from '../containers/EditorPicked/EditorPicked';
import { SpaceTop } from '../components/Wrapper/SpaceTop';
import { ReadingSection } from '../components/Wrapper/ReadingSection';
import Container from '../components/Wrapper/Container';
import AboutWriterCard2 from '../components/AboutWriterCard2/AboutWriterCard2';
import BlogBottom from '../components/BlogBottom/BlogBottom';
import SpinnerFullscreen from '../components/SpinnerFullscreen/SpinnerFullscreen';
import client from '../contentful/createClient';

const c = createClient({
  accessToken: process.env.REACT_APP_CONTENTFUL_MANAGEMENT_KEY,
});

const getData = async () => {

};

getData();

const blogSlug = '30-best-lifestyle-blogs-to-follow-in-2021';

const BlockSingle = () => {
  const history = useHistory();
  const [blog, setBlog] = useState();
  const mountedRef = useRef(true);

  const getBlog = async () => {
    try {
    // THIS SHOULD BE ON TRYCATCH BLOCK
      const res = await client.getEntries({
        content_type: 'blogPost',
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
    return () => { mountedRef.current = false; };
  }, []);

  if(!blog) return <SpinnerFullscreen />;

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
      <EditorPicked />
    </>
  );
};

export default BlockSingle;

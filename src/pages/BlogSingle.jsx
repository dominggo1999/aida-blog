import { useEffect, useState, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
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
  c.getSpace(process.env.REACT_APP_CONTENTFUL_SPACE_AIDA)
    .then((space) => space.getEnvironment('master'))
    .then((environment) => environment.getEntries({
      content_type: 'blogPost',
    }))
    .then(async (response) => {
      let a = await response.items.slice(0, 100);

      a = await Promise.all(a.map((i) => {
        // const newDesc = descs[Math.floor(Math.random() * descs.length)];

        const randViews = 5 + Math.floor(Math.random() * 20);

        i.fields.readingTime = {
          'en-US': randViews,
        };

        return i;
      }));

      // a.fields.description = {
      //   'en-US': 'JUST TESTING',
      // };
      // return a.update();
    })
    .catch(console.error);
};

getData();

const blogSlug = '30-best-lifestyle-blogs-to-follow-in-2021';

const BlockSingle = () => {
  const history = useHistory();
  const { slug } = useParams();
  const [blog, setBlog] = useState();
  const mountedRef = useRef(true);
  const [loading, setLoading] = useState(false);

  const getBlog = async () => {
    setLoading(true);
    try {
    // THIS SHOULD BE ON TRYCATCH BLOCK
      const res = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug': slug === 'slug' ? blogSlug : slug,
      });

      // REDIRECT TO 404 PAGE IF BLOCK DOESN'T

      const blog = res.items[0];
      if(blog) {
        setBlog(blog);
        setLoading(false);
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
  }, [slug]);

  if(loading || !blog) return <SpinnerFullscreen />;

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

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
import CommentSection from '../components/CommentSection/CommentSection';

const a = ['Less Than 5 Minutes', 'Inspiration', 'Easy Read', 'Simple', 'English', 'Modern', 'Superb'];

const genTags = () => {
  // Salin array
  const b = [...a];
  // Randomize berapa tags yang harus diambil
  const r = Math.floor(Math.random() * b.length);

  const choosenTags = [];
  for (let i = 0; i < r; i += 1) {
    // Randomize nomor berapa yang harus diambil
    const r2 = Math.floor(Math.random() * b.length);
    const choose = b.splice(r2, 1)[0];
    choosenTags.push(choose);
  }

  if(choosenTags.length === 0) {
    choosenTags.push(b[r]);
  }

  return choosenTags;
};

const c = createClient({
  accessToken: process.env.REACT_APP_CONTENTFUL_MANAGEMENT_KEY,
});

// const getData = async () => {
//   c.getSpace(process.env.REACT_APP_CONTENTFUL_SPACE_AIDA)
//     .then((space) => space.getEnvironment('master'))
//     .then((environment) => environment.getEntries({
//       content_type: 'blogPost',
//       skip: 100,
//     }))
//     .then(async (response) => {
//       let a = await response.items.slice(0, 100);

//       a = await Promise.all(a.map((i) => {
//         i.fields.tags = {
//           'en-US': genTags(),
//         };

//         return i.update();
//       }));

//       // // return a.update();
//     })
//     .catch(console.error);
// };

// getData();

// const justTesting = async () => {
//   const res = await client.getEntries({
//     content_type: 'blogPost',
//     'fields.tags': 'English',
//   });
// };

// justTesting();

const BlockSingle = () => {
  const history = useHistory();
  const { slug } = useParams();
  const [blog, setBlog] = useState();
  const mountedRef = useRef(true);
  const [loading, setLoading] = useState(false);

  const getBlog = async () => {
    setLoading(true);
    try {
      const res = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug': slug,
      });

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
          <CommentSection blog={blog} />
        </ReadingSection>
      </Container>
      <EditorPicked />
    </>
  );
};

export default BlockSingle;

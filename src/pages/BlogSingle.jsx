import React, { useEffect, useState, useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
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

const BlockSingle = () => {
  const history = useHistory();
  const { slug } = useParams();
  const [blog, setBlog] = useState();
  const isSubscribed = useRef(true);
  const [loading, setLoading] = useState(false);

  const getBlog = async () => {
    setLoading(true);
    try {
      const res = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug': slug,
      });

      const blog = res.items[0];

      if(isSubscribed.current) {
        if(blog) {
          setBlog(blog);
          setLoading(false);
        }else{
          history.push('/404');
        }

        scrollToTop();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlog();
    return () => { isSubscribed.current = false; };
  }, [slug]);

  if(loading) return <SpinnerFullscreen />;

  if(!blog) return null;

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

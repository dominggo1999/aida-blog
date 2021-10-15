import short from 'short-uuid';
import { useEffect, useState } from 'react';

import Posts from '../../components/Posts/Posts';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { popularPosts } from '../../data/popularPosts';
import PostCard from '../../components/PostCard/PostCard';
import { RecentPostsWrapper } from './RecentPost.style';
import Container from '../../components/Wrapper/Container';
import client from '../../contentful/createClient';
import postListToSliderData from '../../util/postListToSliderData';

const RecentPost = () => {
  const [blog, setBlog] = useState();

  const getBlog = async () => {
    try {
      const res = await client.getEntries({
        content_type: 'blogPost',
        limit: 6,
        order: '-sys.createdAt',
      });

      const entries = res.items.map((i) => {
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
    <RecentPostsWrapper>
      <Container>
        <SectionHeader>
          Recent Articles
        </SectionHeader>
        <Posts col={2}>
          {
            blog && blog.map((item) => {
              return (
                <PostCard
                  key={short.generate()}
                  post={item}
                  readTime
                />
              );
            })
          }
        </Posts>
      </Container>
    </RecentPostsWrapper>
  );
};

export default RecentPost;

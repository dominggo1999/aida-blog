import React, { useState, useEffect } from 'react';
import short from 'short-uuid';
import { SidebarWrapper, CategoriesWrapper } from './BlogListSidebar.style';
import AboutWriterCard from '../../components/AboutWriterCard/AboutWriterCard';
import CategoryCard2 from '../../components/CategoryCard2.js/CategoryCard2';
import SidebarTitle from '../../components/SidebarTitle/SidebarTitle';
import { categories } from '../../data/categories';
import Posts from '../../components/Posts/Posts';
import { popularPosts } from '../../data/popularPosts';
import PostCard3 from '../../components/PostCard3/PostCard3';
import client from '../../contentful/createClient';
import postListToSliderData from '../../util/postListToSliderData';

const popularCategories = categories.filter((i, id) => id < 4);
const posts = popularPosts.filter((i, id) => id < 4);

const BlogListSidebar = (isSubscribed) => {
  const [blog, setBlog] = useState();
  const [error, setError] = useState(false);

  const getBlog = async () => {
    try {
      const res = await client.getEntries({
        content_type: 'blogPost',
        limit: 4,
        order: '-fields.views',
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
      if(isSubscribed) {
        setBlog(final);
      }
    } catch (err) {
      if(isSubscribed) {
        setError(true);
      }
    }
  };

  useEffect(() => {
    let isSubscribed = true;

    getBlog(isSubscribed);

    return () => {
      isSubscribed = false;
    };
  }, []);

  if(!blog) {
    return null;
  }

  return (
    <SidebarWrapper>
      <SidebarTitle title="About Me" />
      <AboutWriterCard />
      <SidebarTitle title="Popular Categories" />
      <CategoriesWrapper>
        {
          popularCategories && popularCategories.map((category) => {
            return (
              <CategoryCard2
                key={short.generate()}
                category={category}
              />
            );
          })
        }
      </CategoriesWrapper>
      <SidebarTitle title="Popular Posts" />
      <Posts>
        {
          !error && blog && blog.map((post) => {
            return(
              <PostCard3
                key={short.generate()}
                post={post}
              />
            );
          })
        }
      </Posts>
    </SidebarWrapper>
  );
};

export default BlogListSidebar;

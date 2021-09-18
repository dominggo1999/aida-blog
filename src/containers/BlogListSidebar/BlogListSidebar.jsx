import React from 'react';
import short from 'short-uuid';
import { SidebarWrapper, CategoriesWrapper } from './BlogListSidebar.style';
import AboutWriterCard from '../../components/AboutWriterCard/AboutWriterCard';
import CategoryCard2 from '../../components/CategoryCard2.js/CategoryCard2';
import SidebarTitle from '../../components/SidebarTitle/SidebarTitle';
import { categories } from '../../data/categories';
import Posts from '../../components/Posts/Posts';
import { popularPosts } from '../../data/popularPosts';
import PostCard3 from '../../components/PostCard3/PostCard3';
import VerticalBanner from '../../components/VerticalBanner/VerticalBanner';

const popularCategories = categories.filter((i, id) => id < 4);
const posts = popularPosts.filter((i, id) => id < 4);

const BlogListSidebar = () => {
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
          posts && posts.map((post) => {
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

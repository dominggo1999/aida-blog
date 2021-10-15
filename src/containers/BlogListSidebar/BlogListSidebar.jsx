import { useState, useEffect } from 'react';
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
import client from '../../contentful/createClient';
import postListToSliderData from '../../util/postListToSliderData';

const popularCategories = categories.filter((i, id) => id < 4);
const posts = popularPosts.filter((i, id) => id < 4);

const BlogListSidebar = () => {
  const [blog, setBlog] = useState();

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
          blog && blog.map((post) => {
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

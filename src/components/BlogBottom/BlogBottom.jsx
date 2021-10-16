import short from 'short-uuid';
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {
  BlogBottomWrapper, Tags, ShareAction, ShareActionText, ShareActionList, TagsHeader, ShareButton, ShareActionRow,
} from './BlogBottom.style';
import Button from '../Button/Button';
import { categoryColors } from '../../data/categoryColors';
import { scrollToTop } from '../../util/scrollToTop';

// const tags = ['geawgew', 'geege', 'wwfqfqwf', 'button', 'button', 'button', 'button', 'button'];

const BlogBottom = ({ blog }) => {
  const tags = blog.fields.tags;

  return (
    <>
      <TagsHeader>Tags</TagsHeader>
      <BlogBottomWrapper>
        <Tags>
          {
            tags && tags.map((tag) => {
              return (
                <Link
                  key={short.generate()}
                  to={`/blog/tag/${tag}`}
                >
                  <Button
                    onClick={scrollToTop}
                    bg={categoryColors.brand2}
                  >{tag}
                  </Button>
                </Link>
              );
            })
          }
        </Tags>
        <ShareAction>
          <ShareActionRow>
            <ShareActionText>
              Share This :
            </ShareActionText>
            <ShareActionList>
              <ShareButton><FaFacebookF /></ShareButton>
              <ShareButton><FaTwitter /> </ShareButton>
              <ShareButton><FaPinterestP /> </ShareButton>
            </ShareActionList>
          </ShareActionRow>
        </ShareAction>
      </BlogBottomWrapper>
    </>
  );
};

export default BlogBottom;

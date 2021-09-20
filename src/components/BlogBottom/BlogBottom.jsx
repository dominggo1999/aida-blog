import short from 'short-uuid';
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa';
import {
  BlogBottomWrapper, Tags, ShareAction, ShareActionText, ShareActionList, TagsHeader, ShareButton, ShareActionRow,
} from './BlogBottom.style';
import { getBlogTags } from '../../util/getBlogTags';
import Button from '../Button/Button';
import { categoryColors } from '../../data/categoryColors';

const tags = ['geawgew', 'geege', 'wwfqfqwf', 'button', 'button', 'button', 'button', 'button'];

const BlogBottom = ({ blog }) => {
  // const tags = getBlogTags(blog.fields);

  return (
    <>
      <TagsHeader>Tags</TagsHeader>
      <BlogBottomWrapper>
        <Tags>
          {
            tags && tags.map((item) => {
              return (
                <Button
                  bg={categoryColors.brand2}
                  key={short.generate()}
                >{item}
                </Button>
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

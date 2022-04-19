import short from 'short-uuid';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import React from 'react';
import {
  BlogBottomWrapper, Tags, ShareAction, ShareActionText, ShareActionList, TagsHeader, ShareButton, ShareActionRow,
} from './BlogBottom.style';
import Button from '../Button/Button';
import { categoryColors } from '../../data/categoryColors';
import { scrollToTop } from '../../util/scrollToTop';

const BlogBottom = ({ blog }) => {
  const url = encodeURIComponent(window.location.href);
  const tags = blog.fields.tags;
  const title = blog.fields.title;

  const facebookShareLink = `http://facebook.com/sharer/sharer.php?u=${url}`;
  const twitterShareLink = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
  const whatsappShareLink = `https://wa.me/?text=${url}`;

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
              <ShareButton
                target="_blank"
                rel="noopener noreferer"
                href={facebookShareLink}
              ><FaFacebookF />
              </ShareButton>
              <ShareButton
                target="_blank"
                rel="noopener noreferer"
                href={twitterShareLink}
              ><FaTwitter />
              </ShareButton>
              <ShareButton
                target="_blank"
                rel="noopener noreferer"
                href={whatsappShareLink}
              ><BsWhatsapp />
              </ShareButton>
            </ShareActionList>
          </ShareActionRow>
        </ShareAction>
      </BlogBottomWrapper>
    </>
  );
};

export default BlogBottom;

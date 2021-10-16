import { DiscussionEmbed } from 'disqus-react';
import { CommentContainer } from './CommentSection.style';

const CommentSection = ({ blog }) => {
  const { slug, title } = blog;
  const location = window.location.href;
  const shortname = process.env.REACT_APP_DISQUS_SHORTNAME;

  return (
    <CommentContainer>
      <DiscussionEmbed
        shortname={shortname}
        config={
        {
          url: location,
          identifier: slug,
          title,
          language: 'en',
        }
    }
      />
    </CommentContainer>
  );
};

export default CommentSection;

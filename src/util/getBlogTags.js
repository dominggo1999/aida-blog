export const getBlogTags = (arr) => {
  const tags = arr.tags.map((item) => {
    return item.fields.tag;
  });

  return tags;
};

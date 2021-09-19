export const flattenBlogNodeText = (arr) => {
  const finalText = '';
  // [0].content[0].value

  const a = arr.reduce((acc, curr) => {
    return acc + curr.content[0].value;
  }, '');

  return a;
};

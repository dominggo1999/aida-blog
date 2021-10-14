import client from '../contentful/createClient';

const getCategory = async (id) => {
  try {
    // THIS SHOULD BE ON TRYCATCH BLOCK
    const res = await client.getEntry(id);
    return res.fields.category;
  } catch (error) {
    console.log(error);
  }
};

const getImage = (image) => {
  return `https:${image.fields.file.url}`;
};

const postListToSliderData = (list) => {
  const formattedList = Promise.all(list.map(async (i) => {
    const {
      title, readingTime, id, uploadedDate,
    } = i;
    const category = await getCategory(i.category.sys.id);
    const image = getImage(i.mainImage);

    return {
      id,
      title,
      category,
      image,
      minuteToRead: readingTime,
      uploadedDate,
    };
  }));

  return formattedList;
};

export default postListToSliderData;

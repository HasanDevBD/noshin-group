// utils/getImages.js
const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

const getImages = importAll(
  require.context("/public/assets/swiper-slider/", false, /\.(png|jpe?g|svg)$/)
);

export default getImages;

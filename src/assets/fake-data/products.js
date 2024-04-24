// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";

import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

import product_05_image_01 from "../images/product_04.jpg";
import product_05_image_02 from "../images/product_08.jpg";
import product_05_image_03 from "../images/product_09.jpg";

import product_06_image_01 from "../images/bread(1).png";
import product_06_image_02 from "../images/bread(2).png";
import product_06_image_03 from "../images/bread(3).png";

const products = [
  {
    id: "01",
    title: "Chicken Burger",
    price: 24.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ",
  },

  {
    id: "02",
    title: "Vegetarian Pizza",
    price: 115.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "03",
    title: "Double Cheese Margherita",
    price: 110.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "04",
    title: "Maxican Green Wave",
    price: 110.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "05",
    title: "Cheese Burger",
    price: 24.0,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: "Burger",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "06",
    title: "Royal Cheese Burger",
    price: 24.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "07",
    title: "Seafood Pizza",
    price: 115.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "08",
    title: "Thin Cheese Pizza",
    price: 110.0,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "09",
    title: "Pizza With Mushroom",
    price: 110.0,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Pizza",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "10",
    title: "Classic Hamburger",
    price: 24.0,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "Burger",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "11",
    title: "Crunchy Bread ",
    price: 35.0,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "12",
    title: "Delicious Bread ",
    price: 35.0,
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: "Bread",

    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },

  {
    id: "13",
    title: "Loaf Bread",
    price: 35.0,
    image01:
      "https://www.realsimple.com/thmb/ODiBsdCQ2dZvWmDuKF_i0zRkOZE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/real-simple-spiced-chocolate-orange-pull-apart-loaf-recipe-1222SWT-21c5996c4d3b4af18ceb9dad59d8319b.jpg",
    image02: "product_06_image_02",
    image03: "product_06_image_03",
    category: "Bread",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  },
  {
    id: "14",
    title: "Chapati",
    price: 40.0,
    image01:
      "https://static01.nyt.com/images/2023/04/14/multimedia/14KOMOLAFE-rex1-chapa-mzjb/14KOMOLAFE-rex1-chapa-mzjb-mediumSquareAt3X.jpg",
    image02: "product_07_image_02",
    image03: "product_07_image_03",
    category: "Bread",
    desc: "Delicious Kenyan flatbread made from whole wheat flour. Perfect for pairing with various dishes or enjoying on its own.",
  },
  {
    id: "15",
    title: "Mandazi",
    price: 25.0,
    image01:
      "https://www.jocooks.com/wp-content/uploads/2012/09/mandazi-african-donuts-1.jpg",
    image02: "product_08_image_02",
    image03: "product_08_image_03",
    category: "Bread",
    desc: "Traditional Kenyan fried dough pastry. Soft, fluffy, and sweet, ideal for breakfast or as a snack.",
  },
  {
    id: "16",
    title: "Ugali",
    price: 30.0,
    image01:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW2l2EZS8LU55qForOafnudRxqvT-dXc4J1A&usqp=CAU",
    image02: "product_09_image_02",
    image03: "product_09_image_03",
    category: "Bread",
    desc: "A staple Kenyan food made from maize flour, often served with various stews and vegetables.",
  },

  // Add more bread items with Kenyan dishes and prices here
  {
    id: "18",
    title: "Sukuma Wiki Sandwich",
    price: 45.0,
    image01: "https://africanbites.com/wp-content/uploads/2015/01/IMG_6424.jpg",
    image02: "product_11_image_02",
    image03: "product_11_image_03",
    category: "Bread",
    desc: "A mouthwatering sandwich made with sukuma wiki (collard greens) and other tasty ingredients, sandwiched between slices of bread.",
  },

  {
    id: "20",
    title: "Matoke",
    price: 50.0,
    image01:
      "https://media-cdn.tripadvisor.com/media/photo-s/21/a4/97/98/matoke.jpg",
    image02: "product_13_image_02",
    image03: "product_13_image_03",
    category: "Bread",
    desc: "A traditional Kenyan dish made from green bananas, cooked until tender and served with various stews.",
  },

  {
    id: "22",
    title: "Mandazi Burger",
    price: 55.0,
    image01:
      "https://i1.wp.com/amunafoods.com/wp-content/uploads/2021/05/IMG_9812.jpg?fit=2048%2C1365&ssl=1",
    image02: "product_15_image_02",
    image03: "product_15_image_03",
    category: "Bread",
    desc: "A creative fusion of Kenyan mandazi and a burger, combining the best of both worlds for a delightful culinary experience.",
  },
  {
    id: "23",
    title: "Arrowroot Fritters",
    price: 35.0,
    image01:
      "https://www.mishry.com/wp-content/uploads/2020/06/yuca-1353258_1280.jpg",
    image02: "product_16_image_02",
    image03: "product_16_image_03",
    category: "Bread",
    desc: "Crunchy fritters made from arrowroot (nduma), seasoned with herbs and spices, and deep-fried until golden brown.",
  },
];

export default products;

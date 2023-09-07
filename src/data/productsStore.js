import Vase_0 from "../assets/img/Vase_000.png";
import Lamp_0 from "../assets/img/Lamp_000.png";
import Chair_0 from "../assets/img/Chair_000.png";
import Chair_1 from "../assets/img/Chair_001.png";
import Table_0 from "../assets/img/Table_000.png";
import Table_1 from "../assets/img/Table_001.png";
import Vase_1 from "../assets/img/Vase_001.png";
import Lamp_1 from "../assets/img/Lamp_001.png";
import Table_2 from "../assets/img/Table_002.png";
import Vase_2 from "../assets/img/Vase_002.png";
import Painting_0 from "../assets/img/Painting_000.png";
import Painting_1 from "../assets/img/Painting_001.png";

// this Js component will allow us to import productSore.js and grab the products array from it a  //

const productsArray = [
  {
    id: "1",
    title: "Rosco Lamp ",
    type: "Lamp",
    imgProduct: Lamp_0,
    description_Product: "vase blable ",
    price: 30,
    idThumbnail: "ameliabId",
    Artistname: "Antonio Rodrigez",
    image_Artist: "photoartist",
    description_Artist: "Antonio Rodrigez, born in the vibrant city of Barcelona, is a visionary artist who has risen to become a prominent figure in contemporary artistic creation, particularly in the field of ultramodern lamp design. With a bold creative spirit and a keen sense of innovation, he crafts luminous works that defy expectations and blend organic and geometric forms with avant-garde materials.  Each of Antonio's creation tells a unique story, evoking a harmonious fusion between modern minimalism and intricate complexity.",
  },
  {
    id: "2",
    title: "Chair Leclo",
    type: "Chair",
    imgProduct: Chair_0,
    description_Product: "vase blable ",
    price: 34.95,
    idThumbnail: "ameliabId",
    Artistname: "Antonio Rodrigez",
    image_Artist: "photoartist",
    description_Artist: "Antonio Rodrigez, born in the vibrant city of Barcelona, is a visionary artist who has risen to become a prominent figure in contemporary artistic creation, particularly in the field of ultramodern lamp design. With a bold creative spirit and a keen sense of innovation, he crafts luminous works that defy expectations and blend organic and geometric forms with avant-garde materials.  Each of Antonio's creation tells a unique story, evoking a harmonious fusion between modern minimalism and intricate complexity.",
  },
  {
    id: "3",
    title: 'Vase "Petit Lou"',
    type: "Vase",
    imgProduct: Vase_0,
    description_Product: "vase blable ",
    price: 85.95,
    idThumbnail: "ameliabId",
    Artistname: "Catherine Dumas",
    image_Artist: "photoartist",
    description_Artist: "Catherine Dumas, a visionary artist born in Toulon, has captivated Europe with her extraordinary talent for crafting original and contemporary vases. Hailing from the picturesque town of Toulon, Catherine's artistic journey has taken her on a path of innovation and creativity that has left a lasting impact on the art world. Her creation are expressions of her unique perspective and artistic ingenuity. ",
  },
  {
    id: "4",
    title: "Table vaseli",
    type: "Table",
    imgProduct: Table_0,
    description_Product: "vase blable ",
    price: 150,
    idThumbnail: "ameliabId",
    Artistname: "Catherine Dumas",
    image_Artist: "photoartist",
    description_Artist: "Catherine Dumas, a visionary artist born in Toulon, has captivated Europe with her extraordinary talent for crafting original and contemporary vases. Hailing from the picturesque town of Toulon, Catherine's artistic journey has taken her on a path of innovation and creativity that has left a lasting impact on the art world. Her creation are expressions of her unique perspective and artistic ingenuity.",
  },

  {
    id: "5",
    title: "Vase cokera",
    type: "Vase",
    imgProduct: Vase_1,
    description_Product: "vase blable ",
    price: 28.95,
    idThumbnail: "ameliabId",
    Artistname: "Arya Kapoor",
    image_Artist: "photoartist",
    description_Artist: " Arya Kapoor is an artist from New Delhi, has swiftly captured the art world with her exceptional talent. Her artistic journey reflects the cultural diversity and inspiration of her vibrant city. Arya Kapoor has elevated pottery to an intricate form of expression, shaping material with grace and precision to create pieces that blend natural simplicity with artistic sophistication. Each of her pottery creations tells a unique story, bridging tradition and innovation. ",
  },

  {
    id: "6",
    title: "Chair amonbi",
    type: "Vase",
    imgProduct: Chair_1,
    description_Product: "vase blable ",
    price: 50.95,
    idThumbnail: "ameliabId",
    Artistname: "Arya Kapoor",
    image_Artist: "photoartist",
    description_Artist: " Arya Kapoor is an artist from New Delhi, has swiftly captured the art world with her exceptional talent. Her artistic journey reflects the cultural diversity and inspiration of her vibrant city. Arya Kapoor has elevated pottery to an intricate form of expression, shaping clay with grace and precision to create pieces that blend natural simplicity with artistic sophistication. Each of her pottery creations tells a unique story, bridging tradition and innovation. ",
  },

  {
    id: "7",
    title: "Lamp huleti",
    type: "Lamp",
    imgProduct: Lamp_1,
    description_Product: "vase blable ",
    price: 21.85,
    idThumbnail: "ameliabId",
    Artistname: "Lucas Silva",
    image_Artist: "photoartist",
    description_Artist: "Lucas Silva, born in the heart of Rio de Janeiro, embodies the boldness and creativity that resonate within the contemporary art scene. Specializing in chair design, he has managed to transcend the borders of his place of birth to become a globally recognized figure. Is creation are true functional works of art. Each piece reflects a captivating fusion of innovative forms and functionality. ",
  },

  {
    id: "8",
    title: "Table barelly",
    type: "Table",
    imgProduct: Table_1,
    description_Product: "vase blable ",
    price: 140.95,
    idThumbnail: "ameliabId",
    Artistname: "Lucas Silva",
    image_Artist: "photoartist",
    description_Artist: "Lucas Silva, born in the heart of Rio de Janeiro, embodies the boldness and creativity that resonate within the contemporary art scene. Specializing in chair design, he has managed to transcend the borders of his place of birth to become a globally recognized figure. Is creation are true functional works of art. Each piece reflects a captivating fusion of innovative forms and functionality. ",
  },
  {
    id: "9",
    title: "Table pink infinity",
    type: "Table",
    imgProduct: Table_2,
    description_Product: "vase blable ",
    price: 54.85,
    idThumbnail: "ameliabId",
    Artistname: "Marco Bianchi & Elena Rossi",
    image_Artist: "photoartist",
    description_Artist: "This couple of artists, Marco Bianchi and Elena Rossi, embodies an exceptional fusion of creativity and love. Their story of personal and artistic union is beautifully reflected in their unique collaboration around porcelain, a delicate and elegant material. Together, they have breathed new life into this ancient art, creating decorative objects and porcelain tableware that have become coveted treasures throughout Italy. ",
  },
  {
    id: "10",
    title: "Vase mobuchi",
    type: "Vase",
    imgProduct: Vase_2,
    description_Product: "vase blable ",
    price: 20.95,
    idThumbnail: "ameliabId",
    Artistname: "Marco Bianchi & Elena Rossi",
    image_Artist: "photoartist",
    description_Artist: "This couple of artists, Marco Bianchi and Elena Rossi, embodies an exceptional fusion of creativity and love. Their story of personal and artistic union is beautifully reflected in their unique collaboration around porcelain, a delicate and elegant material. Together, they have breathed new life into this ancient art, creating decorative objects and porcelain tableware that have become coveted treasures throughout Italy. ",
  },

  {
    id: "11",
    title: "Timeless Treasures",
    type: "Painting",
    imgProduct: Painting_0,
    description_Product: "vase blable ",
    price: 38.85,
    idThumbnail: "ameliabId",
    Artistname: "Simon Njoku",
    image_Artist: "photoartist",
    description_Artist: "Simon Njoku, a gifted painter born in Cameroon, has managed to captivate the world through his artistry, particularly in the realm of modern decorative paintings that celebrate African culture. Hailing from the vibrant nation of Cameroon, Simon's artistic journey has been a testament to his deep-rooted connection with his heritage and a dedication to sharing it with a global audience.Simon's canvas becomes a tapestry of colors, shapes, and emotions, as he skillfully brings to life.",
  },

  {
    id: "11",
    title: "Harmony of Heritage",
    type: "Painting",
    imgProduct: Painting_1,
    description_Product: "vase blable ",
    price: 64.95,
    idThumbnail: "ameliabId",
    Artistname: "Simon Njoku",
    image_Artist: "photoartist",
    description_Artist: "Simon Njoku, a gifted painter born in Cameroon, has managed to captivate the world through his artistry, particularly in the realm of modern decorative paintings that celebrate African culture. Hailing from the vibrant nation of Cameroon, Simon's artistic journey has been a testament to his deep-rooted connection with his heritage and a dedication to sharing it with a global audience.Simon's canvas becomes a tapestry of colors, shapes, and emotions, as he skillfully brings to life.",
  },
];

//This function help us get the data of a product from only the ID  //
function getProductData(id) {
  // .find allow us to loop though every single element //
  //In this case the current element is looping through the product and then we will see if the product.id is equal to the ID that was past in from our parameters and is going to return the full object //
  let productData = productsArray.find((product) => product.id === id);

  //If the ID doesn't exist//
  if (productData == undefined) console.log("Product data does not exist for ID: " + id);

  // If productData is undefine we are just gonna return undefined  //
  return productData;
}

export { productsArray, getProductData }; // This "{}"" allow us to give this array of data to any component inside of our Javascript project//
// We are exporting productData this will allow us to call this function anywhere else in the React application //

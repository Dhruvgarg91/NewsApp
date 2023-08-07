// Products CRUD Operation
// C - Create  , R  - Read, U - Update , D - Delete
import Product from "../Models/product.js";
import doNetworkCall from "./api-client.js";
export default async function readAllProducts() {
  try {
    const obj = await doNetworkCall();
    const newsArray = obj["articles"];
    const productArray = newsArray.map((art) => {
      const newsObject = new Product(
        art.author,
        art.title,
        art.description,
        art.urlToImage,
        art.publishedAt,
        art.url
      );
      return newsObject;
    });
    return productArray;
  } catch (err) {
    throw err;
  }
}

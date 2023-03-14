export const productSchema = {
  id: Number, // unique ID for the product
  name: String, // name of the product
  description: String, // description of the product
  price: Number, // price of the product in USD
  imageUrls: [String], // array of image URLs for the product
  category: String, // category the product belongs to
  subcategory: String, // subcategory the product belongs to
  brand: String, // brand of the product
  ratings: {
    value: Number, // average rating of the product (out of 5)
    count: Number, // number of ratings for the product
  },
  features: [String], // array of features for the product
  specifications: [
    {
      name: String, // name of the specification
      value: String, // value of the specification
    },
  ],
  reviews: [
    {
      author: String, // name of the author of the review
      date: Date, // date the review was posted
      rating: Number, // rating given by the author (out of 5)
      comment: String, // comment left by the author
    },
  ],
  availability: {
    inStock: Boolean, // whether the product is in stock or not
    quantity: Number, // quantity of the product in stock
    deliveryDate: Date, // estimated delivery date for the product
  },
  dimensions: {
    width: Number, // width of the product in inches or centimeters
    height: Number, // height of the product in inches or centimeters
    depth: Number, // depth of the product in inches or centimeters
  },
  materials: [String], // array of materials used in the product
  style: String, // style of the product (e.g. modern, traditional, rustic)
  color: String, // color of the product
  weight: Number, // weight of the product in pounds or kilograms
  assembly: {
    required: Boolean, // whether assembly is required for the product
    instructionsUrl: String, // URL for assembly instructions
  },
  warranty: String, // warranty information for the product
};
export const productSchema1 = {
  id: Number, // unique ID for the product
  name: String, // name of the product
  description: String, // description of the product
  price: Number, // price of the product in USD
  imageUrls: [String], // array of image URLs for the product
  category: String, // category the product belongs to
  subcategory: String, // subcategory the product belongs to
  brand: String, // brand of the product
  ratings: {
    value: Number, // average rating of the product (out of 5)
    count: Number, // number of ratings for the product
  },
  features: [String], // array of features for the product
  specifications: [
    {
      name: String, // name of the specification
      value: String, // value of the specification
    },
  ],
  reviews: [
    {
      author: String, // name of the author of the review
      date: Date, // date the review was posted
      rating: Number, // rating given by the author (out of 5)
      comment: String, // comment left by the author
    },
  ],
  availability: {
    inStock: Boolean, // whether the product is in stock or not
    quantity: Number, // quantity of the product in stock
    deliveryDate: Date, // estimated delivery date for the product
  },
  relatedProducts: [Number], // array of IDs for related products
};

// const mongoose = require('mongoose');

// const productSchesma = new mongoose.Schema({
//   id: { type: Number, required: true, unique: true },
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   imageUrls: [{ type: String, required: true }],
//   category: { type: String, required: true },
//   subcategory: { type: String, required: true },
//   brand: { type: String, required: true },
//   ratings: {
//     value: { type: Number, required: true },
//     count: { type: Number, required: true },
//   },
//   features: [{ type: String }],
//   specifications: [{
//     name: { type: String, required: true },
//     value: { type: String, required: true },
//   }],
//   reviews: [{
//     author: { type: String, required: true },
//     date: { type: Date, required: true },
//     rating: { type: Number, required: true },
//     comment: { type: String },
//   }],
//   availability: {
//     inStock: { type: Boolean, required: true },
//     quantity: { type: Number },
//     deliveryDate: { type: Date },
//   },
//   dimensions: {
//     width: { type: Number, required: true },
//     height: { type: Number, required: true },
//     depth: { type: Number, required: true },
//   },
//   materials: [{ type: String }],
//   style: { type: String },const Product = mongoose.model('Product', productSchema);

//   module.exports = Product;
//   color: { type: String, required: true },
//   weight: { type: Number, required: true },
//   assembly: {
//     required: { type: Boolean, required: true },
//     instructionsUrl: { type: String },
//   },
//   warranty: { type: String },
// });

// const Product = mongoose.model('Product', productSchema);

// module.exports = Product;

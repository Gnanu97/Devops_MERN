import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

//fetch all products
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword ? {
    name: {
      $regex: req.query.keyword,
      $options: 'i',
    },
  } : {}

  const count = await Product.countDocuments({
    ...keyword
  })
  const products = await Product.find({
      ...keyword
    })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({
    products,
    page,
    pages: Math.ceil(count / pageSize)
  })
})

//fetch a single product
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

//delete a product
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    await product.remove()
    res.json({
      message: 'Product removed'
    })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

//create a new product
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    cover: 'Sample cover',
    term: 'Sample term',
    description: 'Sample description',
  })

  const createdProduct = await product.save()
  res.status(201).json(createdProduct)
})

//update a product
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    cover,
    term,
  } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    product.name = name
    product.price = price
    product.description = description
    product.cover = cover
    product.term = term

    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

//create new review - didnt get to implementing this on the frontend
const createProductReview = asyncHandler(async (req, res) => {
  const {
    rating,
    comment
  } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    )

    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Product already reviewed')
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    }

    product.reviews.push(review)

    product.numReviews = product.reviews.length

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length

    await product.save()
    res.status(201).json({
      message: 'Review added'
    })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

//get top rated products - didnt get to implementing this on the frontend
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({
    rating: -1
  }).limit(3)

  res.json(products)
})

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
}
//importing the necessary modules
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//some bootstrap components
import { Row, Col } from 'react-bootstrap'
//some actions, components and constants
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'
import plans from '../assets/plans.png'

//this is the page where all of the products are displayed

const PlanScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])


  //the products are displayed using a bootstrap grid
  return (
    <div className="planspage">
      <div className="plan1">
        <div className="plan1text">
          <h1><strong>Change</strong> <span>the way you <br /> buy life insurance</span> </h1>
          <p>Easy to understand and quick to buy. That's the way most things are in <br /> your life, why should life insurance be any different?</p>
        </div>
        <img src={plans} alt="" />
      </div>
      <div className="plan2">

        <div className="plan2text">
          <h3><strong>Our plans</strong> <span>make it <br /> even simpler for you</span></h3>
        </div>

        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <>
            <Row className="card-container">
              {products.map((product) => (
                <Col key={product._id} >
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </>
        )}
      </div>
    </div>
  )
}

export default PlanScreen

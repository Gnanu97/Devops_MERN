import React from 'react'
import { Card } from 'react-bootstrap'
import EnquireButton from './EnquireButton'

//a component that renders the products. It makes use of a bootstrap card to layout the data

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded product-card'>
      <div className="card-content">
        <Card.Body>
          <Card.Title className="product-title" as='div'>
            <strong>{product.name}</strong> <br /> <span>life insurance</span>
          </Card.Title>
          <Card.Text className="product-price" as='h1'>R{product.price} <br /> <span>/mo</span></Card.Text>
          <div className="cover-term">
            <div className="cover">
              <div className="cover-text">
                <br />
                <span>Upto</span>
                <br />
                <strong>{product.cover}</strong>
              </div>
            </div>
            <div className="term">
              <div className="cover-text">
                <br />
                <span>Term</span>
                <br />
                <strong>{product.term}</strong>
              </div>
            </div>
          </div>
          <div className="product-description">
            <p>{product.description}</p>
          </div>
          <EnquireButton />
        </Card.Body>
      </div>
    </Card>
  )
}

export default Product




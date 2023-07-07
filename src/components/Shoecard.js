import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Shoecard.css'

function Shoecard({shoedata}) {

  return (
    
    <>
   <Link to={`/view-shoes/${shoedata.id}`}style={{textDecoration:'none'}}>
       <Card className='r1' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={shoedata.imageURL} style={{borderRadius:'10px',border:'5px solid grey'}} />
          <Card.Body>
            <Card.Title style={{overflowY:'hidden'}}>{shoedata.name}</Card.Title>
            <Card.Text>
              <p>
                <strong>
                  Brand :-   
                </strong>
                {shoedata.brand}
              </p>
              <p>
                <strong>
                  Gender :-   
                </strong>
                {shoedata.gender}
              </p>
              
              <p>
              <strong>
                  Category :-   
                </strong>
                {shoedata.category}
              </p>
    
              <p>
              <strong>
                  Price :-   
                </strong>
                {shoedata.price}
              </p>
               
    
            </Card.Text>
            
          </Card.Body>
        </Card>
   </Link>
    </>
  )
}

export default Shoecard
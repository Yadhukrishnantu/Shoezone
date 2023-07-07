import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Button, ListGroup, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Review from './Review';

function Shoeview() {
    const params = useParams()
    console.log(params.id);

    var[shoesList , setShoes] = useState([])

    const fetchData = async () => {
        const result = await fetch ('/shoes.json')
        result.json().then(
            data => {
                setShoes(data.shoes)
            }
        )
    }
    console.log(shoesList);
    useEffect(()=>{
        fetchData()
    },[])

    const shoes= shoesList.find(item=>item.id==params.id)
    console.log(shoes);
  return (
    <>
      {
        shoes ? (
            <Row>

<Col lg={6} md={6} sm={12} className="text-center" >
          <h2  style={{fontFamily:'initial', color:'darkgreen'}}>{shoes.name}</h2>
         <img  src={shoes.imageURL} style={{height:"360px", marginTop:'150px',borderRadius:'10px',border:'5px solid black'}}/>
         </Col> 
         <Col lg={6} md={6} sm={12} className="p-5" style={{marginTop:'150px'}}> 
            
         
           <ListGroup variant='flush' className='r1'>
               <div style={{borderRadius:'8px'}}>
                <ListGroup.Item style={{backgroundColor:'grey'}}> <strong> Brand :- </strong>{shoes.brand}</ListGroup.Item> 
                 <ListGroup.Item style={{backgroundColor:'grey'}}> <strong> Gender :- </strong>{shoes.gender}</ListGroup.Item> 
                 <ListGroup.Item style={{backgroundColor:'grey'}}> <strong>Category :- </strong>{shoes.category}</ListGroup.Item>
                 <ListGroup.Item style={{backgroundColor:'grey'}}><strong>Price :- </strong>${shoes.price}</ListGroup.Item>
                 <ListGroup.Item style={{backgroundColor:'grey'}}><strong> Items Left :- </strong>{shoes.items_left}</ListGroup.Item>
                 <ListGroup.Item style={{backgroundColor:'grey'}}><strong> Slug:- </strong>{shoes.slug}</ListGroup.Item>
               </div >
           </ListGroup>
           <div style={{marginTop:'25px'}}><Review reviewData={shoes.reviews}/></div>

         


        </Col>

            </Row>):""
      }  
    </>
  )
}

export default Shoeview
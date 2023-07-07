import {React,useState , useEffect} from 'react'
import Shoecard from './Shoecard';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


function Shoes() {
    var [shoesList, setShoes]=useState([])

    const fetchData = async () => {
        const result = await fetch ('./shoes.json')
        result.json().then(
            data => {
                setShoes(data.shoes)
            }
        )
    }

    
   useEffect(()=>{
    fetchData()
   },[])

  return (
          
    <Row>
      {
        shoesList.map(item=>(
            <Col className='p-5' lg={4} md={6}>
            <Shoecard shoedata={item}></Shoecard>
            </Col>
        ))
      }
    </Row>
  )
}

export default Shoes
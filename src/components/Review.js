import {React, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Review({reviewData}) {
    const [open, setOpen] = useState(false);
  return (

    <>
            <Button variant='secondary' style={{ border: '2px solid white', borderRadius: '8px' }}
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Reviews
            </Button>
            <div style={{ minHeight: '150px' }}>
                <Collapse in={open} dimension="width">
                    <div id="example-collapse-text">


                        {
                            reviewData.map(item => (
                                <div  style={{ width: '400px' }}>
                                 <p> {item.name} </p>
                                 <p>{item.date}</p>
                                 <p>{item.rating}</p>
                                 <p>{item.comments}</p>
                                </div>

                            ))



                        }


                    </div>
                </Collapse>
            </div>
        </>
  )
}

export default Review
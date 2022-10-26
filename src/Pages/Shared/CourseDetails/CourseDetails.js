import React from 'react';
import { Button } from 'react-bootstrap';


import Card from 'react-bootstrap/Card';
import {  Link, useLoaderData } from 'react-router-dom';


const CourseDetails = () => {
    const{id,name,description,rating,participant}=useLoaderData()
    
    


    
 return (
        
        <Card className="text-center mb-3 ">
      <Card.Header>{name}</Card.Header>
      <Link to={`/checkout/${id}`}><Button variant="primary">download pdf</Button></Link>
      <Card.Body>
        <Card.Title></Card.Title>
        
        <Card.Text>
          {description}
        </Card.Text>
        <Link to={`/checkout/${id}`}><Button variant="primary">Get Premimum Access</Button></Link>
        
      </Card.Body>
      <Card.Footer className="">
        <div className='d-flex justify-content-between
        '>
        <div>Rating : {rating}</div>
        <div>participant : {participant}</div>
        </div>
      </Card.Footer>
    </Card>
    );
};

export default CourseDetails;
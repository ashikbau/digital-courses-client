import React from 'react';


import Card from 'react-bootstrap/Card';
import {  useLoaderData } from 'react-router-dom';


const CourseDetails = () => {
    const{name,image,description,rating,participant}=useLoaderData()
    
    


    
 return (
        
        <Card className="text-center mb-3 ">
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        
        <Card.Text>
          {description}
        </Card.Text>
        
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
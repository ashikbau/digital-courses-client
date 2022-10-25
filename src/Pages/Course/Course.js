import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Course = ({course}) => {
    return (
        
            <Card className="text-center mb-4">
      <Card.Header>{course.name}</Card.Header>
      <Card.Body>
        
        <Card.Img style={{ height: '350px' }} variant="top" src={course.image} />
        <Card.Text>
          <p>{course.description}</p>
        </Card.Text>
        <Link to={`/courses/${course.id}`}><Button variant="primary">course Detail</Button></Link>
      </Card.Body>
      <Card.Footer>
      <div className='d-flex justify-content-between
        '>
        <div>Rating : {course.rating}</div>
        <div>participant : {course.participant}</div>
        </div>

      </Card.Footer>
    </Card>
          
    );
};

export default Course;

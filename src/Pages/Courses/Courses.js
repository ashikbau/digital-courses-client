import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';


const Courses = () => {
  const courseDetails= useLoaderData();
  console.log(courseDetails)
  

    return (
        <div>
            
            {courseDetails.map(x=><Course key={x.id} course={x}></Course>)
               
               
            }
        </div>
    );
};

export default Courses;
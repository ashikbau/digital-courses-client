import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import CourseDetails from '../Shared/CourseDetails/CourseDetails';

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
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Courses from '../../Courses/Courses';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const LeftSideNav = () => {
    const [courses,setCourses] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5000/course-categories')
        .then( res => res.json())
        .then(data => setCourses(data));
    }, []);

    const{providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    
    const  handleGoogleSignIn =()=>{
        providerLogin(googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);

        })
        .catch(error =>console.error(error))
    }


   
    return (
        <div>
            <h2>This is leftside nav: {courses?.length}</h2>
            <div>
                {
                    courses.map(course=><p key={course?.id}> <Link to={`/courses/${course?.id}`}>{course?.name}</Link></p>)
                }

                
              
            </div>
            <div>
            <ListGroup >
      <Button onClick={handleGoogleSignIn} className='mb-2'> <FaGoogle></FaGoogle> Google Login</Button>
      <Button> <FaGithub></FaGithub> Github Login</Button>
      
    </ListGroup>
            </div>
        </div>
    );
};

export default LeftSideNav;
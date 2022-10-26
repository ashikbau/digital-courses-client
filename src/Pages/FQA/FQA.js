import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FQA = () => {
    return (
        <div>
            <h2>Are you confused about something? Please see our frequent asked questions</h2>

            
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h3>1. What is the duration of the course?</h3></Accordion.Header>
                    <Accordion.Body>

                        All of your courses about 5 to 6 weeks long. You have also oppurtunity to find internship after finishing the course.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h3>2. How can I register courses?</h3></Accordion.Header>
                    <Accordion.Body>
                      You can register courses 3 ways. 
                      1. online 
                      2. incall
                      3. Also visiting our school.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h3>3. How can i reach the teacher If i face problem about study?</h3></Accordion.Header>
                    <Accordion.Body>
                       We provides online student support system. You can join our support team and get help from them.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h3>4. Do you have any residents facility for this course duration?</h3></Accordion.Header>
                    <Accordion.Body>
                    Sorry to say that we dont provides residence facilities.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FQA;
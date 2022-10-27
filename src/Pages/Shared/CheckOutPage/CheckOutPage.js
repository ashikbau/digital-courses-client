import React, { createRef } from 'react';
import Pdf from "react-to-pdf";
const CheckOutPage = () => {

   const ref = createRef()
    return (
        <>


<Pdf targetRef={ref} filename="code-example.pdf">
{({ toPdf }) => <button onClick={toPdf}>Download Pdf</button>}
</Pdf>

<div  ref={ref}>
<h1>Here the information about courses and education system </h1>
<h2>If you want download click on download!</h2>
<p>SAP COURSE <br />WHAT YOU WILL LEARN
Describe Google Cloud Services that are important to design robust, performant & resilient infrastructure for running SAP workloads on Google Cloud

Identify the guidelines and best practices for SAP deployments on Google Cloud

Describe the reference architectures for High Availability for SAP systems in Google Cloud.

Deploy an SAP HANA single-host, high-availability cluster.
<br />
Next Start Date: 30-12-2022
Price: $100 
<br />
</p>
<p>Java Cource <br />
Solve real world problems with Java using multiple classes. Learn how to create programming solutions that scale using Java interfaces. Recognize that software engineering is more than writing code - it also involves logical thinking and design. By the end of this course you will have written a program that analyzes and sorts earthquake data, and developed a predictive text generator.

After completing this course, you will be able to:
1. Use sorting appropriately in solving problems;
2. Develop classes that implement the Comparable interface;
3. Use timing data to analyze empirical performance;
4. Break problems into multiple classes, each with their own methods;
5. Determine if a class from the Java API can be used in solving a particular problem;
6. Implement programming solutions using multiple approaches and recognize tradeoffs;
7. Use object-oriented concepts including interfaces and abstract classes when developing programs;
8. Appropriately hide implementation decisions so they are not visible in public methods; and
9. Recognize the limitations of algorithms and Java programs in solving problems.
10. Recognize standard Java classes and idioms including exception-handling, static methods, java.net, and java.io packages.
Next Start Date: 30-12-2022
Price: $ 100

</p>
<p> Data Analysis <br />
Gain an immersive understanding of the practices and processes used by a junior or associate data analyst in their day-to-day job

Learn key analytical skills (data cleaning, analysis, & visualization) and tools (spreadsheets, SQL, R programming, Tableau) 

Understand how to clean and organize data for analysis, and complete analysis and calculations using spreadsheets, SQL and R programming

Next Start Date: 30-12-2022
Price: $ 100

</p>
</div>

            
        

        </>
    )  
};

export default CheckOutPage;
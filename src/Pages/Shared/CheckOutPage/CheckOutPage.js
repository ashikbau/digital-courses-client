import React, { createRef } from 'react';
import Pdf from "react-to-pdf";
const CheckOutPage = () => {

   const ref = createRef()
    return (
        <>


<Pdf targetRef={ref} filename="code-example.pdf">
{({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
</Pdf>

<div  >
<h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
    <h1 ref={ref}>This is premimum page</h1>
</div>

            
        

        </>
    )  
};

export default CheckOutPage;
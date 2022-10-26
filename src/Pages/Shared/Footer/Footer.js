import React from 'react';

const Footer = () => {
    return (
        <div className="main-footer text-white bg-dark pt-3 w-100 my-5">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>DIGITAL COURSE</h4>
            <h1 className="list-unstyled">
              <li>880007778877</li>
              <li>DHAKA,BANGLADESH</li>
              
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Stuff</h4>
            <ui className="list-unstyled">
              <li>JAVA </li>
              <li>REACT</li>
              <li>PYTHON</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>WELLCOME ANOTHER COURSES</h4>
            <ui className="list-unstyled">
              <li>SAP COURSE</li>
              <li>HISTORY</li>
              <li>MATHMATICS</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} digital Courses | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
    );
};

export default Footer;
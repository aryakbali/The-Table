import React from 'react';
import './contact.css';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function Contact(props) {
    return(
        <div className="aaa">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3 id="color">Contact Us</h3>
                    <hr />
                    
                </div>                
            </div>
            <div className="bbb">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                <h5>Our Address</h5>
                    <address>
		              121, FREEDOM CLUB<br />
		            FREEDOM CLUB,ROHINI<br />
		              INDIA<br />
		              <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
		              <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:aryakbali@gmail.com">
                      aryakbali@gmail.com</a>
                    </address>
                </div>
                
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
// import Navbar from './components/Navbar';
//import { Card, CardText, CardTitle, CardBody } from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';

import 'isomorphic-fetch';
import 'es6-promise';

function UserDetails(props) {

    // const details = {
    //     address: {
    //         street: ""
    //     }
    // };

    // const [data, setData] = useState([details]);

    const [data, setData] = useState([]);

    useEffect(() => {
        loadData();

    }, []);


    const loadData = async () => {
        await fetch("https://jsonplaceholder.typicode.com/users/" + props.match.params.id)

            .then(response => response.json())
            .then(receivedData => setData(receivedData));
    }

    return (

        <div className="container">

            <h1 className="text-align-right">Customer Details</h1>


            <Fragment>


                <div className="card" styles = {{width: '11rem'}}>
                    <div className="card-body">

                        <h4 className="card-title">{data.name}</h4>

                        <h5 className="text-align-right"><u>Address</u></h5>
                        
                        Street: <h6 class="card-subtitle text-muted">  {data.address && <p>{data.address.street}</p>} </h6> 
                        Suite: <h6 class="card-subtitle text-muted">   {data.address && <p>{data.address.suite}</p>}</h6> 
                        City: <h6 class="card-subtitle   text-muted">      {data.address && <p>{data.address.city}</p>}</h6>
                        Zip Code: <h6 class="card-subtitle  text-muted">    {data.address && <p>{data.address.zipcode}</p>}</h6>
                        Lat: <h6 class="card-subtitle  text-muted">  {data.address && data.address.geo && <p>{data.address.geo.lat}</p>}</h6>
                        Long: <h6 class="card-subtitle  text-muted">  {data.address && data.address.geo && <p>{data.address.geo.lng}</p>}</h6>
                      

                       <h5 className="text-align-right"><u>Phone</u></h5>                    
                       <h6 class="card-subtitle  text-muted"> {data.phone}</h6>
                       <p></p>

                        <h5 className="text-align-right"><u>Website</u></h5>

                       < h6 class="card-subtitle  text-muted"> {data.website}</h6>

                       <p></p>

                       <h5 className="text-align-right"><u>Company</u></h5>

                       <h6 class="card-subtitle  text-muted">  {data.company && <p>{data.company.name}</p>}</h6>
                       <h6 class="card-subtitle  text-muted">  {data.company && <p>{data.company.catchPhrase}</p>}</h6>
                       <h6 class="card-subtitle  text-muted">  {data.company && <p>{data.company.bs}</p>}</h6>

                    
                    </div>
                </div>
            </Fragment>


        </div>



    );



}


export default UserDetails;
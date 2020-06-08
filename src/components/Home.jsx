import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDetails from './UserDetails';
// import Navbar from './components/Navbar';
//import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';

import 'isomorphic-fetch';
import 'es6-promise';

function Home() {


    const [data, setData] = useState([]);

    useEffect(() => {
        loadData();

    }, []);

    const loadData = async () => {
        await fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(receivedData => setData(receivedData));
    }

    return (

        <div className="container">

            <h1 className="text-align-right">Customer Dashboard</h1>



            {data.map(users => (
                <Fragment>



                    <div className="card" styles={{ width: '11rem' }}></div>

                    <div className="card-body">
                        <div key={users.id}>
                            <h5 className="card-title">{users.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Email: {users.email}</h6>
                            <h6 class="card-subtitle mb-2 text-muted">Username: {users.username}</h6>
                            <h6 class="card-subtitle mb-2 text-muted">Phone: {users.phone}</h6>


                        </div>
                        <Link to={`/Users/${users.id}`} className="btn-sm btn-info">Customer Details</Link>


                    </div>
                </Fragment>
            ))}

        </div>



    );



}


export default Home;
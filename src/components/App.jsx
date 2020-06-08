import React, { Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import UserDetails from './UserDetails';
// import Navbar from './components/Navbar';
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';

import 'isomorphic-fetch';
import 'es6-promise';

function App() {


    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     loadData();

    // }, []);

    // const loadData = async () => {
    //     await fetch("https://jsonplaceholder.typicode.com/users")
    //         .then(response => response.json())
    //         .then(receivedData => setData(receivedData));
    // }




    // useState basic examples
    // const [cartItems, setCartItems] = useState([]);

    // useState example for scroll depth useEffect example below
    // const [scrollDepth, setScrollDepth] = useState([0]);


    // function determineUserScrollDepth() {
    //     const scrolled = document.documentElement.scrollTop ||
    //         document.body.scrollTop;
    //     setScrollDepth(scrolled);
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', determineUserScrollDepth);
    // })

    return (


        <Router>
            <Fragment>

                <Switch>
                    <Route exact path="/" component={Home}></Route>
                     <Route exact path="/Users/:id" component={UserDetails} /> */}
                    <Route path="*" component={() => <h1 className="mt-5 text-center">404 Page</h1>} />
                </Switch>


            </Fragment>
        </Router>




        // <div className="App">

        //     {/* <Navbar /> */}

        //     <p> Fetch! </p>
        //     {data.map(users => (
        //         <div key = {users.id}>{users.name}</div>
        //     ))}

        //     </div>


        // <div className="card">

        //     <p> Fetching Data! </p>
        //     {data.map(photos => (
        //         <ListGroup.Item key={photos.id}>
        //             <Card>
        //                 <Card.Body><b>Blah:</b>  {photos.title}</Card.Body>
        //             </Card>
        //             <div><br /></div>
        //             <b>Blah Blah:</b> {photos.url}
        //         </ListGroup.Item>
        //     ))};
        // </div> */}

















        //     {/* useState example below
        //     <p>
        //         Items in cart: {cartItems.toString()}
        //     </p>
        //     <button
        //         onClick={() => 
        //         setCartItems([...cartItems, 'apple'])
        //         }>

        //         Add item to Cart!
        //     </button> */}

        //     {/* Example of useEffect

        //     <p>You have scrolled down the page this far: {scrollDepth}</p>

        //     <p>
        //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. A scelerisque purus semper eget. Nisi vitae suscipit tellus mauris. Nisl condimentum id venenatis a condimentum vitae. Dolor sit amet consectetur adipiscing elit. Rhoncus mattis rhoncus urna neque viverra justo nec. Vel elit scelerisque mauris pellentesque pulvinar pellentesque. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor. Placerat orci nulla pellentesque dignissim enim. At in tellus integer feugiat scelerisque. Volutpat ac tincidunt vitae semper quis. Tempor orci eu lobortis elementum nibh tellus molestie. Gravida cum sociis natoque penatibus et. Id venenatis a condimentum vitae sapien pellentesque habitant morbi.
        //         Egestas congue quisque egestas diam in arcu cursus euismod. Fusce ut placerat orci nulla pellentesque dignissim enim sit. Platea dictumst quisque sagittis purus. Ipsum suspendisse ultrices gravida dictum. Iaculis at erat pellentesque adipiscing commodo. Elementum sagittis vitae et leo. Eros in cursus turpis massa. Nisi porta lorem mollis aliquam ut. Fringilla urna porttitor rhoncus dolor. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. In nisl nisi scelerisque eu ultrices vitae auctor eu. Lacus vestibulum sed arcu non odio euismod lacinia at quis. Velit sed ullamcorper morbi tincidunt ornare massa. Praesent elementum facilisis leo vel fringilla est ullamcorper eget.
        //      </p> */}



        // // {/* </div > */}

    );




}

export default App;
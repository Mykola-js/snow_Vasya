const About_us = require('./template/about_us.jsx'); 
const Product = require('./template/Product.jsx'); 
const Partners = require('./template/Partners.jsx'); 
const Services = require('./template/Services.jsx'); 
const Contacts = require('./template/Contacts.jsx');

const Router = ReactRouterDOM.HashRouter;
const Route = ReactRouterDOM.Route;
ReactDOM.render(
    <Router>
        <div className='App'>
            <Route exact path = '/' component = {About_us} />
            <Route  path = '/AboutUs' component = {About_us} />
            <Route  path = '/Product' component = {Product} />
            <Route  path = '/Partners' component = {Partners} />
            <Route  path = '/Services' component = {Services} />
            <Route  path = '/Contacts' component = {Contacts} />
        </div>
    </Router>,
    document.getElementById('container')
)

import React, { Component } from 'react';
import { Link } from 'react-router';
import App from '../components/Container/Container';

class HomePage extends Component {
    render() {
        return (
            <div>
                <Link to="/new">New Todo</Link>
                <App />
            </div>
        );
    }
}

export default HomePage;
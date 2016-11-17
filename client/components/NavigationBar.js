import React from 'react';
import {Link} from 'react-router';
export default() => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                <Link to="/" className="navbar-brand">myApp</Link>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link to="/signup">signup</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
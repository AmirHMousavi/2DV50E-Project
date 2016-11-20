import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {logout} from '../actions/authActions';

class NavigationBar extends Component {
logout(event){
    event.preventDefault();
    this.props.logout();
}

    render() {
        const {isAuthenticated} = this.props.auth;
        const userLinks = (
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <a href="#" onClick={this.logout.bind(this)}>LogOut</a>
                </li>
            </ul>
        );
        const gustLinks = (
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <Link to="/signup">Sign up</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        );
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">myApp</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    {isAuthenticated ? userLinks : gustLinks}</div>
                </div>
            </nav>
        );
    }
}

NavigationBar.propTypes = {
    auth: React.PropTypes.object.isRequired,
    logout:React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {auth: state.auth};
}

export default connect(mapStateToProps,{logout})(NavigationBar);
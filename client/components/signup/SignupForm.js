import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        }
        this.onChange = this
            .onChange
            .bind(this);
        this.onSubmit = this
            .onSubmit
            .bind(this);
    }
    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    onSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Join myApp</h1>
                <div className="form-group">
                    <label className="control-label">UserName</label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        className="form-control"/>
                </div>
                <div className="form-group">
                    <label className="control-label">
                        Confirm Password</label>
                    <input
                        type="password"
                        name="passwordConfirmation"
                        value={this.state.passwordConfirmation}
                        onChange={this.onChange}
                        className="form-control"/>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary btn-lg">SignUp</button>
                </div>
            </form>
        );

    }
}

export default SignupForm;
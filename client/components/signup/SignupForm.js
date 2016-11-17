import React from 'react';
import classnames from 'classnames';
//import axios from 'axios';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            errors:{},
            isLoading:false
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
        //        axios.post('/api/users',{user:this.state});
        this.setState({errors:{},isLoading:true});
        this
            .props
            .userSignupRequest(this.state).then(
                ()=>{},
                ({data})=>this.setState({errors:data, isLoading:false})
            );

    }

    render() {
        const {errors}=this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Join myApp</h1>
                <div className={classnames("form-group",{'has-error':errors.username})}>
                    <label className="control-label">UserName</label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        className="form-control"/>
                        {errors.username&&<span className="help-block">{errors.username}</span>}
                </div>
                <div className={classnames("form-group",{'has-error':errors.email})}>
                    <label className="control-label">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                        className="form-control"/>
                        {errors.email&&<span className="help-block">{errors.email}</span>}
                </div>
                <div className={classnames("form-group",{'has-error':errors.password})}>
                    <label className="control-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                        className="form-control"/>
                        {errors.password&&<span className="help-block">{errors.password}</span>}
                </div>
                <div className={classnames("form-group",{'has-error':errors.passwordConfirmation})}>
                    <label className="control-label">
                        Confirm Password</label>
                    <input
                        type="password"
                        name="passwordConfirmation"
                        value={this.state.passwordConfirmation}
                        onChange={this.onChange}
                        className="form-control"/>
                        {errors.passwordConfirmation&&<span className="help-block">{errors.passwordConfirmation}</span>}
                </div>
                <div className="form-group">
                    <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">SignUp</button>
                </div>
            </form>
        );

    }
}

SignupForm.propTypes={
    userSignupRequest:React.PropTypes.func.isRequired
}

export default SignupForm;
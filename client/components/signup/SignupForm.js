import React from 'react';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';
//import axios from 'axios';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            errors: {},
            isLoading: false,
            invalid: false
        }
        this.onChange = this
            .onChange
            .bind(this);
        this.onSubmit = this
            .onSubmit
            .bind(this);
        this.checkUserExists = this
            .checkUserExists
            .bind(this);
    }
    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    isValid() {
        const {errors, isValid} = validateInput(this.state);
        if (!isValid) {
            this.setState({errors});
        }
        return isValid;
    }

    checkUserExists(event) {
        const field = event.target.name;
        const val = event.target.value;
        if (val !== '') {
            this
                .props
                .isUserExists(val)
                .then(res => {
                    let errors = this.state.errors;
                    let invalid;
                    if (res.data.user) {
                        errors[field] = field + ' already exists';
                        invalid = true;
                    } else {
                        errors[field] = '';
                        invalid = false;
                    }
                    this.setState({errors, invalid})
                });
        }
    }

    onSubmit(event) {
        event.preventDefault();
        //axios.post('/api/users',{user:this.state});
        if (this.isValid()) {
            this.setState({errors: {}, isLoading: true});
            this
                .props
                .userSignupRequest(this.state)
                .then(() => {
                    this
                        .props
                        .addFlashMessage({type: 'sucess', text: 'signup was successful'});
                    this
                        .context
                        .router
                        .push('/');
                }, (err) => this.setState({errors: err.response.data, isLoading: false}));
        }
    }

    render() {
        const {errors} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Join myApp</h1>
                <TextFieldGroup
                    error={errors.username}
                    label="UserName"
                    onChange={this.onChange}
                    value={this.state.username}
                    field="username"
                    checkUserExists={this.checkUserExists}/>
                <TextFieldGroup
                    error={errors.email}
                    label="Email"
                    onChange={this.onChange}
                    value={this.state.email}
                    field="email"
                    checkUserExists={this.checkUserExists}/>
                <TextFieldGroup
                    error={errors.password}
                    label="Password"
                    type="password"
                    onChange={this.onChange}
                    value={this.state.password}
                    field="password"/>
                <TextFieldGroup
                    error={errors.passwordConfirmation}
                    label="Confirm Password"
                    type="password"
                    onChange={this.onChange}
                    value={this.state.passwordConfirmation}
                    field="passwordConfirmation"/>

                <div className="form-group">
                    <button
                        disabled={this.state.isLoading || this.state.invalid}
                        className="btn btn-primary btn-lg">SignUp</button>
                </div>
            </form>
        );

    }
}

SignupForm.propTypes = {
    userSignupRequest: React.PropTypes.func.isRequired,
    addFlashMessage: React.PropTypes.func.isRequired,
    isUserExists: React.PropTypes.func.isRequired
}

SignupForm.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default SignupForm;
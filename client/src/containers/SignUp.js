import React, { PropTypes, Component } from 'react';
import { signup } from '../actions/auth';
import { connect } from 'react-redux';

class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        }

        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
    }

    componentDidMount() {
        const { dispatch, isAuthenticated } = this.props;
    }

    handleSignUp(evt) {
        const { username, email, password, confirmPassword } = this.state;
        this.props.dispatch(signup(username, email, password, confirmPassword));
    }

    handleUsername(evt) {
        this.setState({
            'username': evt.target.value
        });
    }

    handleEmail(evt) {
        this.setState({
            'email': evt.target.value
        });
    }

    handlePassword(evt) {
        this.setState({
            'password': evt.target.value
        });
    }

    handleConfirm(evt) {
        this.setState({
            'confirmPassword': evt.target.value
        });
    }

    render() {
    
        return (
                <div className="component-login">
                    <h1>Sign Up</h1>
                    <input type='text' placeholder="Username"
                        onChange={this.handleUsername} />
                    <input type='email' placeholder="Email"
                        onChange={this.handleEmail} />
                    <input type='password' placeholder="Password"
                        onChange={this.handlePassword} />
                    <input type='password' placeholder="Confirm password"
                        onChange={this.handleConfirm} />

                    <button onClick={this.handleSignUp}>Sign Up</button>
                </div>
               );
    
    }

}

SignUp.propTypes = {
    isAuthenticated: PropTypes.bool,
}

function mapStateToProps(state) {
    var isAuthenticated = state.auth.isAuthenticated;
    console.log(state);

    return {
        isAuthenticated
    }
}

export default connect(
mapStateToProps)(SignUp);

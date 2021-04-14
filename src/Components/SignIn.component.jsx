import React, { Component } from 'react';
import {auth, signInWithGoogle} from '../firebase/firebase.utils';



class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  customSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  customInputHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };


  render() {
    return (
      <div>
        <form className="" onSubmit={this.customSubmit}>
          <div className="controls">
            <div className="form-group">
              <label for="Email" className="form-label">
                Your email
              </label>
              <input
                name="email"
                id="email"
                placeholder="Enter your email"
                required="required"
                type="email"
                onChange={this.customInputHandler}
                className="form-control"
                value={this.state.email}
              />
            </div>
            <div className="form-group">
              <label for="Password" className="form-label">
                Password
              </label>
              <input
                name="password"
                id="password"
                placeholder="Enter your password"
                type="password"
                required="required"
                className="form-control"
                onChange={this.customInputHandler}
                value={this.state.password}
              />
            </div>

            <button type="submit" className="btn btn-outline-dark">
              Sign In
            </button>
            <button className="btn btn-outline-dark ml-2" onClick={signInWithGoogle}>
              Sign In with Google
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;

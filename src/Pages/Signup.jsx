import React, { Component } from 'react';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
import SignIn from '../Components/SignIn.component';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  customSubmit = async (event) => {
    event.preventDefault();
    const {
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
    } = this.state;

    if (password != confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      const displayName = firstname + ' ' + lastname;

      await createUserProfileDocument(user, { displayName });

      this.setState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  };
  customInputHandler = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <section className="hero pt-4">
          <div className="container">
            <div className="hero-content pb-5 text-center">
              <h1 className="mb-5">Sign In / Sign Up</h1>
              <div className="row"></div>
            </div>
          </div>
        </section>
        <section className="py-6 mb-4 mt-6 p-4 ">
          <div className="container">
            
            <div className="row ">
              <div className="mb-5 mb-md-0 col-md-7 p-2 bg-light">
                <header className="mb-5">
              <h2 className="text-uppercase h5">I don't have an account</h2>
              <p>Provide the following information:</p>
            </header>
                <form className="" onSubmit={this.customSubmit}>
                  <div className="controls">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label for="First Name" className="form-label">
                            Your firstname *
                          </label>
                          <input
                            name="firstname"
                            id="firstname"
                            placeholder="Enter your firstname"
                            required=""
                            onChange={this.customInputHandler}
                            type="text"
                            className="form-control"
                            value={this.state.firstname}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label for="Last Name" className="form-label">
                            Your lastname *
                          </label>
                          <input
                            name="lastname"
                            id="lastname"
                            placeholder="Enter your lastname"
                            required=""
                            type="text"
                            onChange={this.customInputHandler}
                            className="form-control"
                            value={this.state.lastname}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="email" className="form-label">
                        Your email *
                      </label>
                      <input
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        required=""
                        type="email"
                        onChange={this.customInputHandler}
                        className="form-control"
                        value={this.state.email}
                      />
                    </div>
                    <div className="form-group">
                      <label for="message" className="form-label">
                        Password *
                      </label>
                      <input
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        type="password"
                        required=""
                        className="form-control"
                        onChange={this.customInputHandler}
                        value={this.state.password}
                      />
                    </div>
                    <div className="form-group">
                      <label for="message" className="form-label">
                        Password Confirm *
                      </label>
                      <input
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Enter your password"
                        type="password"
                        required=""
                        className="form-control"
                        onChange={this.customInputHandler}
                        value={this.state.confirmPassword}
                      />
                    </div>
                    <button type="submit" className="btn btn-outline-dark">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-5 p-2 bg-light">
                <header className="mb-5">
                  <h2 className="text-uppercase h5">I already have an account</h2>
                  <p>Sign in with your email and password:</p>
                </header>
                <SignIn></SignIn>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SignUp;

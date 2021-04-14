import { Component, useRef } from 'react';
import './App.css';
import Home from './home';
import Main from './main/main';
import Footer from './footer/footer';
import Header from './header/header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import KnowledgeLibraryPage from './Pages/KnowledgeLibrary';
import Contact from './Pages/Contact';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import SignUp from './Pages/Signup';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends Component {
  constructor() {
    super();
    console.log('app constructor');
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    console.log('app component didMount');
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      console.log('Google authentication object', userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => {
              console.log('app component state change');
              console.log('Bacetech authentication object', this.state);
            }
          );
        });
      } else
        this.setState({ currentUser: userAuth }, () => {
          console.log('Bacetech authentication object', this.state);
        });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    console.log('app component willUnMount');
  }

  render() {
    console.log('app component render');
    return (
      <div>
        <Router>
          <Header />
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/KnowledgeLibrary"
            component={KnowledgeLibraryPage}
          />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Signup" component={SignUp} />
          <Footer />
        </Router>
      </div>
    );
  }
}

const mapDispatchtoProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchtoProps)(App);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './images/Logo.png';
import './style.css';
import {auth} from '../firebase/firebase.utils';
import { connect } from 'react-redux';

class Header extends Component {
  
  constructor(props) {
    super(props);
    console.log('header component constructor');
 }

render() {
  console.log('header component render');
  return (
   <div>
   <nav className="navbar navbar-expand-lg navbar-dark  bg_bluenavy">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      {/*<span className="text-danger fs-1">B</span><span className="text-warning">a</span>
      <span className="text-primary">c</span><span className="text-danger">e</span>tech*/}
      <img src={Logo} alt=""/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        {/*<li className="nav-item">
          <a className="nav-link" href="#">Our Principles</a>
    </li>*/}
        <li className="nav-item">
          <Link className="nav-link" to="/KnowledgeLibrary">Knowledge Library
          </Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact</Link>
        </li>
        {
          this.props.currentUser ? 
         ( <li className="nav-item" >
            <a className="nav-link" href="#" onClick={() => auth.signOut()}>Sign Out</a>
        </li>)
        :
       ( <li className="nav-item">
        <Link className="nav-link" to="/Signup">Sign In</Link>
      </li>
       )
        }
      </ul>
    </div>
  </div>
</nav>
   </div>
 )
}
}


const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import MenuLessons from '../Components/MenuLessons/MenuLessons';
import BodyLesson from '../Components/MenuLessons/BodyLesson';
import HeaderLesson from '../Components/MenuLessons/HeaderLesson';
import Stackblitz from '../Components/MenuLessons/Stackblitz';
class Main extends Component {
  constructor() {
    super();
    this.state = {
      template: 3,
    };
  }

  render() {
    console.log(this.state.template);
    let t, x;
    if (this.state.template === 2) {
      t = 'col-md-9 ms-sm-auto col-lg-10 px-md-4 border';
    } else {
      t = 'col-md-6 ms-sm-auto col-lg-7 px-md-4 border';
      x = 'col-md-3 col-lg-3 d-md-block bg-light sidebar collapse';
    }
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <nav
              id="sidebarMenu"
              className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
            >
              <MenuLessons />
            </nav>

            <main className={t}>
              <HeaderLesson />
              <BodyLesson />
            </main>

            <nav id="sidebarMenuRight" className={x}>
              <Stackblitz />
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

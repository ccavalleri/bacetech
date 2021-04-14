import React, { Component} from 'react';
import avatar from '../../images/avatarm.png';

class BodyLesson extends Component {

  render() {
    return (
      <div>
         <div className="card">
                <div className="card-header">
                  <div className="row justify-content-between">
                    <div className="col-4">
                      <h3>Main Concepts</h3>
                    </div>

                    <div className="col-md-auto mr-1">
                      <div className="row">
                        <div className="col-xs-4 mr-1 content-justify-right">
                          <div className="card card_padding">
                            <img
                              src={avatar}
                              alt="Avatar"
                              className="card-img-top avatar"
                            />
                            <div className="card-body card_padding">
                              <span className="font_sofia badge bg-light text-dark no_padding ml-1">
                                CC
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/*</div><h6>
                        <span className="badge bg-primary text-light p-1">
                          CC
                        </span>
                        <img
                          src={avatar}
                          alt="Avatar"
                          className="avatar mr-4"
                        />
                        <span className="badge  badge-light p-3 border">
                          20 March 2021
                        </span>
                      </h6>
                      */}
                    </div>
                  </div>
                </div>
                <div className="card-body">
                      <p className="card-text">
                    Main goal of React is to build User Interface. What makes
                    React unique is that allows to create elements called
                    components, which are like a section of a web site, and tied
                    a bunch of them together for building a complex user
                    interface. These components are even reusable in other web
                    site pages as well.
                  </p>
                  <h4>Imperative vs Declarative</h4>
                  <p className="card-text">
                    In the imperative approach (jquery) we are going to provide
                    the sequence of the changes to apply to the DOM. With the
                    declarative approach, we keep the state (data) in a big
                    javascript object and we provide that to the React which
                    applies changes in the DOM. That helps to manage big
                    projects by keeping high code quality and reducing
                    complexity.
                  </p>
                  <h4>Components</h4>
                  <p className="card-text">
                    Split web application parts in small and reusable
                    components: they represent javascript functions built in
                    JSX, which might receive some properties (props) and returns
                    html at the end.
                  </p>
                  <h4>Unidirectional Data Flow</h4>
                  <p className="card-text">
                    We are going to pass to a React function the state and the
                    components and we get back what is called a virtual DOM
                    which describes the changes to apply in the DOM. The idea
                    behind the unidirectional Data Flow is whenever we click on
                    the page, the state will change and react by combining the
                    new state with the components we have by providing changes
                    in the DOM.This model helps to debug application code
                    issues.
                  </p>
                  <h4>React is a cross-platform UI library</h4>
                  <p className="card-text">
                    React focuses on the UI, and its pattern can be applied in
                    any environment such as mobile applications (react-native),
                    desktop applications(react desktop), terminal applications
                    and others.
                  </p>
                  <h4>Create React App </h4>
                  <p className="card-text">
                    It consents to create a single page React Application
                    without doing any setup or configuration
                  </p>
                  <h4>Webpack/babel</h4>
                  <p className="card-text">
                    it is already built-in. Babel (js compiler) permits to
                    translate react code to javascript code compatible with all
                    browsers. (ES6 to ES5) Webpack is a static module bundler
                    for modern JavaScript applications. When webpack processes
                    your application, it internally builds a dependency graph
                    which maps every module your project needs and generates one
                    or more bundles.
                  </p>
                  <p className="card-text">
                    In order to run the installation, from the terminal:
                    C:\Users\Ciro\Documents\_react npx create-react-app first
                    For running react app: npm run start From Visual Code Editor
                    we realize that the function app() is utilized to replace
                    html content in the root element. A class can be utilized as
                    well for producing html. So both class or function can be
                    utilized to build a component: an element reusable within
                    our project.
                  </p>
                </div>
              </div>
      </div>
    )
  }
}

export default BodyLesson;
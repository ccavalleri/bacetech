import React,  { Component } from 'react';


class MenuLessons extends Component {
  constructor() {
    super();
  }
    
  render() {
    return (
      <div>
        <div className="position-sticky pt-3 pb-3">
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <div className="row row-cols-3">
                        <div className="col-1">
                          <h5>1</h5>
                        </div>
                        <div className="col-9 column_padding_left">
                          <h6 className="mb-0">
                            <button
                              type="button"
                              className="btn btn-link button_padding"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                            >
                              Fundamentals
                            </button>
                          </h6>
                        </div>
                        <div className="col-1">
                          <span className="badge badge-primary badge-pill">
                            5
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <ul className="list-group">
                          <li
                            className="list-group-item d-flex justify-content-between align-items-center border"
                            data-toggle="collapse"
                            data-target="#demo"
                          >
                            Main Concepts
                          </li>

                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            State Managemet
                            {/* <span className="badge badge-light badge-pill">
                              5
                            </span>*/}
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            JSX
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Components
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Webpack and Babel
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <div className="row row-cols-3">
                        <div className="col-1">
                          <h5>2</h5>
                        </div>
                        <div className="col-9 column_padding_left">
                          <h6 className="mb-0">
                            <button
                              type="button"
                              className="btn btn-link button_padding"
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                            >
                              First Application
                            </button>
                          </h6>
                        </div>
                        <div className="col-1">
                          <span className="badge badge-primary badge-pill">
                            3
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <ul className="list-group">
                          <li
                            className="list-group-item d-flex justify-content-between align-items-center border"
                            data-toggle="collapse"
                            data-target="#demo"
                          >
                            Main Concepts
                          </li>

                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            State Managemet
                            {/* <span className="badge badge-light badge-pill">
                              5
                            </span>*/}
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            JSX
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Components
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Webpack and Babel
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <div className="row row-cols-3">
                        <div className="col-1">
                          <h5>3</h5>
                        </div>
                        <div className="col-9 column_padding_left">
                          <h6 className="mb-0">
                            <button
                              type="button"
                              className="btn btn-link button_padding"
                              data-toggle="collapse"
                              data-target="#collapseThree"
                            >
                              Adding Styles
                            </button>
                          </h6>
                        </div>
                        <div className="col-1">
                          <span className="badge badge-primary badge-pill">
                            4
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <ul className="list-group">
                          <li
                            className="list-group-item d-flex justify-content-between align-items-center border"
                            data-toggle="collapse"
                            data-target="#demo"
                          >
                            Main Concepts
                          </li>

                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            State Managemet
                            {/* <span className="badge badge-light badge-pill">
                              5
                            </span>*/}
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            JSX
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Components
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Webpack and Babel
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingFour">
                      <div className="row row-cols-3">
                        <div className="col-1">
                          <h5>4</h5>
                        </div>
                        <div className="col-9 column_padding_left">
                          <h6 className="mb-0">
                            <button
                              type="button"
                              className="btn btn-link button_padding"
                              data-toggle="collapse"
                              data-target="#collapseFour"
                            >
                              Splitting up in Components
                            </button>
                          </h6>
                        </div>
                        <div className="col-1">
                          <span className="badge badge-primary badge-pill">
                            5
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      aria-labelledby="headingFour"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <ul className="list-group">
                          <li
                            className="list-group-item d-flex justify-content-between align-items-center border"
                            data-toggle="collapse"
                            data-target="#demo"
                          >
                            Main Concepts
                          </li>

                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            State Managemet
                            {/* <span className="badge badge-light badge-pill">
                              5
                            </span>*/}
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            JSX
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Components
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Webpack and Babel
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingFive">
                      <div className="row row-cols-3">
                        <div className="col-1">
                          <h5>5</h5>
                        </div>
                        <div className="col-9 column_padding_left">
                          <h6 className="mb-0">
                            <button
                              type="button"
                              className="btn btn-link button_padding"
                              data-toggle="collapse"
                              data-target="#collapseFive"
                            >
                              Embedding REST API data
                            </button>
                          </h6>
                        </div>
                        <div className="col-1">
                          <span className="badge badge-primary badge-pill">
                            8
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse"
                      aria-labelledby="headingFive"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <ul className="list-group">
                          <li
                            className="list-group-item d-flex justify-content-between align-items-center border"
                            data-toggle="collapse"
                            data-target="#demo"
                          >
                            Main Concepts
                          </li>

                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            State Managemet
                            {/* <span className="badge badge-light badge-pill">
                              5
                            </span>*/}
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            JSX
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Components
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Webpack and Babel
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      </div>
    )

  }

}

export default MenuLessons;
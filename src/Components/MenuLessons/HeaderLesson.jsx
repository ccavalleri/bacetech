import React, { Component } from 'react';


class HeaderLesson extends Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">React JS: Fundamentals</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <span className="badge  badge-light p-3 mr-2 border">
                    20 March 2021
                  </span>
                  <div className="btn-group me-2">
                    <button
                      type="button"
                      className="btn btn-primary text-light btn-sm btn-outline-secondary"
                    >
                      1
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary pr-3 pl-3"
                    >
                      5
                    </button>
                  </div>
                </div>
              </div>
      </div>
    )
  }
}

export default HeaderLesson;
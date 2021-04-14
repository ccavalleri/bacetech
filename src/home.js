import React, { Component } from 'react';
import Header from './header/header';
import Main from './main/main';
import slide1 from './images/programming.svg';
import slide2 from './images/business.png';
import slide3 from './images/business2.png';
import education from './images/education.svg';
import reactlogo from './images/react-logo.svg';
import bootstrap4logo from './images/bootstrap-4.svg';
import nodejslogo from './images/nodejs.svg';
import typescriptlogo from './images/typescript.svg';
import jquerylogo from './images/jquery.svg';
import GCPlogo from './images/google-cloud.svg';
import knowledgelibrary from './images/knowledgelibrary.svg';
import coding from './images/Coding.svg';
import teamwork from './images/teamwork.svg';
import spreadsheet from './images/Spreadsheet.svg';
import contentfullogo from './images/contentlogo.svg';
import githublogo from './images/github-logo.svg';
import CustomerSupport from './images/CustomerSupport.svg';
import Research from './images/Research.svg';
import './home.css';

class Home extends Component {
  constructor() {
    super();
  }

  render() {
    const kl = `${knowledgelibrary}#svgView(preserveAspectRatio(none))`;
    const codingsvg = `${teamwork}#svgView(preserveAspectRatio(none))`;
    const spreadsheetsvg = `${spreadsheet}#svgView(preserveAspectRatio(none))`;
    const CustomerSupportsvg = `${CustomerSupport}#svgView(preserveAspectRatio(none))`;
    const Researchsvg = `${Research}#svgView(preserveAspectRatio(none))`;
    return (
      <div>
        <main role="main">
          <div class="jumbotron jumbotron-fluid jumbotron_expansion">
            <div class="container">
              <section class="pt-md-10">
                <div class="container">
                  <div class="row align-items-center">
                    <div class="col-12 col-md-5 col-lg-6 order-md-2">
                      <img
                        src={slide2}
                        class="img-fluid mw-md-150 mw-lg-130 mb-6 mb-md-0 aos-init aos-animate"
                        alt="..."
                        data-aos="fade-up"
                        data-aos-delay="100"
                      />
                    </div>
                    <div
                      class="col-12 col-md-7 col-lg-6 order-md-1 aos-init aos-animate"
                      data-aos="fade-up"
                    >
                      <h1 class="display-3 text-center text-md-left">
                        Welcome to <span class="text-primary">Bacetech</span>.
                      </h1>
                      <h2>
                        Transforming business idea and customer needs into real
                        solutions
                      </h2>

                      <p class="lead text-center text-md-left text-muted mb-6 mb-lg-8"></p>

                      <div class="text-center text-md-left">
                        <a
                          href="overview.html"
                          class="btn btn-primary shadow lift mr-1"
                        >
                          Contact Us
                        </a>
                        <a
                          href="index.html"
                          class="btn btn-primary-soft lift"
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <section class="section section-lg line-bottom-light">
            <div class="container">
              <div class="row justify-content-center mb-4 mb-lg-6">
                <div class="col-12 text-center">
                  <h1 class="display-3 mb-3 mb-lg-4">
                    It is a work but we do for fun!
                  </h1>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <nav>
                    <div
                      class="nav nav-tabs flex-column flex-md-row bg-white shadow-soft border border-light justify-content-around rounded mb-lg-3 py-3"
                      id="nav-tab"
                      role="tablist"
                    >
                      <a
                        class="nav-item nav-link rounded mr-md-3 btn-primary subtitle active"
                        id="nav-content-research-tab"
                        data-toggle="tab"
                        href="#nav-content-research"
                        role="tab"
                        aria-controls="nav-content-research"
                        aria-selected="false"
                      >
                        <span class="d-block">
                          <span class="fas fa-file-alt mr-2"></span>
                          <span class="font-weight-normal">What we do</span>
                        </span>
                      </a>
                      <a
                        class="nav-item nav-link rounded btn-primary mr-md-3 subtitle"
                        id="nav-rank-track-tab"
                        data-toggle="tab"
                        href="#nav-rank-track"
                        role="tab"
                        aria-controls="nav-rank-track"
                        aria-selected="false"
                      >
                        <span class="fas fa-chart-line mr-2"></span>
                        <span class="font-weight-normal">Customer Support</span>
                      </a>
                      <a
                        class="nav-item nav-link rounded btn-primary mr-md-3 subtitle"
                        id="nav-web-monitor-tab"
                        data-toggle="tab"
                        href="#nav-web-monitor"
                        role="tab"
                        aria-controls="nav-web-monitor"
                        aria-selected="false"
                      >
                        <span class="far fa-bell mr-2"></span>
                        <span class="font-weight-normal">
                          Knowledge Library
                        </span>
                      </a>
                      <a
                        class="nav-item nav-link rounded btn-primary mr-md-3 subtitle"
                        id="nav-backlink-research-tab"
                        data-toggle="tab"
                        href="#nav-backlink-research"
                        role="tab"
                        aria-controls="nav-backlink-research"
                        aria-selected="true"
                      >
                        <span class="fas fa-link mr-2"></span>
                        <span class="font-weight-normal">Research</span>
                      </a>
                    </div>
                  </nav>
                  <div class="tab-content mt-5 mt-lg-6" id="nav-tabContent">
                    <div
                      class="tab-pane fade active show"
                      id="nav-content-research"
                      role="tabpanel"
                      aria-labelledby="nav-content-research-tab"
                    >
                      <div class="row justify-content-between align-items-center">
                        <div class="col-12 col-md-5">
                          <h3 class="mb-4">We delivery IT solutions</h3>
                          <p className="lead">
                            Our mission is to help customers to reach outcomes
                            and utilize automation for the accomplishment of
                            daily operations.
                          </p>
                          <p className="lead">
                            Our philosophy is{' '}
                            <i>
                              "Customers should never adapt their business to
                              IT"
                            </i>
                            : business should rely on technologies and
                            technologies should be customized to fit specific
                            needs.
                          </p>
                        </div>
                        <div class="col-12 col-md-6 mb-4">
                          <img
                            class="shadow rounded p-4"
                            src={spreadsheetsvg}
                            width="540px"
                            height="400px"
                            alt="image"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="nav-rank-track"
                      role="tabpanel"
                      aria-labelledby="nav-rank-track-tab"
                    >
                      <div class="row justify-content-between align-items-center">
                        <div class="col-12 col-md-5">
                          <h3 class="mb-4">Services focused on the customer</h3>
                          <p class="lead">
                            We use Information Technology Infrastructure library
                            (ITIL) best practices to maximize efficiency in the
                            delivery of IT Services. This model of organization
                            allows it to provide a high level of support for the
                            customers which never feel alone in the dark.
                          </p>
                          <p class="lead">
                            We rely on strong processes and detailed
                            documentations for speeding up each supporting tier
                            chain.
                          </p>
                        </div>
                        <div class="col-12 col-md-6 mb-4">
                          <img
                            class="shadow rounded"
                            src={CustomerSupportsvg}
                            alt="image"
                            width="510px"
                            height="390px"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="nav-web-monitor"
                      role="tabpanel"
                      aria-labelledby="nav-web-monitor-tab"
                    >
                      <div class="row justify-content-between align-items-center">
                        <div class="col-12 col-md-5">
                          <h3 class="mb-4">
                            At Bacetech we love to share knowledge
                          </h3>
                          <p class="lead">
                            We publish articles and guides based on real
                            projects that we deliver on the market.
                          </p>
                          <p class="lead">
                            But not just that! We like to share solutions for
                            helping in the resolution of daily tasks that sooner
                            or later may be arised to our attention.
                          </p>
                          <a
                            href="./dashboard/app-analysis.html"
                            class="my-4 mb-5 d-block font-weight-bold"
                          >
                            <span class="fas fa-external-link-alt mr-2"></span>
                            Knowledge Library
                          </a>
                        </div>
                        <div class="col-12 col-md-6 mb-4">
                          <img
                            class="shadow rounded p-4"
                            src={kl}
                            width="530px"
                            height="388px"
                            alt="image"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      class="tab-pane fade"
                      id="nav-backlink-research"
                      role="tabpanel"
                      aria-labelledby="nav-backlink-research-tab"
                    >
                      <div class="row justify-content-between align-items-center">
                        <div class="col-12 col-md-5">
                          <h3 class="mb-4">Research</h3>
                          <p class="lead">
                            We love to explore new upcoming technologies and
                            understand if they can be reusable in any new
                            project.
                          </p>
                          <p class="lead">
                            They are usually tested for improving internal
                            processes or projects already delivered and once the
                            knowledge has been acquired, digested and released,
                            the supporting documentation becomes part of our
                            Knowledge Library.
                          </p>
                        </div>
                        <div class="col-12 col-md-6 mb-4">
                          <img
                            class="shadow rounded"
                            src={Researchsvg}
                            width="530px"
                            height="388px"
                            alt="image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div class="py-5 bg-light">
            <div class="container">
              <div class="row">
                <div class="col-md-10 mx-auto">
                  <div class="row">
                    <div class="col-md-4 ml-auto">
                      <h2>Technologies that we deal on a daily basis</h2>
                    </div>
                    <div class="col-md-6 mr-auto">
                      <p class="lead text-dark">
                        Establishing a solid understanding of modern
                        technologies and programming languages.
                        <br />
                        Here some:
                      </p>
                    </div>
                  </div>
                  <div class="row align-items-center my-md-4">
                    <div class="col">
                      <img
                        src={reactlogo}
                        class="img-fluid p-md-2"
                        alt="react"
                      />
                    </div>
                    <div class="col">
                      <img
                        src={bootstrap4logo}
                        class="img-fluid p-md-4"
                        alt="Bootstrap"
                      />
                    </div>
                    <div class="col">
                      <img src={nodejslogo} class="img-fluid" alt="nodejs" />
                    </div>
                    <div class="col">
                      <img
                        src={jquerylogo}
                        class="img-fluid p-md-2"
                        alt="jquery"
                      />
                    </div>
                    <div class="col">
                      <img
                        src={typescriptlogo}
                        class="img-fluid p-md-3"
                        alt="Typescript"
                      />
                    </div>
                    <div class="col">
                      <img
                        src={GCPlogo}
                        class="img-fluid p-md-3"
                        alt="Google Cloud Platform"
                      />
                    </div>
                    <div class="col">
                      <img
                        src={contentfullogo}
                        class="img-fluid p-md-3"
                        alt="Contentful"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section class="pt-8 pt-md-11 bg-gradient-light-white mt-4">
            <div class="container">
              <div class="row align-items-center pb-4">
                <div
                  class="col-12 col-md-7 col-lg-6 aos-init aos-animate"
                  data-aos="fade-right"
                >
                  <h2>
                    We have lots of experience
                    <span class="text-primary"> building Web Applications</span>
                  </h2>

                  <p class="font-size-lg text-muted mb-6">
                    For speeding up application development and deployment we
                    leverage on a subset of reliable and reusable components
                    available in our code repository.
                  </p>

                  <div class="d-flex">
                    <div class="icon text-primary">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path d="M0 0h24v24H0z"></path>
                          <path
                            d="M12 8H8a4 4 0 00-4 4v1a3 3 0 003 3v2a5 5 0 01-5-5v-1a6 6 0 016-6h4V4.728a.5.5 0 01.8-.4l2.856 2.133a.5.5 0 01-.001.802l-2.857 2.121A.5.5 0 0112 8.983V8z"
                            fill="#335EEA"
                          ></path>
                          <path
                            d="M12.058 16H16a4 4 0 004-4v-1a3 3 0 00-3-3V6a5 5 0 015 5v1a6 6 0 01-6 6h-3.942v.983a.5.5 0 01-.798.401l-2.857-2.12a.5.5 0 010-.803l2.856-2.134a.5.5 0 01.8.401V16z"
                            fill="#335EEA"
                            opacity=".3"
                          ></path>
                        </g>
                      </svg>
                    </div>

                    <div class="ml-5">
                      <h4 class="mb-1">Clean Code</h4>

                      <p class="text-muted mb-6">
                        Our mission is to build clean code for improving team
                        collaboration and reducing development effort.
                      </p>
                    </div>
                  </div>
                  <div class="d-flex">
                    <div class="icon text-primary">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" fill-rule="evenodd">
                          <path d="M0 0h24v24H0z"></path>
                          <path
                            d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z"
                            fill="#335EEA"
                          ></path>
                          <rect
                            fill="#335EEA"
                            opacity=".3"
                            transform="rotate(15 12 12)"
                            x="11"
                            y="4"
                            width="2"
                            height="16"
                            rx="1"
                          ></rect>
                        </g>
                      </svg>
                    </div>

                    <div class="ml-5">
                      <h4 class="mb-1">Secure Code</h4>

                      <p class="text-muted mb-6 mb-md-0">
                        Our code is designed following security best practices
                        and industry Standards (OWASP, SANS).
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-md-5 col-lg-6">
                  <div
                    class="w-md-150 w-lg-130 position-relative aos-init aos-animate"
                    data-aos="fade-left"
                  >
                    <div class="shape shape-fluid-y shape-blur-4 svg-shim text-gray-200"></div>

                    <div class="img-skewed img-skewed-left">
                      <img
                        src={slide1}
                        class="screenshot img-fluid img-skewed-item"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Home;

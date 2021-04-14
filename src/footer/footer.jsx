import React, { Component } from 'react';
import './style.css';

class Footer extends Component {
 render() {
  return (
    <div>
     {/*} <footer className="footer mt-auto py-3 bg-dark">
  <div className="container">
    <span className="text-muted">Bacetech - 3rd Floor Office
207 Regent Street
London, W1B 3HH
England 
Telephone: +4402071013752 
</span>
  </div>
  </footer>

<footer class="text-muted bg-dark pt-6 pb-3 jumbotron_expansion">
      <div className="container">
        <p class="float-right">
          <a href="#">Back to top</a>
        </p>
        <h4 className="pt-3 font_color">Bacetech ltd</h4>
        <h6 className="font_family">It is a work but we do for fun!</h6>
        <p></p>
      </div>
    </footer>*/}
    <footer className="bg-dark pt-6 pb-3 jumbotron_expansion">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-4 col-lg-3">
        
          <h4 className="font_color">Bacetech ltd</h4>
        <h6 className="font_slogan">It is a work but we do for fun!</h6>

          </div>
          <div class="col-6 col-md-4 col-lg-2">
   
            <h6 class="font-weight-bold text-uppercase font_family mt-2">
              What we do
            </h6>

            <ul class="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  IT Solutions
                </a>
              </li>
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Technologies
                </a>
              </li>
            </ul>

          </div>
          <div class="col-6 col-md-4 col-lg-2">

            <h6 class="font-weight-bold text-uppercase font_family mt-2">
              Services
            </h6>

            <ul class="list-unstyled text-muted mb-6 mb-md-8 mb-lg-0">
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Customer Support
                </a>
              </li>
              <li class="mb-3">
                <a href="#!" class="text-reset">
                 Knowledge Library
                </a>
              </li>
             
            </ul>

          </div>
          <div class="col-6 col-md-4 offset-md-4 col-lg-2 offset-lg-0">

            <h6 class="font-weight-bold text-uppercase font_family mt-2">
              Research
            </h6>


            <ul class="list-unstyled text-muted mb-0">
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Our Model
                </a>
              </li>
              
              
              
            </ul>

          </div>
          <div class="col-6 col-md-4 col-lg-2">
        

            <h6 class="font-weight-bold text-uppercase font_family mt-2">
              Contact
            </h6>

            <ul class="list-unstyled text-muted mb-0">
              <li class="mb-3">
                <a href="#!" class="text-reset">
                  Documentation
                </a>
              </li>
              
            </ul>

          </div>
        </div>
      </div> 
    </footer>
    </div>
  )
}
}

export default Footer;
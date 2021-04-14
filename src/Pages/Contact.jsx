import React, { Component} from 'react';
import './Contact.css';
import {signInWithGoogle} from '../firebase/firebase.utils';


class Contact extends Component {
  constructor() {
    super();
    
    this.state = { 
      firstname: '',
      lastname: '',
      email: '',
      message: ''
    }
  }
  

  customSubmit = (event ) => {
    event.preventDefault();
    //alert(`You are submitting: ${this.state.firstname} ${this.state.lastname} ${this.state.email}`);
  }
  customInputHandler = (event) => {
    const { value, name } = event.target;
    this.setState ( { [name]: value });
  }

  render() {
    const addressicon='<svg className="svg-icon svg-icon-light text-primary w-3rem h-3rem mb-3"><use xlink:href="/icons/orion-svg-sprite.svg#navigation-map-1"/></svg>';
    return (
      <div>
          <section className="hero pt-4">
            <div className="container">
              <div className="hero-content pb-5 text-center">
                <h1 className="mb-5">Contact</h1>
                <div className="row">
                  <div className="mx-auto col-xl-8">
                    Are you curious about something?  As am hastily invited settled at limited civilly fortune me. 
                  Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. 
                  Confined in declared marianne is vicinity.
                  </div>
                  </div>  
                  </div>
                  </div>
                  </section>

                  <section className="py-6 CustomBackground pt-4 pb-4" >
                    <div className="container">
                      <div className="row">
                        <div className="text-center text-md-left col-md-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-geo-alt-fill CustomIcon" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                       
                           
                            <h4 className="mt-2">Address</h4>
                            <p className="text-muted mb-2">
                              3rd Floor Office<br/>
                              207 Regent Street<br/>
                              London, W1B 3HH<br/>
                              England, <strong>Great Britain</strong>
                            </p>
                        </div>
                        <div className="text-center text-md-left col-md-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-telephone-inbound CustomIcon" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0zm-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg>
                          <h4 className="mt-2">Commercial</h4>
                          <p className="text-muted">For any type of commercial enquiry.</p>
                          <p className="text-muted">If you get the line busy please use the form below. 
                                                    </p>
                                                    <h5 className="text-muted"><strong>+4402071013752</strong></h5>
                        </div>
                        <div className="text-center text-md-left col-md-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-mailbox2 CustomIcon" viewBox="0 0 16 16">
  <path d="M9 8.5h2.793l.853.854A.5.5 0 0 0 13 9.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9v1z"/>
  <path d="M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4zM8 7a3.99 3.99 0 0 0-1.354-3H12a3 3 0 0 1 3 3v6H8V7zm-3.415.157C4.42 7.087 4.218 7 4 7c-.218 0-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0c0 .334-.164.264-.415.157z"/>
</svg>
                          <h4 className="mt-2">Electronic support</h4>
                          <p className="text-muted">Please feel free to write an email to us or to use our electronic ticketing system.</p>
                          <ul className="list-unstyled text-muted">
                            <li><strong>wanda@bace.tech</strong></li>
                            <li></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>


                  <section class="py-6 mb-4 mt-6 p-4">
                    <div class="container">
                      <header class="mb-5">
                        <h2 class="text-uppercase h5">
                          Contact form
                        </h2>
                      </header>
                    <div class="row">
                      <div class="mb-5 mb-md-0 col-md-7">
                        <form class="" onSubmit={this.customSubmit}>
                          <div class="controls">
                                <div class="row">
                                  <div class="col-sm-6">
                                    <div class="form-group">
                                      <label for="First Name" class="form-label">Your firstname *</label>
                                      <input name="firstname" id="firstname" placeholder="Enter your firstname" required="" 
                                      onChange={this.customInputHandler} type="text" class="form-control" value={this.state.firstname}/>
                                    </div>
                                  </div>
                                  <div class="col-sm-6">
                                    <div class="form-group">
                                      <label for="Last Name" class="form-label">Your lastname*</label>
                                        <input name="lastname" id="lastname" placeholder="Enter your lasttname" required="" type="text" 
                                         onChange={this.customInputHandler} class="form-control" value={this.state.lastname}/>
                                    </div>
                                  </div>
                                </div>
                              <div class="form-group">
                                <label for="email" class="form-label">Your email *</label>
                                <input name="email" id="email" placeholder="Enter your email" required="" type="email" 
                                 onChange={this.customInputHandler} class="form-control" value={this.state.email}/>
                              </div>
                              <div class="form-group">
                                <label for="message" class="form-label">Your message for us *</label>
                                <textarea rows="4" name="message" id="message" placeholder="Enter your message" required="" class="form-control"  onChange={this.customInputHandler}>
                                  {this.state.message}
                                </textarea>
                              </div>
                              <button type="submit" class="btn btn-outline-dark">Send message</button>
                            
                          </div>
                        </form>
                      </div>
                      <div class="col-md-5">
                        <p class="text-muted">
                        Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. 
                         </p>
                        <p class="text-muted">
                        È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem Ipsum.                       

                        </p>
                      <div class="social">
                        <ul class="list-inline">
                          <li class="list-inline-item">
                            <a href="#" target="_blank">
                              <i class="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a href="#" target="_blank">
                              <i class="fab fa-facebook"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a href="#" target="_blank">
                              <i class="fab fa-instagram"></i>
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a href="#" target="_blank">
                              <i class="fab fa-pinterest"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
      </div>
    )
  }
}

export default Contact;

import React, {Component} from 'react'

class About extends Component {
    
   render(){
       return(
           <section className="row tm-pt-4 tm-pb-6">
               <div className="col-12 tm-tabs-container tm-page-cols-container">
                   <div className="tm-page-col-left tm-tab-links">
                       <ul className="tabs clearfix" data-tabgroup="first-tab-group">
                           <li>
                               <a href="#tab1" className="active">
                                   <div className="tm-tab-icon"></div>
                                    About Us
                               </a>
                           </li>
                           <li>
                               <a href="#tab2" className="">
                                   <div className="tm-tab-icon"></div>
                                Vision and Mission
                               </a>
                           </li>
                           <li>
                               <a href="#tab3" className="">
                                   <div className="tm-tab-icon"></div>
                                    Our History
                                </a>
                           </li>
                       </ul>
                   </div>
                   <div className="tm-page-col-right tm-tab-contents">
                       <div id="first-tab-group" className="tabgroup">
                           <div id="tab1" style="">
                               <div className="text-content">
                                   <h3 className="tm-text-secondary tm-mb-5">
                                       About Us
                                   </h3>
                                   <p className="tm-mb-5">
                                       Above pink girl photo is provided by Moose Photos from
                                       Pexels. This is a tab content area. There are 3 tabs at the
                                       left side. Curabitur porttitor metus nisl. Nullam nec dictum
                                       dolor. Sed ultricies purus nec suscipit vulputate. Fusce a
                                       massa eu orci vulputate varius. Quisque quis ullamcorper
                                       sapien. Integer eu luctus nulla, vel viverra odio.
                                    </p>
                                   <p className="tm-mb-5">
                                       Praesent id felis ac erat elementum condimentum.
                                       Pellentesque a libero vitae nisi vestibulum tempor vitae
                                       vitae nulla. Praesent ut eleifend ligula, nec pretium erat.
                                       Suspendisse nec magna id massa sollicitudin aliquam eget ut
                                       turpis.
                                    </p>
                               </div>
                               <div className="row tm-pt-5">
                                   <div className="col-md-4 text-center">
                                       <div className="tm-about-person mx-auto">
                                           <img src="img/bitcoin-girl.jpg" alt="Image" className="img-fluid tm-mb-1"/>
                                               <h4 className="tm-text-secondary tm-mb-1">
                                                   Catherine Theta
                                                    </h4>
                                               <p className="tm-mb-2">Project Manager</p>
                                               <div className="tm-mb-3">
                                                   <a href="https://facebook.com" className="tm-about-social-link">
                                                       <i className="fab fa-facebook-f tm-about-social-icon"></i>
                                                   </a>
                                                   <a href="https://twitter.com" className="tm-about-social-link">
                                                       <i className="fab fa-twitter tm-about-social-icon"></i>
                                                   </a>
                                                   <a href="https://linkedin.com" className="tm-about-social-link">
                                                       <i className="fab fa-linkedin-in tm-about-social-icon"></i>
                                                   </a>
                                               </div>

                                               <p>
                                                   Mauris efficitur risus mi, et varius dolor sodales
                                                   facilisis. Fusce sed mi tristique.
                                                </p>
                                                </div>
                                       </div>

                                       <div className="col-md-4 text-center">
                                           <div className="tm-about-person mx-auto">
                                               <img src="img/ar-guy.jpg" alt="Image" className="img-fluid tm-mb-1"/>
                                                   <h4 className="tm-text-secondary tm-mb-1">New Hudson</h4>
                                                   <p className="tm-mb-2">Digital Marketing</p>
                                                   <div className="tm-mb-3">
                                                       <a href="https://facebook.com" className="tm-about-social-link">
                                                           <i className="fab fa-facebook-f tm-about-social-icon"></i>
                                                       </a>
                                                       <a href="https://twitter.com" className="tm-about-social-link">
                                                           <i className="fab fa-twitter tm-about-social-icon"></i>
                                                       </a>
                                                       <a href="https://linkedin.com" className="tm-about-social-link">
                                                           <i className="fab fa-linkedin-in tm-about-social-icon"></i>
                                                       </a>
                                                   </div>
                                                   <p>
                                                       Pellentesque habitant morbi tristique senectus et netus
                                                       et malesuada fames.
                                                </p>
                                                </div>
                                           </div>

                                           <div className="col-md-4 text-center">
                                               <div className="tm-about-person mx-auto">
                                                   <img src="img/desk-girl.jpg" alt="Image" className="img-fluid tm-mb-1"/>
                                                       <h4 className="tm-text-secondary tm-mb-1">Jennifer Wall</h4>
                                                       <p className="tm-mb-2">Team Leader</p>
                                                       <div className="tm-mb-3">
                                                           <a href="https://facebook.com" className="tm-about-social-link">
                                                               <i className="fab fa-facebook-f tm-about-social-icon"></i>
                                                           </a>
                                                           <a href="https://twitter.com" className="tm-about-social-link">
                                                               <i className="fab fa-twitter tm-about-social-icon"></i>
                                                           </a>
                                                           <a href="https://linkedin.com" className="tm-about-social-link">
                                                               <i className="fab fa-linkedin-in tm-about-social-icon"></i>
                                                           </a>
                                                       </div>
                                                       <p>
                                                           Three social icons are placed in above circles. Sed
                                                           turpis nisl, congue a arcu in.
                                                        </p>
                                                        </div>
                                               </div>
                                           </div>
                                       </div>
                                       <div id="tab2" style={{display: "none"}}>
                                           <div className="text-content">
                                               <h3 className="tm-text-secondary tm-mb-5">Vision and Mission</h3>
                                               <p className="tm-mb-5">
                                                   Nam consequat, leo vitae aliquet dignissim, leo est laoreet
                                                   nibh, nec dictum libero justo vitae dolor. Donec tristique
                                                   eros at nisi elementum efficitur. Proin ornare feugiat ex
                                                   placerat pellenteqsue. Nulla convallis est volutpat ex
                                                   ultrices facilisis.
                                                </p>
                                               <p className="tm-mb-5">
                                                   Etiam egestas metus vitae est interdum, in eleifend nunc
                                                   volutpat. Aliquam molestie ipsum quis suscipit lacinia.
                                                   Mauris turpis libero, iaculis non dictum ac, ornare a massa.
                                                   Duis id lorem purus. Fusce viverra ullamcorper metus.
                                                   Curabitur puvinar suscipit sapien ac blandit. Aliquam vel
                                                   pulvinar purus, sit amet luctus urna.
                                                </p>
                                           </div>
                                           <div className="row tm-pt-5">
                                               <div className="col-md-4 text-center">
                                                   <div className="tm-about-person mx-auto">
                                                       <img src="img/bitcoin-girl.jpg" alt="Image" className="img-fluid tm-mb-1"/>
                                                           <h4 className="tm-text-secondary tm-mb-1">
                                                               Catherine Theta
                                                            </h4>
                                                           <p className="tm-mb-2">Project Manager</p>
                                                           <div className="tm-mb-3">
                                                               <a href="https://facebook.com" className="tm-about-social-link">
                                                                   <i className="fab fa-facebook-f tm-about-social-icon"></i>
                                                               </a>
                                                               <a href="https://twitter.com" className="tm-about-social-link">
                                                                   <i className="fab fa-twitter tm-about-social-icon"></i>
                                                               </a>
                                                               <a href="https://linkedin.com" className="tm-about-social-link">
                                                                   <i className="fab fa-linkedin-in tm-about-social-icon"></i>
                                                               </a>
                                                           </div>

                                                           <p>
                                                               Mauris efficitur risus mi, et varius dolor sodales
                                                               facilisis. Fusce sed mi tristique.
                                                            </p>
                                                            </div>
                                                   </div>

                                                   <div className="col-md-4 text-center">
                                                       <div className="tm-about-person mx-auto">
                                                           <img src="img/ar-guy.jpg" alt="Image" className="img-fluid tm-mb-1"/>
                                                               <h4 className="tm-text-secondary tm-mb-1">New Hudson</h4>
                                                               <p className="tm-mb-2">Digital Marketing</p>
                                                               <div className="tm-mb-3">
                                                                   <a href="https://facebook.com" className="tm-about-social-link">
                                                                       <i className="fab fa-facebook-f tm-about-social-icon"></i>
                                                                   </a>
                                                                   <a href="https://twitter.com" className="tm-about-social-link">
                                                                       <i className="fab fa-twitter tm-about-social-icon"></i>
                                                                   </a>
                                                                   <a href="https://linkedin.com" className="tm-about-social-link">
                                                                       <i className="fab fa-linkedin-in tm-about-social-icon"></i>
                                                                   </a>
                                                               </div>
                                                               <p>
                                                                   Pellentesque habitant morbi tristique senectus et netus
                                                                   et malesuada fames.
                                                                </p>
                                                                </div>
                                                       </div>

                                                       <div className="col-md-4 text-center">
                                                           <div className="tm-about-person mx-auto">
                                                               <img src="img/desk-girl.jpg" alt="Image" className="img-fluid tm-mb-1"/>
                                                                   <h4 className="tm-text-secondary tm-mb-1">Jennifer Wall</h4>
                                                                   <p className="tm-mb-2">Team Leader</p>
                                                                   <div className="tm-mb-3">
                                                                       <a href="https://facebook.com" className="tm-about-social-link">
                                                                           <i className="fab fa-facebook-f tm-about-social-icon"></i>
                                                                       </a>
                                                                       <a href="https://twitter.com" className="tm-about-social-link">
                                                                           <i className="fab fa-twitter tm-about-social-icon"></i>
                                                                       </a>
                                                                       <a href="https://linkedin.com" className="tm-about-social-link">
                                                                           <i className="fab fa-linkedin-in tm-about-social-icon"></i>
                                                                       </a>
                                                                   </div>
                                                                   <p>
                                                                       Three social icons are placed in above circles. Sed
                                                                       turpis nisl, congue a arcu in.
                                                                    </p>
                                                                    </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div id="tab3" style={{display: "none"}}>
                                                       <div className="text-content">
                                                           <h3 className="tm-text-secondary tm-mb-5">Our History</h3>
                                                           <p className="tm-mb-5">
                                                               Mauris turpis libero, iaculis non dictum ac, ornare a massa.
                                                               Duis id lorem purus. Fusce viverra ullamcorper metus.
                                                               Curabitur puvinar suscipit sapien ac blandit. Aliquam vel
                                                               pulvinar purus, sit amet luctus urna. Nulla convallis est
                                                               volutpat ex ultrices facilisis.
                                                            </p>
                                                           <p className="tm-mb-5">
                                                               Etiam egestas metus vitae est interdum, in eleifend nunc
                                                               volutpat. Aliquam molestie ipsum quis suscipit lacinia. Nam
                                                               consequat, leo vitae aliquet dignissim, leo est laoreet
                                                               nibh, nec dictum libero justo vitae dolor. Donec tristique
                                                               eros at nisi elementum efficitur. Proin ornare feugiat ex
                                                               placerat pellenteqsue.
                                                            </p>
                                                       </div>
                                                       <div className="row tm-pt-5">
                                                           <div className="col-md-4 text-center">
                                                               <div className="tm-about-person mx-auto">
                                                                   <img src="img/bitcoin-girl.jpg" alt="Image" className="img-fluid tm-mb-1"/>
                                                                       <h4 className="tm-text-secondary tm-mb-1">
                                                                           Catherine Theta
                                                                        </h4>
                                                                       <p className="tm-mb-2">Project Manager</p>
                                                                       <div className="tm-mb-3">
                                                                           <a href="https://facebook.com" className="tm-about-social-link">
                                                                               <i className="fab fa-facebook-f tm-about-social-icon"></i>
                                                                           </a>
                                                                           <a href="https://twitter.com" className="tm-about-social-link">
                                                                               <i className="fab fa-twitter tm-about-social-icon"></i>
                                                                           </a>
                                                                           <a href="https://linkedin.com" className="tm-about-social-link">
                                                                               <i className="fab fa-linkedin-in tm-about-social-icon"></i>
                                                                           </a>
                                                                       </div>

                                                                       <p>
                                                                           Mauris efficitur risus mi, et varius dolor sodales
                                                                           facilisis. Fusce sed mi tristique.
                                                                        </p>
                                                                        </div>
                                                               </div>

                                                               <div className="col-md-4 text-center">
                                                                   <div className="tm-about-person mx-auto">
                                                                       <img src="img/ar-guy.jpg" alt="Image" className="img-fluid tm-mb-1"/>
                                                                           <h4 className="tm-text-secondary tm-mb-1">New Hudson</h4>
                                                                           <p className="tm-mb-2">Digital Marketing</p>
                                                                           <div className="tm-mb-3">
                                                                               <a href="https://facebook.com" className="tm-about-social-link">
                                                                                   <i className="fab fa-facebook-f tm-about-social-icon"></i>
                                                                               </a>
                                                                               <a href="https://twitter.com" className="tm-about-social-link">
                                                                                   <i className="fab fa-twitter tm-about-social-icon"></i>
                                                                               </a>
                                                                               <a href="https://linkedin.com" className="tm-about-social-link">
                                                                                   <i className="fab fa-linkedin-in tm-about-social-icon"></i>
                                                                               </a>
                                                                           </div>
                                                                           <p>
                                                                               Pellentesque habitant morbi tristique senectus et netus
                                                                               et malesuada fames.
                                                                            </p>
                                                                            </div>
                                                                   </div>

                                                                   <div className="col-md-4 text-center">
                                                                       <div className="tm-about-person mx-auto">
                                                                           <img src="img/desk-girl.jpg" alt="Image" className="img-fluid tm-mb-1"/>
                                                                               <h4 className="tm-text-secondary tm-mb-1">Jennifer Wall</h4>
                                                                               <p className="tm-mb-2">Team Leader</p>
                                                                               <div className="tm-mb-3">
                                                                                   <a href="https://facebook.com" className="tm-about-social-link">
                                                                                       <i className="fab fa-facebook-f tm-about-social-icon"></i>
                                                                                   </a>
                                                                                   <a href="https://twitter.com" className="tm-about-social-link">
                                                                                       <i className="fab fa-twitter tm-about-social-icon"></i>
                                                                                   </a>
                                                                                   <a href="https://linkedin.com" className="tm-about-social-link">
                                                                                       <i className="fab fa-linkedin-in tm-about-social-icon"></i>
                                                                                   </a>
                                                                               </div>
                                                                               <p>
                                                                                   Three social icons are placed in above circles. Sed
                                                                                   turpis nisl, congue a arcu in.
                                                                                </p>
                                                                                </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
      </section>
       )
   }
}

export default About

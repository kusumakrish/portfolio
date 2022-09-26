import React from 'react'
import  "./css.css"
import html from "../assets/html.jpg";
import css from "../assets/css.jpg";
import github from "../assets/github.jpg";
import js from "../assets/js.jpg";
import react from "../assets/react-native.jpg";
import netlify from "../assets/netlify.jpg";
import bootstarap from "../assets/bootstrap.jpg";
import Girl from "../assets/banner-guy.png"
import ToDoWeb from "../assets/ToDoWeb.png"
import ToDoMobile from "../assets/ToDoMobile.png"
import DigitalClock from "../assets/DigitalClock.png"
import Blog from "../assets/Blog.png"
import peopleOne from "../assets/testimonial-img1.png"
import peopleTwo from "../assets/testimonial-img2.png"
import peopleThree from "../assets/testimoney-img3.jpg"
import ecommerceimage from "../assets/ecommeceimgage.png";
import chattappimage from "../assets/chattappimage.png";
import { Link } from 'react-scroll';

export default function Profile() {
  return (
    <div className="body">
    <div class="mainOne">
    {/* <h1 class="name">Kusuma Krishna</h1>
    <nav class="nav">
        <button class="home">Home</button>
        <button class="about">About</button>
        <button class="potfolio">Portfolio</button>
        <button class="resume">Resume</button>
        <button class="contact">Contact</button>
    </nav> */}
    <div class="second" id='home'>
      
        <p class="nameText">Hi, <span className='responsive'>I am Kusuma Krishna</span></p>
        <p class="designation">A Full-Stack Developer</p>
        <p class="text">Get ready to turn ideas into reality</p><br/>
        {/* <Link className="hireme" to="Contact" spy={true} smooth={true}>Hire Me</Link>
        <Link className="secondResume" to="resume" spy={true} smooth={true}>Resume</Link> */}
        <Link to="Contact" spy={true} smooth={true}><button class="hireme">Hire Me</button></Link>
        <Link to="resume" spy={true} smooth={true}><button class="secondResume">Resume</button></Link>
        <img src={Girl} alt='girl' className='girl-image'/>
        {/* <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,600 C 0,600 0,300 0,300 C 160,312.93333333333334 320,325.8666666666667 466,306 C 612,286.1333333333333 744,233.46666666666667 904,227 C 1064,220.53333333333333 1252,260.26666666666665 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="#abb8c3" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg> */}
        </div>
    {/* <!-- </div> --> */}
    <div class="third" id='about'>
         <img src={Girl} alt='girl' className='girl-image-about'/>
         <p class="Aboutme">About Me</p>
         <hr class="hr"/>
         <div className='about-container'>
         <p>I'm a Full Stack Developer 
              I'm interested in all kinds of visual communication, but my major focus is on designing web, mobile & tablet interfaces.

              I also have skills in other fields like full stack web development and Testing.</p>
          <p>I enjoy turning complex problems into simple, beautiful and intuitive designs. When I'm not pushing pixels, you'll find me cooking, gardening or working out in the park.</p>
          <div className='language-container'>
            <span className='language-heading'>Languages/Libraries/Technologies</span><br/><br/>
            <img src={html} alt='html'/>
            <img src={css} alt='html'/>
            <img src={bootstarap} alt='html'/>
            <img src={github} alt='html'/>
            <img src={js} alt='html'/>
            <img src={react} alt='html'/>
            <img src={netlify} alt='html'/>
          </div>    
         </div>
    </div>
    <div className='four' id='portfolio'>
            <p className='portfolio-heading'>My Portfolio</p>
            <hr class="hr"style={{position:"relative",bottom:"30px",left:"400px"}}/>
            <div className='img-container'>
            <a href='https://kusumakrish.github.io/project5/' target="__blank"><img src={ToDoWeb} alt='html' className='img-container-item'/></a>
            <a href='https://kusumakrish.github.io/project3/' target="__blank"><img src={ToDoMobile} alt='html'className='img-container-item'/></a>
            <a href='https://kusumakrish.github.io/project-41/' target="__blank"><img src={DigitalClock} alt='html'className='img-container-item , img-responsive'/></a>
            <a href='https://idyllic-custard-ed4fda.netlify.app' target="__blank"><img src={Blog} alt='html' className='img-container-item , img-responsive' /></a>
            <a href='https://632851ab7d4c6613f2feed3d--tranquil-otter-d48ed8.netlify.app/' target="__blank"><img src={ecommerceimage} alt='html' className='img-container-item , img-responsive' /></a>
            <a href='https://632838733dce89007bdeb871--profound-faloodeh-de4bcf.netlify.app/' target="__blank"><img src={chattappimage} alt='html' className='img-container-item , img-responsive'/></a>
            </div>
    </div>
    <div className='five' id='resume'>
      <p className='resume-heading'>Resume</p>
      <hr class="resume-hr"/>
      <div className='education-container'>
        <span className='education-heading'>Education</span>
        <hr/>
        <div className='round'></div>
        <hr className='side-hr'/>
        <span className='btech'>Visvodaya Engineering College</span><br/><br/>
        <span className='course'>Bachelor of Technology</span><br/><br/>
        <span className='course'>Computer Science Engineering</span>
        <div className='round'style={{position:"relative", bottom:"145px",left:"2px"}}></div>
        <hr className='side-hr' style={{position:"relative", bottom:"154px",right:"223px"}}/>
        <span className='btech'style={{position:"relative", bottom:"300px",right:"223px"}}>SBN Junior College</span><br/><br/>
        <span className='course'style={{position:"relative", bottom:"300px",right:"223px"}}>Intermediate</span><br/><br/>
        {/* <span className='course'style={{position:"relative", bottom:"300px",right:"223px"}}>Computer Science Engineering</span> */}
        <div className='round'style={{position:"relative", bottom:"320px",left:"2px"}}></div>
        <span className='btech'style={{position:"relative", bottom:"330px",right:"223px"}}>Z.P High School</span><br/><br/>
        <span className='course'style={{position:"relative", bottom:"340px",right:"223px"}}>10th</span><br/><br/>
        <span className='year'>2017-2021</span><br/><br/>
        <span className='sec-year'>2015-2017</span>
        <span className='ten-year'>2014-2015</span>
        <img src={Girl} alt='html' className='girl-image-resume'/> 
     </div>
    </div>
    <div className='six'>
        <p className='people'>What people say about me</p>
        <hr class="resume-hr" style={{width:"400px",left:"290px"}}/>
        <div className='people-container'>
        <img src={peopleOne} alt='html'className='peopleOne'/>
        <img src={peopleTwo} alt='html'className='nameTwo'/>
        <img src={peopleThree} alt='html'className='nameThree'/><br/>
        <span className='nameOne'>Elizabeth Martin</span><br/>
        <span className='nameOne-sec'>SaveSpace Inc.</span><br/>
        <div className='nameOne-third'>Lorem Ipsum is simply dummy text of the printing and type setting industry.</div>
        <span className='nameTwo-heading'>Alberto Donko</span><br/>
        <span className='nameTwo-heading'style={{fontSize:"14px",marginLeft:"10px",color: "#7B7B88"}}>ScreepApp</span><br/><br/>
        <div className='nameTwo-third'>Lorem Ipsum is simply dummy text of the printing and type setting industry.</div>
        <span className='nameThree-heading'>Alexander Parkinson</span><br/>
        <span className='nameThree-heading'style={{fontSize:"14px",marginLeft:"20px",color: "#7B7B88"}}>MyTravel.com</span>
        <div className='nameThree-third'>Lorem Ipsum is simply dummy text of the printing and type setting industry.</div>
        <div className='people-footer'>
        <span className='people-footer-heading'>View more testimonials</span>
        <i class="fa-solid fa-arrow-right , responsive-arrow" style={{position:"relative",top:"32px",left:"10px", color:"#FCA738"}}></i>
        </div>
        </div>
    </div>
    <div className='seven'id='Contact'>
         <p className='ContactMe'>Contact Me</p>
         <hr class="resume-hr , hr-responsive" style={{width:"200px",left:"340px",top:"5px"}}/><br/><br/>
         <div className='Contact-container'>
         <span className='let-connect'>Let's connect</span><br/>
         <span className='let-connect'style={{fontSize:"12px"}}>You can contact me any time i am always ready to connect with you</span><br/><br/>
         <span className='let-connect'style={{fontSize:"20px"}}>You can connect by,</span>
         <i class="fa-solid fa-envelope"style={{position:"relative",top:"200px",left:"20px"}}></i>
         <span className='contact-email'>kusumakrishna524@gmail.com</span><br/><br/>
         <i class="fa-solid fa-phone" style={{position:"relative",top:"200px",left:"190px"}}></i>
         <span className='contact-email'style={{left:"210px"}}>6303625685</span><br/><br/><br/>
         <i class="fa-solid fa-location-dot"style={{position:"relative",top:"200px",left:"192px"}}></i>
         <span className='contact-email'style={{left:"210px"}}>Nellore,Andhra Pradesh,524134</span>
         <div className='contact-form-container'>
         <span className='form-heading'>Send me a message</span>
         <form className='form'>
          <lable className='lable-head'>First&Last Name <span style={{color:"red"}}>*</span></lable><br/>
          <input type="text" required /><br/><br/>
          <lable className='lable-head'>Phone number <span style={{color:"red"}}>*</span></lable><br/>
          <input type="text" required /><br/><br/>
          <lable className='lable-head'>Email address <span style={{color:"red"}}>*</span></lable><br/>
          <input type="text" required /><br/><br/>
          <lable className='lable-head'>Message <span style={{color:"red"}}>*</span></lable><br/>
          <input type="textarea" required placeholder='Your message here'style={{height:"60px",width:"200px"}}/><br/><br/><br/>
          <button className='form-button'>Send Message</button>
         </form>
         </div>
         </div>
    </div><br/><br/><br/>
    <div className='eight'>
          <span className='rights-footer'>© 2022 Kalvakollu Kusuma Krishna. All rights reserved.</span>
    </div>
</div>
</div>
  )
}

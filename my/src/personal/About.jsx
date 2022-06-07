import Connect from "./Connect"
import Footer from "./Footer"
import Navbar from "./Navbar"
import star from "./star.jpg"
// import { Link } from "react-router-dom"

const About =() =>{
    return(
        <>
        <Navbar/>

        <h2 style={{textAlign:"center", marginTop:"2%"}}>About</h2>
        <div class="container mt-3">
  <div class="row align-items-start bg-light">
    <div class="col-sm-6 " style={{fontFamily:"verdana"}}>
   <p> Hi, my name is moses Jojolola. I'm a Nigerian Software Engineer. I work with passion because hardworking is my motto. I live in Ibadan,Oyo state. I'm a computer science student, i am intellgent in everything am doing.</p>
   <p> I mostly work in a smaller team, and seen the direct impact I have on a project, I'm alway fall in love with code when building a site, i have more knowledge in using HTML,CSS,Bootstrap,Javascript,React Js, Node Js to build sites.</p>

<p>I am so talented in thinking,and developing a perfect site . Today, i have a lot of idea of how site should be, what can improve technology in world.</p>

<p> As a Software Engineer i have strong skills in Word, Excel and corel draw, i have work with people using this skill to make money money before i started learning software engineer </p>

<p>My main focus is to develop website for people and companies. i will like to work with Designers and with developers </p>

<p>In conclusion: My project and challenges in building website give me assurance that am capable to build any site, no matter how the difficulties, big or hard it is to develop. Because i love challenges when building site, i learn a lot when facing challenges in my code</p>
<p>For more information about me <a  href="https://wa.me/07025021586" ><span>@ Moses </span></a></p>
    </div>
    <div class=" col-sm-6">
    <img style={{width:"400px",height:"600px"}} src={star} alt="moses pix" />
    </div>
    </div>
    </div>

    <Connect/>
       <Footer/>
        </>
    )
}

export default About
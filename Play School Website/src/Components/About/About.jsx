import React from 'react'
import './About.css'
import about_img from '../../assets/children.jpg'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    
     
     <div className='about container'>     
 
        {/* <div className="about-left">
         <img src={about_img} alt="" className='about-img'/>
         <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/> 
       </div> */}
       <div className="about-right"> 
       <h1>ABOUT US</h1>
         <h3>KIDZIES PRESCHOOL</h3>
       <p>Kidzee Preschool is a leading chain of preschools located in India and Nepal backed by Zee Learn Ltd. With more than two decades of experience in the preschool industry, Kidzee has nurtured more than 1.5 million children throughout India. Being one of the largest preschools in India. Kidzee has 2000+ centres in 750+ cities in India and Nepal.</p>
       <h3>KIDZIES ADVANTAGE</h3>
       <p>Kidzee is a leader and a trendsetter in Early Childhood Care and Education (ECCE). Our business partners’ passion and drive are vital for our brand’s success.

Our Business Partners don't just take the name, they also take our pedagogy- PéNTEMiND, guidelines to teach, prescribes books/plays to be followed and so on to the ground.

Starting a preschool requires a strategic researching, planning, designing, and organising. Kidzee Professional research, makes this journey easier and rewarding for all our Business Partners.

Secret to Success is Service and Support.We provide pre-opening and operational support apart from the regular support that is given additional to all systems and process.</p>
        </div>
     </div>
    
    )
}

export default About

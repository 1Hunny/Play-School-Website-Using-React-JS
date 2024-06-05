import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      
     <Navbar/>
     <Hero/>
     <Programs/> 
     <div className="container">
         {/* <Title  title='PROGRAMMES'/>  */}
         
        <About setPlayState={setPlayState}/>
        {/* <Testimonials/> */}
        <Title title=' Photos of our KIDZIES Academy'/>
        <Campus/>
        {/* <Title subTitle='Reviews' title='What people says'/> */}
        <Title subTitle='Enquire Now' title='Admissions'/>
        <Contact/>
        <Footer/>
     </div>
     </div>
  )
}

export default App
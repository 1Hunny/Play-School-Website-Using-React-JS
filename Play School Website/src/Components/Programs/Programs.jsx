import React from 'react'
import './Programs.css'
import program_1 from '../../assets/apartments.jpeg'
import program_2 from '../../assets/rental.jpg'
import program_3 from '../../assets/penthouse.jpg'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (   
    <div className="program-container">
     <div className="header">
 <h1>PROGRAMS</h1>
   <div className="card-container">
    <div className="card">
      <img src="src/assets/PlayGroup.png"  />
      <div className="card-content">
        <h2>PlayGroup</h2>
        <p>Admission Age Group:1.5-2.5 Years</p>
        <p>Duration:3 Hours/Day</p>
        <button className='btn'>Read More</button>
      </div>
    </div>
    <div className="card">
      <img src="src/assets/nursery.jpg"  />
      <div className="card-content">
        <h2>Nursery</h2>
        <p>Admission Age Group:2.5-3.5 Years</p>
        <p>Duration:3 Hours/Day</p>
        <button className='btn'>Read More</button>
      </div>
    </div>
    <div className="card">
      <img src="src/assets/kindergarden.jpg"  />
      <div className="card-content">
        <h2>Kindergarten(Junior K.G/Lower K.G)</h2>
        <p>Age Group:4-5 Years</p>
        <p>Duration:4 Hours/Day</p>
        <button className='btn'>Read More</button>
      </div>
    </div>
    <div className="card">
      <img src="src/assets/kindergarden.jpg"  />
      <div className="card-content">
        <h2>Kindergarten(Senior K.G/Upper K.G)</h2>
        <p>Age Group:5-6 Years</p>
        <p>Duration:4 Hours/Day</p>
        <button className='btn'>Read More</button>
      </div>
    </div>
   </div>
 
     </div>
    </div>
    
  )
}

export default Programs

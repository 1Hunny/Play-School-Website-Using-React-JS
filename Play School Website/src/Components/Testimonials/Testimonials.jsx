import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/pentemind.png'
import back_icon from '../../assets/pentemind.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    
    <div className='testimonials'>
        <h1>Péntemind</h1>
      {/* <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/> */}
      <img src="src/assets/pentemind.png" alt="" />
      <div className="slider">
           
    </div>
    
    <div className="pentemind">
        <p>Péntemind - The Learning Minds, our pedagogy nurtures the ‘Learning Minds’ in every child. It shapes the child’s overall development in a fun and inspiring manner.

Our pedagogy Péntemind - The Learning Minds, resonates the belief that "the empires of the future will be empires of the mind," as eloquently stated by Winston Churchill. Inspired by this profound insight, Péntemind is dedicated to nurturing the 'Learning Minds' in every child with a vision of creating life long learners, by fostering their holistic development in an engaging and inspiring manner.

Péntemind, aims to shape future global leaders with a mindset of 'We First' rather than 'Me First,' instilling in them thevalues of collaboration, empathy, and constructive contribution to society. Through guided discovery, we empower children to become adaptive, critically diligent individuals who are poised to make a positive impact on the world.

Péntemind is a set of 5 minds which are:

Empathetic Mind: Emotional Balance propogates real learninig. Balancing self-awareness with consideration for others, the empathetic mind promotes both inward reflection and outward compassion, nurturing a sense of empathy and interconnectedness.

Conscientious Mind: Knowledge Acquisition.
Grounded in informed decision-making, the conscientious mind prioritises cognitive precision, equipping children with the discernment and responsibility to make thoughtful choices.

Focused Mind: Knowledge Retention.
This is the mind that approaches tasks logically and persistently strives for mastery through dedicated practice and effort, emphasising both willpower and skill development.

Analytical Mind: Knowledge Application.
The analytical mind is adept at making decisions based on logic, employing a process of observation, analysis, synthesis, and evaluation to tackle challenges and solve problems effectively.

Inventive Mind: Knowledge Development.
Encouraging creative thinking beyond conventional boundaries, the inventive mind fosters imagination and innovation, inspiring children to explore new ideas and possibilities. By cultivating these five minds in tandem, Péntemind aims to empower children with the essential skills, values, and perspectives necessary to thrive in an ever-evolving world. Join us on this transformative journey of learning and growth, where the potential of every child is nurtured and celebrated.

To foster the development of the 5 minds, we have taken the approach of Metacognition which emphasise on Learn-Unlearn-Relearn.

Péntemind's Unique Offerings as an Integrated Curriculum

Artsy - A path breaking art program that will teach children not only art but also appreciation of art

Mental Might - A program that will help children understand diversity, inclusion, and make them aware of the interconnectedness

Showstopper - A program that will teach children drama from planning to execution

Tell-a-Tale - A program that provides opportunity to listen to stories that challenge gender stereotypes, understand right from wrong, scribble their own magical world

Whirl & Twirl - A program that focus on the 5 elements (Body, Action, Time, Space, and Energy) of dance

Personality Development - A program that will help children enhance children’s self-esteem and self-confidence

Critical Thinking - A program that will help children develop systematic ways of thinking and reasoning

Eco-Conscious - A program that teaches children to lead sustainable lives and make eco-friendly choices</p>
    </div>
    </div>
  )
}

export default Testimonials

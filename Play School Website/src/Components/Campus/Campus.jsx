import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/RE1.jpg'
import gallery_2 from '../../assets/RE2.jpg'
import gallery_3 from '../../assets/RE3.jpg'
import gallery_4 from '../../assets/RE4.jpg'
import gallery_5 from  '../../assets/RE5.jpg'
import gallery_6 from  '../../assets/RE6.jpg'

import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_6} alt="" />
        <img src={gallery_5} alt="" />
        <img src={gallery_4} alt="" />
        {/* <img src={gallery_3} alt="" /> */}
      </div>
      <button className='btn dark-btn'><h3>Click for more photos</h3> <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Campus

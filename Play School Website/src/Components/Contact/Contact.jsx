import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);

      formData.append("access_key", "7733e9de-31c2-4095-961b-0e883a9ce8d8");
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Success", res);
        setResult(res.message);
        event.target.reset();
      } else {
        console.log("Error", res);
        setResult(res.message);
      }
    };


  return (
    
    <div className='contact'>
      
       
      <div className="contact-col">
      
        <form onSubmit={onSubmit}>
          <div className="name">
            <label></label>
            <input type="text" name='name' placeholder='first name*' required/>
            <label></label>
            <input type="text" name='name' placeholder='last name*'  required/>
            </div>
            <div className="e-contacts">
            <label></label>
            <input type="text" name='email' placeholder='Email ID*' required/>
            <label></label>
            <input type="tel" name='phone' placeholder='mobile number*' required/>
            </div>
            <div className="country">
            <label></label>
            <input type="text" name='name' placeholder='Pin Code*' required/>
            <label></label>
            <input type="text" name='name' placeholder='Country*' required/>
            </div>
            <div className="state">
            <label></label>
            <input type="text" name='name' placeholder='State/District*' required/>
            <label></label>
            <input type="text" name='name' placeholder='City*' required/>
            </div>
            {/* <div className="location">
            <label></label>
            <input type="text" name='name' placeholder='Location*' required/>
            </div> */}
            <div className="submit-btn">
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </div>
        </form>
        <span>{result}</span>
      </div>
      {/* <div className="contact-col">
        <h2> (1) Fill the School Admission Inquiry Form on the Website</h2>
        <h2> (2) We will invite you to the nearest Kidzee Preschool</h2>
        <h2> (3) Visit the School for Campus Tour</h2>
        <h2> (4) Join the Kidzee Family</h2>
        
      </div>  */}
    </div>
  )
}

export default Contact

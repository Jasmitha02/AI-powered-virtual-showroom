import React, { useState } from 'react';

function Contact() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const handleMailto = () => {
    const mailtoLink = `mailto:edrivespacecars@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.open(mailtoLink, '_blank');
    window.location.href="/#home";
  };
  
  return (
    <div className="container mt-4 px-3">
      <div class="px-3" style={{ backgroundColor: "#ffac3c", color: "#282c4c" }}>
      <h1 className="text-center" style={{color: "#282c4c" }}> <i className="fa fa-envelope p-2"></i>Mail Us</h1>

      
      <div className="mb-3"style={{ backgroundColor: "#ffac3c"}}>
        <label htmlFor="subject" className="form-label" style={{color: "#282c4c" }}>Subject:</label>
        <input
          type="text"
          id="subject"
          className="form-control"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label" style={{color: "#282c4c" }}>Message:</label>
        <textarea
          id="message"
          className="form-control"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <button onClick={handleMailto} className="btn my-3" style={{ backgroundColor: "#282c4c", color: "#ffac3c" }}>Send Email</button>
</div>
      <div className="my-4 py-4"style={{ backgroundColor: "#ffac3c", color: "#282c4c" }}>
        <h1 className="text-center " style={{color: "#282c4c" }}><i className="fa fa-phone p-2"></i>Call Us</h1>
        <p className="text-center">For inquiries, Feel free to call our Tollfree Numbers: </p>
        <p className='text-center'><strong>1800101102</strong></p>
        <p className='text-center'><strong>1800101103</strong></p>
      </div>

      <div className="my-4 py-4"style={{ backgroundColor: "#ffac3c", color: "#282c4c" }}>
        <h1 className="text-center " style={{color: "#282c4c" }}><i className="fa fa-whatsapp p-2"></i>WhatsApp Us</h1>
        <p className="text-center">Send “Hi” to below mentioned WhatsApp number to talk our Customer Care</p>
        <p className='text-center'><strong>(+91) 8888888888</strong></p>
        <p className='text-center'><strong>(+91) 9999999999</strong></p>
      </div>
    </div>
  );
}

export default Contact;
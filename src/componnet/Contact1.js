// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../asisste/cont1.css';

// const MyForm = () => {
//     const [user, setUser] = useState({
//         name: '',
//         id: '',
//         email: '',
//         phone: '',
//         term: false
//     });

//     const handleInputChange = (e) => {
//         setUser({ ...user, [e.target.name]: e.target.value });
//     };

//     const toggleTerms = () => {
//         setUser({ ...user, term: !user.term });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault(); // Prevents the default form submit action
//         console.log(user); // For demonstration, logs the user object. Replace with your submit logic.
//     };

//     return (
//         <div style={{ display: 'flex', width: '100%' }}>

            
          
//             <form onSubmit={handleSubmit}>

//             <h2 style={{color:"white" ,fontFamily:"sans-serif"}}>Drop Us Line</h2>
//                 <p style={{ color: "#888888", fontSize:"11px"}}>Your email address will not be published. Required fields are marked *</p>
            
//                 <div style={{ width: '100%' }}>
//                     <p>FULL NAME</p>
//                     <input name="name" autoFocus value={user.name} onChange={handleInputChange} />
//                 </div>
//                 <div style={{ width: '100%' }}>
//                     <p>IDENTIFICATION</p>
//                     <input name="id" value={user.id} onChange={handleInputChange} />
//                 </div>

//                 <div style={{ width: '47%' }}>
//                     <p>EMAIL</p>
//                     <input name="email" value={user.email} onChange={handleInputChange} />
//                 </div>
//                 <div style={{ width: '47%', marginLeft: '6%' }}>
//                     <p>PHONE</p>
//                     <input name="phone" value={user.phone} onChange={handleInputChange} />
//                 </div>

//                 <p className="term" onClick={toggleTerms}>
//                     <i className={user.term ? "fa fa-check-square-o" : "fa fa-square-o"} aria-hidden="true"></i>
//                     <span> Acepto términos y condiciones. </span>
//                 </p>

//                 <p>
//                 <div class="contactcircle-container" style={{ position: "relative" }}>
//   <div className="contactcircle-btn"></div>
//   <span className="contactcircle-btnspan" style={{ color: "white", fontSize:"20px" }}>
//     GET ON TOUCH
//   </span>
// </div>
//                 </p>
//                 <a>by pablo_corezzola</a>
//             </form>
//         </div>
//     );
// };

// export default MyForm;




import React, { useState } from 'react';

const MaterializeInput = ({ label, type, value, onChange, onBlur, invalid }) => {
  return (
    <div className={`form-group input-material ${invalid ? 'invalid' : ''}`}>
      <input
        type={type}
        className="form-control"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required
      />
      <label>{label}</label>
    </div>
  );
};

const YourComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [personality, setPersonality] = useState('');
  const [invalidName, setInvalidName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState(false);
  const [invalidPersonality, setInvalidPersonality] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    < >

      <div className="card" style={{border:"none"}}>
        <form id="contact-form" onSubmit={handleSubmit} style={{padding:"50px", border:"none"}}>
<h2 style={{color:"white" ,fontFamily:"sans-serif"}}>Drop Us Line</h2>
              <p style={{ color: "#888888", fontSize:"11px"}}>Your email address will not be published. Required fields are marked *</p>
            
          <MaterializeInput
            label="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => setInvalidName(!name)}
            invalid={invalidName}
            style={{border:"none"}}
          />
          <MaterializeInput
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => setInvalidEmail(!email)}
            invalid={invalidEmail}
          />
          <div className="form-group input-material">
            <textarea
              className="form-control"
              id="textarea-field"
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onBlur={() => setInvalidMessage(!message)}
              required
            />
            <label className='YourMessage'>Your Message</label>
          </div>
          
          <p>
                 <div class="contactcircle-container" style={{ position: "relative" }}>
   <div className="contactcircle-btn"></div>
   <span className="contactcircle-btnspan" style={{ color: "white", fontSize:"20px" }}>
     GET ON TOUCH
   </span>
 </div>
                 </p>
        </form>
      </div>
    </>
  );
};

export default YourComponent;

// import './Style.css';
// import React, {useStat,useState} from 'react'

// const FaceBook = (props) => {

//   const [UserFName,setUserFName] = useState("");
//   const [UserFnameError,setUserFNameError] = useState (false)

//   const [UserSirName,setUserSirName] = useState("");
//   const [UserSirNameError,setUserSirNameError] = useState (false)

//   const [UserEmail,setUserEmail] = useState("");
//   const [UserEmailError,setUserEmailError] = useState (false)

//   const [UserPassword,setUserPassword] = useState("");
//   const [UserPasswordError,setUserPasswordError] = useState (false)

  
// const UserFNameHandler = (e) => {
// setUserFName(e.target.value);
// }

// const UserSirNameHandler = (e) => {
//   setUserSirName(e.target.value);
//   }

// const UserEmailHandler = (e) => {
//   setUserEmail(e.target.value);
//   }
//   const UserPasswordHandler = (e) => {
//     setUserPassword(e.target.value);
//     }
    

// const UserSubmitForm = () =>{
//   if ( UserEmail === ""){
//     UserEmailError(true)
//   }

// }



//     return(
//         <div className='main-div'>

//         <div className="body">
  
// <h1 className="heading"><b>facebook</b></h1>
// <div className='main-div'>
// <div className="container">

//     <div className="card">
//         <form onSubmit={UserSubmitForm} >
//             <div >
//                 <h2 >Create a new account</h2>
//                 <p>it's quick and easy</p>
//             </div>
//             <hr className='hr'/>

//             <div className="inpit-box">
//                 <input  value={UserFName} onChange={UserFNameHandler} type="text"  placeholder=" First Name"/>
//                 { UserFnameError && <p className="Error">enter your name</p> }

//                 <input value={UserSirName} onChange={UserSirNameHandler} type="text" placeholder="Surname"/>
//                 { UserSirNameError &&  <p className="Error">enter your sirname</p> } 
//             </div>

//             <div className="inpit-box-2">
//                 <input value={UserEmail} onChange={UserEmailHandler} className="input-2" type="text" placeholder="Mobile Number Or Email Address"/>
//                 { UserEmailError &&  <p className="Error">enter your Email</p> }
//             </div>
//             <div className="input-box-2">
//                 <input value={UserPassword} onChange={UserPasswordHandler} className="input-2" type="password" placeholder="New password"/>
//                 { UserPasswordError &&  <p className="Error">enter your password</p> }
//             </div>

//             <div className="text-2">
//                 <p>People wo use our service may have uploded your Contact information to <br/> facebook. 
//                 <a href="#">Learn more.</a>
//                  <br/>
//                  </p>
//                 <p>By clicking Sign Up, you agree to our <a href="#">Terms, Privacy Policy </a> and <a
//                         href="#">Cookies Policy.</a> <br/>You may recive SMS notification from us and can opt out at
//                     any time.</p>
//             </div>
//             <input type="submit" value='SignUp' className='btn' />
            
            
//         </form>

//     </div>
// </div>
// </div>

//         </div>
//         </div>
//     )
// };

// export default FaceBook;



import './Style.css';
import React, { useState } from 'react';

const FaceBook = (props) => {

  const [UserFName, setUserFName] = useState("");
  const [UserFNameMsg, setUserFNameMsg] = useState("Enter Your Name");
  const [UserFnameError, setUserFNameError] = useState(false);

  const [UserSirName, setUserSirName] = useState("");
  const [UserSirNameMsg, setUserSirNameMsg] = useState("Enter Your Sirname");
  const [UserSirNameError, setUserSirNameError] = useState(false);

  const [UserEmail, setUserEmail] = useState("");
  const [UserEmailMsg, setUserEmailMsg] = useState("Enter Your Email");
  const [UserEmailError, setUserEmailError] = useState(false);

  const [UserPassword, setUserPassword] = useState("");
  const [UserPasswordMsg, setUserPasswordMsg] = useState("Enter Your Password");
  const [UserPasswordError, setUserPasswordError] = useState(false);

  const UserFNameHandler = (e) => {
    setUserFName(e.target.value);
    if (UserFName !== ""){
        setUserFNameMsg("Look's Good ☺")
        // setUserFNameError (false);
    }
  }

  const UserSirNameHandler = (e) => {
    setUserSirName(e.target.value);
    if (UserSirName !== ""){
        setUserSirNameMsg("Look's Good ☺")
       
    }
  }

  const UserEmailHandler = (e) => {
    setUserEmail(e.target.value);
    if (UserEmail!== ""){
        setUserEmailMsg("Look's Good ☺")
       
    }

  }

  const UserPasswordHandler = (e) => {
    setUserPassword(e.target.value);
    if (UserPassword!== ""){
        setUserPasswordMsg("Look's Good ☺")
       
    }

  }

  const UserSubmitForm = (e) => {
    e.preventDefault();
    if (UserFName === "") {
        setUserFNameError(true);
    }
    
    if (UserSirName === "") {
        setUserSirNameError(true);
    }
    
    if (UserEmail === "") {
        setUserEmailError(true);
    }
    
    if (UserPassword === "") {
        setUserPasswordError(true);
    }
    


  }


  return (
    <div className='main-div'>
      <div className="body">
        <h1 className="heading"><b>facebook</b></h1>
        <div className='main-div'>
          <div className="container">
            <div className="card">
              <form onSubmit={UserSubmitForm}>
                <div>
                  <h2>Create a new account</h2>
                  <p>it's quick and easy</p>
                </div>
                <hr className='hr' />
                <div className="inpit-box">
                  <input value={UserFName} onChange={UserFNameHandler} type="text" placeholder="First Name" />
                  {UserFnameError && <p className={`${UserFNameMsg === "Look's Good ☺" ? "sucees":"Error"}`}>  { UserFNameMsg }</p>}
                  <input value={UserSirName} onChange={UserSirNameHandler} type="text" placeholder="Surname" />
                  {UserSirNameError && <p className={`${UserSirNameMsg === "Look's Good ☺" ? "sucees":"Error"}`}>  {UserSirNameMsg}</p>}
                </div>
                <div className="inpit-box-2">
                  <input value={UserEmail} onChange={UserEmailHandler} className="input-2" type="text" placeholder="Mobile Number Or Email Address" />
                  {UserEmailError && <p className={`${UserEmailMsg === "Look's Good ☺" ? "sucees":"Error"}`}>{UserEmailMsg}</p>}
                </div>
                <div className="input-box-2">
                  <input value={UserPassword} onChange={UserPasswordHandler} className="input-2" type="password" placeholder="New password" />
                    {UserPasswordError && <p className={`${UserPasswordMsg=== "Look's Good ☺" ? "sucees":"Error"}`}>{UserPasswordMsg}</p>}
                </div>
                <div className="text-2">
                  <p>People who use our service may have uploaded your Contact information to <br /> facebook.
                    <a href="#">Learn more.</a><br /></p>
                  <p>By clicking Sign Up, you agree to our <a href="#">Terms, Privacy Policy</a> and <a
                    href="#">Cookies Policy.</a> <br />You may receive SMS notifications from us and can opt out at
                    any time.</p>
                </div>
                <input type="submit" value='Sign Up' className='btn' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaceBook;


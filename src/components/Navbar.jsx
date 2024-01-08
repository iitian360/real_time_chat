import React, { useContext, useState } from 'react'
import { signOut } from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { FaCamera } from "react-icons/fa";
import { BsFillPenFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";


const Navbar = () => {
  const { currentUser } = useContext(AuthContext)
  const [show, setshow] = useState(false)

  const handleShow = () => {
    setshow(true);
  }
  const cancelShow = () => {
    setshow(false);
  }

  // console.log(typeof(parseInt(currentUser.metadata.createdAt)))
  // const data=parseInt(currentUser.metadata.createdAt)


  return (
    <div className='navbar'>
      <span className="logo">Notify</span>
      <div className="user">
        <img style={{ cursor: "pointer" }} src={currentUser.photoURL} alt="" onClick={handleShow} />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
      {show &&
        <div className='userProfile'>
          <div className='userLogo'>
            <img src={currentUser.photoURL} alt="user" />
            <label htmlFor="prof"><FaCamera /></label>
            <input style={{ display: "none" }} id='prof' name='prof' type="file" />
          </div>
          <div className='userDetails'>
            <div className='details'>
              <div className='name'>{currentUser.displayName}</div>
              <label htmlFor="upname"><BsFillPenFill />
              </label>
              <input style={{ display: "none" }} type="button" name="upname" id="upname" />
            </div>
            <div className='details'>
              <div className='email'>{currentUser.email}</div>
              <label htmlFor="upmail"><BsFillPenFill />
              </label>
              <input style={{ display: "none" }} type="button" name="upmail" id="upmail" />
            </div>
            <div className='details'>
              <div className='email'>Join from: {currentUser.registrationDate}</div>
              <input style={{ display: "none" }} type="button" name="upmail" id="upmail" />
            </div>
          </div>
          <label className="cancelBtn" htmlFor="cnBtn"><ImCross/></label>
          <button style={{display:'none'}} id='cnBtn' name='cnBtn' className='cancelBtn' type='button' onClick={cancelShow}>Cancel</button>
        </div>


      }
    </div>
  )
}

export default Navbar
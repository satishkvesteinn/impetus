import React, { useState } from 'react'
import './navbar.scss'
import logo from '../../components/logo.png'

const Navbar = () => {

  const [show, setShow] = useState(false)
  const [menuShow, setMenuShow] = useState(true)

  return (
    <>
      <div className="logo-container d-flex justify-content-between align-items-center">
        <img className='logo' src={logo} alt="" />
        {
          show ? <i className="bi bi-x-square menu-click-icon" onClick={() => {
            setShow(false)
            setMenuShow(true)
          }}></i> : <i className="bi bi-list menu-click-icon" onClick={() => {
            setShow(true)
            setMenuShow(false)
          }}></i>

        }
      </div>
      <nav className="nav-container" style={{
        left: `${menuShow ? '-400px' : '0px'}`
      }}>
        <div style={{
          padding: '10px'
        }}>
          <hr className='divider' />
          <div className="user-container d-flex align-items-center">
            <img src="https://media.istockphoto.com/id/1209654046/vector/user-avatar-profile-icon-black-vector-illustration.jpg?s=612x612&w=0&k=20&c=EOYXACjtZmZQ5IsZ0UUp1iNmZ9q2xl1BD1VvN6tZ2UI=" alt="" className="user-image" />
            <div className="account-info d-flex justify-content-between w-100">
              <span className='d-flex flex-column'>
                <h6>Satish kumar</h6>
                <p>Student</p>
              </span>
              <span style={{
                color: "#ffffff",
                margin: "0px"
              }}><i className="bi bi-chevron-compact-down"></i></span>
            </div>
          </div>
          <hr className='divider' />
        </div>
        <div className="menu">
          <ul className="menu-lists">
            <li className="menu-list"><span className='active'><i className="bi bi-house menu-icon active"></i></span>Dashboard<i className="bi bi-caret-left-fill active-icon"></i></li>
            <li className="menu-list"><span><i className="bi bi-house menu-icon"></i></span>Approvals</li>
            <li className="menu-list"><span><i className="bi bi-house menu-icon"></i></span>Contact Us</li>
            <li className="menu-list"><span><i className="bi bi-house menu-icon"></i></span>Members</li>
          </ul>
        </div>
      </nav>
    </>

  )
}

export default Navbar
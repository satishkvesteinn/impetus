import React, { useState } from 'react'
import './navbar.scss'
import { useSelector, useDispatch } from 'react-redux'
import { change } from '../../features/home/ChangeSlice'

const Navbar = () => {
  const changes = useSelector((state) => state.changes.value)
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const [menuShow, setMenuShow] = useState(true)

  return (
    <>
      <div className="logo-container d-flex justify-content-between align-items-center">
        <img className='logo' src="https://gcc.naava.io/wp-content/uploads/2020/04/Naava-logo.png" alt="" />
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
            <img src='https://www.caehm.com/wp-content/uploads/2020/12/Person-Icon-e1626540139554.png' alt="" className="user-image" />
            <div className="account-info d-flex justify-content-between w-100">
              <span className='d-flex flex-column'>
                <h6>Satish kumar</h6>
                <p>{!changes ? "Student" : "Admin"}</p>
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

            <button className='home-change-btn' onClick={() => { dispatch(change(!changes)) }}>change home</button>
          </ul>
        </div>
      </nav>
    </>

  )
}

export default Navbar
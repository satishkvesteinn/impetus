
import React from 'react'
import Cart from '../components/cart/Cart'
import Form from '../components/form/Form'
import Navbar from '../components/navbar/Navbar'
// import Cart from '../components/cart/Cart'
// import Popup from '../components/popup/Popup'
// import Table from '../components/table/Table'
import './home.scss'

const Home = () => {
    return (
        <>
            <div className="homeContainer d-flex">
                <section className="left-section">
                    <Navbar />
                </section>
                <section className="right-section w-100">
                    <h5>Dashboard</h5>
                    <div className="cart-container w-100">
                        <div className="form-container">
                            <Form />
                        </div>
                        <Cart />
                        {/* <div className="row">
                            <div className="col-4">
                                <div className="p-1">
                                    <Cart />
                                </div>
                            </div>
                        </div> */}
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home
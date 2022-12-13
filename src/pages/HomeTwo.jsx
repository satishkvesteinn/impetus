import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Tables from '../components/table/Table'

const HomeTwo = () => {
    return (
        <div className="homeContainer d-flex">
            <section className="left-section">
                <Navbar />
            </section>
            <section className="right-section w-100">
                <h5>Doctors</h5>
                <div className="cart-container w-100">
                    <Tables />
                </div>
            </section>
        </div>
    )
}

export default HomeTwo
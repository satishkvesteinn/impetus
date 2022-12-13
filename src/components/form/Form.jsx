import React from 'react'
import './form.scss'

const Form = () => {
    return (
        <div className="form">
            <div className="inputs-container row">
                <div className="col-12 dol-sm-6 col-md-4 col-lg-3">
                    <div className="p-1">
                        <input type="text" placeholder='Batch no.' />
                    </div>
                </div>
                <div className="col-12 dol-sm-6 col-md-4 col-lg-3">
                    <div className="p-1">
                        <input type="text" placeholder='Name' />
                    </div>
                </div>
                <div className="col-12 dol-sm-6 col-md-4 col-lg-3">
                    <div className="p-1">
                        <input type="text" placeholder='Desgination' />
                    </div>
                </div>
                <div className="col-12 dol-sm-6 col-md-12 col-lg-3">
                    <div className="p-1">
                        <input type="submit" value='Search' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import './cart.scss'

export default function Cart() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
                <Grid xs={12} md={6} lg={4}>
                    <div className="cart d-flex">
                        <i className="bi bi-person cart-icon"></i>
                        <div className="cart-content d-flex justify-content-center align-items-start flex-column">
                            <h5 className='cart-title'>1000+</h5>
                            <p className='cart-desc'>Total Registered Students</p>
                        </div>
                    </div>
                </Grid>
                <Grid xs={12} md={6} lg={4}>
                    <div className="cart d-flex">
                        <i className="bi bi-person cart-icon"></i>
                        <div className="cart-content d-flex justify-content-center align-items-start flex-column">
                            <h5 className='cart-title'>1000+</h5>
                            <p className='cart-desc'>Total Registered Students</p>
                        </div>
                    </div>
                </Grid>
                <Grid xs={12} md={6} lg={4}>
                    <div className="cart d-flex">
                        <i className="bi bi-person cart-icon"></i>
                        <div className="cart-content d-flex justify-content-center align-items-start flex-column">
                            <h5 className='cart-title'>1000+</h5>
                            <p className='cart-desc'>Total Registered Students</p>
                        </div>
                    </div>
                </Grid>
                <Grid xs={12} md={6} lg={4}>
                    <div className="cart d-flex">
                        <i className="bi bi-person cart-icon"></i>
                        <div className="cart-content d-flex justify-content-center align-items-start flex-column">
                            <h5 className='cart-title'>1000+</h5>
                            <p className='cart-desc'>Total Registered Students</p>
                        </div>
                    </div>
                </Grid>
                <Grid xs={12} md={6} lg={4}>
                    <div className="cart d-flex">
                        <i className="bi bi-person cart-icon"></i>
                        <div className="cart-content d-flex justify-content-center align-items-start flex-column">
                            <h5 className='cart-title'>1000+</h5>
                            <p className='cart-desc'>Total Registered Students</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}
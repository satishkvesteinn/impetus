import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import './cart.scss'

const data = [
    {
        id: 1,
        title: 1000,
        desc: "Total Registered Students"
    },
    {
        id: 2,
        title: 6,
        desc: "Request Pending"
    },
    {
        id: 3,
        title: 500,
        desc: "CA"
    },
    {
        id: 4,
        title: 350,
        desc: "Lawyers"
    },
    {
        id: 5,
        title: 100,
        desc: "Doctors"
    },
    {
        id: 6,
        title: 200,
        desc: "Students"
    },
]

export default function Cart() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
                {
                    data.map(item => {
                        return (
                            <Grid xs={12} md={6} lg={4} key={item.id}>
                                <div className="cart d-flex">
                                    <i className="bi bi-person cart-icon"></i>
                                    <div className="cart-content d-flex justify-content-center align-items-start flex-column">
                                        <h5 className='cart-title'>{item.title}+</h5>
                                        <p className='cart-desc'>{item.desc}</p>
                                    </div>
                                </div>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
    );
}
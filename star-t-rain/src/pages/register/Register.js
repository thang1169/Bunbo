import { Container, Row, Col, Button } from 'reactstrap'
import React from 'react'
import { Box, TextField } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <Row className='flex'>
            <Col className='w-[50%]'
            >
                <img src='https://www.foodandwine.com/thmb/oQxMr-wP2YjxLZ63kRmGnlDy4ZI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Bun-bo-Hue-Vietnamese-Vermicelli-Noodle-Soup-with-Sliced-Beef-XL-RECIPE0423-47194f9a6efb4695ac72c76798f6aa64.jpg'
                    alt=''
                    style={{ borderRadius: '0px 20px 30px 0px' }} />
            </Col>

            <Col className='w-[50%] d-flex align-items-center justify-content-center mx-auto my-auto'>
                <div className=' w-[65%] mx-auto'>
                    <div className='flex flex-col'>
                        <TextField
                            id="standard-search"
                            label="Email Address"
                            type="search"
                            variant="standard"
                            style={{ marginBottom: '70px', width: '80%', marginLeft: 'auto', marginRight: 'auto' }}
                        />
                        <TextField
                            id="standard-search"
                            label="Full Name"
                            type="search"
                            variant="standard"
                            style={{ marginBottom: '70px', width: '80%', marginLeft: 'auto', marginRight: 'auto' }}
                        />
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '70px' }}
                        />
                        <TextField
                            id="standard-password-input"
                            label="Confirm Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '70px' }}
                        />
                        <TextField
                            id="standard-search"
                            label="Phone Number"
                            type="number"
                            variant="standard"
                            style={{ marginBottom: '70px', width: '80%', marginLeft: 'auto', marginRight: 'auto' }}
                        />
                        <TextField
                            id="standard-password-input"
                            label="Address"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '70px' }}
                        />
                        <Button
                            style={{
                                width: "80%",
                                height: '45px',
                                background: "#4c8787",
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                borderRadius: '8px',
                                fontSize: '20px',
                                color: 'white',
                            }}
                        >
                            Tạo tài khoản
                        </Button>
                        <div className='mt-7'>
                            <span>Bạn đã có tài khản?</span>
                            <Link to={"/login"} className='text-blue-400'> Đăng nhập</Link>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

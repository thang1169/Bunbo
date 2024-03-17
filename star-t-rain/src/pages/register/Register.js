import { Container, Row, Col, Button } from 'reactstrap'
import React, { useState } from 'react'
import { Box, TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import AuthApi from '../../utils/AuthApi'

export default function Register() {
    const [useName, setUseName] = useState();
    const [passWord, setPassWord] = useState();
    const [useEmail, setUseEmail] = useState();
    const [usePhoneNumber, setUsePhoneNumber] = useState();
    const [useAddress, setUseAddress] = useState();

    const handleRegister = async () => {
        try {
            const UrlData = await AuthApi.register({
                customerName: useName, // du lieu tk khi ngdung nhap
                email: useEmail,
                password: passWord, // du lieu mk khi ngdung nhap
                phoneNumber: usePhoneNumber,
                address: useAddress,

            })
            console.log('checkdata', UrlData) // check token
            localStorage.setItem("access_token", UrlData.data.token);// luu lai trinh duyet cua ng dung

            // navigate('/')
        } catch (error) {
            console.log('error')
        }
    }
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
                            value={useEmail}
                            onChange={(e) => { setUseEmail(e.target.value) }}
                            id="standard-search"
                            label="Email Address"
                            type="search"
                            variant="standard"
                            style={{ marginBottom: '70px', width: '80%', marginLeft: 'auto', marginRight: 'auto' }}
                        />
                        <TextField
                            value={useName}
                            onChange={(e) => { setUseName(e.target.value) }}
                            id="standard-search"
                            label="Full Name"
                            type="search"
                            variant="standard"
                            style={{ marginBottom: '70px', width: '80%', marginLeft: 'auto', marginRight: 'auto' }}
                        />
                        <TextField
                            value={passWord}
                            onChange={(e) => { setPassWord(e.target.value) }}
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '70px' }}
                        />
                        <TextField
                            //    value={useEmail}
                            //    onChange={(e) => { setUseEmail(e.target.value) }}
                            id="standard-password-input"
                            label="Confirm Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '70px' }}
                        />
                        <TextField
                            value={usePhoneNumber}
                            onChange={(e) => { setUsePhoneNumber(e.target.value) }}
                            id="standard-search"
                            label="Phone Number"
                            type="number"
                            variant="standard"
                            style={{ marginBottom: '70px', width: '80%', marginLeft: 'auto', marginRight: 'auto' }}
                        />
                        <TextField
                            value={useAddress}
                            onChange={(e) => { setUseAddress(e.target.value) }}
                            id="standard-password-input"
                            label="Address"
                            type="Address"
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
                            onClick={handleRegister}
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

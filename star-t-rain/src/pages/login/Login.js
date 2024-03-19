import { Container, Row, Col, Button } from 'reactstrap';
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
// import UseToken from '../../handleToken/UseToken';
// import axios from 'axios';
import { axiosAuth } from '../../lib/axios';


export default function LoginPage() {
    const [userName, setUseName] = useState("");
    const [password, setPassWord] = useState("");
    const [message, setMessage] = useState("");
    // const { setToken } = UseToken();
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!userName || !password) {
            setMessage("We need your email and password");
            return;
        }

        const data = {
            nameOrEmail: userName,
            password: password,
        };

        setLoading(true);

        try {
            const response = await axiosAuth.post(
                "/Auth/signin",
                {
                    nameOrEmail: userName,
                    password: password,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log(data)

            const result = response.data;

            if (response.status === 200) {
                console.log(result);
                // setToken(result.accessToken); // Assuming your API returns an access token
                navigate("/");
            } else {
                setMessage(result.message);
            }
        } catch (error) {
            console.error("Login failed:", error);
            setMessage("An unexpected error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Row className='flex mt-10'>
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
                            value={userName}
                            onChange={(e) => setUseName(e.target.value)}
                            id="standard-search"
                            label="Email Address"
                            type="search"
                            variant="standard"
                            style={{ marginBottom: '70px', width: '80%', marginLeft: 'auto', marginRight: 'auto' }}
                        />
                        <TextField
                            value={password}
                            onChange={(e) => setPassWord(e.target.value)}
                            id="standard-password-input"
                            label="Password"
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
                            onClick={handleLogin}
                            disabled={isLoading}
                        >
                            {isLoading ? "Logging in..." : "Login"}
                        </Button>
                        <div className='mt-7'>
                            <span>Bạn chưa có tài khoản?</span>
                            <Link to={"/register"} className='text-blue-400'> Tạo tài khoản</Link>
                        </div>
                        {message && <div className="mt-2 text-red-500">{message}</div>}
                    </div>
                </div>
            </Col>
        </Row>
    );
}

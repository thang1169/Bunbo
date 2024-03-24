import { Container, Row, Col, Button } from 'reactstrap';
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginPage() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!userName || !password) {
            setMessage("Please provide both email and password.");
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post(
                `http://fptcloud28.fptu2024.meu-solutions.com/api/Auth/signin?nameOrEmail=${encodeURIComponent(userName)}&password=${encodeURIComponent(password)}`,
                {
                    nameOrEmail: userName,
                    password: password
                }
            );

            const result = response.data;

            if (response.status === 200) {
                // Store token in sessionStorage upon successful login
                sessionStorage.setItem('token', result.accessToken);

                // Store user information in sessionStorage
                sessionStorage.setItem('userName', result.customerName);
                sessionStorage.setItem('phoneNumber', result.phoneNumber);
                sessionStorage.setItem('address', result.address);

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
            <Col className='w-[50%]'>
                {/* Image */}
            </Col>

            <Col className='w-[50%] d-flex align-items-center justify-content-center mx-auto my-auto'>
                <div className=' w-[65%] mx-auto'>
                    <div className='flex flex-col'>
                        {/* Input fields */}
                        <TextField
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            id="standard-search"
                            label="Email Address"
                            type="text"
                            variant="standard"
                            required
                        />
                        <TextField
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="standard"
                            required
                        />
                        {/* Login button */}
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
                        {/* Register link */}
                        <div className='mt-7'>
                            <span>Bạn chưa có tài khoản?</span>
                            <Link to={"/register"} className='text-blue-400'> Tạo tài khoản</Link>
                        </div>
                        {/* Error message */}
                        {message && <div className="mt-2 text-red-500">{message}</div>}
                    </div>
                </div>
            </Col>
        </Row>
    );
}

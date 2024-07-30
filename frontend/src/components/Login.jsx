import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, FormControl, FormLabel ,Container ,Row ,Col,Image,Form,FormGroup } from 'react-bootstrap';
import bg from '../assets/bg.jpg'
import { IoIosLock } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

const Login = () => {
    const [token, setToken] = useState("");
    const url = 'http://localhost:4000';
    const navigate = useNavigate();
    const [currentState, setCurrentState] = useState("Sign Up");
    const [data, setData] = useState({
        name: "",
        dob: "",
        email: "",
        password: ""
    });

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        if (name === "email" && !validateEmail(value)) {
            console.log("Invalid email format");
            // Optionally set an error state here for user feedback
        }

        setData((data) => ({ ...data, [name]: value }));
    };

    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl = url;
        if (currentState === 'login') {
            newUrl += '/api/user/login';
        } else {
            newUrl += '/api/user/register';
        }

        try {
            const response = await axios.post(newUrl, data);
            if (response.data.success) {
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                alert("Success! Redirecting to dashboard..."); // Alert message
                navigate('/dashboard'); // Redirect to dashboard
            } else {
                alert(response.data.message || "An error occurred");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred while processing your request.");
        }
    };

    return (
        <div className=" h-[100vh] flex justify-center items-center bg-gradient-to-bl from-cyan-700 to-pink-500">
            <Container className=" justify-content-center align-items-center ">
                <Row className="w-100">
                    <Col md={{ span: 4, offset: 4}} className=" p-5 w-1/2 border border-solid  rounded-xl relative">
                        <div className="text-center mb-4">
                            <h2 className="absolute font-bold border border-white p-3 rounded-lg bg-slate-300 -top-6 left-[35%]  z-10 text-2xl ">{currentState}</h2>
                            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJr-fGkiy1DE5A0JNOkcmCNGcXuQXdzENZA&s" roundedCircle className="ml-auto mr-auto mb-3 w-32 h-32 block" />
                        </div>
                        <Form onSubmit={onLogin}>
                            {
                                currentState=== "login" ? <></> 
                                :
                                <>
                                    <FormGroup controlId="formName" className='mb-2'>
                                        <FormLabel className='text-lg font-bold'>Your Name</FormLabel>
                                        <FormControl type='text' name='name' onChange={onChangeHandler} value={data.name} placeholder='Your Name' required />
                                    </FormGroup>
                                    <FormGroup controlId="formName" className='mb-2'>
                                        <FormLabel className='text-lg font-bold'>Date of Birth</FormLabel>
                                        <FormControl type='date' name='dob' onChange={onChangeHandler} value={data.dob} placeholder='Your DOB' required className='w-56'/>
                                    </FormGroup>
                                </>
                            }
                            <FormGroup controlId="formName" className='mb-2'>
                                <FormLabel className='text-lg font-bold'>Your Email Id</FormLabel>
                                <FormControl type='email' name='email' onChange={onChangeHandler} value={data.email} placeholder='Your Email id' required/>
                            </FormGroup>
                            <FormGroup controlId="formName" className='mb-2'>
                                <FormLabel className='text-lg font-bold'>Your Password</FormLabel>
                                <FormControl type='password' name='password' onChange={onChangeHandler} value={data.password} placeholder='Password' required/>
                            </FormGroup>
                            <div className='flex justify-center '>
                                <Button variant="primary" type="submit" className="w-50 mt-3 items-center bg-gradient-to-bl from-pink-600 to-cyan-700 border-none outline-none" >
                                    {
                                        currentState=== "Sign Up" ? "Create account" : "Login"
                                    }
                                </Button>
                            </div>

                            <div className="text-center mt-3 ">
                                {currentState === "login" ? (
                                    <p>
                                        Create a new account?{' '}
                                        <Button variant="link" onClick={() => setCurrentState("Sign Up")} className='text-white no-underline text-xl'>Click here</Button>
                                    </p>
                                ) : (
                                    <p>
                                        Already have an account?{' '}
                                        <Button variant="link" onClick={() => setCurrentState("login")} className='text-white no-underline text-xl'>Login here</Button>
                                    </p>
                                )}
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Login;

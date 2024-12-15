'use client';

import React from 'react'

export default function SignUp() {
    return(
        <form>
            <label> Email </label> <br></br>
            <input type='email' placeholder='Email'></input> <br></br>
            <label> Username </label> <br></br>
            <input type='text' placeholder='Username'></input> <br></br>
            <label> Password </label> <br></br>
            <input type='text' placeholder='Password'></input><br></br>
            <label> Confirm Password </label> <br></br>
            <input type='text' placeholder='Password'></input><br></br>
            <button onClick={() => console.log("Button clicked") }>Enter</button>
        </form>
    );
}
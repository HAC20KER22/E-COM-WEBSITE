'use client';

import Link from 'next/link';
import React from 'react'

export default function Login() {
    return(
        <form>
            <label> Username </label> <br></br>
            <input type='text' placeholder='Username'></input> <br></br>
            <label> Password </label> <br></br>
            <input type='text' placeholder='Password'></input><br></br>
            <Link href={'/forgot'}>Forgot Password</Link>
            <button onClick={() => console.log("Button clicked") }>Enter</button>
        </form>
    );
}
'use client';

import Link from 'next/link';
import React from 'react'

export default function Login() {
    return(
        <div>
            <label>Enter the registered email id</label><br></br>
            <input type='email' placeholder='Email' ></input> <br></br>
            <button onClick={() => console.log("Email send")}>Done people</button>
        </div>
    );
} 
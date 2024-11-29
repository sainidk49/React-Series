import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="h-screen bg-slate-700 flex flex-col text-center justify-center">
            <h1 className='text-4xl text-white'>About</h1>
            <br />
            <Link to={"/contact"}>Contact</Link>
        </div>
        
    );
}

export default About
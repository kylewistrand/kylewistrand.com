import React from 'react';
import Portfolio from '../components/Portfolio';
import '../styles/Main.css';

function Main() {
    return (
        <div>
            <header>
                <div className="profilePictureContainer">
                    <img src="/portfolio/profile.jpg" alt="Kyle Wistrand holding a teacup" className="profilePicture"/>
                </div>
                <h1 className="mainName">Kyle Wistrand</h1>
            </header>
            <main>
                <div className="links">
                    <a href="https://www.linkedin.com/in/kyle-wistrand">LinkedIn</a>
                    <a href="https://github.com/kylewistrand">GitHub</a>
                    <a href="https://kylewistrand.s3-us-west-1.amazonaws.com/Kyle+Wistrand+Resume.pdf">Resume (PDF)</a>
                </div>
                <Portfolio />
            </main>
        </div>
    );
}

export default Main;
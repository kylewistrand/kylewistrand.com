import React from 'react';
import Portfolio from '../components/Portfolio';
import '../styles/Main.css';

function Main() {
    return (
        <div>
            <header>
                <h1>Kyle Wistrand</h1>
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
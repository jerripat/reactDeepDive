import React from 'react';
import './App.css';
import reactImg from './assets/logo.svg';


const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function Header() {
    const description = reactDescriptions[genRandomInt(2)];
    return (
        <header>
            <h1>{description} fundamental concepts you will need.</h1>
        </header>
    );
}

function App() {
    return (
        <div>
            <Header />
            <main>
                <h2>Time to get started</h2>
            </main>
        </div>
    );
}

export default App;
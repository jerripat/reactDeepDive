import reactImg from "../assets/react-core-concepts.png";
import React from "react";
import './Header.css';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}
export default function Header() {
    const description = reactDescriptions[genRandomInt(2)];
    return (
        <header>
            <img src={reactImg} alt="React Logo"/>
            <h1>React Core Concepts</h1>
            <p>{description} REACT concepts you will need for almost any app you are
                going to build.</p>
        </header>
    );
}
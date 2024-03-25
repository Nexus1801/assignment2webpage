import React, { useState } from 'react';
import './App.css';

function Intro(props) {
    const [username] = useState(props.username);

    return (
            <header>
                <h1>Alexander Lap and Tri Vien Le</h1>
            </header>
    );
}

export default Intro;

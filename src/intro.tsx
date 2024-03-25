import React, { useState } from 'react';
import './App.css';

const Intro = ({name}: {name : string}) =>{
    return(
        <h1>{name}</h1>
    );
}


export default Intro;

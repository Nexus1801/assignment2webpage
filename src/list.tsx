import React, { useState } from 'react';
import './App.css';

function List(props) {
    const [list] = useState(props.list);

    return (
        <ul>
        <li>Cooking</li>
            <li>Sleeping</li>
            <li>Ultimate Frisbee</li>
            <li>Gaming</li>
            <li>Gym</li>
        </ul>
    );
}

export default List;

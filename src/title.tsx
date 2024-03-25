import React, { useState } from 'react';
import './App.css';

function Title(props) {
    const [title] = useState(props.title);

    return (
        <p>
            Hello, I'm Alexander Lap. I enjoy gaming in my free time. My interest are cooking, gym, sleeping, gaming,
            and ultimate frisbee.]
        </p>
    );
}

export default Intro;

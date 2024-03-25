import React, { useState } from 'react';
import './App.css';

function Title(props) {
    const [title] = useState(props.title);

    return (
        <p>
            Hello, I'm Alexander Lap. I enjoy gaming in my free time. My interest are cooking, gym, sleeping, gaming,
            and ultimate frisbee.] <br />
            Hello! My name is Tri Vien Le. I am a CS Major. I live in Chicago, Illinois.
            I love going to the gym, playing sports, video games, and hanging out with friends.
            </p>
    );
}

export default Title;

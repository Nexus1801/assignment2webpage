import React, { useState } from 'react';
import './App.css';

function Form(props) {
    const [form] = useState(props.form);

    return (
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name"/><br/><br/>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email"/><br/><br/>
            <label htmlFor="checkbox1"><input type="checkbox" id="checkbox1" name="checkbox1"/> Male</label><br/>
            <label htmlFor="checkbox2"><input type="checkbox" id="checkbox2" name="checkbox2"/> Female</label><br/><br/>
            <label><input type="radio" name="radio" value="option1"/> Age 18</label><br/>
            <label><input type="radio" name="radio" value="option2"/> Age 19</label><br/>
            <label><input type="radio" name="radio" value="option3"/> Age 20</label><br/><br/>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default Form;

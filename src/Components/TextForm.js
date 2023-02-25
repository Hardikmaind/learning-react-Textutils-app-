/* eslint-disable no-unused-vars */

// this {useState} is a Hook. this useState hook helps us in making the hook
import React, { useState } from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default function (props) {

    const handleUpClick = () => {
        // console.log('upper case was clicked '+ text);  it is not necessary to include this. it is just for our understanding and debugging
        // this change the present state of "text" which in default was "enter the text here2" when you click the button it will change from "enter the text here2" to "you have clicked on  handle up click"
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        // console.log('Lower case was clicked '+ text);  it is not necessary to include this. it is just for our understanding and debugging
        // this change the present state of "text" which in default was "enter the text here2" when you click the button it will change from "enter the text here2" to "you have clicked on  handle low click"
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleCopy=()=>{
        let text=document.getElementById("myBox");
        text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);

    }
    const handleExtraSpaces=()=>{
        // this will remove  extraspaces...in this rejudx is used   
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleClearClick = () => {
        
        let newText =" ";
        setText(newText)
    }
    
    // when whe handle on chnage funtion is triggerd  the object event is created.
    const handleOnChange = (event) => {
        // console.log('on Change'); it is not necessary to include this. it is just for our understanding and debugging
        // this changes the present state of the our "text" to another. and 
        setText(event.target.value)
        console.log(" ")
    }

    // here we are using the destruting the array const[text,setText]
    // here the default value of text  is "enter the text here2" which is the initial state of the text,its next text will be changed through setText.
    // text and setText are the state variables.state variable are the variables,which react will automatically watch
    // const [text, setText] = useState('Enter the text here2') ; we have enterd here text default. this is just for out understanding. we can remove it
    const [text, setText] = useState('')
    return (
        // this below written is the jsx fragment
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* onchange event will fire this below funtion.it is necessary to include this event cause if we not include it we will not be able to change the state of the state variavle "state" once it is changed . also it becomes necessary to update the state variable 'text' in  value="text" jaise hi koi type kare */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                {/* onlick event will fire this below funtions */}
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper case</button>
                <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to Lower case</button>
                <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy</button>
                <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>remove extra space</button>
            </div>
            <div className="container my-2">
                <h2>Your text summary</h2>
                {/* text.split() functions split an string with the particular separator in this case space and returns it as an array */}
                <p>{text.split(" ").length} words, {text.length} characters</p>
                {/* since 0.008 minutes req to read one word */}
                <p>{0.008 * (text.split(" ").length)} Minutes read</p>
                <h2>preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

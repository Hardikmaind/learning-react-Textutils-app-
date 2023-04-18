/* eslint-disable no-unused-vars */

// this {useState} is a Hook. this useState hook helps us in making the hook
import React, { useState } from "react";

// let title="this is some heading"

// now i have create here title variable . i want to show it as h1 heading . so we have to put this title variable inside the <h1> </h1> tags like this <h1> title</h1>. but after doing this it will show written only title in h1 and not"this is some heading". since we are writing <h1> title</h1> inside the funtion Textform(props) we should be writing it like this <h1>{title}</h1>.in this way "this is someheading" will be shown in h1 heading. why? because whatever written inside the funtions should be as a JSX element then only it will get evaluated

// eslint-disable-next-line import/no-anonymous-default-export
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log('upper case was clicked '+ text);  it is not necessary to include this. it is just for our understanding and debugging
    // this change the present state of "text" which in default was "enter the text here2" when you click the button it will change from "enter the text here2" to "you have clicked on  handle up click"
    let newText = text.toUpperCase();
    setText(newText);
    props.alert_message("text has been capitailize", "success");
  };
  const handleLoClick = () => {
    // console.log('Lower case was clicked '+ text);  it is not necessary to include this. it is just for our understanding and debugging
    // this change the present state of "text" which in default was "enter the text here2" when you click the button it will change from "enter the text here2" to "you have clicked on  handle low click"
    let newText = text.toLowerCase();
    setText(newText);
    props.alert_message("text has been converted to lowercase", "success");
  };
  const handleCopy = () => {
    // since we have used the navigator api  we dont need to use the let text = document.getElementById("myBox");,text.select(); document.getSelection().removeAllRanges();
    // let text = document.getElementById("myBox");
    // text.select();
    // text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text);
    // beacuse of below after copying , out text doenst get selected

    // document.getSelection().removeAllRanges();
    props.alert_message("text has been copied", "success");
  };
  const handleExtraSpaces = () => {
    // this will remove  extraspaces...in this rejudx is used
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.alert_message("extraspaces has been removed", "success");
  };
  const handleClearClick = () => {
    let newText = " ";
    setText(newText);
    props.alert_message("text has been cleared", "success");
  };

  // when whe handle on chnage funtion is triggerd  the object event is created.
  const handleOnChange = (event) => {
    // console.log('on Change'); it is not necessary to include this. it is just for our understanding and debugging
    // this changes the present state of the our "text" to another.
    // this is imp. we have below written  the value={text} and when we change something, handlge onchange funtion will get execute. when we write any textbox and textarea we need to do this. object event is crearted
    setText(event.target.value); //we need to use this whenever we use textarea or textbox syntax. no since we have written the value={text}, here text is a state variable this can be updated with the help of the settext. so jab bhi user koshish kare textarea ko change karne ki tab  value jo hain for example user has  written "h" then the text variable will be => jo value already tha+h. so text variable will be => jo  value already hain +"h". and we will be able to type. and the new value typed will be incorporated in the text varaible. so in this wat the text variable will be updated
    console.log(" ");
  };

  // here we are using the destruting the array const[text,setText]
  // here the default value of text  is "enter the text here2" which is the initial state of the text,its next text will be changed through setText.
  // text and setText are the state variables.state variable are the variables,which react will automatically watch
  // const [text, setText] = useState('Enter the text here2') ; we have enterd here text default. this is just for out understanding. we can remove it
  const [text, setText] = useState("");
  return (
    // this below written is the jsx fragment
    <>
      {/* now see the style below. to include the style in jsx, Javascipt epressions are written inside curly braces and since javascript objects also use curly braces, the styling in the example above is written inside the  two sets of curly braces.we could have directly added the the style with just one curly bracket if we had passed the the object which has css written in it. */}
      <div
        className="container"
        style={{ color: props.specifymode === "dark" ? "white" : "#042743" }}
      >
        {/* if we do not include propos.heading inside the { } then "props.heading" will be shown as the heading and not the actual heading which is passed with the help of props(WITHOUT THE { } IT WILL BE CONSIDERED AS JUST THE HTML ELEMENT).since it is JSX element is is mandetory to write it inside the {} brackets or the react will not be able to differentiate between html element and JSX element."*/}
        <h1 className="my-">{props.heading} </h1>
        <div className="mb-3">
          {/* onchange event will fire this below funtion.it is necessary to include this event cause if we not include it we will not be able to change the state of the state variavle "state" once it is changed . also it becomes necessary to update the state variable 'text' in  value="text" jaise hi koi type kare */}
          {/* this style funtion has 1 bracket(outer) for JS and 1 bracket for writing object(inner)*/}
          {/* since the color of the text area is grey, we cannot see */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.specifymode === "dark" ? "#13466e" : "white",
              color: props.specifymode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        {/* onlick event will fire this below funtions */}

        {/* here disabled means that when the length of the text is equal to 0, then the button will be disappeard */}
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-1 mx-1"
          onClick={handleUpClick}
        >
          Convert to Upper case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-1 mx-1"
          onClick={handleLoClick}
        >
          Convert to Lower case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-1 mx-1"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-1 mx-1"
          onClick={handleCopy}
        >
          Copy
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-1 mx-1"
          onClick={handleExtraSpaces}
        >
          remove extra space
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.specifymode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        {/* text.split() functions split an string with the particular separator in this case space and returns it as an array */}
        {/* here  filter funtions filter the string whose lenght is not equal to zero and only split those strings */}
        {/* <p>{text.split(" ").filter((element)=>{ return element.length!==0}).length} words, {text.length} characters</p>
                this is done so that when enter is pressed nothing happens and our code runs properly. this is part of the regular expression in JS */}
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words, {text.length} characters
        </p>
        {/* since 0.008 minutes req to read one word */}
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}

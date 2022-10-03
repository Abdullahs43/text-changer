import React, { useState } from "react";

const Textform = (props) => {

  const { mode, showAlert } = props

  const changeUpperCase = () => {

    if ((text.length) - (text.split(" ").length - 1) > 0) {
      const newText = text.toUpperCase()
      if (newText === text) {

        showAlert('info', 'text already in uppercase.')
        return
      }
      setText(newText)
      showAlert('success', 'text converted to uppercase.')
    }
    else {
      showAlert('warning', 'please enter some text.')
    }
  }
  const changeLowerCase = () => {

    if ((text.length) - (text.split(" ").length - 1) > 0) {
      const newText = text.toLowerCase()
      if (newText === text) {
        showAlert('info', 'text already in lowercase.')
        return
      }
      setText(newText)
      showAlert('success', 'text converted to lowercase.')
    }
    else {
      showAlert('warning', 'please enter some text.')
    }
  }

  const handleOnChange = (event) => {

    setcharacterCount((event.target.value.length) - (event.target.value.split(" ").length - 1))
    setText(event.target.value)
  }
  const clearText = () => {

    if ((text.length) - (text.split(" ").length - 1) > 0) {
      setText("");
      setcharacterCount("0")
      showAlert('success', 'text cleared.')
    } else {
      showAlert('info', 'already empty.')
    }
  }

  const handlyCopy = () => {

    if ((text.length) - (text.split(" ").length - 1) > 0) {
      const text = document.getElementById('text')
      text.select()
      navigator.clipboard.writeText(text.value)
      showAlert('success', 'text copied.')
    } else {
      showAlert('warning', 'please enter some text.')
    }
  }

  const handleExtraSpaces = () => {

    if ((text.length) - (text.split(" ").length - 1) > 0) {
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
      showAlert('success', 'extra space removed.')
    } else {
      showAlert('warning', 'please enter some text.')
    }
  }

  const [characterCount, setcharacterCount] = useState("0")
  const [text, setText] = useState("")

  return (<>
    <div className="container mt-5 d-flex justify-content-center ">
      <div className="row">
        <div className="col-12"><textarea name="text" id="text" cols="100" rows="15" value={text}
          onChange={handleOnChange}
          placeholder="Enter text here.."
          style={{
            backgroundColor: mode === 'dark' ? '#042743' : 'white',
            color: mode === 'dark' ? 'white' : '#042743'
          }} ></textarea>
          <div style={{ color: mode === 'dark' ? 'white' : '#042743' }}>number of characters {characterCount} </div></div>
        <div className="col mt-3">
          <button className="btn btn-primary " onClick={() => changeUpperCase()}>Uppercase Text</button>
          <button className="btn btn-primary ml-2" onClick={() => changeLowerCase()}>Lowercase Text</button>
          <button className="btn btn-primary ml-2" onClick={() => handlyCopy()}>Text Copy</button>
          <button className="btn btn-primary ml-2" onClick={() => clearText()}>Clear Text</button>
          <button className="btn btn-primary ml-2" onClick={() => handleExtraSpaces()}>Clear Extra Spaces</button>
        </div>
      </div>


    </div>
  </>);
}

export default Textform;

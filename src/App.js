import Textform from './components/Textform';
import Header from './components/Header';
import React, {
  useState
} from 'react';
import Alert from './components/Alert';

function App(props) {
  const [mode, setMode] = useState("light")
  const [textColor, setTextColor] = useState('dark')
  const [alert, setAlert] = useState(null)

  const showAlert = (type, message) => {

    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => setAlert(null), 2000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setTextColor('light')
      setMode("dark")
      document.body.style.backgroundColor = "#042743";
      showAlert("success", "dark mode sucessfully enables.")
    } else {
      setTextColor('dark')
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("success", "light mode sucessfully enables.")
    }
  }


  return ( <>
    <
    Header text = {
      "TextChanger"
    }
    mode = {
      mode
    }
    toggleMode = {
      toggleMode
    }
    textColor = {
      textColor
    }
    /> <
    Alert alert = {
      alert
    }
    /> <
    Textform mode = {
      mode
    }
    showAlert = {
      showAlert
    }
    />
    </>
  )
}

export default App;

import React from 'react';

function Header(props) {
  const { text, mode, textColor } = props;
  return (
    <nav className={`navbar navbar-${mode} bg-${mode} justify-content-between`}>
      <a className="navbar-brand" href="/" >{text}</a>
      <div className="custom-control custom-switch">
        <input type="checkbox" className="custom-control-input" id="customSwitch1" />
        <label className={`custom-control-label text-${textColor} `} htmlFor="customSwitch1" onClick={() => props.toggleMode()}>Mode</label>
      </div>
    </nav>
  );
}

export default Header;

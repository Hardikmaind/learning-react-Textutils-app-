
// rfc is below template. "react funtion based component". type rfc to bring it.

import React from 'react'
// impt keyword for importing prop types
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    // use the {} for writing the JS, and used the backtiks(``) so that i can use it as the template like fill in the blanks.
    // also ${light} actslike a  varivale we can replace anything in it
    <nav className={`navbar navbar-expand-lg  navbar-${props.specifymode} bg-${props.specifymode}`}>
      <div className="container-fluid">
        {/* this props.title passes our title in the  app.js when we include it in in Navbar component. it is written in "{ }" because it is the javascript and js is always written in curlly brackets */}
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.aboutText}</a>
            </li>

          </ul>
                                              {/* here text-light will give the white color t our text  */}
                                              {/* used the terinary operator here to add some condition on the props.specifymode. the condition says that if the mode is light then do it dark and vice vers. it only affects the text color..from dark to light */}
          <div className={`form-check form-switch text-${props.specifymode==='light'?'dark':'light'} mx-4`}>
                                                {/* put htmlFor instead of for in JSX */}
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
            onClick={props.toggle} />
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{backgroundColor:props.specifymode==='dark'?'grey':'white'}} />
            {/* success is for green color, primary is for blue color */}
            <button className="btn btn-primary " type="submit" >Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

// these are the proptypes it ssays that the title should be string or it will show error in the console.this we used to catch the error . it acts like a check

Navbar.propTypes = {
  title: PropTypes.string.isRequired,    //when written is requird and the default prop is not set here  then we have to pass the title in app.js or it will show error . ",isrequired mean which should state something there is should not be udefined "
  aboutText: PropTypes.string
};

// when prop are not passed these values will be executed
Navbar.defaultProps = {
  title: 'set title here',
  aboutText: 'about'
};
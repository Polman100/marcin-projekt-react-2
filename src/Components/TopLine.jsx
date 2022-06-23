import React from 'react'
import logo from './../logo.png'

const TopLine = () => {
  return (
    <div className="top-line">
        <img className="logo" src={logo} alt="logo" />
        <div className="converter-header">
            <h1>Przelicznik walut</h1>
        </div>
    </div>
  )
}

export default TopLine
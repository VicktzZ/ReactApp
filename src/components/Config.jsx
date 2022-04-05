import React from "react"
import './layout/Config.css'

export default () =>
    <div className="sideBar config">
        <div className="theme">
            <p>Dark Theme</p>
            <label className="switch">
                <input type="checkbox" / >
                <span className="slider round" id="toggle"></span>
            </label>
        </div>
        <nav className="nav">
            <ul>
                <li>Account</li>
                <li>Contato</li>
                <li>Logout</li>
            </ul>
        </nav>
        <footer>
            <p>Copyright by VicktzZ</p>
        </footer>
    </div>
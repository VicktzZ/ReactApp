import React from "react"
let startupName = 'Routiny'
let username = 'Vitor'

export default () => 
        <header className="sideBar">
            <div className="titulo">
                <p>{startupName}</p>
                <hr />
            </div>
                <p>Bem-vindo {username}!</p>
                <nav className="nav">
                    <ul>
                        <li>Dashboard</li>
                        <li>Rotinas</li>
                        <li>Afazeres</li>
                        <li>School Mode</li>
                    </ul>   
                </nav>
        </header>
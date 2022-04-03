import React from "react"
let startupName = 'Routiny'
let username = 'Vitor'

export default () => 
        <header>
            <div className="titulo">
                <p>{startupName}</p>
                <hr />
            </div>
                <p>bem vindo {username}!</p>
                <nav>
                    <ul>
                        <li>Dashboard</li>
                        <li>Rotinas</li>
                        <li>Afazeres</li>
                        <li>School Mode</li>
                        <li>Logout</li>
                    </ul>   
                </nav>
        </header>
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import api from '../services/services.js'
import { Link } from 'react-router-dom'
import App from './App'

// Page

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// Functional Script
let changeTheme = document.querySelector("#toggle")
let interruptor = false

changeTheme.addEventListener('click', () => {

  if (interruptor == true) {
    document.documentElement.style.setProperty('--Background', '#fff');
    document.documentElement.style.setProperty('--Letter-color', 'rgb(24, 24, 24)');
    interruptor = false
  } else if (interruptor == false){
    document.documentElement.style.setProperty('--Background', '#333');
    document.documentElement.style.setProperty('--Letter-color', '#eee');
    interruptor = true
  }

})


{/*export default class Usuarios extends Component{
  
  state = {
    usuarios: [],
    usuariosInfo: {},
    page: 1
  }

  componentDidMount(){
    this.loadUsuarios()
  }

  loadUsuarios = async (page = 1) => {
    const res = await api.get(`/usuarios?page=${page}`)
    const {docs, ...usuariosInfo} = res.data
    this.setState(
      {usuarios: docs, usuariosInfo, page}
    )
  }

  render(){
    const {usuarios, usuariosInfo, page} = this.state()

    return (
      <div className="listaDeUsuarios"></div>
    )
  }
}*/}

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import api from '../services/services.js'
import { Link } from 'react-router-dom'
import App from './App'

{/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)*/}

export default class Usuarios extends Component{
  
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
}

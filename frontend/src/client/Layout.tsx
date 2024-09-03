import React, { Component } from 'react'
import Navbar from '../components/navbar'
import { Outlet } from 'react-router-dom'

export default class Layout extends Component {
  render() {
    return (
      <div className='scroll-smooth'> 
        <Navbar/>
        <Outlet/>
     
      </div>
    )
  }
}

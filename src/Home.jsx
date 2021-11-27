import React from 'react'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import Banner from './components/bannner/Banner'
import Header from './components/nav/Header'
import Wallet from './components/wallet/Wallet'

export default function App() {
    return (
        <>
        <Header/>  
        <Wallet/>  
        {/* { <Banner /> } */}
            
        </>
    )
}
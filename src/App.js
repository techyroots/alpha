import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Banner from './components/bannner/Banner'
import Home from './Home'
// import Wallet from './components/wallet/Wallet'
import StackHome from './components/StackHome/StackHome'

export default function App() {
    return (
        <>
        
            <BrowserRouter>
                <Switch>
                <Route exact path = "/" component = {StackHome} />
                </Switch>
                <Switch>
                <Route exact path = "/stack" component ={Home} />
                </Switch>
             </BrowserRouter>
            
            {/* { <Banner /> } */}
            
        </>
    )
}

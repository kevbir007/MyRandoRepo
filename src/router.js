import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './Components/About/About';
import Checkout from './Components/Checkout/Checkout';
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';

export default (
    <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/about' component={ About } />
        <Route path='/shop' component={ Shop } />
        <Route path='/checkout' component={ Checkout } />
    </Switch>
)
import React, { Component } from 'react';
import Featured from '../components/includes/home/featured';
import PizzasList from '../components/includes/home/pizzas';

class Home extends Component {
    render(){
        return(
            <>
                <Featured/>
                <PizzasList />
            </>
        )
    }
}

export default Home;
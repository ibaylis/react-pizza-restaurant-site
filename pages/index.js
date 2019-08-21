import React, { Component } from 'react';
import Featured from '../components/includes/home/featured';
import PizzasList from '../components/includes/home/pizzas';

import axios from 'axios';

class Home extends Component {
    static async getInitialProps() {
        let pizzasData;

        try {
            const response = await axios.get(`http://localhost:3000/api/v1/pizza`);
            pizzasData = response.data
        } catch {
            console.log('Error')
        }

        return {
            pizzasData
        }
    }


    render(){
        const { pizzasData } = this.props;
        return(
            <>
                <Featured pizzas={pizzasData} />
                <PizzasList pizzas={pizzasData} />
            </>
        )
    }
}

export default Home;
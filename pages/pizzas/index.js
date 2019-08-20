import React, { Component } from 'react';

class Pizzas extends Component {
    static async getInitialProps({query}) {
        let pizzaData;
        pizzaData = query.pizzaId;

        return {
            pizzaData
        }
    }
    render() {
        return (
            <>
                The pizza ID is {this.props.pizzaData}
            </>
        )
    }
}

export default Pizzas;
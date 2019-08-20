import React from 'react';
import Link from 'next/link';

const PizzasList = () => {
    return (
        <>
            <div className="pizzas_wrapper">
                <div className="articles">
{/* */}
                    <Link 
                        as={`/pizzas/1`}
                        href={{
                            pathname: '/pizzas',
                            query: {
                                pizzaId: 1
                            }
                        }}
                    >
                        <a>
                            <div className="item">
                                <div
                                    className="inner-item"
                                    style={{
                                        background:`url('/static/images/pizza_2.jpg')`
                                    }}
                                > 
                                    <div className="overlay"></div>
                                    <div className="item-nfo">
                                        <h3>5 Cheese</h3>
                                        <p>Vestibulum placerat pharetra porta. Integer consequat neque et maximus vulputate. Vivamus fermentum massa a tortor tempus consequat.</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>

{/* */}
                    <Link 
                        as={`/pizzas/2`}
                        href={{
                            pathname: '/pizzas',
                            query: {
                                pizzaId: 2
                            }
                        }}
                    >
                        <a>
                            <div className="item">
                                <div
                                    className="inner-item"
                                    style={{
                                        background:`url('/static/images/pizza_3.jpg')`
                                    }}
                                > 
                                    <div className="overlay"></div>
                                    <div className="item-nfo">
                                        <h3>Tomato Basil</h3>
                                        <p>Vestibulum placerat pharetra porta. Integer consequat neque et maximus vulputate. Vivamus fermentum massa a tortor tempus consequat.</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>
{/* */}
                    <Link 
                        as={`/pizzas/3`}
                        href={{
                            pathname: '/pizzas',
                            query: {
                                pizzaId: 3
                            }
                        }}
                    >
                        <a>
                            <div className="item">
                                <div
                                    className="inner-item"
                                    style={{
                                        background:`url('/static/images/pizza_4.jpg')`
                                    }}
                                > 
                                    <div className="overlay"></div>
                                    <div className="item-nfo">
                                        <h3>Supreme</h3>
                                        <p>Vestibulum placerat pharetra porta. Integer consequat neque et maximus vulputate. Vivamus fermentum massa a tortor tempus consequat.</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>
{/* */}
                    <Link 
                        as={`/pizzas/4`}
                        href={{
                            pathname: '/pizzas',
                            query: {
                                pizzaId: 4
                            }
                        }}
                    >
                        <a>
                            <div className="item">
                                <div
                                    className="inner-item"
                                    style={{
                                        background:`url('/static/images/pizza_5.jpg')`
                                    }}
                                > 
                                    <div className="overlay"></div>
                                    <div className="item-nfo">
                                        <h3>Meat Supreme</h3>
                                        <p>Vestibulum placerat pharetra porta. Integer consequat neque et maximus vulputate. Vivamus fermentum massa a tortor tempus consequat.</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default PizzasList;

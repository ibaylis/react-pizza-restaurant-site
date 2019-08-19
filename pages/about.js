import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <>
                <div className="title_page">
                    <h1>About Us</h1>
                </div>
                <div className="content_wrapper">
                    <div className="inner">
                        <h1>Pizzeria is awesome</h1>
                        <p>
                            Nunc volutpat sollicitudin lacus sagittis dapibus. Sed rutrum eu leo convallis semper. In finibus dolor ac tincidunt tristique. Praesent pellentesque risus quis ligula tincidunt lobortis. Aenean quis mi vel mauris ullamcorper molestie id ac risus. Aliquam aliquet blandit risus, eget eleifend risus tempor sed.
                        </p>
                    </div>

                    <div className="middle">
                        <div className="inner_middle">
                            <div className="item two_c">
                                <div className="wrapp">
                                    <div
                                        className="top"
                                        style={{
                                            background:`url('/static/images/chef.jpg')`
                                        }}
                                    >
                                    </div>
                                    <div className="bottom">
                                        <h2>Our Chefs</h2>
                                        <h3>Pizzeria</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="item two_c">
                                <div className="wrapp">
                                    <div
                                        className="top"
                                        style={{
                                            background:`url('/static/images/store.jpg')`
                                        }}
                                    >

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default About;
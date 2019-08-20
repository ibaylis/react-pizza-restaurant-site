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
                                        <br />
                                        <p>
                                            Donec et sollicitudin ligula. Mauris vitae sodales turpis. Etiam laoreet dolor vel dui feugiat, nec euismod risus sagittis. Integer vehicula fringilla tempor. Phasellus finibus massa in mauris dignissim, vitae pretium ex accumsan. Morbi tempor viverra turpis, vitae aliquam eros faucibus sit amet.Duis aliquet vehicula nisi, id elementum neque consequat et. Praesent lobortis sollicitudin magna nec condimentum. Quisque lectus dui, vehicula eu libero nec, feugiat consectetur nibh. Morbi feugiat volutpat hendrerit. Ut nulla ligula, semper ac commodo quis, laoreet ac lectus. Praesent sed ante maximus, congue ligula in, gravida risus. Fusce imperdiet tellus non interdum tempor. Nam ornare tellus non vestibulum finibus. Nullam iaculis erat scelerisque sapien facilisis, at efficitur nibh suscipit. Fusce in eros mattis, placerat urna ut, malesuada mi.
                                        </p>
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
                                    <div className="bottom">
                                        <h2>Store</h2>
                                        <h3>Pizzeria</h3>
                                        <br />
                                        <p>
                                        Nunc laoreet mollis lacus, ac fringilla neque porta non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In ut nibh non lorem dictum euismod. Duis aliquet vehicula nisi, id elementum neque consequat et. Praesent lobortis sollicitudin magna nec condimentum. Quisque lectus dui, vehicula eu libero nec, feugiat consectetur nibh. Morbi feugiat volutpat hendrerit. Ut nulla ligula, semper ac commodo quis, laoreet ac lectus. Praesent sed ante maximus, congue ligula in, gravida risus. Fusce imperdiet tellus non interdum tempor. Nam ornare tellus non vestibulum finibus. Nullam iaculis erat scelerisque sapien facilisis, at efficitur nibh suscipit. Fusce in eros mattis, placerat urna ut, malesuada mi. Sed semper varius metus, vitae sodales magna pharetra a.
                                        </p>
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
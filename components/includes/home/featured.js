import React from 'react';
import Link from 'next/link';

const Featured = () => {
    return (
        <Link href="/store">
            <a>
                <div
                    className="featured_container"
                    style={{
                        background: `url('/static/images/pizza_1.jpg')`
                    }}
                >
                    <div className="overlay"></div>
                    <div className="info">
                        <div className="top">
                            <h2>Pizza of the day</h2>
                        </div>
                        <div className="description">
                            <h3>Veggie Junior</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam posuere felis sed arcu aliquam, a ultrices nisi congue. Nullam ligula ipsum, sollicitudin non nisi eu, ultricies lobortis turpis.
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Featured;

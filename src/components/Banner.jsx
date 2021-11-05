import React from 'react'
import { Carousel, Item, Caption } from 'react-bootstrap';

const Banner = () => {

    const bannerlink1 = "../../banners/banner3.png"
    const bannerlink2 = "../../banners/banner4.png"

    return (
        <Carousel>

            <Carousel.Item interval={2500}>
                <img
                    className="d-block w-100"
                    src= {bannerlink1}
                    alt="First slide"
                />
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item interval={2500}>
                <img
                    className="d-block w-100"
                    src={bannerlink2}
                    alt="Second slide"
                />
                {/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
            </Carousel.Item>

            {/* <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item> */}

        </Carousel>
    )

}

export default Banner;
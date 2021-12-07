
import { Carousel } from 'react-bootstrap';

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
            </Carousel.Item>

            <Carousel.Item interval={2500}>
                <img
                    className="d-block w-100"
                    src={bannerlink2}
                    alt="Second slide"
                />
            </Carousel.Item>
            
        </Carousel>
    )

}

export default Banner;
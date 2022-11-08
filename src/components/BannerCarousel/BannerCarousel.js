import Carousel from 'react-bootstrap/Carousel';


import imagem1 from '../../assets/img/imagem1.jpg'
import imagem2 from '../../assets/img/imagem2.jpg'
import imagem3 from '../../assets/img/imagem3.jpg'

import './BannerCarousel.css'


export default function BannerCarousel(){

    return(<>
    
    <Carousel className='carousel' variant="dark">
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={imagem1}
                alt="First slide"
            />
            <Carousel.Caption>
                {/* <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={imagem2}
                alt="Second slide"
            />
            <Carousel.Caption>
                {/* <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={imagem3}
                alt="Third slide"
            />
            <Carousel.Caption>
            {/* <h5>Third slide label</h5>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    
    
    </>)
}
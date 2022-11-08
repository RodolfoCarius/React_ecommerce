import {useEffect, useState } from 'react'


import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';

import api from '../../server/api';
import BannerCarousel from "../../components/BannerCarousel/BannerCarousel";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import CardComponent from "../../components/Card/CardComponent";
import Footer from "../../components/Footer/Footer";
import Button from 'react-bootstrap/Button';

import './index.css'




export function Home(){

    const [listaProduto,setListaProduto] = useState([])

    useEffect(() => {
    
        api.get("produto/all").then(({data}) => {
            setListaProduto(data)
            console.log(data)
        })
        console.log()
    
    }, []);


    return (<>
    <div>
        <Header></Header>

        <BannerCarousel></BannerCarousel>

        <div className="home-search">
            <SearchBar></SearchBar>
        </div>
        
        <Container fluid="md" >
            <Col>
                <Row className="d-flex justify-content-center position-relative">
                    <Col>
                        <div className="mt-5">

                        <Row>
                <Col className="p-5">
                    <Row xs={4} md={8} className="g-4 p-2">
                        {listaProduto.map( o => {      
                            return (
                            <Col >
                                <Card  style={{ width: '18rem' }}>
                                    <div className="ratio" style={{"--bs-aspect-ratio": '140%'}}>
                                    <Card.Img variant="top" src={o.imagemUrl}/>
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{o.nome}</Card.Title>
                                        <Card.Text style={{ height:'200px' }}>
                                            <span>Descrição:</span>
                                            <br/>
                                            <span>{o.descricao}</span>
                                        </Card.Text>
                                        <Button variant="primary">Ok</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            )})
                        }
                    </Row>
                </Col>             
            </Row>
                            
                            
                        </div>
                    </Col>
                
                </Row>
            </Col>        
        </Container>
      
        <div className="home-footer position-relative top-100">
            <Footer></Footer>
        </div>
    </div>
    
    </>)}
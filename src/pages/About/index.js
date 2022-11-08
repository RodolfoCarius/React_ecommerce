import {useEffect, useState } from 'react'



import Header from "../../components/Header/Header";

import api from '../../server/api';

import Container  from 'react-bootstrap/Container';
import Col  from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Produto from '../../components/Produto/Produto';
import Footer from "../../components/Footer/Footer";

export function About(){

    const [listaProduto,setListaProduto] = useState([])



    useEffect(() => {
    
        api.get("produto/all").then(({data}) => {
            setListaProduto(data)
        })
        console.log()
    
    }, []);


    return (<>
        <Header></Header>

        <Container className="mt-5 p-2">
            <Row>
                <Col className="p-5">
                    <Row xs={4} md={8} className="g-4 p-2">
                        {listaProduto.map( o => {      
                            return (
                            <Col >
                                <Card  style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={o.imagemUrl} />
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
            





        </Container>

        <div className="home-footer position-relative top-100">
            <Footer></Footer>
        </div>
       
    </>)
}
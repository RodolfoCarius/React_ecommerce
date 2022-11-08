import {useEffect, useState } from 'react'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


import api from '../../server/api';




/*Props
*-listaProdutos
*/
export default function CardComponent(props) {

  const [listaProduto,setListaProduto] = useState([])
  
  useEffect(() => {
    
    api.get("produto/all").then(({data}) => {
        setListaProduto(data)
        console.log(data)
    })
    console.log()

}, []);


  return (
    <Row xs={2} md={3} className="g-4">

   

      {listaProduto.map((prod) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={prod.imagem} />
            <Card.Body>
              <Card.Title>{prod.nome}</Card.Title>
              <Card.Text>
                {prod.descricao}
              </Card.Text>
              <Button variant="primary">Saiba mais</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}

    </Row>
  );
}

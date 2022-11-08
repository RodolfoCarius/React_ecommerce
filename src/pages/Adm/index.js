import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import { useEffect, useState } from "react";
import api from '../../server/api';
import Table from 'react-bootstrap/Table';



export function Consulta(){

    const [pagina,setPagina] = useState(1)

    const [listaEndereco,setListaEndereco] = useState([])

    const [listaProduto,setListaProduto] = useState([])

    const [listaCliente,setListaCliente] = useState([])

    const [listaCategoria,setListaCategoria] = useState([])

    const [listaPedido,setListaPedido] = useState([])

    const [teste,setTeste] = useState([])
    

   

    const handleClick = (e) => {
        setPagina(e)
       
        exibirPagina()
    }

    const getAllProduto = () => {
       
    }


    const exibirPagina = () => {



        if (pagina===1){
            api.get("endereco/all").then(({data}) => {
                setListaEndereco(data)
                console.log(data)
                
            })
            
            
            return (
                <Table striped hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Rua</th>
                        <th>Número</th>
                        <th>Cep</th>
                        <th>Cidade</th>
                        <th>UF</th>
                       
                    </tr>
                </thead>
                
                <tbody>
                    
                    {
                    listaEndereco.map((obj, index) => {
                        return (
                        <tr key={index}>
                            <td>{obj.idEndereco}</td>
                            <td>{obj.rua}</td>
                            <td>{obj.numero}</td>
                            <td>{obj.cep}</td>
                            <td>{obj.cidade}</td>
                            <td>{obj.uf}</td>
                        </tr>     
                     )      

                    })
                    }
             
                </tbody>
                </Table>
                
                   )
                   
        }
        else if (pagina===2){
            api.get("cliente/all").then(({data}) => {
                setListaCliente(data)
                console.log(data)
            })
            setTeste(true)
            return (
                <Table striped hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>nomeCompleto</th>
                        <th>CPF</th>
                        <th>telefone</th>
                        <th>dataNascimento</th>
                        
                       
                    </tr>
                </thead>
                
                <tbody>
                    
                    {
                    listaCliente.map((obj, index) => {
                        return (
                        <tr key={index}>
                            <td>{obj.idCliente}</td>
                            <td>{obj.nomeCompleto}</td>
                            <td>{obj.cpf}</td>
                            <td>{obj.telefone}</td>
                            <td>{obj.dataNascimento}</td>
                            
                        </tr>     
                     )      

                    })
                    }
             
                </tbody>
                </Table>
            )
        }
        else if (pagina===3 ){
            api.get("categoria/all").then(({data}) => {
                setListaCategoria(data)
                console.log(data)
            })
            setTeste(true)
            return (
                <Table striped hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>nome</th>
                        <th>descrição</th>                
                    </tr>
                </thead>
                
                <tbody>
                    
                    {
                    listaCategoria.map((obj, index) => {
                        return (
                        <tr key={index}>
                            <td>{obj.idCategoria}</td>
                            <td>{obj.nome}</td>
                            <td>{obj.descricao}</td>                            
                        </tr>     
                     )      

                    })
                    }
             
                </tbody>
                </Table>
            )
        }
        else if (pagina===4 ){
            api.get("produto/all").then(({data}) => {
                setListaProduto(data)
                console.log(data)
            })
            setTeste(true)
            return (
                <Table striped hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Descrição</th> 
                        <th>Qnt Estoque</th>
                        <th>valorUnitario</th>
                        <th>imagemUrl</th>               
                    </tr>
                </thead>
                
                <tbody>
                    
                    {
                    listaProduto.map((obj, index) => {
                        return (
                        <tr key={index}>
                            <td>{obj.idProduto}</td>
                            <td>{obj.nome}</td>
                            <td>{obj.descricao}</td>    
                            <td>{obj.qntdEstoque}</td>
                            <td>{obj.valorUnitario}</td>
                            <td>{obj.imagemUrl}</td>                        
                        </tr>     
                     )      

                    })
                    }
             
                </tbody>
                </Table>
            )
        }
        else if (pagina===5 ){
            api.get("pedido/all").then(({data}) => {
                setListaPedido(data)
                console.log(data)
            })
           setTeste(true)
            return (
                <Table striped hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>dataPedido</th>
                        <th>dataEntrega</th> 
                        <th>Status</th>
                        <th>ValorTotal</th>               
                    </tr>
                </thead>
                
                <tbody>
                    
                    {
                    listaPedido.map((obj, index) => {
                        return (
                        <tr key={index}>
                            <td>{obj.idPedido}</td>
                            <td>{obj.dataPedido}</td>
                            <td>{obj.dataEntrega}</td>    
                            <td>{obj.status}</td>
                            <td>{obj.valorTotal}</td>                        
                        </tr>     
                     )      

                    })
                    }
             
                </tbody>
                </Table>
            )
        }
       
    }

    return (<>
        <Header></Header>

        
        <Container>
            <Card>
      <Card.Header>
        <Nav variant="pills" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link onClick={() => {handleClick(1)}} href="#first">Endereco</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => {handleClick(2)}} href="#cliente">Cliente</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => {handleClick(3)}} href="#categoria">Categoria</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => {handleClick(4)}} href="#produto">Produto</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => {handleClick(5)}} href="#pedido">Pedido</Nav.Link>
          </Nav.Item>
          
        </Nav>
      </Card.Header>
       

            {              
               exibirPagina()
            
            }
       
  
    </Card>
        </Container>



        <div className="home-footer position-relative top-100">
            <Footer></Footer>
        </div>
    </>)
}
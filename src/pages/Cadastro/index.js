import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import React, { useEffect, useState } from "react";

import api from '../../server/api'



export function Cadastro(){

    const [pagina,setPagina] = useState(1)
    const [cep, setCep] = useState('');
    const [numero, setNumero] = useState('');
    const [nome , setNome] = useState('');
    const [nomeCompleto , setNomeCompleto] = useState('');
    const [cpf, setCPF] =  useState ('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [descricao, setDescricao] = useState('');
    const [qntEstoque, setQntEstoque] = useState('');
    const [valorUnitario, setValorUnitario] = useState('');
    const [imagemUrl, setImagemUrl] = useState('');
    const [idCategoria, setIdCategoria] = useState('');
    const [idEndereco, setIdEndereco] = useState({ });
    //const [cliente, setCliente] = useState ([{}])

    const handleClick = (e) => {
        setPagina(e)
    }

    const postEndereco = () => {
        api.post(`endereco/save/cep`, {
            cep,
            numero
        })
        alert("Cadastro realizado com sucesso!")
    }

    const postCliente = () => {
        
        api.post(`cliente`, {
            nomeCompleto,
            email,
            telefone,
            dataNascimento,
            cpf,
            endereco:{
                idEndereco:0 ,}
        })
        alert("Cadastro")
    }
    
    const postProduto = () => {
        api.post(`produto`, {
            nome,
            descricao,
            qntEstoque,
            valorUnitario,
            imagemUrl,
            categoria:{
                idCategoria: 0,
            }
        })
    }
   
    const postCategoria = () => {
        api.post(`categoria`, {
            nome,
            descricao
        })
    }

    useEffect(() => {
        exibirPagina()
      });

    const exibirPagina = () => {
        if (pagina===1){
            return (
                
            <Card.Body>
            <Card.Title>Cadastro de Endereço</Card.Title>
                <Card.Text>
                <div>

                <label>CEP: </label>
                <br/>
                <input onChange={(e) => setCep(e.target.value)}/>
                
                <br/>
                <label>Numero: </label>
                <br/>
                <input onChange={(e) => setNumero(e.target.value)}/>
  
            </div>
            </Card.Text>
            <Button onClick={postEndereco} type='submit'>Submit</Button>
            </Card.Body>
            )
        }
        if (pagina===2){
            return (
                <Card.Body>
            <Card.Title>Cadastro de Cliente</Card.Title>
                <Card.Text>
                <div>

                <label>Nome: </label>
                <br/>
                <input onChange={(e) => setNomeCompleto(e.target.value)}/>
                
                <br/>
                <label>IdEndereco: </label>
                <br/>
                <input onChange={(e) => setIdEndereco(e.target.value)}/>
                
                <br/>
                <label>Email: </label>
                <br/>
                <input onChange={(e) => setEmail(e.target.value)}/>
                
                <br/>
                <label>Telefone: </label>
                <br/>
                <input onChange={(e) => setTelefone(e.target.value)}/>
               
                <br/>
                <label>CPF: </label>
                <br/>
                <input onChange={(e) => setCPF(e.target.value)}/>

                <br/>   
                <label>Data de nascimento: </label>
                <br/>
                <input onChange={(e) => setDataNascimento(e.target.value)}/>
            </div>
            </Card.Text>
            <Button onClick={postCliente} type='submit'>Submit</Button>
            </Card.Body>
            
            )
        }
        if (pagina===4){
            return (
                <Card.Body>
            <Card.Title>Cadastro de Produto</Card.Title>
                <Card.Text>
                <div>

                <label>Nome: </label>
                <br/>
                <input onChange={(e) => setNome(e.target.value)}/>
                
                <br/>
                <label>Descrição: </label>
                <br/>
                <input onChange={(e) => setDescricao(e.target.value)}/>
                
                <br/>
                <label>Qnt Estoque: </label>
                <br/>
                <input onChange={(e) => setQntEstoque(e.target.value)}/>
                
                <br/>
                <label>Valor Unitario: </label>
                <br/>
                <input onChange={(e) => setValorUnitario(e.target.value)}/>

                <br/>
                <label>imagemUrl: </label>
                <br/>
                <input onChange={(e) => setImagemUrl(e.target.value)}/>

                <br/>
                <label>idCategoria: </label>
                <br/>
                <input onChange={(e) => setIdCategoria(e.target.value)}/>
            </div>
            </Card.Text>
            <Button onClick={postProduto} type='submit'>Submit</Button>
            </Card.Body>
            )
        }
        if (pagina===3){
            return (
                <Card.Body>
                <Card.Title>Cadastro de Categoria</Card.Title>
                    <Card.Text>
                <div>

                <label>Nome: </label>
                <br/>
                <input onChange={(e) => setNome(e.target.value)}/>
                
                <br/>
                <label>Descrição: </label>
                <br/>
                <input onChange={(e) => setDescricao(e.target.value)}/>
                
               
            </div>
            </Card.Text>
            <Button onClick={postCategoria} type='submit'>Submit</Button>
            </Card.Body>
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
            <Nav.Link onClick={() => {handleClick(2)}} href="#1">Cliente</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => {handleClick(3)}} href="#3">Categoria</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => {handleClick(4)}} href="#2">Produto</Nav.Link>
          </Nav.Item>
          
          <Nav.Item>
            <Nav.Link href="#disabled" disabled>
            </Nav.Link>
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
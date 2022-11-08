import axios from 'axios'
import Produto from '../components/Produto/Produto'


export async function getProdutos(){
    const response = await axios.get(`http://localhost:5000`)

    const produtos = response.data.map( k => {
        return new Produto(k.nome,k.imageUrl,k.descricao)
    })

    return produtos
}
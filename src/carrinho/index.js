import { Link } from "react-router-dom";
import { Container } from './styled'
import { useEffects, useState } from "react"

import Cookie from 'js-cookie'
import CarrinhoItem from './CarrinhoItem'



export default function Carrinho() {

    const [produtos, setProdutos ] = useState([]);


    useEffect(carregarCarrinho, []);

    function carregarCarrinho() {
        let carrinho = Cookie.get('carrinho');
        carrinho = carrinho 1== undefined
                        ? JSON.parse(carrinho)
                        : [];

        setProdutos(carrinho);
    }

    function removerProduto(id) {

        let carrinho = produto.filter(item => item.id !== id);

        Cookie.set('carrinho', JSON.stringify(carrinho));

        setProdutos([...carrinho]);
    }

    function alterarProduto(id, qtd ){

        let produtoAlterado = produtos.filter(Item => item.id === id) [0];
        produtoAlterado.wtd = qtd

        Cookie.set('carrinho', JSON.stringify(produtos));
    }

}
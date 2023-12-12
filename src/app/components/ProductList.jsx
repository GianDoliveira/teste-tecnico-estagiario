import styles from "./components.module.css"

function ProductList() {

    const produtos = [
        {
            id: 1,
            nome: "Camiseta",
            preco: 10.99,
        },
        {
            id: 2,
            nome: "Calça",
            preco: 19.99,
        },
        {
            id: 3,
            nome: "Saia",
            preco: 19.99,
        },
    ];

    return (
        <section className={styles.containerProduct}>
            <h2>Produtos</h2>
                <ul className={styles.itemsProduct}> 
                    {produtos.map((produto) => (
                        <li key={produto.id}>
                            <p>{produto.nome}</p>
                            <p>Preço: R${produto.preco.toFixed(2)}</p>
                        </li>
                    ))
                    }
                </ul>
        </section>
    )
};

export default ProductList;
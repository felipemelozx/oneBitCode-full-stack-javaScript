import products from "../database.json"

export default function Products() {
  return (
    <section>
      <h2>Todos os produtos</h2>
      <p>Confira todas as nossas ofertas.</p>
      <section>
        <h3>Processadores</h3>
        <ul>
          {products.map((product) => {
            <li key={product.id}>
              <h4>{product.name}
                <p>R$ {product.price}</p>
                <button>Ver</button>
                <button>Comprar</button>
              </h4>
            </li>
          })
          }
        </ul>
      </section>
    </section>
  )
}
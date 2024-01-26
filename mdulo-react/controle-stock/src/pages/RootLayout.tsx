import { Link, Outlet } from "react-router-dom"

export default function RootLayout() {
  return (
    <>
      <header>
        <nav style={{ display: "flex", gap: "2rem" }}>
          <Link to="/">Início</Link>
          <Link to="/items">Items</Link>
        </nav>
      </header>
      <main>
        <hr />
        <Outlet/>
      </main>
      <footer>
        <p>Feito com React Router DOM =D</p>
      </footer>
    </>
  )
}
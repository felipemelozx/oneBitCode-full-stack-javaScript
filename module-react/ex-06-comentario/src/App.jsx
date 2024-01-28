import useControleComentarios from "./Hooks/useControleComentarios";
import NewForm from "./components/NewForm";
import ShowComentarios from "./components/ShowComentarios";



export default function App() {
  const { comes, addComentarios } = useControleComentarios()
  return (
    <div className='App'>
      <h1>Seção de Comentário</h1>
      <NewForm addComentario={addComentarios} />
      <div className="comes">
        {comes.map((come) => (
          <div key={come.id} >
            <ShowComentarios
              key={come.id}
              email={come.email}
              comentario={come.comentario}
            />
          </div>))}
      </div>
    </div>
  )
}



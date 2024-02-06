export default function Game({ title, cover, onRemover }) {
  return (
    <div >
      <img src={cover} alt="Capa do jogo" />
      <div>
        <h2>{title}</h2>
        <button onClick={onRemover}>
          Remover
        </button>
      </div>
    </div>)
}
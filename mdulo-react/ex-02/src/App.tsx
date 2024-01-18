function App() {
  return (
    <div style={{
      margin: '50px',
      borderRadius: '10px',
      backgroundColor: '#D7E1E7',
      height: '90vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      fontFamily:'sans-serif'
    }}>
      <div>
        <img
        style={{
          margin:'0 60px',
          maxHeight: '500px'
        }}
        src="https://i.pinimg.com/originals/ba/94/64/ba9464145eba8762f6286a3c8387c951.jpg" alt="logo star wars" />
      </div>
      <div>
        <h1 style={{
          fontSize:'45px'
        }}>Poster: Star Wars (1977)</h1>
        <p style={{
          maxWidth:'700px',
          padding:'30px 0',
          fontSize:'20px',
          lineHeight:'30px'
        }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae veniam ipsam in facilis magni cupiditate animi
          ullam cum repellendus soluta omnis eveniet quo atque libero, fuga blanditiis voluptas iusto? Ullam.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ipsum, dolorum id quae delectus eum. Est, 
          ratione ad? Quidem accusantium doloremque et quibusdam natus, iure omnis dicta nihil amet ipsam.
        </p>
        <button style={{
          fontSize:'30px',
          backgroundColor:'black',
          color:'white',
          padding:'13px',
          borderRadius:'10px'
        }}>Comprar agora</button>
      </div>
    </div>
  )
}

export default App

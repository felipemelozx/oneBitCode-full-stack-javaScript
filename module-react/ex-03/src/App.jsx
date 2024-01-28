
import Profile from './componentes/Profile/index'

function App() {


  return (
    <>
      <Profile 
        avatar={'../../../public/imagem-01.png'}
        name={'felipe'}
        bio={'oii sou um Desenvolvedor web.'}
        phone={'+55 (00) 904040440'}
        email={'fee@email.test'}
        LinkedinUrl={'https://www.linkedin.com/'}  
        githubUrl={'https://github.com/felipemelozx'}
        twitterUrl={'https://twitter.com/home'}
      />
    </>
  )
}

export default App

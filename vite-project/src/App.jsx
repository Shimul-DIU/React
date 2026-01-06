import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {
 let student={
    name:'mustafa',
    roll:10,
    cgpa:3.67
 }

  return (
    <>
       
      <Header name='shimul' roll='9' cgpa='3.56' info={student}></Header>
      <Footer></Footer>
    </>
  )
}

export default App

import Header from './components/Header'
import Hero from './components/Hero'
import CustomCursor from './components/CustomCursor'

function App() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
      </main>
    </>
  )
}

export default App
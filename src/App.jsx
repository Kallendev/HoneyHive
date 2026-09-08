import Header from './components/Header'
import Hero from './components/Hero'
import CustomCursor from './components/CustomCursor'
import Story from './components/Story'
import Products from './components/Products'

function App() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Story />
        <Products />
      </main>
    </>
  )
}

export default App
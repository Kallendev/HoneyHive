import Header from './components/Header'
import Hero from './components/Hero'
import CustomCursor from './components/CustomCursor'
import Story from './components/Story'
import Products from './components/Products'
import Ingredients from './components/Ingredients'
import PromoCard from './components/PromoCard'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Story />
        <Products />
        <Ingredients />
        <PromoCard />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
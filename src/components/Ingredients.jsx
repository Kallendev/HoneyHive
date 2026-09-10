import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import natureImg from '../assets/nature.png'

gsap.registerPlugin(ScrollTrigger)

const pillars = [
  {
    num: '01',
    title: '100% Raw & Unheated',
    text: 'Never pasteurized or heat-treated, preserving all natural pollen, enzymes, and antioxidants.',
  },
  {
    num: '02',
    title: 'Wild Meadow Nectar',
    text: 'Foraged naturally by bees across pesticide-free wild flora and organic woodland preserves.',
  },
  {
    num: '03',
    title: 'Ethical Beekeeping',
    text: 'We only take surplus honey, ensuring our colonies stay healthy and thriving year-round.',
  },
]

function Ingredients() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ingredient-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="ingredients" ref={sectionRef} id="about">
      <div className="ingredients-container">
        <div className="ingredients-header">
          <span className="ingredients-eyebrow">Purity & Process</span>
          <h2 className="ingredients-title">HONEST FROM THE HIVE.</h2>
        </div>

        <div className="ingredients-grid">
          <div className="ingredients-image-box">
            <img src={natureImg} alt="Nature and Wildflowers" className="ingredients-img" />
          </div>

          <div className="ingredients-list">
            {pillars.map((item) => (
              <article key={item.num} className="ingredient-card">
                <span className="card-num">{item.num}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ingredients
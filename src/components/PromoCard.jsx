import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function PromoCard() {
  const cardRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
        },
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
    }, cardRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="promo-section">
      <div className="promo-card" ref={cardRef}>
        <div className="promo-content">
          <span className="promo-badge">Limited Seasonal Reserve</span>
          <h2>THE HARVEST GIFT SET</h2>
          <p>Experience three distinct terroir honeys, hand-sealed in a bespoke wooden presentation box.</p>
          <button type="button" className="promo-btn">
            Explore Reserve Set ↗
          </button>
        </div>
      </div>
    </section>
  )
}

export default PromoCard
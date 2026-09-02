import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power4.out',
        },
      })

      tl.from('.hero-eyebrow', {
        y: 30,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          '.hero-title-line',
          {
            y: 120,
            opacity: 0,
            duration: 1,
            stagger: 0.12,
          },
          '-=0.4'
        )
        .from(
          '.hero-description',
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
          },
          '-=0.5'
        )
        .from(
          '.hero-button',
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.4'
        )
        .from(
          '.hero-product',
          {
            scale: 1.15,
            opacity: 0,
            duration: 1.4,
          },
          '-=0.8'
        )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-content">

        <p className="hero-eyebrow">
          Naturally made · Carefully harvested
        </p>

        <h1 className="hero-title">
          <span className="hero-title-line">Nature</span>
          <span className="hero-title-line">tastes</span>
          <span className="hero-title-line">better.</span>
        </h1>

        <p className="hero-description">
          Pure honey, thoughtfully harvested from
          the places where nature still speaks.
        </p>

        <a href="#products" className="hero-button">
          Discover our honey
          <span>↗</span>
        </a>

      </div>

      <div className="hero-product">
        <div className="product-circle">
          🍯
        </div>
      </div>

      <div className="hero-label">
        <span>100%</span>
        Natural
      </div>
    </section>
  )
}

export default Hero
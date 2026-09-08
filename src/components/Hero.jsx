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
            y: 25,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.4'
        )
        .from(
          '.honey-jar',
          {
            scale: 0.75,
            opacity: 0,
            rotation: -8,
            duration: 1.2,
            ease: 'elastic.out(1, 0.6)',
          },
          '-=1'
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
          <span className="hero-title-line">NATURE</span>
          <span className="hero-title-line hero-title-accent">TASTES</span>
          <span className="hero-title-line">BETTER.</span>
        </h1>

        <p className="hero-description">
          Pure honey, thoughtfully harvested from the places
          where nature still speaks.
        </p>

        <a href="#honey" className="hero-button">
          Discover our honey
          <span>↗</span>
        </a>
      </div>

      <div className="hero-visual">
        <div className="honey-jar">
          <div className="jar-label">
            <span>HIVE</span>
            <span>&</span>
            <span>HARVEST</span>
          </div>
        </div>

        <div className="hero-stamp">
          100%
          <br />
          NATURAL
        </div>
      </div>
    </section>
  )
}

export default Hero
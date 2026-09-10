import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Story() {
  const storyRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const story = storyRef.current
      if (!story) return

      gsap.from('.story-eyebrow', {
        scrollTrigger: { trigger: story, start: 'top 80%' },
        y: 20,
        opacity: 0,
        duration: 0.8,
      })

      gsap.from('.story-title-line', {
        scrollTrigger: { trigger: story, start: 'top 75%' },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      })

      gsap.from('.story-text', {
        scrollTrigger: { trigger: story, start: 'top 80%' },
        y: 30,
        opacity: 0,
        duration: 0.8,
      })

      gsap.from('.story-circle', {
        scrollTrigger: { trigger: story, start: 'top 80%' },
        scale: 0.85,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      })
    }, storyRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="story" ref={storyRef} id="story">
      <div className="story-top">
        <p className="story-eyebrow">Our philosophy</p>

        <h2 className="story-title">
          <span className="story-title-line">GOOD THINGS</span>
          <span className="story-title-line story-title-accent">TAKE TIME.</span>
        </h2>
      </div>

      <div className="story-bottom">
        <div className="story-circle">
          <svg viewBox="0 0 160 160" className="circle-ring-svg">
            <path
              id="circlePath"
              d="M 80, 80 m -58, 0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0"
              fill="none"
            />
            <text className="circle-ring-text">
              <textPath href="#circlePath">
                FROM FLOWER TO JAR · PURE HARVEST ·
              </textPath>
            </text>
          </svg>

          <div className="story-circle-inner">
            <span className="circle-mini">100% RAW</span>
            <strong className="circle-main">PURE</strong>
            <span className="circle-sub">HONEY</span>
          </div>
        </div>

        <p className="story-text">
          We believe the best things aren't rushed. Our honey begins with healthy hives, wild
          flowers and patient hands that let nature do what it does best.
        </p>
      </div>

      {/* SMOOTH CONTINUOUS SVG BOTTOM CURVE */}
      <div className="story-curve-bottom">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C480,90 960,90 1440,0 L1440,90 L0,90 Z"
            fill="var(--cream)"
          />
        </svg>
      </div>
    </section>
  )
}

export default Story
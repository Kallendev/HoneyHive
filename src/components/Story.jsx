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
            scrollTrigger: {
                trigger: story,
                start: 'top 75%',
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            })

            gsap.from('.story-title', {
            scrollTrigger: {
                trigger: story,
                start: 'top 70%',
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: 'power4.out',
            })

            gsap.from('.story-text', {
            scrollTrigger: {
                trigger: story,
                start: 'top 80%',
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            })

            gsap.from('.story-circle', {
            scrollTrigger: {
                trigger: story,
                start: 'top 80%',
            },
            scale: 0.6,
            rotation: -15,
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
        <p className="story-eyebrow">
          Our philosophy
        </p>

        <h2 className="story-title">
          GOOD THINGS
          <br />
          <span>TAKE TIME.</span>
        </h2>
      </div>

      <div className="story-bottom">

        <div className="story-circle">
          <span>FROM</span>
          <strong>FLOWER</strong>
          <span>TO JAR</span>
        </div>

        <p className="story-text">
          We believe the best things aren't rushed.
          Our honey begins with healthy hives, wild
          flowers and patient hands that let nature
          do what it does best.
        </p>

      </div>

    </section>
  )
}

export default Story
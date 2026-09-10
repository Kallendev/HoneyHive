import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import heroVideo from '../assets/hero-video.mp4'

function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'expo.out',
        },
      })

      // 1. Smooth background video entrance
      tl.from('.hero-video-container', {
        opacity: 0,
        scale: 1.08,
        duration: 1.6,
        ease: 'power3.out',
      })

      // 2. Eyebrow clip reveal
      .from(
        '.hero-eyebrow span',
        {
          yPercent: 100,
          opacity: 0,
          duration: 1.2,
        },
        '-=1.2'
      )

      // 3. Editorial 3D Skew & Mask reveal for Title
      .from(
        '.hero-title-line',
        {
          yPercent: 120,
          rotateX: -25,
          skewY: 4,
          opacity: 0,
          duration: 1.4,
          stagger: 0.1,
          transformOrigin: '0% 100%',
        },
        '-=0.9'
      )

      // 4. Description clip reveal
      .from(
        '.hero-description span',
        {
          yPercent: 100,
          opacity: 0,
          duration: 1.1,
        },
        '-=1.0'
      )

      // 5. Button reveal
      .from(
        '.hero-button',
        {
          y: 30,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
        },
        '-=0.8'
      )

      // 6. Seal Badge elastic reveal
      .from(
        '.hero-sticker-badge',
        {
          scale: 0,
          rotation: -45,
          opacity: 0,
          duration: 1,
          ease: 'back.out(1.5)',
        },
        '-=0.8'
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      {/* Background Video Layer */}
      <div className="hero-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
          src={heroVideo}
        />
        <div className="hero-video-overlay" />
      </div>

      {/* Main Content Layer */}
      <div className="hero-content">
        <div className="text-mask">
          <p className="hero-eyebrow">
            <span>Naturally made · Carefully harvested</span>
          </p>
        </div>

        <h1 className="hero-title">
          <span className="title-mask">
            <span className="hero-title-line">NATURE</span>
          </span>
          <span className="title-mask">
            <span className="hero-title-line hero-title-accent">TASTES</span>
          </span>
          <span className="title-mask">
            <span className="hero-title-line">BETTER.</span>
          </span>
        </h1>

        <div className="text-mask">
          <p className="hero-description">
            <span>
              Pure honey, thoughtfully harvested from the places
              where nature still speaks.
            </span>
          </p>
        </div>

        <a href="#honey" className="hero-button">
          <span className="pulse-wave pulse-1" />
          <span className="pulse-wave pulse-2" />
          <span className="pulse-wave pulse-3" />

          <span className="button-text">
            Discover our honey <span>↗</span>
          </span>
        </a>
      </div>

      {/* Rotating Sticker Seal Badge */}
      <div className="hero-sticker-badge">
        <svg viewBox="0 0 120 120" className="badge-ring">
          <path
            id="badgePath"
            d="M 60, 60 m -43, 0 a 43,43 0 1,1 86,0 a 43,43 0 1,1 -86,0"
            fill="none"
          />
          <text className="badge-text">
            <textPath href="#badgePath" startOffset="0%">
              100% RAW & UNFILTERED · NATURAL HONEY ·
            </textPath>
          </text>
        </svg>

        <div className="badge-core">
          <small>GUARANTEED</small>
          <strong>PURE</strong>
        </div>
      </div>
    </section>
  )
}

export default Hero
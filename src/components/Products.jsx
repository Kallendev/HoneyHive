import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const products = [
  {
    number: '01',
    name: 'WILD BLOOM',
    words: ['WILD', 'BLOOM'],
    type: 'RAW HONEY',
    description:
      'A bright, floral honey gathered from wildflower meadows. Light, fragrant and naturally golden.',
    color: '#C9822B',
  },
  {
    number: '02',
    name: 'FOREST GOLD',
    words: ['FOREST', 'GOLD'],
    type: 'RAW HONEY',
    description:
      'Deep and rich with a warm caramel finish, harvested from hives surrounded by ancient woodland.',
    color: '#8A572F',
  },
  {
    number: '03',
    name: 'MORNING NECTAR',
    words: ['MORNING', 'NECTAR'],
    type: 'RAW HONEY',
    description:
      'Soft, delicate and smooth. A gentle honey made for slow breakfasts and quiet mornings.',
    color: '#D6A84F',
  },
]

function Products() {
  const sectionRef = useRef(null)
  const productRef = useRef(null)
  const labelRef = useRef(null)

  const [activeProduct, setActiveProduct] = useState(0)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.product-copy')

      cards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: 'top 55%',
          end: 'bottom 55%',

          onEnter: () => setActiveProduct(index),
          onEnterBack: () => setActiveProduct(index),
        })
      })

      // Product gently moves while scrolling
      gsap.to(productRef.current, {
        y: -80,
        rotation: 8,

        scrollTrigger: {
          trigger: '.products',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Animate the product when the active product changes
        useEffect(() => {
        const ctx = gsap.context(() => {
            const section = sectionRef.current

            if (!section) return

            const cards = gsap.utils.toArray('.product-copy')

            cards.forEach((card, index) => {
            ScrollTrigger.create({
                trigger: card,
                start: 'top 55%',
                end: 'bottom 55%',

                onEnter: () => setActiveProduct(index),
                onEnterBack: () => setActiveProduct(index),
            })
            })

            gsap.to(productRef.current, {
            y: -80,
            rotation: 8,

            scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
            },
            })

            gsap.from('.products-heading', {
            y: 80,
            opacity: 0,
            duration: 1,

            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
            },

            ease: 'power4.out',
            })
        }, sectionRef)

        return () => ctx.revert()
        }, [])

  const product = products[activeProduct]

  return (
    <section
      className="products"
      ref={sectionRef}
      id="honey"
    >
      <div className="products-heading">
        <p>THE COLLECTION</p>

        <h2>
          A LITTLE
          <br />
          <span>LIQUID GOLD.</span>
        </h2>
      </div>

      <div className="products-stage">

        {/* STICKY PRODUCT */}

        <div className="product-sticky">

          <div
            className="product-object"
            ref={productRef}
            style={{
              background: `
                linear-gradient(
                  90deg,
                  rgba(255,255,255,.2),
                  transparent 25%,
                  transparent 75%,
                  rgba(0,0,0,.15)
                ),
                linear-gradient(
                  180deg,
                  ${product.color},
                  #9d5c20
                )
              `,
            }}
          >

            <div className="product-cap" />

            <div
              className="product-label"
              ref={labelRef}
            >

              <small>
                HIVE & HARVEST
              </small>

              <strong>
                {product.words.map((word) => (
                  <span key={word}>
                    {word}
                  </span>
                ))}
              </strong>

              <span>
                {product.type}
              </span>

            </div>

          </div>

          <div className="product-note">
            {product.number} · Small batch · 100% raw
          </div>

        </div>

        {/* PRODUCT STORIES */}

        <div className="product-information">

          {products.map((item, index) => (
            <article
              className="product-copy"
              key={item.number}
            >
              <span>{item.number}</span>

              <h3>{item.name}</h3>

              <p>{item.description}</p>
            </article>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Products
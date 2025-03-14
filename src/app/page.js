"use client"
import { useRef, useEffect } from "react"
import Hero from "./components/Hero"
import Products from "./components/Projects"
import Services from "./components/AboutMe"
import Tagline from "./components/Tagline"
import Lenis from "lenis";
import Footer from "./components/Footer"
import CustomCursor from "./components/CustomCursor"

export default function Home() {
  const lenisRef = useRef(null)

  useEffect(() => {
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        lerp: 0.1,
        smooth: true,
        direction: "vertical",
      })

      const handleScroll = () => {
        lenisRef.current.raf()
      }

      requestAnimationFrame(handleScroll)
    }

    return () => {
      lenisRef.current.destroy()
    }
  }, [])

  return (
    <>
      <div ref={lenisRef}>
        <div>
          <Hero />
          <Tagline />
        </div>
        <Services />
        <Products />
        <Footer />
      </div>
      <CustomCursor />
    </>
  )
}

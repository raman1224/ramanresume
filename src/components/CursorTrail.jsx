// "use client"

// import { useEffect, useState } from "react"

// const CursorTrail = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY })
//       setIsVisible(true)
//     }

//     const handleMouseLeave = () => {
//       setIsVisible(false)
//     }

//     document.addEventListener("mousemove", handleMouseMove)
//     document.addEventListener("mouseleave", handleMouseLeave)

//     return () => {
//       document.removeEventListener("mousemove", handleMouseMove)
//       document.removeEventListener("mouseleave", handleMouseLeave)
//     }
//   }, [])

//   return (
//     <div
//       className={`fixed top-0 left-0 w-6 h-6 bg-primary/20 rounded-full pointer-events-none z-50 transition-opacity duration-200 ${
//         isVisible ? "opacity-100" : "opacity-0"
//       }`}
//       style={{
//         transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px)`,
//         transition: "transform 0.1s ease-out",
//       }}
//     />
//   )
// }

// export default CursorTrail


import { useEffect, useRef } from "react"

const CursorTrail = () => {
  const ring = useRef(null)
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return
    let x = 0, y = 0, tx = 0, ty = 0, raf
    const move = (e) => { tx = e.clientX; ty = e.clientY; ring.current.style.opacity = 1 }
    const loop = () => {
      x += (tx - x) * 0.18
      y += (ty - y) * 0.18
      ring.current.style.transform = `translate(${x - 14}px, ${y - 14}px)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener("mousemove", move)
    loop()
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf) }
  }, [])
  return <div ref={ring} className="cursor-ring" />
}

export default CursorTrail
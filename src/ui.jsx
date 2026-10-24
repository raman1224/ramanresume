import { useEffect, useRef } from "react"

// Mouse-driven 3D tilt. Children with className="pop" lift off the surface.
export function Tilt({ children, max = 10, className = "", ...rest }) {
  const ref = useRef(null)
  const move = (e) => {
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    ref.current.style.transform = `perspective(900px) rotateY(${x * max}deg) rotateX(${-y * max}deg)`
  }
  const leave = () => { ref.current.style.transform = "" }
  return (
    <div ref={ref} onMouseMove={move} onMouseLeave={leave} className={`tilt ${className}`} {...rest}>
      {children}
    </div>
  )
}

// Adds "seen" once on screen (used to fill the skill bars).
export function Seen({ children, className = "" }) {
  const ref = useRef(null)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { ref.current.classList.add("seen"); io.disconnect() }
    }, { threshold: 0.2 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} className={className}>{children}</div>
}

export function Heading({ title, sub }) {
  return (
    <div className="head">
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  )
}
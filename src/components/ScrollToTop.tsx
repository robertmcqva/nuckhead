import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Optional: adds smooth scrolling animation
    })
  }, [pathname])

  return null
}
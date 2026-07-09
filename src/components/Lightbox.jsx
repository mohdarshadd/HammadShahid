import { useEffect, useCallback } from 'react'

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
    if (e.key === 'Escape') onClose()
  }, [onPrev, onNext, onClose])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [handleKeyDown])

  return (
    <div className="lightbox open" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <button className="lightbox-close" onClick={onClose}>&times;</button>
      <img className="lightbox-image" src={images[currentIndex]} alt="" />
      <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); onPrev() }}>&#10094;</button>
      <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); onNext() }}>&#10095;</button>
    </div>
  )
}

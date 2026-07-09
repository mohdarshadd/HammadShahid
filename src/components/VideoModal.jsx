import { useEffect, useCallback } from 'react'

function getEmbedUrl(videoSrc) {
  if (videoSrc.includes('vimeo.com/')) {
    const id = videoSrc.includes('vimeo.com/embed/')
      ? videoSrc.split('vimeo.com/embed/')[1].split('?')[0]
      : videoSrc.split('vimeo.com/')[1].split('?')[0]
    return `https://player.vimeo.com/video/${id}?autoplay=1`
  }
  return videoSrc
}

export default function VideoModal({ videoSrc, onClose }) {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
      document.body.style.position = 'static'
    }
  }, [handleKeyDown])

  const embedUrl = getEmbedUrl(videoSrc)

  return (
    <div className="video-modal open" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="video-modal-content">
        <button className="video-modal-close" onClick={onClose}>&times;</button>
        <iframe
          id="modalIframe"
          src={embedUrl}
          width="100%"
          height="100%"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  )
}

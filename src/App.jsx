import React, { useState, useRef, useEffect } from 'react'
import './LitComponent'

function App() {
  const [url, setUrl] = useState('https://example.com')
  const [searchQuery, setSearchQuery] = useState('')
  const videoRef = useRef(null)

  const handleUrlChange = (e) => {
    setUrl(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Navigating to:', url)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`
    console.log('Searching:', searchUrl)
    setUrl(searchUrl)
  }

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div className="App" style={{
      width: '100vw',
      height: '100vh',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4" />
      </video>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        maxWidth: '1000px',
        height: '80%',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        backdropFilter: 'blur(10px)',
      }}>
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          padding: '15px',
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          <button style={{ marginRight: '10px', fontSize: '1.2em' }}>&larr;</button>
          <button style={{ marginRight: '10px', fontSize: '1.2em' }}>&rarr;</button>
          <button style={{ marginRight: '10px', fontSize: '1.2em' }}>&#8635;</button>
          <form onSubmit={handleSubmit} style={{ flex: 1, display: 'flex', marginRight: '10px' }}>
            <input 
              type="text" 
              value={url} 
              onChange={handleUrlChange}
              style={{
                flex: 1,
                padding: '10px',
                borderRadius: '10px',
                border: 'none',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontSize: '1em',
                fontFamily: 'Maven Pro, sans-serif',
              }}
            />
          </form>
          <form onSubmit={handleSearch} style={{ display: 'flex' }}>
            <input 
              type="text" 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              style={{
                padding: '10px',
                borderRadius: '10px 0 0 10px',
                border: 'none',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontSize: '1em',
                fontFamily: 'Maven Pro, sans-serif',
              }}
            />
            <button type="submit" style={{
              padding: '10px',
              borderRadius: '0 10px 10px 0',
              border: 'none',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: 'white',
              fontSize: '1em',
              cursor: 'pointer',
            }}>
              🔍
            </button>
          </form>
        </div>
        <div style={{
          height: 'calc(100% - 65px)',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          color: '#ffffff',
          overflow: 'auto',
          padding: '20px',
        }}>
          <lit-component></lit-component>
        </div>
      </div>
    </div>
  )
}

export default App
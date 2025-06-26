import React, { useState, useEffect } from 'react';
import '../../assets/styles/main.css'

const photos = [
    { id: 1, src: 'https://en.web-tool.org/upload/image_cache/9d/9d5b39e3dd222d91dc7a605d06560c2b_q100/square-image.webp', year: 2023, description: 'Beautiful mountain view. Beautiful mountain view. Beautiful mountain view.' },
    { id: 2, src: 'https://en.web-tool.org/upload/image_cache/9d/9d5b39e3dd222d91dc7a605d06560c2b_q100/square-image.webp', year: 2022, description: 'Skyline at night.' },
    { id: 3, src: 'https://en.web-tool.org/upload/image_cache/9d/9d5b39e3dd222d91dc7a605d06560c2b_q100/square-image.webp', year: 2024, description: 'Forest with sunlight.' },
    { id: 4, src: 'https://en.web-tool.org/upload/image_cache/9d/9d5b39e3dd222d91dc7a605d06560c2b_q100/square-image.webp', year: 2021, description: 'Smiling portrait.' },
    { id: 5, src: 'https://en.web-tool.org/upload/image_cache/9d/9d5b39e3dd222d91dc7a605d06560c2b_q100/square-image.webp', year: 2023, description: 'Busy street corner.' },
  ];
  
  const years = ['All', ...Array.from(new Set(photos.map(photo => photo.year))).sort((a, b) => b - a)];

  const PhotoGallery: React.FC = () => {
    const [filter, setFilter] = useState('All');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    useEffect(() => {
      const cookieFallback = localStorage.getItem("cookieFallback");
      if (cookieFallback && cookieFallback !== "[]") {
        setIsLoggedIn(true);
      }
    }, []);
  
    const filteredPhotos = filter === 'All' ? photos : photos.filter(p => p.year.toString() === filter);
  
    return (
      <div className="gallery-container">
        <div className="filter-tabs">
          {years.map((yr) => (
            <button
              key={yr}
              className={`filter-button ${filter === yr.toString() ? 'active' : ''}`}
              onClick={() => setFilter(yr.toString())}
            >
              {yr}
            </button>
          ))}
        </div>
        <div className="photo-grid">
          {filteredPhotos.map(photo => (
            <div key={photo.id} className="photo-item">
              {isLoggedIn && <button className="delete-btn">×</button>}
              <img src={photo.src} alt={photo.description} />
              <div className="overlay">
                <p>{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default PhotoGallery
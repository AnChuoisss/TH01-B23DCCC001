import React, { useState } from 'react';
import axios from 'axios';
import './Bai2.css'; 

const Bai2 = () => {
    const [query, setQuery] = useState('');
    const [images, setImages] = useState([]);
    const [error, setError] = useState(''); 

    const handleSearch = async (e) => {
        e.preventDefault();
        const API_KEY = '46166847-40e887f0f1cbd269c98d3b401'; 
        setError(''); // 

        try {
            const response = await axios.get(`https://pixabay.com/api/`, {
                params: {
                    key: API_KEY,
                    q: query.trim(),
                    image_type: 'photo',
                }
            });
            setImages(response.data.hits); 
        } catch (error) {
            setError('Không thể tìm thấy hình ảnh, vui lòng thử lại!');
            console.error('Error fetching the images:', error);
        }
    };

    return (
        <div className="bai2-container">
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Nhập từ khóa tìm kiếm..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="search-input"
                />
                <button type="submit" className="search-button">Tìm kiếm</button>
            </form>
            {error && <p className="error-message">{error}</p>}
            <div className="image-gallery">
                {images.map((image) => (
                    <img key={image.id} src={image.webformatURL} alt={image.tags} className="image-item" />
                ))}
            </div>
        </div>
    );
};

export default Bai2;

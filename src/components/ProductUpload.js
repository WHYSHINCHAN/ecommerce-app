import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProductUpload = () => {
  const { token, user } = useAuth();
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');
  const [uploadedUrl, setUploadedUrl] = useState('');

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setUploadMessage('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });
      setUploadedUrl(response.data.imageUrl);
      setUploadMessage('Upload successful!');
    } catch (err) {
      setUploadMessage('Failed to upload image.');
    }
  };

  return (
    <div className="upload-container">
      <div className="auth-card">
        <h2>Upload Product Image</h2>
        <p className="auth-subtitle">Add local media to your inventory</p>

        <form onSubmit={handleUpload} className="upload-form">
          <div className="form-group file-group">
            <label className="file-label">
              <span>Choose Image...</span>
              <input type="file" accept="image/*" onChange={handleFileChange} />
            </label>
          </div>
          
          {preview && (
            <div className="image-preview">
              <img src={preview} alt="Preview" />
            </div>
          )}

          <button type="submit" className="btn-primary full-width mt-2">Upload Image</button>

          {uploadMessage && (
            <div className={`auth-error ${uploadedUrl ? 'success' : ''}`}>
              {uploadMessage}
            </div>
          )}
          
          {uploadedUrl && (
            <div className="upload-result">
              <p>Image URL:</p>
              <code>{uploadedUrl}</code>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ProductUpload;

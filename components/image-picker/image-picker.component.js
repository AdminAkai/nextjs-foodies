'use client';

import { useRef, useState } from 'react';

import Image from 'next/image';

import styles from './image-picker.module.css'

export default function ImagePicker({ label, name }) {
  const imageInputRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(null);

  const handlePickImage = () => {
    imageInputRef.current.click();
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setSelectedImage(null);
      return;
    };

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setSelectedImage(fileReader.result)
    }

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {selectedImage 
            ? 
              <Image src={selectedImage} alt="User selected image preview" fill />
            :
              <p>No image selected.</p>
          }
        </div>
        <input 
          type="file" id={name} 
          accept="image/png, image/jpeg" 
          name={name} 
          className={styles.input}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button className={styles.button} type="button" onClick={handlePickImage}>
          Pick an Image
        </button>
      </div>
    </div>
  )
}
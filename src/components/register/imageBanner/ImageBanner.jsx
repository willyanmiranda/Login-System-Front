import React from 'react'
import SideImage from '../../../assets/Side Image.png'
import "./ImageBanner.css"

const ImageBanner = () => {
  return (
    <section className='image-banner-section'>
        <figure>
            <img src={SideImage} alt="side image" />
        </figure>
    </section>
  )
}

export default ImageBanner
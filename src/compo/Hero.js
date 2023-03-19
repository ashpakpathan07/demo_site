import React from 'react'
import pic from "../imgs/blog-covers-20-scaled.jpg"
import pic2 from "../imgs/1576787503828.jpg"

export const Hero = () => {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
        <img src={pic} class="d-block w-100 h-80" alt="..."/>
        </div>
        <div class="carousel-item">
        <img src={pic2} class="d-block w-100 h-80" alt="..."/>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>
  )
}

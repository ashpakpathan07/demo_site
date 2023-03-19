import React from 'react'
import { Navbar } from './Navbar'
import '../App.css'

export const Services = () => {
  return (<>
    <Navbar/>
    <section className='section-padding'>
    <div className='container'>
       <div className='row'>
       <div className='col-md-4'>
        <div class="card w-18" >
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </div>
        <div className='col-md-4'>
        <div class="card w-18">
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </div>
        <div className='col-md-4'>
        <div class="card w-18">
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </div>
       </div>
    </div>
    </section>
    </>
  )
}

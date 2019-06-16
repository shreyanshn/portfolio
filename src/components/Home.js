import React, { Component } from 'react'


export default class Home extends Component {
    render(){
        return (

            <section id="home-section" className="hero">
            <div className="home-slider  owl-carousel">
                <div className="slider-item ">
                <div className="overlay" />
                <div className="container">
                    <div className="row d-md-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
                    <div className="one-third order-md-last img" style={{backgroundImage: 'url(images/bg_1.jpg)'}}>
                        <div className="overlay" />
                    </div>
                    <div className="one-forth d-flex  align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                        <div className="text">
                        <span className="subheading">Hello</span>
                        <h1 className="mb-4 mt-3">I'm <span>Shreyansh Nawlakha</span></h1>
                        <h2 className="mb-4">A Software Developer cum Data Scientist</h2>
                        <p><a href="#" className="btn-custom">Hire me</a></p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="slider-item">
                <div className="overlay" />
                <div className="container">
                    <div className="row d-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
                    <div className="one-third order-md-last img" style={{backgroundImage: 'url(images/bg_2.jpg)'}}>
                        <div className="overlay" />
                    </div>
                    <div className="one-forth d-flex align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                        
                        <div className="text">
                        <h1 className="mb-4 mt-3">I'm a <span>web designer</span> from India</h1>
                        <p><a href="#" className="btn-custom">Hire me</a></p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        )
    }
}


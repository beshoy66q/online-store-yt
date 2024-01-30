import React from 'react';
import "./slider.styles.css";

const SliderComponent = () => {

    const images = [{link :"https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600", index: 1},
     {link :"https://images.pexels.com/photos/583847/pexels-photo-583847.jpeg?auto=compress&cs=tinysrgb&w=600", index: 2},
      {link :"https://images.pexels.com/photos/105254/pexels-photo-105254.jpeg?auto=compress&cs=tinysrgb&w=600", index: 3},
       {link :"https://images.pexels.com/photos/106400/pexels-photo-106400.jpeg?auto=compress&cs=tinysrgb&w=600", index: 4},
        {link :"https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg?auto=compress&cs=tinysrgb&w=600", index: 5}]

    return (
        <div className='slider-container'>
            <section className="container-slider">
	<div class="slider-wrapper">
		<div class="slider">
			{images.map((ele) => {
                return <img id={`slide-${ele.index}`} src={ele.link} alt="3D rendering of an imaginary orange planet in space" />
            })}
		</div>
		<div class="slider-nav">
			<a href="#slide-1"></a>
			<a href="#slide-2"></a>
			<a href="#slide-3"></a>
			<a href="#slide-5"></a>
			<a href="#slide-5"></a>
		</div>
	</div>
</section>
        </div>
    );
}

export default SliderComponent;
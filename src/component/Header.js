import React from 'react'
import book7 from '../img/book7.jpg'



const Header = () => {
  return (
    <>
   <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={book7} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Library for you </h5>
        <p>A reader lives a thousand lives before he dies, While he who does not read a single life</p>
        <p className='georg'>George Martin</p>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default Header
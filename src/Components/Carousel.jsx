import pic1 from '../images/pic1.jpg'
import pic2 from '../images/pic2.jpg'
import pic3 from '../images/pic3.jpg'
import pic4 from '../images/bg.jpg'

const Carousel = () => {
  return (
    <div
      id='carouselExampleAutoplaying'
      className='carousel slide'
      data-bs-ride='carousel'
    >
      <div className='carousel-inner'>
        {/* Carousel Item 1 */}
        <div className='carousel-item active'>
          <img
            src={pic2}
            className='d-block w-100'
            alt='Slide 1'
            style={{ objectFit: 'cover', height: '70vh' }}
          />
        </div>
        {/* Carousel Item 2 */}
        <div className='carousel-item'>
          <img
            src={pic1}
            className='d-block w-100'
            alt='Slide 2'
            style={{ objectFit: 'cover', height: '70vh' }}
          />
        </div>
        {/* Carousel Item 3 */}
        <div className='carousel-item'>
          <img
            src={pic3}
            className='d-block w-100'
            alt='Slide 3'
            style={{ objectFit: 'cover', height: '70vh' }}
          />
        </div>
        {/* Carousel Item 4 */}
        <div className='carousel-item'>
          <img
            src={pic4}
            className='d-block w-100'
            alt='Slide 4'
            style={{ objectFit: 'cover', height: '70vh' }}
          />
        </div>
      </div>

      {/* Previous Button */}
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExampleAutoplaying'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>

      {/* Next Button */}
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleAutoplaying'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  )
}

export default Carousel

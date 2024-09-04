import location from '../images/location.png'
import time from '../images/time.webp'
import shopImage1 from '../images/shopImage1.jpg'
import shopImage2 from '../images/shopImage2.jpg'
import customerImage from '../images/customerImage.png'
import { customerReviewData } from '../Data/customerReviewData'

const WhoAreWe = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '1rem',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 0 5px black',
        padding: '2rem',
      }}
    >
      <h2
        style={{
          margin: 'auto',
          marginBottom: '1rem',
          textAlign: 'center',
          fontSize: '1.5rem',
          wordBreak: 'break-word',
        }}
      >
        SHREE HEMKUNT TYRES AND SERVICES
      </h2>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={location}
              alt='Location Icon'
              style={{ width: '1.5rem', marginRight: '0.5rem' }}
            />
            PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02
            INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
          </span>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={time}
              alt='Time Icon'
              style={{ width: '1.5rem', marginRight: '0.5rem' }}
            />
            Open - Monday to Sunday - 10:00AM to 8:00PM
          </span>
          <button
            type='button'
            className='btn btn-outline-danger align-self-start'
            style={{ width: 'fit-content', alignSelf: 'center' }}
          >
            Get Directions
          </button>
        </div>

        <div className='carousel-container'>
          <div
            id='shopCarousel'
            className='carousel slide'
            data-bs-ride='carousel'
          >
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <img
                  src={shopImage1}
                  className='d-block w-100 carousel-img'
                  alt='Shop Image 1'
                />
              </div>
              <div className='carousel-item'>
                <img
                  src={shopImage2}
                  className='d-block w-100 carousel-img'
                  alt='Shop Image 2'
                />
              </div>
            </div>
            <button
              className='carousel-control-prev'
              type='button'
              data-bs-target='#shopCarousel'
              data-bs-slide='prev'
            >
              <span
                className='carousel-control-prev-icon'
                aria-hidden='true'
              ></span>
              <span className='visually-hidden'>Previous</span>
            </button>
            <button
              className='carousel-control-next'
              type='button'
              data-bs-target='#shopCarousel'
              data-bs-slide='next'
            >
              <span
                className='carousel-control-next-icon'
                aria-hidden='true'
              ></span>
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
        </div>
      </div>

      <p style={{ fontWeight: '600', textAlign: 'center', margin: '1rem 0' }}>
        2278 Google Reviews
      </p>

      <div
        id='customerReviewsCarousel'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <div className='customer-review-container'>
              <span
                style={{
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src={customerImage}
                  alt='Customer'
                  className='customer-image'
                />
                Ibrar Ansari
              </span>
              <span style={{ fontSize: '0.9rem' }}>
                Went for Tyre change. Ultimate service by shop boys. Owner's
                behavior very cool. Guides as per your budget. Highly recommend.
              </span>
            </div>
          </div>
          {customerReviewData.map((item, index) => (
            <div className='carousel-item' key={index}>
              <div className='customer-review-container'>
                <span
                  style={{
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={customerImage}
                    alt={item.name}
                    className='customer-image'
                  />
                  {item.name}
                </span>
                <span style={{ fontSize: '0.9rem' }}>{item.message}</span>
              </div>
            </div>
          ))}
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#customerReviewsCarousel'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#customerReviewsCarousel'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  )
}

export default WhoAreWe

import { useState } from 'react'
import search from '../images/search.jpg'
import { tyreData } from '../Data/tyreData'

const TyreSoldSection = () => {
  const [display, setDisplay] = useState(true)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '1rem',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
        padding: '1.5rem',
      }}
    >
      <h5 style={{ textAlign: 'center', marginBottom: '1rem' }}>
        Tyres Sold by this Dealer
      </h5>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <div className='dropdown'>
            <a
              className='btn btn-secondary dropdown-toggle'
              href='#'
              role='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              Filter By
            </a>

            <ul className='dropdown-menu'>
              <li>
                <a className='dropdown-item' href='#'>
                  Apollo
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  BedRock
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  BridgeStone
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  CEAT
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  Continental
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  Dunlop
                </a>
              </li>
            </ul>
          </div>

          <div className='dropdown'>
            <a
              className='btn btn-secondary dropdown-toggle'
              href='#'
              role='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              Most Popular
            </a>

            <ul className='dropdown-menu'>
              <li>
                <a className='dropdown-item' href='#'>
                  Price High to Low
                </a>
              </li>
              <li>
                <a className='dropdown-item' href='#'>
                  Price Low to High
                </a>
              </li>
            </ul>
          </div>
          <a
            href=''
            onClick={(e) => {
              e.preventDefault()
              setDisplay(!display)
            }}
            style={{ color: 'blue', textDecoration: 'underline' }}
          >
            Advanced
          </a>
        </div>
        {display && (
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <div className='dropdown'>
              <a
                className='btn btn-secondary dropdown-toggle'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Vehicle Type
              </a>

              <ul className='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Car
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Bike
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Scooter
                  </a>
                </li>
              </ul>
            </div>
            <div className='dropdown'>
              <a
                className='btn btn-secondary dropdown-toggle'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Choose Brand
              </a>

              <ul className='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Hero
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    TVS
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Royal Enfield
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Suzuki
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Jawa
                  </a>
                </li>
              </ul>
            </div>
            <div className='dropdown'>
              <a
                className='btn btn-secondary dropdown-toggle'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Choose Model
              </a>

              <ul className='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#'>
                    A96
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    B25
                  </a>
                </li>
              </ul>
            </div>
            <button className='btn btn-primary'>
              <img src={search} alt='' style={{ width: '1.5rem' }} />
            </button>
          </div>
        )}
      </div>

      {/* card section */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1.5rem',
          marginTop: '1.5rem',
        }}
      >
        {tyreData.map((item, index) => (
          <div
            key={index}
            className='card tyreCard'
            style={{
              width: '18rem',
              padding: '0.5rem',
              overflow: 'hidden',
              cursor: 'pointer',
              boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.2)',
              borderRadius: '8px',
              transition: 'transform 0.3s',
            }}
          >
            <img
              src={item.img}
              className='card-img-top'
              alt={item.name}
              style={{ width: '5rem', objectFit: 'contain', margin: '0 auto' }}
            />
            <div className='card-body'>
              <p className='card-text' style={{ fontWeight: '500' }}>
                {item.name}
              </p>
              <p className='card-text'>{item.type}</p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <img src={item.rating} alt='rating' style={{ width: '3rem' }} />
                <p className='card-text'>{item.reviewNo}</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <img
                  src={item.rupeeImg}
                  alt='price'
                  style={{ width: '0.5rem' }}
                />
                <p className='card-text'>{item.price}</p>
              </div>
              <p className='card-text' style={{ color: 'green' }}>
                {item.offer}
              </p>
              <p className='card-text'>{item.tyreTube}</p>
              <div style={{ position: 'relative' }}>
                <img
                  src={item.warrantyImg}
                  alt='warranty'
                  style={{
                    width: '4rem',
                    position: 'absolute',
                    top: '-18.3rem',
                    right: '-1.5rem',
                  }}
                />
                <img
                  src={item.tyreImage}
                  alt='tyre'
                  style={{
                    width: '12rem',
                    position: 'absolute',
                    top: '-7rem',
                    right: '-5rem',
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className='btn btn-danger'
        style={{ margin: '2rem auto 0', width: '7rem' }}
      >
        View More
      </button>
    </div>
  )
}

export default TyreSoldSection

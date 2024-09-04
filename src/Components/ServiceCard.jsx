import { servicesData } from '../Data/servicesData'

const ServiceCard = () => {
  return (
    <div
      style={{
        margin: '1rem',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
        padding: '1.5rem',
      }}
    >
      <h5 style={{ textAlign: 'center', marginBottom: '1rem' }}>
        Services offered by this dealer
      </h5>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
        }}
      >
        {servicesData.map((item, index) => (
          <div
            key={index}
            className='card'
            style={{
              width: '15rem',
              alignItems: 'center',
              boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.2)',
              borderRadius: '8px',
              padding: '1rem',
              textAlign: 'center',
              transition: 'transform 0.3s',
            }}
          >
            <img
              src={item.img}
              style={{ width: '6rem', height: '6rem', objectFit: 'cover' }}
              className='card-img-top'
              alt={item.name}
            />
            <div className='card-body'>
              <p className='card-text' style={{ fontWeight: '500' }}>
                {item.name}
              </p>
              <a
                href='#'
                className='btn btn-danger'
                style={{ fontSize: '0.9rem' }}
              >
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceCard

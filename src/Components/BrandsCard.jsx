import { brandData } from '../Data/brandData'

const BrandsCard = () => {
  return (
    <div
      style={{
        margin: '1rem',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 0 5px black',
        padding: '1rem',
      }}
    >
      <h5 style={{ textAlign: 'center', marginBottom: '1rem' }}>Brands</h5>
      <div
        style={{
          display: 'flex',
          overflowX: 'auto',
          gap: '1rem',
          paddingBottom: '1rem',
          scrollbarWidth: 'thin',
        }}
      >
        {brandData.map((item, index) => (
          <div
            key={index}
            style={{
              cursor: 'pointer',
              flex: '0 0 auto',
              width: '150px',
              padding: '1rem',
              boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
              borderRadius: '5px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'white',
              transition: 'transform 0.2s',
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: '80px',
                height: '50px',
                objectFit: 'contain',
              }}
            />
            <p
              style={{
                textAlign: 'center',
                marginTop: '0.5rem',
                fontSize: '0.9rem',
                color: '#333',
              }}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BrandsCard

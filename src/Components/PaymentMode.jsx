import { paymentModeData } from '../Data/paymentModeData'
import tick from '../images/tick.jpg'

const PaymentMode = () => {
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
        Payment Mode
      </h5>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1rem',
        }}
      >
        {paymentModeData.map((item, index) => (
          <div
            key={index}
            className='card'
            style={{
              display: 'flex',
              alignItems: 'center',
              border: 'none',
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              padding: '0.5rem',
            }}
          >
            <img
              src={tick}
              className='img-fluid'
              alt='tick'
              style={{ width: '2rem', marginRight: '0.5rem' }}
            />
            <p className='card-text' style={{ margin: 0 }}>
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PaymentMode

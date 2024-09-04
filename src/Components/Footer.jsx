import thinkImage from '../images/thinkImage.webp'
import logo from '../images/TP-logo.webp'
import fbIcon from '../images/fb-icon.webp'
import instaIcon from '../images/insta-icon.webp'

const Footer = () => {
  return (
    <div>
      <div style={{ background: '#FFEAAA' }}>
        <div
          style={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <h5>Have a question about Tyres?</h5>
          <p>Get an answer in 24 hours from our experts.</p>
          <input
            type='text'
            placeholder='Ask or search your questions'
            style={{
              width: '90%',
              maxWidth: '30rem',
              borderRadius: '20px',
              outline: 'none',
              padding: '0.5rem',
              boxShadow: '0px 1px 1px #ffca28',
              border: '1px solid #FFCA28',
            }}
          />
          <img
            src={thinkImage}
            alt=''
            style={{ width: '5rem', marginTop: '1rem' }}
          />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '2rem',
          marginInline: '5%',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <img src={logo} alt='' style={{ width: '7rem' }} />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '1rem',
            }}
          >
            <img
              src={fbIcon}
              alt=''
              style={{ width: '1.5rem', cursor: 'pointer' }}
            />
            <img
              src={instaIcon}
              alt=''
              style={{ width: '1.5rem', cursor: 'pointer' }}
            />
          </div>
        </div>
        <div
          className='footerp'
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '20px',
            textAlign: 'center',
          }}
        >
          <p>Are you a Tyre Dealer?</p>
          <p>Who We Are</p>
          <p>Privacy Policy</p>
          <p>Terms of use</p>
          <p>Contact Us</p>
          <p>Career</p>
          <p>Shipping & Return</p>
          <p>Policy</p>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          borderTop: '1px solid #dee2e6',
          padding: '1rem 0',
        }}
      >
        <p style={{ margin: 0 }}>
          2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}
export default Footer

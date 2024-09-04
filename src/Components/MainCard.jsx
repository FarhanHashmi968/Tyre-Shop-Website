import WhoAreWe from './WhoAreWe'
import logo from '../images/TP-logo.webp'
import ServiceCard from './ServiceCard'
import BrandsCard from './BrandsCard'
import TyreSoldSection from './TyreSoldSection'
import PaymentMode from './PaymentMode'
import Footer from './Footer'

const MainCard = () => {
  {
    /* Navbar */
  }
  return (
    <div style={{ position: 'relative' }}>
      <nav
        id='navbar-example2'
        className='navbar navbar-expand-lg navbar-light bg-body-tertiary px-3 mb-0'
        style={{
          position: 'sticky',
          top: '0px',
          zIndex: '1000',
          marginTop: '1rem',
        }}
      >
        <a className='navbar-brand' href='#'>
          <img src={logo} alt='Logo' className='img-fluid' />
        </a>
        {/* Toggle button for mobile view */}
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        {/* Navbar items */}
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='#scrollspyHeading1'>
                Who Are We
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#scrollspyHeading2'>
                Deals In
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#scrollspyHeading3'>
                Services offered by this dealer
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#scrollspyHeading4'>
                Tyres sold by this Dealer
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#scrollspyHeading5'>
                Payment Mode
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Scrollable content section */}
      <div
        data-bs-spy='scroll'
        data-bs-target='#navbar-example2'
        data-bs-root-margin='0px 0px -40%'
        data-bs-smooth-scroll='true'
        className='scrollspy-example bg-body-tertiary p-3 rounded-2'
        tabIndex='0'
        style={{
          position: 'relative',
          overflowY: 'scroll',
          height: '80vh',
        }}
      >
        <div id='scrollspyHeading1' style={{ marginBlock: '5rem' }}>
          <WhoAreWe />
        </div>

        <div id='scrollspyHeading2' style={{ marginBlock: '5rem' }}>
          <BrandsCard />
        </div>

        <div id='scrollspyHeading3' style={{ marginBlock: '5rem' }}>
          <ServiceCard />
        </div>

        <div id='scrollspyHeading4' style={{ marginBlock: '5rem' }}>
          <TyreSoldSection />
        </div>

        <div id='scrollspyHeading5' style={{ marginBlock: '5rem' }}>
          <PaymentMode />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default MainCard

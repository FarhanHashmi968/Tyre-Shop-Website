import logo from '../images/TP-logo.webp'
import userImage from '../images/userImage.jpg'

const Navbar = () => {
  return (
    <nav
      className='navbar navbar-expand-lg bg-body-tertiary'
      style={{ paddingInline: '5rem' }}
    >
      <div className='container-fluid'>
        {/* Brand Logo */}
        <a className='navbar-brand' href='#'>
          <img
            src={logo}
            alt='Logo'
            width='150'
            height='36'
            className='d-inline-block align-text-top'
          />
        </a>

        {/* Toggler Button for Mobile View */}
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        {/* Collapsible Navbar Content */}
        <div className='collapse navbar-collapse' id='navbarText'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0 me-lg-5'>
            {/* Car Tyres Dropdown */}
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Car Tyres
              </a>
              <ul className='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#'>
                    MRF Tyres
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    CEAT Tyres
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Goodyear Tyres
                  </a>
                </li>
              </ul>
            </li>
            {/* Bike Tyres Dropdown */}
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Bike Tyres
              </a>
              <ul className='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#'>
                    MRF Tyres
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    CEAT Tyres
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Goodyear Tyres
                  </a>
                </li>
              </ul>
            </li>
            {/* Tyre Pressure Dropdown */}
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Tyre Pressure
              </a>
              <ul className='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Action
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Another action
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            {/* Commercial Tyres Dropdown */}
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Commercial Tyres
              </a>
              <ul className='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#'>
                    All Commercial Tyres
                  </a>
                </li>
              </ul>
            </li>
            {/* Accessories Dropdown */}
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Accessories
              </a>
              <ul className='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Accessories
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Batteries
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Alloy Wheels
                  </a>
                </li>
              </ul>
            </li>
            {/* More Dropdown */}
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                More
              </a>
              <ul className='dropdown-menu'>
                <li>
                  <a className='dropdown-item' href='#'>
                    CashBack Offer
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Find Tyre Dealers
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Compare Tyres
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Are you a tyre dealer
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Wheel Balancing
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Wheel Alignment
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          {/* User Login Section */}
          <span className='navbar-text' style={{ cursor: 'pointer' }}>
            <img
              src={userImage}
              alt='User'
              style={{ width: '2rem', height: '2rem', marginRight: '0.5rem' }}
            />
            Login
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

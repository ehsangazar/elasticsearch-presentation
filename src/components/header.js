import React from 'react';
import Link from 'gatsby-link';
import Routes from '../routes';

const Header = ({ currentNumber = 0 }) => (
  <div
    style={{
      background: '#261923',
      marginBottom: '1.45rem',
      transitionDuration: '1s',
    }}
  >
    <div
      className="row"
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        position: 'relative',
      }}
    >
      <span className="col-3" style={{ textAlign: 'left', fontSize: '0.7em' }}>
        {Routes[currentNumber - 1] &&
          <Link
            to={Routes[currentNumber - 1].link}
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            {'<'} {`${currentNumber - 1}/${Routes.length - 1}`}: {Routes[currentNumber - 1].title}
          </Link>
        }
      </span>
      <h2 className="col-6 center" style={{ color: 'white' }}>
        {currentNumber !== 0 &&
          Routes[currentNumber].title
        }
      </h2>
      <span className="col-3" style={{ textAlign: 'right', fontSize: '0.7em' }}>
        {Routes[currentNumber + 1] &&
          <Link
            to={Routes[currentNumber + 1].link}
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            {`${currentNumber + 1}/${Routes.length - 1}`}: {Routes[currentNumber + 1].title} {'>'}
          </Link>
        }
      </span>
    </div>
  </div >
);

export default Header;

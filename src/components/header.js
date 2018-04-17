import React from 'react';
import Link from 'gatsby-link';

const Header = ({ siteTitle, prevSlide, nextSlide }) => (
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
      <span className="col-3" style={{ textAlign: 'left', fontSize: '0.8em' }}>
        {prevSlide &&
          <Link
            to={prevSlide.link}
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            {'<'} {prevSlide.title}
          </Link>
        }
      </span>
      <h2 className="col-6 center" style={{ color: 'white' }}>
        {siteTitle}
      </h2>
      <span className="col-3" style={{ textAlign: 'right', fontSize: '0.8em' }}>
        {nextSlide &&
          <Link
            to={nextSlide.link}
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            {nextSlide.title} {'>'}
          </Link>
        }
      </span>
    </div>
  </div >
);

export default Header;

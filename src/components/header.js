import React from 'react';
import Link from 'gatsby-link';

const Header = ({ siteTitle, prevSlide, nextSlide }) => (
  <div
    style={{
      background: '#261923',
      marginBottom: '1.45rem',
      height: '3em',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        position: 'relative',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      {prevSlide &&
        <span style={{
          position: 'absolute',
          left: 0,
          top: '1em',
        }}
        >
          <Link
            to={prevSlide.link}
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            {'<'} {prevSlide.title}
          </Link>
        </span>
      }
      {nextSlide &&
        <span style={{
          position: 'absolute',
          right: 0,
          top: '1em',
        }}
        >
          <Link
            to={nextSlide.link}
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            {nextSlide.title} {'>'}
          </Link>
        </span>
      }
    </div>
  </div>
);

export default Header;

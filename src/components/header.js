import React from 'react';
import Link, { navigateTo } from 'gatsby-link';
import Routes from '../routes';

class Header extends React.Component {
  componentDidMount() {
    if (document) {
      document.addEventListener("keydown", this.handleKeyDown);
    }
  }

  componentWillUnmount() {
    if (document) {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }

  handleKeyDown = (e) => {
    const { currentNumber = 0 } = this.props;
    if (e.keyCode === 37 && Routes[currentNumber - 1]) {
      navigateTo(Routes[currentNumber - 1].link)
    }
    if (e.keyCode === 39 && Routes[currentNumber + 1]) {
      navigateTo(Routes[currentNumber + 1].link)
    }
  }

  render() {
    const { currentNumber = 0 } = this.props;
    return (
      <div
        key="header"
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
            {currentNumber !== 0 && Routes[currentNumber] &&
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
  }
}

export default Header;

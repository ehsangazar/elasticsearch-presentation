import React from 'react';
import Helmet from 'react-helmet';
import profileImg from '../assets/img/profile.jpg';
import Header from '../components/header';
import Page from '../components/page';
import Routes from '../routes';

const Index = (props) => {
  const IndexNumber = Routes.findIndex(item => item.link === props.location.pathname);
  return (
    <div>
      <Helmet
        title={Routes[IndexNumber].title}
      />
      <Header currentNumber={IndexNumber} />
      <Page>
        <div className="container">
          <div className="row">
            <div
              className="col-2"
              style={{ textAlign: 'center' }}
            >
              <img
                alt="ehsan gazar profile"
                style={{
                  width: '100%',
                }}
                src={profileImg}
              />
            </div>
            <div className="col-10">
              <h1 style={{
                fontSize: '5em',
              }}
              >
                Ehsan Gazar
              </h1>
              <h3>
                Full Stack Engineer at <a target="_blank" rel="noopener noreferrer" href="http://cheproximity.com.au">CHE Proximity</a>
              </h3>
              <p>
                An entrepreneur, engineer, writer, philanthropist and optimist who can help you evolve yourself
              </p>
              <ul>
                <li>
                  <a rel="noopener noreferrer" href="http://ehsangazar.com">EhsanGazar.com</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="http://twitter.com/ehsangazar">@ehsangazar</a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="mailto:me@ehsangazar.com">me@ehsangazar.com</a>
                </li>
              </ul>
              <span style={{ fontSize: '12px' }}>This presentation created by Gatsby.</span>
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Index;

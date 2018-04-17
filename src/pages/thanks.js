import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/header';
import Page from '../components/page';
import Routes from '../routes';
import thankYouPng from '../assets/img/thankyou.jpg'

const Index = (props) => {
  const IndexNumber = Routes.findIndex(item => item.link === props.location.pathname) || 0;
  return (
    <div>
      <Helmet
        title={Routes[IndexNumber] && Routes[IndexNumber].title}
      />
      <Header currentNumber={IndexNumber} />
      <Page>
        <div className="container">
          <div className="row">
            <h1>
              <img style={{
                width: '100%',
              }} src={thankYouPng} alt="Thank You" />
            </h1>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Index;

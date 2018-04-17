import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/header';
import Page from '../components/page';
import Routes from '../routes';
import searchQueryDSL from '../assets/img/mapping-api.png';

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
            <div className="col-12">
              <img src={searchQueryDSL} alt={Routes[IndexNumber] && Routes[IndexNumber].title} />
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Index;

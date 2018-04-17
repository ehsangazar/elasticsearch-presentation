import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/header';
import Page from '../components/page';
import Routes from '../routes';
import kibanaInstallImg from '../assets/img/kibana-install.png';
import kibanaLoginImg from '../assets/img/kibana-login.png';
import kibanaPng from '../assets/img/kibana.png';

const Index = (props) => {
  const IndexNumber = Routes.findIndex(item => item.link === props.location.pathname) || 0;
  return (
    <div>
      <Helmet
        title={Routes[IndexNumber].title}
      />
      <Header currentNumber={IndexNumber} />
      <Page>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <img src={kibanaInstallImg} alt={Routes[IndexNumber].title} />
            </div>
            <div className="col-12">
              <img src={kibanaLoginImg} style={{ width: '100%' }} alt={Routes[IndexNumber].title} />
            </div>
            <div className="col-12">
              <img src={kibanaPng} style={{ width: '100%' }} alt={Routes[IndexNumber].title} />
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Index;

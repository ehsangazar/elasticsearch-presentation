import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/header';
import Page from '../components/page';
import Routes from '../routes';
import kibanaImg from '../assets/img/kibana.png';
import kibanaDevtoolImg from '../assets/img/kibana-devtool.png';

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
            <h2 className="center">
              Kibana lets you visualize your Elasticsearch data and navigate the Elastic Stack
            </h2>
            <hr />
            <div className="col-12">
              <img src={kibanaImg} alt="What is kibana" />
            </div>
            <div className="col-12">
              <img src={kibanaDevtoolImg} alt="What is kibana" />
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Index;

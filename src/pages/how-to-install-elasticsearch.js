import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/header';
import Page from '../components/page';
import Routes from '../routes';
import installElasticPng from '../assets/img/install-elasticsearch.png';
import elasticSeachViewImg from '../assets/img/elasticsearch-view.png';

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
            <div className="col-12">
              <img src={installElasticPng} alt="What is kibana" />
            </div>
            <div className="col-12">
              <img style={{ width: '100%' }} src={elasticSeachViewImg} alt={Routes[IndexNumber].title} />
            </div>
          </div>
        </div>
      </Page>
    </div>
  );
};

export default Index;

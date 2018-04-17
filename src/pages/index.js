import React from 'react';
import Link from 'gatsby-link';
import styled, { keyframes } from 'styled-components';
import bouncein from 'react-animations/lib/bounce-in';
import slideinleft from 'react-animations/lib/slide-in-left';
import Helmet from 'react-helmet';
import Header from '../components/header';
import Page from '../components/page';
import profileImg from '../assets/img/profile.jpg';
import elasticseachImg from '../assets/img/elasticsearch.png';


const bounceinAnimation = keyframes`${bouncein}`;
const slideinleftnimation = keyframes`${slideinleft}`;

const BounceInDiv = styled.div`
  animation: 1s ${bounceinAnimation};
`;

const SlideInLeftLi = styled.li`
  animation-name: ${slideinleftnimation};
  animation-duration: ${props => props.time || 1}s;
  animation-delay: 0s;
  font-size: 1.7em;
`;

const IndexPage = () => (
  <div>
    <Helmet
      title="Elasticsearch Talk by Ehsan Gazar"
    />
    <Header siteTitle="Elasticsearch" nextSlide={{ link: '/who-am-i', title: '2/24: Who Am I' }} />
    <Page>
      <div className="container">
        <div className="row ">
          <BounceInDiv>
            <div className="col-12 center">
              <img
                alt="Profile Ehsan Gazar"
                style={{
                  width: '100%',
                }}
                src={elasticseachImg}
              />
            </div>
            <span>
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  display: 'inline-flex',
                  height: '1em',
                  alignItems: 'center',
                }}
              >
                <img
                  alt="ehsan gazar profile"
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    margin: 0,
                  }}
                  src={profileImg}
                />
                <a rel="noopener noreferrer" href="http://ehsangazar.com">Ehsan Gazar</a>
              </div>
            </span>
          </BounceInDiv>
          <ul>
            <SlideInLeftLi time={0.1}>
              <Link to="/who-am-i">Who Am I </Link>
            </SlideInLeftLi>
            <SlideInLeftLi time={0.2}>
              <Link to="/what-is-elastic-search">What is ElasticSearch </Link>
            </SlideInLeftLi>
            <SlideInLeftLi time={0.4}>
              <Link to="/what-is-kibana">What is Kibana </Link>
            </SlideInLeftLi>
            <SlideInLeftLi time={0.5}>
              <Link to="/how-to-install-elasticsearch">How to Install Elasticsearch </Link>
            </SlideInLeftLi>
            <SlideInLeftLi time={0.6}>
              <Link to="/how-to-install-kibana">How to Install Kibana </Link>
            </SlideInLeftLi>
            <SlideInLeftLi time={0.8}>
              <Link to="/how-to-start-with-amazon-elasticsearch-or-elastic-io">How to Start with Amazon Elasticsearch or Elastic.io </Link>
            </SlideInLeftLi>
            <SlideInLeftLi time={1}>
              <Link to="/how-to-import-sample-data-to-elasticsearch">How to Import Sample Data to Elasticsearch </Link>
            </SlideInLeftLi>
            <SlideInLeftLi time={1.2}>
              <Link to="/elasticsearch-important-concepts">Elasticsearch Importatnt Concepts </Link>
            </SlideInLeftLi>
            <SlideInLeftLi time={1.4}>
              <Link to="/elasticsearch-api-get-status">Elasticsearch API: GET status </Link>
            </SlideInLeftLi>
            <SlideInLeftLi time={1.6}>
              <Link to="/elasticsearch-api-post">Elasticsearch API: POST </Link>
            </SlideInLeftLi>
            <SlideInLeftLi time={1.8}>
              <Link to="/elasticsearch-api-put">Elasticsearch API: PUT </Link>
            </SlideInLeftLi>
            <SlideInLeftLi time={2}>
              <Link to="/elastic-search-api-get">Elasticsearch API: GET </Link>
            </SlideInLeftLi>
            <SlideInLeftLi time={2.2}>
              <Link to="/elastic-search-api-delete">Elasticsearch API: DELETE </Link>
            </SlideInLeftLi>
            <SlideInLeftLi time={2.4}>
              <Link to="/elastic-search-api-search">Elasticsearch API: SEARCH </Link>
            </SlideInLeftLi>
            <SlideInLeftLi time={2.6}>
              <Link to="/elastic-search-query-dsl">Elasticsearch API: Query DSL </Link>
            </SlideInLeftLi>
            <SlideInLeftLi time={2.8}>
              <Link to="/elastic-search-mapping">Elasticsearch API: _mapping </Link>
            </SlideInLeftLi>
            <SlideInLeftLi time={3}>
              <Link to="/elastic-search-aggregation">Elasticsearch API: Aggregation </Link>
            </SlideInLeftLi>
            <SlideInLeftLi time={3.2}>
              <Link to="/why-elasticsearch">Why ElasticSearch </Link>
            </SlideInLeftLi>
            <SlideInLeftLi time={3.4}>
              <Link to="/elasticsearch-usecases">Elasticsearch Use Cases </Link>
            </SlideInLeftLi>
            <SlideInLeftLi time={3.6}>
              <Link to="/elasticsearch-common-questions">Answering Common Questions </Link>
            </SlideInLeftLi>
            <SlideInLeftLi time={3.8}>
              <Link to="/elasticsearch-jobs">Jobs </Link>
            </SlideInLeftLi>
            <SlideInLeftLi time={4.2}>
              <Link to="/elasticsearch-sources">Sources </Link>
            </SlideInLeftLi>
            <SlideInLeftLi time={4}>
              <Link to="/thanks">Thanks </Link>
            </SlideInLeftLi>
          </ul>
        </div>
      </div>
    </Page>
  </div>
);

export default IndexPage;

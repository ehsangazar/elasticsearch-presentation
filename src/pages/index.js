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
import Routes from '../routes';

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
    <Header currentNumber={0} />
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
          <ol>
            {Routes.map((item, index) => {
              if (index === 0) return null;
              return (
                <SlideInLeftLi time={0.1}>
                  <Link to={item.link}>{item.title} </Link>
                </SlideInLeftLi>
              );
            })}
          </ol>
        </div>
      </div>
    </Page>
  </div>
);

export default IndexPage;

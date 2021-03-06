import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/greenctg.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Manuel Santiago</span>
              </p>
              <h2 className="about__heading">A software developer</h2>
              <div className="about__info">
                <PText>
                  I am from Veracruz, México. A place of beauty and nature.
                  Since my childhood, I love sports, music and technology. I
                  always try to improve my coding skills.
                  <br /> <br />
                  I decided to be a software developer because it&apos;s fascinating
                  to create things and make them work. I find it really interesting
                  and I enjoyed the process a lot.
                  <br />
                  <br />
                  My goal is to improve as a software developer and contribute to writing
                  clean code and easy to read.
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="University"
                items={['Instituto Tecnológico Superior de Teziutlán','2016-2020']}
              />
              <AboutInfoItem
                title="Course"
                items={['BEDU - Web Development with Javascript','Oct 2020 - Jan 2021']}
              />
              <AboutInfoItem
                title="Course"
                items={['BEDU - Cibersecurity','May 2021 - Jun 2021']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="Programming Languages"
                items={['Javascript', 'PHP', 'C#', 'Java']}
              />
              <AboutInfoItem
                title="Tools"
                items={[
                  'MongoDB',
                  'ExpressJS',
                  'NodeJS',
                  'ReactJS',
                  'MySQL',
                  'Git',
                ]}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}

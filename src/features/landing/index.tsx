import React, { useCallback, useEffect } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import flex from '@shared/styles/flex';

const Landing = () => {
  //[willFix]
  const handleSrollEvent = useCallback((e: any) => {
    // if (e.deltaY > 0) {
    //   console.log('==', e.deltaY > 0);
    //   window.scrollTo({
    //     top: window.outerHeight - 60,
    //     left: 0,
    //     behavior: 'smooth',
    //   });
    // }
  }, []);

  useEffect(() => {
    window.addEventListener('wheel', (e) => handleSrollEvent(e));

    return () => {
      window.removeEventListener('wheel', handleSrollEvent);
    };
  }, []);

  return (
    <Main>
      <div>
        <StLeft>
          <Image
            alt="flower"
            src="/images/landing/landing-left-top.png"
            width={939}
            height={872}
            priority={true}
          />
        </StLeft>
        <StRightTop>
          <Image
            alt="flower"
            src="/images/landing/landing-right-top.png"
            width={805}
            height={322}
            priority={true}
          />
        </StRightTop>
        <StRightBottom>
          <Image
            alt="flower"
            src="/images/landing/landing-right-bottom.png"
            layout="fill"
          />
        </StRightBottom>
        <StLeftBottom>
          <Image
            alt="flower"
            src="/images/landing/landing-bottom.png"
            layout="fill"
            priority={true}
          />
        </StLeftBottom>
      </div>
      <StText>
        <h1>Imagination becomes reality</h1>
        <strong>{"April's world"}</strong>
        <button>▼</button>
      </StText>
    </Main>
  );
};

export default Landing;

const Main = styled.section`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  color: var(--text-555);
  background: var(--compo-primary);

  img {
    filter: drop-shadow(-5px 10px 2px rgba(0, 0, 0, 0.5));
  }
`;

const StText = styled.div`
  ${flex({
    direction: 'col',
  })};
  width: 90vw;
  height: 100vh;
  margin: auto;
  color: var(--white);
  text-align: center;
  z-index: 2;

  h1 {
    margin-bottom: 100px;
    font-size: 80px;
    font-weight: 900;
    letter-spacing: -0.5px;
    animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) 1s
      both;
    z-index: 100;

    @keyframes tracking-in-expand {
      0% {
        letter-spacing: -0.5em;
        opacity: 0;
      }
      40% {
        opacity: 0.6;
      }
      100% {
        opacity: 1;
      }
    }

    @media ${({ theme }) => theme.mobile} {
      font-size: 60px;
    }
  }

  strong {
    font-size: 24px;
  }

  button {
    position: absolute;
    bottom: 50px;
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    color: rgba(255, 255, 255, 0.8);
    font-size: 20px;
    animation: blink-effect 2s infinite ease-in-out;
  }

  @keyframes blink-effect {
    50% {
      opacity: 0;
    }
  }
`;

const StLeft = styled.div`
  position: absolute;
  top: -2px;
  left: -2px;
  animation: vibrateLeft 2s linear infinite normal both;

  @keyframes vibrateLeft {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(-2px, 2px);
    }
    40% {
      transform: translate(-2px, -2px);
    }
    60% {
      transform: translate(2px, 2px);
    }
    80% {
      transform: translate(2px, -2px);
    }
    100% {
      transform: translate(0);
    }
  }
`;

const StRightTop = styled.div`
  position: absolute;
  top: -2px;
  right: -2px;

  animation: vibrateRight 2s linear infinite normal both;

  @keyframes vibrateRight {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(2px, -2px);
    }
    40% {
      transform: translate(2px, 2px);
    }
    60% {
      transform: translate(-2px, -2px);
    }
    80% {
      transform: translate(-2px, 2px);
    }
    100% {
      transform: translate(0);
    }
  }
`;

const StRightBottom = styled.div`
  position: absolute;
  right: -2px;
  bottom: 400px;
  width: 300px;
  height: 600px;

  animation: vibrateBottom 2s linear infinite normal both;

  @keyframes vibrateBottom {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(2px, -2px);
    }
    40% {
      transform: translate(2px, 2px);
    }
    60% {
      transform: translate(-2px, -2px);
    }
    80% {
      transform: translate(-2px, 2px);
    }
    100% {
      transform: translate(0);
    }
  }

  @media ${({ theme }) => theme.mobile} {
    bottom: 200px;
    width: 100px;
    height: 200px;
  }
`;

const StLeftBottom = styled.div`
  position: absolute;
  left: -2px;
  bottom: -250px;
  width: 101vw;
  height: 50vh;

  animation: vibrateLeftBottom 2s linear infinite normal both;

  @keyframes vibrateLeftBottom {
    0% {
      transform: translate(0);
    }
    20% {
      transform: translate(2px, -2px);
    }
    40% {
      transform: translate(2px, 2px);
    }
    60% {
      transform: translate(-2px, -2px);
    }
    80% {
      transform: translate(-2px, 2px);
    }
    100% {
      transform: translate(0);
    }
  }

  @media ${({ theme }) => theme.mobile} {
    bottom: -50px;
    width: 100vw;
    height: 20vh;
  }
`;

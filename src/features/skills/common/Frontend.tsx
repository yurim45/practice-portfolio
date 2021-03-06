import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { formSet } from '@shared/styles/variables';
import flex from '@shared/styles/flex';
import {
  logoCss,
  logoHtml,
  logoJs,
  logoNextjs,
  logoRQ,
  logoReact,
  logoRecoil,
  logoSB,
  logoSC,
  logoTS,
} from '@images/skills/index';

const Frontend = () => {
  return (
    <StContainer className="frontend">
      <h3>Frontend</h3>
      <ul>
        <li>
          <Image
            alt="HTML-Logo"
            src={logoHtml}
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </li>
        <li>
          <Image
            alt="CSS-Logo"
            src={logoCss}
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </li>
        <li>
          <Image
            alt="Styled-components-Logo"
            src={logoSC}
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </li>
        <li>
          <Image
            alt="JS-Logo"
            src={logoJs}
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </li>
        <li>
          <Image
            alt="TS-Logo"
            src={logoTS}
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </li>
        <li>
          <Image
            alt="React-Logo"
            src={logoReact}
            width="100%"
            height="100%"
            objectFit="contain"
          />
        </li>
        <li>
          <Image alt="Storybook-Logo" src={logoSB} width={140} height={120} />
        </li>
        <li>
          <Image alt="Recoil-Logo" src={logoRecoil} width={150} height={60} />
        </li>
        <li>
          <Image alt="React-Query-Logo" src={logoRQ} width={150} height={90} />
        </li>
        <li>
          <Image alt="Nextjs-Logo" src={logoNextjs} width={150} height={100} />
        </li>
      </ul>
    </StContainer>
  );
};

export default Frontend;

const StContainer = styled.div`
  ${flex({ justify: 'start', direction: 'col' })};
  ${formSet()};

  h3 {
    margin-bottom: 20px;
    color: var(--text-yellow);
    font-size: 28px;
    font-weight: 600;
    white-space: nowrap;
  }

  li {
    margin: 10px 0;
    width: 150px;
    height: 100px;
    ${flex({})};
  }
`;

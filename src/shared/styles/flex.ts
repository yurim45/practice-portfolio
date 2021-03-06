import { css } from 'styled-components';

type FlexArgsType = {
  justify?: 'center' | 'start' | 'end' | 'between' | 'even' | 'around';
  align?: 'center' | 'end' | 'start';
  direction?: 'col' | 'row';
};

const flex = ({
  justify = 'center',
  align = 'center',
  direction = 'row',
}: FlexArgsType) => css<FlexArgsType>`
  display: flex;

  flex-direction: ${direction === 'row'
    ? 'row'
    : direction === 'col'
    ? 'column'
    : 'row'};

  justify-content: ${() => {
    switch (justify) {
      case 'between':
        return 'space-between';
      case 'end':
        return 'end';
      case 'start':
        return 'start';
      default:
        return 'center';
    }
  }};

  align-items: ${() => {
    switch (align) {
      case 'start':
        return 'start';
      case 'end':
        return 'end';
      case 'center':
        return 'center';
      default:
        return 'center';
    }
  }};
`;

export default flex;

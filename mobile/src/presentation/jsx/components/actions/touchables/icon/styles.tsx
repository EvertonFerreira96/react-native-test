import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

interface ContainerProps {
  alignCenterWrapper: boolean;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  ${({ alignCenterWrapper }) =>
    alignCenterWrapper &&
    css`
      align-items: center;
      justify-content: center;
    `}
`;

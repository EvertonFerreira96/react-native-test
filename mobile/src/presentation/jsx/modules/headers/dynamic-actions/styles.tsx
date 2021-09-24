import styled from 'styled-components/native';

import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const IconContainer = styled.View``;

export const Title = styled.Text`
  flex: 1;

  padding: 0 0 0 ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.typography.title.natural};
  line-height: ${({ theme }) => theme.typography.medium.dark.lineHeight}px;
  font-size: ${({ theme }) => theme.typography.medium.dark.fontSize}px;
  font-family: ${({ theme }) => theme.typography.medium.dark.fontFamily};

  letter-spacing: ${RFValue(0.3)}px;
`;

import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${RFValue(8)}px ;

  border-color: ${({ theme }) => theme.colors.background.primary};
  border-width: ${RFValue(1)}px;

`;

export const Input = styled(TextInput)`
  flex:1;
  padding: 0 ${RFValue(8)}px;
  align-items: center;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.typography.title.natural};
  line-height: ${({ theme }) => theme.typography.regular.dark.lineHeight}px;
  font-size: ${({ theme }) => theme.typography.regular.dark.fontSize}px;
  font-family: ${({ theme }) => theme.typography.regular.dark.fontFamily};

  letter-spacing: ${RFValue(0.3)}px;

`;


export const IconContainer = styled.View`
flex-direction: row;
align-items: center;
`; 
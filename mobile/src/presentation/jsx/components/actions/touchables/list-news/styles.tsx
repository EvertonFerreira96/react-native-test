import styled from 'styled-components/native';

import { TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface IconContainerProps {
  background?: string;
}

interface TextProps {
  size?: 'small' | 'medium';
}

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.85,
})`
  width: 100%;

  flex-direction: row;

  align-items: flex-start;
  justify-content: space-between;

  padding: ${RFValue(16)}px  ${RFValue(8)}px;
  margin: ${RFValue(4)}px ${RFValue(4)}px ;

  background: ${({ theme }) => theme.colors.background.primary};

  border-radius: ${RFValue(4)}px;
`;

export const TextContainer = styled(View)`
  flex: 1;
  flex-direction: row;

  align-items: flex-start;
  justify-content: space-between;

`;

export const Wrapper = styled.View`
  border-bottom-width: 1px;
  flex: 1;
  border-color: ${({ theme }) => theme.colors.border.primary};

`;

export const IconContainer = styled.View`
  background:  ${({ theme }) => theme.colors.primary.dark};
  border-radius: 500px;
  padding: ${RFValue(8)}px;
` 
;
export const MetaData = styled.View`
  flex:1;
  margin: 0 ${RFValue(8)}px;
`;

export const Title = styled.Text<TextProps>`
flex:1;
  color: ${({ theme }) => theme.colors.typography.title.contrast};

  line-height: ${({ theme }) =>
       theme.typography.regular.natural.lineHeight}px;
  font-size: ${({ theme }) =>
       theme.typography.small.natural.fontSize }px;
  font-family: ${({ theme }) => theme.typography.regular.dark.fontFamily};
`;

export const Author = styled.Text<TextProps>`
  color: ${({ theme }) => theme.colors.typography.subTitle.contrast};
  line-height: ${({ theme }) =>
       theme.typography.little.natural.lineHeight}px;
  font-size: ${({ theme }) =>
       theme.typography.little.natural.fontSize }px  ;
  font-family: ${({ theme }) => theme.typography.little.dark.fontFamily};
`;

export const Description = styled.Text<TextProps>`
  color: ${({ theme }) => theme.colors.typography.subTitle.contrast};
  line-height: ${({ theme }) =>
       theme.typography.regular.natural.lineHeight}px;
  font-size: ${({ theme }) =>
       theme.typography.small.natural.fontSize }px  ;
  font-family: ${({ theme }) => theme.typography.regular.dark.fontFamily};
`;
export const Date = styled.Text<TextProps>`
text-align: right;
  color: ${({ theme }) => theme.colors.typography.subTitle.contrast};
  line-height: ${({ theme }) =>
       theme.typography.little.natural.lineHeight}px;
  font-size: ${({ theme }) =>
       theme.typography.little.natural.fontSize }px  ;
  font-family: ${({ theme }) => theme.typography.little.light.fontFamily};
`;

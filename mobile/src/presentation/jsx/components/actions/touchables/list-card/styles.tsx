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
  margin: ${RFValue(4)}px 0;

  background: ${({ theme }) => theme.colors.background.primary};

  border-radius: ${RFValue(4)}px;
`;

export const TextContainer = styled(View)`
  flex: 1;
`;

export const Wrapper = styled.View`
  border-bottom-width: 1px;
  flex: 1;
  border-color: ${({ theme }) => theme.colors.border.primary};
  flex-direction: row;

align-items: flex-start;
justify-content: space-between;
`;

export const Title = styled.Text<TextProps>`
  color: ${({ theme }) => theme.colors.typography.title.contrast};

  line-height: ${({ theme }) =>
       theme.typography.regular.natural.lineHeight}px;
  font-size: ${({ theme }) =>
       theme.typography.small.natural.fontSize }px;
  font-family: ${({ theme }) => theme.typography.regular.dark.fontFamily};
`;

export const SubTitle = styled.Text<TextProps>`
  color: ${({ theme }) => theme.colors.typography.subTitle.contrast};
  line-height: ${({ theme }) =>
       theme.typography.regular.natural.lineHeight}px;
  font-size: ${({ theme }) =>
       theme.typography.small.natural.fontSize }px  ;
  font-family: ${({ theme }) => theme.typography.regular.dark.fontFamily}px;
`;

export const IconCardContainer = styled(View)<IconContainerProps>`
  padding: ${RFValue(8)}px;
  background: ${({ background, theme }) =>
    background || theme.colors.primary.light};

  border-radius: ${RFValue(4)}px;
`;

export const IconContainer = styled(View)`
  justify-content: center;
`;

export const IconContent = styled(View)`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled(Feather).attrs(({ theme }) => ({
  size: 32,
  color: theme.colors.typography.title.contrast,
}))``;

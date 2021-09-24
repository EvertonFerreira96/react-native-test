import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface ContainerProps {
  adjustToContentWidth?: boolean;
}


interface TitleProps {
  color?: string;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: ${RFValue(8)}px 0;

  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  border-color: ${({ theme }) => theme.colors.primary.dark};
  border-width: ${RFValue(2)}px;
  border-radius: ${RFValue(5)}px;

`;

export const IconContainer = styled.View``; 

export const Title = styled.Text<TitleProps>`
  flex: 1;

  text-align: center;  
  
  color: ${({ color, theme }) =>  color || theme.colors.typography.title.natural};
  font-family: ${({ theme }) => theme.typography.regular.natural.fontFamily};
  font-size: ${({ theme }) => theme.typography.regular.natural.fontSize}px;
  line-height: ${({ theme }) => theme.typography.regular.natural.lineHeight}px;
`;

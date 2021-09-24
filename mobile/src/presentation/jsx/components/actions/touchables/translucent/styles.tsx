import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface StyledProps {
  background?: string;
  color?: string;
  border?: string;
}

export const Container = styled(TouchableOpacity)<StyledProps>`
`;

export const Title = styled.Text<StyledProps>`
  text-align: center;
  width: 100%;
  color: ${({ theme, color }) =>
    color || theme.colors.typography.title.natural};
  font-family: ${({ theme }) => theme.typography.little.natural.fontFamily};
  font-size: ${({ theme }) => theme.typography.little.natural.fontSize}px;
  line-height: ${({ theme }) => theme.typography.little.natural.lineHeight}px;
`;

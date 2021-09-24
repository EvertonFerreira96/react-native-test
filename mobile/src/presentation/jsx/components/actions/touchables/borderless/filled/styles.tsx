import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface StyledProps {
  background?: string;
  color?: string;
  border?: string;
}

export const Container = styled(TouchableOpacity)<StyledProps>`
  align-items: center;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  padding: ${RFValue(8)}px 0;

  background-color: ${({ theme, background }) =>
    background || theme.colors.primary.natural};

  border-color: ${({ theme, border }) =>
    border || theme.colors.primary.natural};
  border-width: ${RFValue(1)}px;
  border-radius: ${RFValue(5)}px;

`;

export const Title = styled.Text<StyledProps>`
  text-align: center;
  width: 100%;
  color: ${({ theme, color }) =>
    color || theme.colors.typography.title.contrast};
  font-family: ${({ theme }) => theme.typography.regular.natural.fontFamily};
  font-size: ${({ theme }) => theme.typography.regular.natural.fontSize}px;
  line-height: ${({ theme }) => theme.typography.regular.natural.lineHeight}px;
`;

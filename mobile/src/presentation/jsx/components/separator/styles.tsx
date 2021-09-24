import styled from 'styled-components/native';

export const Container = styled.View`
  
`;

interface DescriptionProps {
    color?: string;
}

export const Description = styled.Text<DescriptionProps>`
  text-align: center;
  color: ${({ theme, color }) =>
    color || theme.colors.typography.title.natural};
  font-family: ${({ theme }) => theme.typography.medium.natural.fontFamily};
  font-size: ${({ theme }) => theme.typography.medium.natural.fontSize}px;
  line-height: ${({ theme }) => theme.typography.medium.natural.lineHeight}px;
`
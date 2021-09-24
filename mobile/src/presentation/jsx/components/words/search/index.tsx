import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import { TouchableIconComponent } from '../../actions/touchables/icon';
import { Container, IconContainer, Input } from './styles';

// import { Container } from './styles';

interface TextInputComponenttProps
  extends TextInputProps {
  color?: string;
  size?: number;
  
}

export const SearchTextInputComponent: React.FC<TextInputComponenttProps> = (
    {  size, ...rest }
) => {
  const theme = useTheme();
  return (<Container>
       <IconContainer>
                <TouchableIconComponent 
                  key={Math.random()}
                  name='search'
                  size={size}
                  color={theme.colors.typography.title.contrast}
                />
                </IconContainer>
    <Input placeholderTextColor={theme.colors.typography.title.contrast} {...rest} />


  </Container>)
}

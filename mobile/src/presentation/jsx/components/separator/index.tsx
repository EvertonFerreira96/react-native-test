import React from 'react';
import { View } from 'react-native';

import { Container, Description } from './styles';

interface SeparatorComponentProps {
    description?: string;
}

export const SeparatorComponent: React.FC<SeparatorComponentProps> = ({description}) => {
  return (
      <Container>
          <Description> { description || '|'} </Description>
      </Container>
  )}

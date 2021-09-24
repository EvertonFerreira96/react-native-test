import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Platform,
} from 'react-native';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import { Container, Icon } from './styles';

interface TouchableGoBackComponentProps extends TouchableOpacityProps {
  size?: number;
}

export const TouchableGoBackComponent: React.FC<TouchableGoBackComponentProps> =
  ({ onPress, size = 32, ...rest }) => {
    const theme = useTheme();
    const { goBack } = useNavigation();
    const icon = Platform.OS === 'ios' ? 'chevron-left' : 'arrow-left';

    return (
      <Container >
        <TouchableOpacity {...rest} onPress={onPress || goBack}>
          <Icon
            name={icon}
            size={size}
            color={theme.colors.typography.title.natural}
          />
        </TouchableOpacity>
      </Container>
    );
  };

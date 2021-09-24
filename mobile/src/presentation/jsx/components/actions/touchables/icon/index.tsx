import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Feather, Ionicons, FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { Container } from './styles';

interface TouchableIconComponentProps extends TouchableOpacityProps {
  name: string;
  size?: number;
  color?: string;
  lib?: 'ionicons' | 'feather' | 'fontAwesome' | 'materialCommunityIcons' | 'entypo';
  action?: () => void;
  alignCenterWrapper?: boolean;
}

export const TouchableIconComponent: React.FC<TouchableIconComponentProps> = ({
  name,
  color,
  alignCenterWrapper = false,
  size = 24,
  lib = 'feather',
  action,
  ...rest
}) => {
  const theme = useTheme();

  const icons = { feather: Feather, ionicons: Ionicons , fontAwesome: FontAwesome, materialCommunityIcons: MaterialCommunityIcons, entypo: Entypo };
  const Lib = icons[lib];
  return (
    <Container
      onPress={action}
      alignCenterWrapper={alignCenterWrapper}
      activeOpacity={0.7}
      {...rest}
    >
      <Lib
        name={name as unknown as any}
        color={color || theme.colors.typography.title.natural}
        size={size}
      />
    </Container>
  );
};

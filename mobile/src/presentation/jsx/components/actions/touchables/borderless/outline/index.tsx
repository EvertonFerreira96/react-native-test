import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { TouchableIconComponent } from '../../icon';

import { Container, IconContainer, Title } from './styles';

interface TouchableOutlineBorderlessComponentProps
  extends TouchableOpacityProps {
  title: string;
  color?: string;
  loading?: boolean;
  adjustToContentWidth?: boolean;
  size?: number;
  icons: {
    location: 'left' | 'right';
    name: string;
    lib?: 'ionicons' | 'feather' | 'fontAwesome' | 'materialCommunityIcons' | 'entypo'; 
    action?: () => void;
    color?: string;
    size?: number;
    invisible?: boolean;
  }[];
}
export const TouchableOutlineBorderlessComponent: React.FC<TouchableOutlineBorderlessComponentProps> =
  ({ icons,color,  size = 32,  title, loading, adjustToContentWidth = false, ...rest }) => {
    return (
      <Container
        activeOpacity={0.7}
        adjustToContentWidth={adjustToContentWidth}
        {...rest}
      >
      <IconContainer>
          {icons &&
          icons.filter(item => item.location === 'left' && !item.invisible)
            .length > 0 && (
            icons
              .filter(item => item.location === 'left' && !item.invisible)
              .map(item => (
                <TouchableIconComponent 
                  key={Math.random()}
                  name={item.name}
                  size={item.size || size}
                  color={item.color}
                  lib={item.lib || 'ionicons'}
                  onPress={item.action || undefined}
                />
              ))
          ) }
        </IconContainer>

        {loading ? (
          <></>
        ) : (
          <Title color={color}>{title}</Title>
        )}

<IconContainer>
          {icons &&
            icons.filter(item => item.location === 'right' && !item.invisible)
              .length > 0 &&
            icons
              .filter(item => item.location === 'right' && !item.invisible)
              .map(item => (
                <TouchableIconComponent
                  key={Math.random()}
                  name={item.name}
                  size={item.size || size}
                  color={item.color}
                  lib={item.lib || 'ionicons'}
                  onPress={item.action || undefined}
                />
              ))}
        </IconContainer>

      </Container>
    );
  };

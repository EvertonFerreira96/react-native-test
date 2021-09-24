import React from 'react';

import { TouchableGoBackComponent } from '../../../components/actions/touchables/go-back';
import { TouchableIconComponent } from '../../../components/actions/touchables/icon';

import { Container, Title, IconContainer } from './styles';

interface ActionsBetweenHeaderModuleProps {
  title?: string;
  icons: {
    location: 'left' | 'right';
    name: string;
    lib?: 'ionicons' | 'feather' | 'fontAwesome'; 
    action?: () => void;
    color?: string;
    size?: number;
    invisible?: boolean;
  }[];
  size?: number;
    disable?: boolean;
    spacing?: number;
}

export const DynamicActionsHeaderModule: React.FC<ActionsBetweenHeaderModuleProps> =
  ({ title, icons, size, spacing, disable = false }) => {
    return (
      <Container >
        <IconContainer>
          {icons &&
          icons.filter(item => item.location === 'left' && !item.invisible)
            .length > 0 ? (
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
          ) : !disable && (
            <TouchableGoBackComponent size={size} />
          )}
        </IconContainer>

        {title && <Title>{title}</Title>}

        <IconContainer>
          {icons && disable &&
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
                  style={{ marginLeft: spacing || 0 }}
                />
              ))}
        </IconContainer>
      </Container>
    );
  };

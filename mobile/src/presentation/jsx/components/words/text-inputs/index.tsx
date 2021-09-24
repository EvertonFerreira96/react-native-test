import React from 'react';
import { TextInputProps } from 'react-native';
import { TouchableIconComponent } from '../../actions/touchables/icon';
import { Container, IconContainer, Input } from './styles';

// import { Container } from './styles';

interface TextInputComponenttProps
  extends TextInputProps {
  color?: string;
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

const TextInputComponent: React.FC<TextInputComponenttProps> = (
    { icons, size, ...rest }
) => {
  return (<Container>
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
    <Input {...rest} />
<IconContainer>
          {icons &&
          icons.filter(item => item.location === 'right' && !item.invisible)
            .length > 0 && (
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
              ))
          ) }
        </IconContainer>

  </Container>)
}

export default TextInputComponent;
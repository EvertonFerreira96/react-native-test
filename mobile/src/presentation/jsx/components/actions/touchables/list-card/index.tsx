import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  TextContainer,
  Title,
  SubTitle,
  Icon,
  IconContainer,
  Wrapper,
  IconContent,
} from './styles';
import { Image } from 'react-native';
interface TouchableListCardComponentProps
  extends Omit<TouchableOpacityProps, 'activeOpacity'> {
  title?: string;
  subTitle?: string;
  avatar?: string;
  color?: string;
  background?: string;
  size?: 'small' | 'medium';
  iconType?: 'chevron-up' | 'chevron-right' | 'chevron-down' | 'chevron-left';
}

export const TouchableListCardComponent: React.FC<TouchableListCardComponentProps> =
  ({
    avatar,
    size,
    color,
    title,
    subTitle,
    iconType,
    background,
    ...rest
  }) => {

    return (
      <Container {...rest}>
          <Image source={{uri: avatar}} resizeMode="contain"  style={{ width: 80, height:80, marginRight: 16}}/>
          <Wrapper>
        <TextContainer>
          <Title size={size}>{title}</Title>
          <SubTitle size={size}>{subTitle}</SubTitle>
        </TextContainer>
        <IconContainer>
          <IconContent>
            <Icon name={iconType}   />
          </IconContent>
        </IconContainer>
            </Wrapper>
      </Container>
    );
  };

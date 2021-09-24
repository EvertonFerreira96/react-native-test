import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { format } from 'date-fns';
import {
  Container,
  TextContainer,
  Title,
  Author,
  Date as DateText,
  Description,
  Wrapper,
  IconContainer, 
  MetaData
} from './styles';
import { Image } from 'react-native';
import { TouchableIconComponent } from '../icon';

interface TouchableListNewsComponentProps

  extends Omit<TouchableOpacityProps, 'activeOpacity'> {
  title?: string;
  author?: string;
  description?: string;
  date?: string;
  avatar?: string;
  color?: string;
  background?: string;
  size?: 'small' | 'medium';
}

export const TouchableListNewsComponent: React.FC<TouchableListNewsComponentProps> =
  ({
    avatar,
    size, date,
    color,
    title,
    author,
    description,
    background,
    ...rest
  }) => {
    
    return (
      <Container {...rest}>
        <Wrapper>
          <TextContainer>
            <IconContainer >
            <TouchableIconComponent  name="megaphone" lib="entypo" />
              </IconContainer>
              <MetaData>
            <Title size={size}>{title}</Title>
          <Author size={size}>por: {author}</Author>
                </MetaData>
            { date &&   <DateText size={size}> {  format( new Date(date), 'dd/mm hh:mm')  }</DateText> }
          </TextContainer>

         { avatar &&  <Image source={{uri: avatar}} resizeMode="contain"  style={{ width: '100%', height: 320}}/> }

         {description && <Description size={size}>{description}</Description> }
        </Wrapper>
      </Container>
    );
  };

import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

interface TouchableTranslucentComponentProps
  extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
  loadingHeight?: number;
  background?: string;
  color?: string;
  border?: string;
}

export const TouchableTranslucentComponent: React.FC<TouchableTranslucentComponentProps> =
  ({
    border,
    color,
    background,
    title,
    loading,
    loadingHeight,
    onPress,
    ...rest
  }) => {
    return (
      <Container
        activeOpacity={0.7}
        onPress={onPress}
        background={background}
        color={color}
        border={border}
        {...rest}
      >
        {loading ? (
          <> </>
        ) : (
          <Title color={color}>
            {title}
          </Title>
        )}
      </Container>
    );
  };

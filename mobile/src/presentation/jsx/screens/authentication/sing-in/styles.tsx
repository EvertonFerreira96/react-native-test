import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';


export const HeaderContainer = styled.View`
padding: 0 ${ RFValue(20)}px;
`;

export const WrapperContainer = styled.View`
padding: 0 ${ RFValue(20)}px;
`;

export const Title = styled.Text`
  text-align: left;
  color: ${({ theme }) => theme.colors.typography.title.natural};
  font-size: ${({ theme }) => theme.typography.medium.light.fontSize}px;
  font-family: ${({ theme }) => theme.typography.medium.light.fontFamily};
  line-height: ${({ theme }) => theme.typography.medium.light.lineHeight}px;

`;

export const AuthenticationContainer = styled.View`
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${ RFValue(8)}px;
`;


export const FooterContainer = styled.View`
  padding: 0 ${ RFValue(20)}px;
`;


export const Container = styled(LinearGradient).attrs(({ theme }) => ({
    colors: [theme.colors.background.gradient.top, theme.colors.background.gradient.bottom],
  }))`
  height: ${Dimensions.get('window').height}px;
  width: 100%;
  padding: ${getStatusBarHeight() + RFValue(20)}px 0 ${getStatusBarHeight()}px;
  justify-content: space-between; 
  flex-direction: column;
`;




import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions, FlatList } from 'react-native';


export const HeaderContainer = styled.View`
  padding:  ${getStatusBarHeight() + RFValue(20)}px 0 0;
  background: ${({ theme }) => theme.colors.primary.dark};
`;

export const HeaderContent = styled.View`
  padding:  0 ${ RFValue(20)}px 0;
  background: ${({ theme }) => theme.colors.primary.dark};
`;

export interface FeedsProps {
  sumario?: string;
  remetente?: string;
  data?: string; 
  openImagemUrl?: string; 
  idMensagem?: string; 

}

export const WrapperContainer = styled.View`
flex:1;
  background: ${({ theme }) => theme.colors.typography.title.natural};


`;
export const Feeds =
styled(
  FlatList as new () => FlatList<FeedsProps>,
).attrs(() => ({
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
}))`
  padding:0 0 ${getStatusBarHeight()}px;

`;

export const Title = styled.Text`
  text-align: left;
  color: ${({ theme }) => theme.colors.typography.title.natural};
  font-size: ${({ theme }) => theme.typography.medium.light.fontSize}px;
  font-family: ${({ theme }) => theme.typography.medium.light.fontFamily};
  line-height: ${({ theme }) => theme.typography.medium.light.lineHeight}px;

`;



export const SearchContainer = styled.View`
margin: ${ RFValue(4)}px 0 0;
padding: ${ RFValue(8)}px;

background: ${({theme}) => theme.colors.wrapper.light};

`;



export const Container = styled(LinearGradient).attrs(({ theme }) => ({
    colors: [theme.colors.wrapper.light , theme.colors.wrapper.light],
  }))`
  height: ${Dimensions.get('window').height}px;
  width: 100%;
  justify-content: space-between; 
  flex-direction: column;
`;



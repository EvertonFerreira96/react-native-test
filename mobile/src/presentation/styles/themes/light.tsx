import { PixelRatio } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default {
  colors: {
    primary: {
      light: '#0099A0',
      natural: '#0099A0',
      dark: '#006EA4',
    },
    secondary: {
      light: '#F3F3F3',
      natural: '#F3F3F3',
      dark: '#F3F3F3',
    },
    wrapper: {
      primary: '#F3F3F3',
      contrast: '#eeeeee',
      light: '#E0E0E0',
    },
    background: {
      primary: '#FFFFFF',
      contrast: '#000000',
      gradient: {
        top: '#0099A0',
        bottom: '#006EA4'
      }
    },
    border:{
      primary: '#CCCCCC',
    },
    typography:{
      title: {
        natural: '#FFFFFF',
        contrast: '#333333',
      },
      subTitle: {
        natural: '#F2F2F2',
        contrast: '#4F4F4F',
      },
    },
  
    barStyle: {
      main: 'dark-content',
      alternative: 'light-content',
    },
  },
  typography: {
    little: {
      light: {
        fontSize: RFValue(PixelRatio.getFontScale() * 12),
        lineHeight: RFValue(PixelRatio.getFontScale() * 20),
        fontFamily: 'Inter-Regular',
      },
      natural: {
        fontSize: RFValue(PixelRatio.getFontScale() * 12),
        lineHeight: RFValue(PixelRatio.getFontScale() * 20),
        fontFamily: 'Inter-Medium',
      },
      dark: {
        fontSize: RFValue(PixelRatio.getFontScale() * 12),
        lineHeight: RFValue(PixelRatio.getFontScale() * 22),
        fontFamily: 'Inter-Bold',
      },
    },
    small: {
      light: {
        fontSize: RFValue(PixelRatio.getFontScale() * 14),
        lineHeight: RFValue(PixelRatio.getFontScale() * 20),
        fontFamily: 'Inter-Regular',
      },
      natural: {
        fontSize: RFValue(PixelRatio.getFontScale() * 14),
        lineHeight: RFValue(PixelRatio.getFontScale() * 16),
        fontFamily: 'Inter-Medium',
      },
      dark: {
        fontSize: RFValue(PixelRatio.getFontScale() * 14),
        lineHeight: RFValue(PixelRatio.getFontScale() * 16),
        fontFamily: 'Inter-Bold',
      },
    },
    regular: {
      light: {
        fontSize: RFValue(PixelRatio.getFontScale() * 16),
        lineHeight: RFValue(PixelRatio.getFontScale() * 24),
        fontFamily: 'Inter-Regular',
      },
      natural: {
        fontSize: RFValue(PixelRatio.getFontScale() * 16),
        lineHeight: RFValue(PixelRatio.getFontScale() * 24),
        fontFamily: 'Inter-Medium',
      },
      dark: {
        fontSize: RFValue(PixelRatio.getFontScale() * 16),
        lineHeight: RFValue(PixelRatio.getFontScale() * 24),
        fontFamily: 'Inter-SemiBold',
      },
      bold: {
        fontSize: RFValue(PixelRatio.getFontScale() * 16),
        lineHeight: RFValue(PixelRatio.getFontScale() * 24),
        fontFamily: 'Inter-ExtraBold',
      },
    },
    medium: {
      light: {
        fontSize: RFValue(PixelRatio.getFontScale() * 18),
        lineHeight: RFValue(PixelRatio.getFontScale() * 28),
        fontFamily: 'Inter-Regular',
      },
      natural: {
        fontSize: RFValue(PixelRatio.getFontScale() * 18),
        lineHeight: RFValue(PixelRatio.getFontScale() * 28),
        fontFamily: 'Inter-Medium',
      },
      dark: {
        fontSize: RFValue(PixelRatio.getFontScale() * 18),
        lineHeight: RFValue(PixelRatio.getFontScale() * 28),
        fontFamily: 'Inter-SemiBold',
      },
      bold: {
        fontSize: RFValue(PixelRatio.getFontScale() * 18),
        lineHeight: RFValue(PixelRatio.getFontScale() * 28),
        fontFamily: 'Inter-ExtraBold',
      },
    },
    large: {
      natural: {
        fontSize: RFValue(PixelRatio.getFontScale() * 24),
        lineHeight: RFValue(PixelRatio.getFontScale() * 32),
        fontFamily: 'Inter-Medium',
      },
    },
    extraLarge: {
      dark: {
        fontSize: RFValue(PixelRatio.getFontScale() * 36),
        lineHeight: RFValue(PixelRatio.getFontScale() * 44),
        fontFamily: 'Inter-ExtraBold',
      },
    },
  },
};

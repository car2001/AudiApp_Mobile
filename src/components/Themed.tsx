/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { 
  Text as DefaultText, 
  View as DefaultView, 
  TextInput as DefaultTextInput,
  ScrollView as DefaultScrollView 
} from 'react-native';

import Colors from '@/src/constants/Colors';
import { useColorScheme } from './useColorScheme';
import MainStyles from '../styles/styles';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type TextInputProps = ThemeProps & DefaultTextInput['props'];
export type ScrollViewProps = ThemeProps & DefaultScrollView["props"];

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function ScrollView(props: ScrollViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultScrollView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function TextInput(props:TextInputProps){
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'backgroundInputColor');
  const shadowColor = useThemeColor({light: lightColor, dark:darkColor},"shadowInputColor");
  const borderColor = useThemeColor({light: lightColor, dark:darkColor},"borderInputColor");
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const placeHolderTextColor = useThemeColor({ light: lightColor, dark: darkColor }, 'placeholderTextColor');
  
  return (
    <DefaultTextInput 
      placeholderTextColor={placeHolderTextColor} 
      style={[{ backgroundColor, shadowColor, borderColor, color }, MainStyles.textInput, style]} 
      {...otherProps} 
    />
  )
} 
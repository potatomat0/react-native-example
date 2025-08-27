import { StyleSheet, Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { DesignSystem } from '@/constants/DesignSystem';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  const tint = useThemeColor({}, 'tint');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? [styles.link, { color: tint }] : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontFamily: DesignSystem.typography.fontFamilyBase,
    fontSize: DesignSystem.typography.fontSizeMd,
    lineHeight:
      DesignSystem.typography.fontSizeMd * DesignSystem.typography.lineHeightBase,
  },
  defaultSemiBold: {
    fontFamily: DesignSystem.typography.fontFamilyBase,
    fontWeight: '600',
    fontSize: DesignSystem.typography.fontSizeMd,
    lineHeight:
      DesignSystem.typography.fontSizeMd * DesignSystem.typography.lineHeightBase,
  },
  title: {
    fontFamily: DesignSystem.typography.fontFamilyBase,
    fontWeight: '700',
    fontSize: DesignSystem.typography.fontSizeXl,
    lineHeight:
      DesignSystem.typography.fontSizeXl * DesignSystem.typography.lineHeightBase,
  },
  subtitle: {
    fontFamily: DesignSystem.typography.fontFamilyBase,
    fontWeight: '700',
    fontSize: DesignSystem.typography.fontSizeLg,
  },
  link: {
    fontFamily: DesignSystem.typography.fontFamilyBase,
    lineHeight:
      DesignSystem.typography.fontSizeMd * DesignSystem.typography.lineHeightBase,
    fontSize: DesignSystem.typography.fontSizeMd,
  },
});

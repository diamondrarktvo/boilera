import Box, { BoxProps } from './Box';
import React from 'react';
import Text from './Text';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

type Props = {
   children: React.ReactNode;
   withDefaultPadding?: boolean;
   typeOfScreen: 'tab' | 'stack' | 'component' | 'top';
   titleTabScreen?: string;
} & Partial<BoxProps>;

type HeaderProps = {
   title?: string | undefined;
};

const HeaderTabTitle = ({ title }: HeaderProps) => {
   return title ? (
      <Box paddingVertical="s" backgroundColor="mainBackground">
         <Text variant="headerNavigation" color={'primary'}>
            {title}
         </Text>
      </Box>
   ) : null;
};

const Scaffold: React.FC<Props> = ({
   children,
   typeOfScreen,
   withDefaultPadding = true,
   titleTabScreen,
   ...props
}) => {
   const insets = useSafeAreaInsets();
   return (
      <SafeAreaView style={styles.safeAreaViewContainer} edges={['left', 'right', 'top']}>
         <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={insets.top + 10}>
            <Box
               flex={1}
               padding={withDefaultPadding ? 's' : 'none'}
               backgroundColor="mainBackground"
               {...props}>
               {typeOfScreen === 'tab' && <HeaderTabTitle title={titleTabScreen} />}
               {children}
            </Box>
         </KeyboardAvoidingView>
      </SafeAreaView>
   );
};

export default Scaffold;

const styles = StyleSheet.create({
   safeAreaViewContainer: {
      flex: 1,
   },
});

import Box, { BoxProps } from './Box';
import React from 'react';
import Text from './Text';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

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
   return (
      <SafeAreaView style={styles.safeAreaViewContainer}>
         <Box
            flex={1}
            padding={withDefaultPadding ? 's' : 'none'}
            backgroundColor="mainBackground"
            {...props}>
            {typeOfScreen === 'tab' && <HeaderTabTitle title={titleTabScreen} />}
            {children}
         </Box>
      </SafeAreaView>
   );
};

export default Scaffold;

const styles = StyleSheet.create({
   safeAreaViewContainer: {
      flex: 1,
   },
});

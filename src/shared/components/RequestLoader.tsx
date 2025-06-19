import { ActivityIndicator } from 'react-native-paper';
import Box, { BoxProps } from './Box';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Overlay } from '@rneui/themed';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';
import Text from './Text';
import { Layouts } from '_utils';
import { useGetTheme } from '_hooks';

type Props = {
   isOverlay?: boolean;
   error?: FetchBaseQueryError | SerializedError;
   children: React.ReactNode;
   isLoading: boolean;
} & Partial<BoxProps>;

const RequestLoader: React.FC<Props> = ({ isOverlay, error, children, isLoading, ...props }) => {
   const { t } = useTranslation();
   const { colors } = useGetTheme();

   return (
      <>
         {children}
         {isLoading &&
            (isOverlay ? (
               <Overlay isVisible overlayStyle={styles.overlayContainer} animationType="fade">
                  <Box
                     backgroundColor={'overlayBackground'}
                     paddingVertical={'m'}
                     flexDirection={'column'}
                     justifyContent={'space-evenly'}
                     alignItems={'center'}
                     height={Layouts.heightPercentageToDP(25)}
                     width={Layouts.widthPercentageToDP(60)}
                     borderRadius={'lg'}>
                     <ActivityIndicator size="large" color={colors.primary} />
                     <Text color={'offWhite'}>Veuillez patienter un instant ...</Text>
                  </Box>
               </Overlay>
            ) : (
               <Box
                  flex={1}
                  alignItems={'center'}
                  justifyContent={'center'}
                  position={'absolute'}
                  top={0}
                  bottom={0}
                  right={0}
                  left={0}
                  zIndex={1}>
                  <Box
                     backgroundColor={'overlayBackground'}
                     paddingVertical={'m'}
                     flexDirection={'column'}
                     justifyContent={'space-evenly'}
                     alignItems={'center'}
                     height={Layouts.heightPercentageToDP(25)}
                     width={Layouts.widthPercentageToDP(60)}
                     borderRadius={'lg'}>
                     <ActivityIndicator size="large" color={colors.primary} />
                     <Text color={'offWhite'}>Veuillez patienter un instant ...</Text>
                  </Box>
               </Box>
            ))}
      </>
   );
};

export default RequestLoader;

const styles = StyleSheet.create({
   overlayContainer: {
      backgroundColor: 'transparent',
      elevation: 0,
   },
});

import { Box, Scaffold, Text } from '_shared';
import { useTranslation } from 'react-i18next';

export default function HomeScreen() {
   const { t } = useTranslation(['common']);

   return (
      <Scaffold typeOfScreen="tab" titleTabScreen={t('common:tab_navigation.label.home')}>
         <Box flex={1} marginTop={'m'}>
            <Text variant={'primaryBold'}>Welcome user</Text>
         </Box>
      </Scaffold>
   );
}

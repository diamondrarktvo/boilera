import { Box, Scaffold, Text } from '_shared';
import { useTranslation } from 'react-i18next';

export default function HomeScreen() {
   const { t } = useTranslation(['home', 'common']);

   return (
      <Scaffold typeOfScreen="tab" titleTabScreen={t('common:tab_navigation.label.home')}>
         <Box flex={1}>
            <Text variant={'primaryBold'}>{t('home:content.welcome')}</Text>
         </Box>
      </Scaffold>
   );
}

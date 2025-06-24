import { LogoAppFull } from '_assets';
import { Box, Button, Image, Input, RequestLoader, Scaffold, Text } from '_shared';
import { Layouts } from '_utils';
import { useTranslation } from 'react-i18next';

export default function LoginScreen(){
   const { t } = useTranslation(['login', 'common']);

   return (
      <Scaffold typeOfScreen="tab">
         <RequestLoader isLoading={false}>
            <Box flex={1}>
               <Box
                  flex={0.5}
                  flexDirection={'column'}
                  alignItems={'center'}
                  justifyContent={'center'}>
                  <Image
                     source={LogoAppFull}
                     style={{
                        width: Layouts.RFValue(150),
                        height: Layouts.RFValue(150),
                     }}
                     contentPosition={'center'}
                     contentFit="contain"
                  />
               </Box>
               <Box
                  flex={1}
                  flexDirection={'column'}
                  justifyContent={'space-evenly'}
                  paddingHorizontal={'l'}>
                  {/**Welcome box*/}
                  <Box>
                     <Text variant={'bigTitle'}>{t('login:text.welcome')}</Text>
                     <Text variant={'secondary'} color={'text'}>
                        {t('login:text.welcome_subtitle')}
                     </Text>
                  </Box>

                  {/**Form box*/}
                  <Box>
                     <Box>
                        <Input
                           label={t('login:text.email')}
                           boldLabel
                           placeholder={t('login:text.placeholder_email')}
                        />
                        <Input
                           label={t('login:text.password')}
                           boldLabel
                           placeholder={t('login:text.placeholder_password')}
                        />
                     </Box>

                     <Box>
                        <Text textAlign={'right'} variant={'secondary'} color={'primary'}>
                           {t('login:text.reset_password')}
                        </Text>
                     </Box>
                  </Box>

                  {/**Button box*/}
                  <Box>
                     <Button
                        label={t('login:button.login')}
                        variant="tertiary"
                        paddingVertical={'m'}
                        color={"primary"}
                     />
                  </Box>
               </Box>
            </Box>
         </RequestLoader>
      </Scaffold>
   );
};

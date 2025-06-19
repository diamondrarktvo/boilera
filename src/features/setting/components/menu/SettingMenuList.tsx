import React from 'react';
import { MenuAndItemsT } from '../../SettingTypes';
import { Listing } from '_shared';
import { useTranslation } from 'react-i18next';
import RenderSettingMenuItem from './SettingMenuItem';

const SettingMenuList: React.FC<{ menus: MenuAndItemsT[] }> = ({ menus }) => {
   const { t } = useTranslation('common');

   return (
      <Listing
         estimatedItemSize={200}
         data={menus}
         renderItem={RenderSettingMenuItem}
         extraData={menus}
         showsVerticalScrollIndicator={false}
      />
   );
};

export default SettingMenuList;

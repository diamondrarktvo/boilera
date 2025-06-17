import { FlashList, ListRenderItem } from '@shopify/flash-list';
import React, { JSX } from 'react';
import EmptyList from './EmptyList';
import { useTranslation } from 'react-i18next';

interface ListingProps<T extends { id: number | string }> {
   data: T[];
   renderItem: ListRenderItem<T>;
   extraData?: T | T[] | any;
   estimatedItemSize?: number;
   showsVerticalScrollIndicator?: boolean;
   emptyMessage?: string;
}

/**
 *
 * @param data
 * @param renderItem
 * @param estimatedItemSize
 * @param showsVerticalScrollIndicator
 * @param emptyMessage
 * @returns
 */
const Listing = <T extends { id: number | string }>({
   data,
   renderItem,
   estimatedItemSize,
   showsVerticalScrollIndicator,
   emptyMessage,
}: ListingProps<T>): JSX.Element => {
   const { t } = useTranslation('common');
   return (
      <FlashList
         keyExtractor={item => item.id.toString()}
         estimatedItemSize={estimatedItemSize ?? 200}
         data={data}
         renderItem={renderItem}
         extraData={data}
         showsVerticalScrollIndicator={showsVerticalScrollIndicator ?? false}
         ListEmptyComponent={<EmptyList textToShow={emptyMessage ?? t('content.empty_menu')} />}
      />
   );
};

export default Listing;

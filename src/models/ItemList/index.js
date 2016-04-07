import {
  sortable,
  readonly,
  boolean,
  datetime,
  Resource,
} from '../types';

const ItemList = new Resource({
  resourceId: 'ItemList',
  title: 'ItemList',
  description: 'Collection of ItemList data',
  showFields: [
    'ItemListID',
    'ItemName',
    'ItemPrice',
    'ItemSellPrice',
    'ItemCategory1',
    'ItemCategory2',
    'ItemCategory3',
        // 'HideYN',
        // 'DeleteYN',
    'CreatedAt',
        // 'UpdatedAt',
  ],
  primaryKey: 'ItemListID',
  searchFields: [
    'ItemListID',
    'ItemName',
    'ItemCategory1',
    'ItemCategory2',
    'ItemCategory3',
  ],
  fieldGroup: [],
  schema: {
    ItemListID: {
      readonly,
    },
    ItemName: {},
    ItemDescription: {},
    ItemPrice: {},
    ItemSellPrice: {},
    ItemCategory1: {},
    ItemCategory2: {},
    ItemCategory3: {},
    sCol1: {},
    sCol2: {},
    sCol3: {},
    sCol4: {},
    sCol5: {},
    sCol6: {},
    sCol7: {},
    sCol8: {},
    sCol9: {},
    sCol10: {},
    IteamCreateAdminID: {},
    IteamUpdateAdminID: {},
    HideYN: {
      boolean,
    },
    DeleteYN: {
      boolean,
    },
    CreatedAt: {
      readonly,
      sortable,
      datetime,
    },
    UpdatedAt: {
      readonly,
    },
    DataFromRegion: {
      readonly,
    },
    DataFromRegionDT: {
      readonly,
    },
  },
});

export default ItemList;

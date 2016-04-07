import {
  sortable,
  readonly,
  boolean,
  datetime,
  Resource,
} from '../types';

const MemberItemPurchase = new Resource({
  resourceId: 'MemberItemPurchase',
  title: 'MemberItemPurchase',
  description: 'Collection of MemberItemPurchase data',
  showFields: [
    'MemberItemPurchaseID',
    'MemberID',
    'ItemListID',
    'PurchasePrice',
    'PurchaseQuantity',
    'PurchaseDT',
    'PurchaseCancelingStatus',
    // 'HideYN',
    // 'DeleteYN',
    'CreatedAt',
    // 'UpdatedAt',
  ],
  primaryKey: 'MemberItemPurchaseID',
  searchFields: [
    'MemberItemPurchaseID',
    'MemberID',
    'ItemListID',
    'PurchaseDeviceID',
    'PurchaseCancelingStatus',
    'PurchaseCancelDeviceID',
  ],
  fieldGroup: [
  ],
  schema: {
    MemberItemPurchaseID: {
      readonly,
    },
    MemberID: {
      readonly,
    },
    ItemListID: {
      readonly,
    },
    PurchasePrice: {},
    PurchaseQuantity: {},
    PGinfo1: {},
    PGinfo2: {},
    PGinfo3: {},
    PGinfo4: {},
    PGinfo5: {},
    PurchaseDeviceID: {},
    PurchaseDeviceIPAddress: {},
    PurchaseDeviceMACAddress: {},
    PurchaseDT: {},
    PurchaseCancelYN: {
      boolean,
    },
    PurchaseCancelDT: {},
    PurchaseCancelingStatus: {},
    PurchaseCancelReturnedAmount: {},
    PurchaseCancelDeviceID: {},
    PurchaseCancelDeviceIPAddress: {},
    PurchaseCancelDeviceMACAddress: {},
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
    PurchaseCancelConfirmAdminMemberID: {},
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

export default MemberItemPurchase;

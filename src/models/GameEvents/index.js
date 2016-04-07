import {
  sortable,
  readonly,
  boolean,
  datetime,
  Resource,
} from '../types';

const GameEvents = new Resource({
  resourceId: 'GameEvents',
  title: 'GameEvents',
  description: 'Collection of GameEvents data',
  showFields: [
	'GameEventID',
	'EventCategory1',
	'ItemListID',
	'ItemCount',
	'TargetGroup',
	'Title',
	// 'HideYN',
	// 'DeleteYN',
	'CreatedAt',
	// 'UpdatedAt',
  ],
  primaryKey: 'GameEventID',
  searchFields: [
	'GameEventID',
	'EventCategory1',
	'ItemListID',
	'Title',
  ],
  fieldGroup: [
    
  ],
  schema: {
	GameEventID: {
		readonly,
	},
	EventCategory1: {},
	EventCategory2: {},
	EventCategory3: {},
	ItemListID: {},
	ItemCount: {},
	ItemStatus: {},
	TargetGroup: {},
	TargetOS: {},
	TargetDevice: {},
	EventImageLink: {},
	Title: {},
	Content: {},
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
	CreateAdminID: {
		readonly,
	},
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

export default GameEvents;

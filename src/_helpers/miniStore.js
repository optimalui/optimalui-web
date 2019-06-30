import { create } from 'mini-store';

const tabStripStore = {
    selectedTabIndex: null,
    selectedTabItem: null,
    selectedTabItemIndex: null,
    selectedContent: null
}

const menuStore = {
    currentItemId:null,
}

export const miniStore = create({
    ...tabStripStore,
    ...menuStore
});
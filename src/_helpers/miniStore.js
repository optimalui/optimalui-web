import { create } from 'mini-store';

const tabStripStore = {
    selectedTabIndex: null,
    selectedTabItem: null,
    selectedTabItemIndex: null,
    selectedContent: null,
}

const menuStore = {
    selectedMenuItem:null
}

export const miniStore = create({
    ...tabStripStore,
    ...menuStore
});
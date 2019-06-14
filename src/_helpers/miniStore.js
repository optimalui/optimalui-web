import { create } from 'mini-store';

const tabStripStore = {
    selectedTabIndex: null,
    selectedTabItem: null,
    selectedTabItemIndex: null,
    selectedContent: null
}

export const miniStore = create({
    ...tabStripStore
});
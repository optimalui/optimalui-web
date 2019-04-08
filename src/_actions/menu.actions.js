import { menuConstants } from '../_constants'

const setClickMode = (id) => ({
    type: menuConstants.CLICK_MODE,
    id
})

export const menuActions = {
    setClickMode
}

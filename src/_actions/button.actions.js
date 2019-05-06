import { buttonConstants} from '../_constants'

const setDisable = (id) => ({
    type: buttonConstants.DISABLE_BUTTON,
    id
})

export const buttonActions = {
    setDisable
}

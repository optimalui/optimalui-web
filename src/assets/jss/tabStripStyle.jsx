
import { StyleSheet} from 'aphrodite/no-important';

export const tabStripStyle = (alignment, selected, disabled) => {
    let borderStyle = {
        borderBottom: '1px solid #e5e5e5'
    }, borderColorStyle = {},
        textColor = {
            color: '#999',
        },
        pointerEvents = {}

    if (alignment === 'bottom') {
        borderStyle = {
            borderTop: '1px solid #e5e5e5',
        }
    }


    if (selected) {
        textColor.color = '#333 !important';
        if (alignment === 'bottom') {
            borderColorStyle.borderTopColor = '#1e87f0 !important'
        } else {
            borderColorStyle.borderBottomColor = '#1e87f0 !important'
        }
    }

    if (disabled) {
        if (alignment === 'bottom') {

        } else {
            textColor = {
                color: '#999 !important',
            }
            pointerEvents = {
                pointerEvents: 'none'
            }
        }
    }

    const styles = StyleSheet.create({
        default: {
            display: 'flex',
            flexWrap: 'wrap',
            padding: 0,
            listSyle: 'none',
            position: 'relative',
            bottom: 0,
            right: 0,
            '& > * ': {
                flex: 'none',
                paddingLeft: '20px',
                position: 'relative'
            },
            ...borderStyle
        },
        text: {
            ...textColor,
            ...pointerEvents,
            ...borderColorStyle,
            border: '2px solid transparent',
            display: 'block',
            textAlign: 'center',
            padding: '9px 20px',
            fontSize: '12px',
            textTransform: 'uppercase',
            transition: 'color 0.1s ease-in-out',
            lineHeight: '20px',
            cursor: 'pointer',
        },
        content: {
            margin: 0,
            padding: 0,
            listStyle: 'none'
        },
    })

    return styles

}
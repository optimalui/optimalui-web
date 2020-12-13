import { StyleSheet } from 'aphrodite/no-important';


export const getDropDownStyle = (animationName = "", duration) => {
    let animObject = {}
    if (animationName) {
        const _module = require(`react-animations/lib/${animationName}`);
        Object.assign(animObject, {
            animationName: [_module.default],
            animationDuration: duration
        })
    }


    const styles = StyleSheet.create({
        root: {
        },
        inline: {
            /**uk-inline */
            display: 'inline-block',
            position: 'relative',
            maxWidth: '100%',
            verticalAlign: 'middle',
            '-webkit-backface-visibility': 'hidden'
        },
        dropDown: {
            /**uk-dropdown */
            display:'none',
            position: 'absolute',
            zIndex: 1020,
            boxSizing: 'border-box',
            minWidth: '200px',
            padding: '25px',
            background: '#fff',
            color: '#666',
            boxShadow: '0 5px 12px rgba(0, 0, 0, 0.15)',
            listStyle: 'none',
            //   marginTop:'10px',
        },
        dropDownOpen: {
            display: 'block'
        },
        dropDownNav: {
            /**uk-dropdown-nav */
            margin: 0,
            padding: 0,
            listStyle: 'none',
            whiteSpace: 'nowrap',
            fontSize: '0.875rem'
        },

        animation: animObject

    })

    return styles

}

export const dropDownLinkStyle = StyleSheet.create({
    root: {
        /* Hover + Focus + Active */
        padding: '5px 0',
        display: 'block',
        textDecoration: 'none',
        cursor: 'pointer',
        color: '#999',
        ':hover': {
            color: '#666',
            textDecoration: 'none',
        },
        ':focus': {
            color: '#666',
            outline: 'none',
            textDecoration: 'none',
        },

    },
    disabledItem:{
        cursor:'default',
        opacity:'0.6',
    },
    iconStyle:{
        marginRight: '10px !important'
    }
})

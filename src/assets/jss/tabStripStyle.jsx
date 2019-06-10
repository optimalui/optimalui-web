
const textStyle = {
    display: 'block',
    textAlign: 'center',
    padding: '9px 20px',
    fontSize: '12px',
    textTransform: 'uppercase',
    transition: 'color 0.1s ease-in-out',
    lineHeight: '20px',
    cursor: 'pointer',
    borderBottom: '2px solid transparent !important',
}
export const tabStripStyle = {
    root : {
        //uk-tab
        display: 'flex',
        flexWrap: 'wrap',
        padding: 0,
        listSyle: 'none',
        position: 'relative',
        bottom: 0,
        right: 0,
        borderBottom: '1px solid #e5e5e5',
        '& > * ':{
            flex: 'none',
            paddingLeft: '20px',
            position: 'relative'
        }
    },
    selectedTab:{
        color: '#333 !important',
        borderBottomColor: '#1e87f0 !important',
        ...textStyle
    },
    disabledTab:{
        color: '#999',
        ...textStyle
    },
    text: {
        color: '#999',
        ...textStyle
    }
}
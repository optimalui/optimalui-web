

export const offCanvasStyle = {
    overlay: {
        position: 'fixed',
        width: '100%', /* Full width (cover the whole page) */
        height: '100%', /* Full height (cover the whole page) */
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000, /* Specify a stack order in case you're using a different order for other elements */
    },
    overlayBackground: {
        backgroundColor: 'rgba(0,0,0,0.1)', /* Black background with opacity */
    },

    closeButton: {
        position: 'absolute',
        zIndex: 1000,
        top: '20px',
        right: '20px',
        padding: '5px',
        cursor: 'pointer',
        color: '#999',
        transition: '0.1s ease-in-out',
        transitionProperty: 'color, opacity',
    }

}

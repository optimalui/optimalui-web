import React from 'react';
import copyImg from '../../assets/web/img/icon-clipboard.svg'
import codepenImg from '../../assets/web/img/icon-flask.svg'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import '../../assets/web/css/notification.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';

class MarkupButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            copied: false,
        }
        
    }
    render() {
        
        if(this.state.copied) {
            NotificationManager.info('Copied!')
        }

        return (

            <div className="uk-position-top-right uk-margin-small-top">
                <ul className="uk-iconnav">
                    <li>
                        <CopyToClipboard text={this.props.codeText} uk-tooltip="Copy to Clipboard" onCopy={() => this.setState({copied: true})}>
                            <a className="js-copy" uk-tooltip="Copy to Clipboard" rel="#code-jv9wit2w" title="" aria-expanded="false">
                                <img className="uk-icon" src={copyImg} alt="" uk-svg="" hidden="true" />
                            </a>
                        </CopyToClipboard>
                    </li>
                    <li>
                        <a className="js-codepen" uk-tooltip="Edit on Codepen" rel="#code-jv9wit2w" title="" aria-expanded="false">
                            <img className="uk-icon" src={codepenImg} alt="" uk-svg="" hidden="true" />
                        </a>
                    </li>
                </ul>

                <NotificationContainer />
            </div>
        );
    }
}

// const styledMarkup = withStyles(markupStyle)(MarkupButtons)

// export default styledMarkup;
export default MarkupButtons;
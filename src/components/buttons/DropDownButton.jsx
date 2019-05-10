import cx from 'classnames'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class DropDownButton extends Component {

  static propTypes = {
    mode: PropTypes.oneOf(['hover', 'click']).isRequired,
    className: PropTypes.string,
    list: PropTypes.array.isRequired,
    buttonClassName: PropTypes.string,
    listClassName:PropTypes.string,
    text: PropTypes.string.isRequired
  }

  static defaultProps = {
    mode: 'hover',
    className: '',
    buttonClassName: '',
    text: '',
    listClassName:''
  }

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }


  handleMouseEnter = () => {
    if (this.props.mode === 'hover') {
      this.setState({ isOpen: true })
    }
  }

  handleMouseLeave = () => {
    this.setState({ isOpen: false })
  }

  handleClick = () => {
    if (this.props.mode === 'click') {
      this.setState({ isOpen: !this.state.isOpen })
    }

    if (this.props.mode === 'hover') {
      this.setState({ isOpen: false })
    }
  }

  render() {
    const { handleMouseEnter, handleMouseLeave, handleClick } = this
    const {
      mode,
      className: customClassName,
      buttonClassName: customButtonClassName,
      listClassName:customListClassName,
      list,
      text } = this.props
    const { isOpen } = this.state

    const eventHandlers = {
      onClick: handleClick,
    }
    if (mode === 'hover') {
      eventHandlers.onMouseEnter = handleMouseEnter
      eventHandlers.onMouseLeave = handleMouseLeave
    }

    if (!Array.isArray(list) || !list.length) {
      throw new Error('List must be passed as array and must be not empty.')
    }

    const className = cx('uk-inline', customClassName)

    const buttonClassName = cx('uk-button', 'uk-button-default', customButtonClassName)

    const listClassName = cx('uk-dropdown uk-dropdown-bottom-left',customListClassName,{
      'uk-open':isOpen
    })

    return (
      <div className={className}>
        <button className={buttonClassName} type="button" {...eventHandlers}>{text}</button>
        <div className={listClassName}>
            <ul className="uk-nav uk-dropdown-nav">
              {list.map((el, index) =>
                <li key={index}><a href="#">{el}</a></li>
              )}
            </ul>
            </div>
      </div>
    )
  }
}
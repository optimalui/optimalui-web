import React, { Component } from 'react';
import { Icon } from 'optimalui-react'
import {iconList} from '../../assets/jss'

const ICONS = Object.keys(iconList());

class IconLibrary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayedIcons:ICONS
        }
        this.handleFilterChange = this.handleFilterChange.bind(this)
    }
    handleFilterChange(event) {
        let searcjQery = event.target.value.toLowerCase(),
            displayedIcons = ICONS.filter(el => {
                let searchValue = el.toLowerCase();
                return searchValue.indexOf(searcjQery) !== -1;
            });
        this.setState({
            displayedIcons
        });
    }
    render() {
        const {displayedIcons} = this.state;
        return (
            <React.Fragment>
                <form>
                    <fieldset className="uk-fieldset">
                        <div className="uk-margin">
                            <div className="uk-inline uk-width-1-1">
                                <Icon smallRightMargin name="search" size={1.5} formIcon />
                                <input className="uk-input uk-width-1-1" type="text" placeholder="Search Icon" onChange={this.handleFilterChange} />
                            </div>
                        </div>
                    </fieldset>
                </form>
                    <h4 className="uk-heading-line"><span>App</span></h4>
                    <div className="uk-child-width-1-3@s uk-grid">
                        <div className="uk-first-column">
                            <ul className="uk-list">
                                {displayedIcons.includes("home") && <li><Icon smallRightMargin name="home" />home</li>}
                                {displayedIcons.includes("sign-in") && <li><Icon smallRightMargin name="sign-in" />sign-in</li>}
                                {displayedIcons.includes("sign-out") && <li><Icon smallRightMargin name="sign-out" />sign-out</li>}
                                {displayedIcons.includes("user") && <li><Icon smallRightMargin name="user" />user</li>}
                                {displayedIcons.includes("users") && <li><Icon smallRightMargin name="users" />users</li>}
                                {displayedIcons.includes("lock") && <li><Icon smallRightMargin name="lock" />lock</li>}
                                {displayedIcons.includes("unlock") && <li><Icon smallRightMargin name="unlock" />unlock</li>}
                                {displayedIcons.includes("settings") && <li><Icon smallRightMargin name="settings" />settings</li>}
                                {displayedIcons.includes("cog") && <li><Icon smallRightMargin name="cog" />cog</li>}
                                {displayedIcons.includes("nut") && <li><Icon smallRightMargin name="nut" />nut</li>}
                                {displayedIcons.includes("comment") && <li><Icon smallRightMargin name="comment" />comment</li>}
                                {displayedIcons.includes("commenting") && <li><Icon smallRightMargin name="commenting" />commenting</li>}
                                {displayedIcons.includes("comments") && <li><Icon smallRightMargin name="comments" />comments</li>}
                                {displayedIcons.includes("hashtag") && <li><Icon smallRightMargin name="hashtag" />hashtag</li>}
                                {displayedIcons.includes("tag") && <li><Icon smallRightMargin name="tag" />tag</li>}
                                {displayedIcons.includes("cart") && <li><Icon smallRightMargin name="cart" />cart</li>}
                                {displayedIcons.includes("credit-cart") && <li><Icon smallRightMargin name="credit-card" />credit-card</li>}
                                {displayedIcons.includes("mail") && <li><Icon smallRightMargin name="mail" />mail</li>}
                                {displayedIcons.includes("receiver") && <li><Icon smallRightMargin name="receiver" />receiver</li>}
                                {displayedIcons.includes("print") && <li><Icon smallRightMargin name="print" />print</li>}
                                {displayedIcons.includes("search") && <li><Icon smallRightMargin name="search" />search</li>}
                                {displayedIcons.includes("location") && <li><Icon smallRightMargin name="location" />location</li>}
                                {displayedIcons.includes("bookmark") && <li><Icon smallRightMargin name="bookmark" />bookmark</li>}
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list">
                                {displayedIcons.includes("code") && <li><Icon smallRightMargin name="code" />code</li>}
                                {displayedIcons.includes("paint-bucket") && <li><Icon smallRightMargin name="paint-bucket" />paint-bucket</li>}
                                {displayedIcons.includes("camera") && <li><Icon smallRightMargin name="camera" />camera</li>}
                                {displayedIcons.includes("video-camera") && <li><Icon smallRightMargin name="video-camera" />video-camera</li>}
                                {displayedIcons.includes("bell") && <li><Icon smallRightMargin name="bell" />bell</li>}
                                {displayedIcons.includes("microphone") && <li><Icon smallRightMargin name="microphone" />microphone</li>}
                                {displayedIcons.includes("bolt") && <li><Icon smallRightMargin name="bolt" />bolt</li>}
                                {displayedIcons.includes("star") && <li><Icon smallRightMargin name="star" />star</li>}
                                {displayedIcons.includes("heart") && <li><Icon smallRightMargin name="heart" />heart</li>}
                                {displayedIcons.includes("happy") && <li><Icon smallRightMargin name="happy" />happy</li>}
                                {displayedIcons.includes("lifesaver") && <li><Icon smallRightMargin name="lifesaver" />lifesaver</li>}
                                {displayedIcons.includes("rss") && <li><Icon smallRightMargin name="rss" />rss</li>}
                                {displayedIcons.includes("social") && <li><Icon smallRightMargin name="social" />social</li>}
                                {displayedIcons.includes("git-branch") && <li><Icon smallRightMargin name="git-branch" />git-branch</li>}
                                {displayedIcons.includes("git-fork") && <li><Icon smallRightMargin name="git-fork" />git-fork</li>}
                                {displayedIcons.includes("world") && <li><Icon smallRightMargin name="world" />world</li>}
                                {displayedIcons.includes("calendar") && <li><Icon smallRightMargin name="calendar" />calendar</li>}
                                {displayedIcons.includes("clock") && <li><Icon smallRightMargin name="clock" />clock</li>}
                                {displayedIcons.includes("history") && <li><Icon smallRightMargin name="history" />history</li>}
                                {displayedIcons.includes("future") && <li><Icon smallRightMargin name="future" />future</li>}
                                {displayedIcons.includes("pencil") && <li><Icon smallRightMargin name="pencil" />pencil</li>}
                                {displayedIcons.includes("trash") && <li><Icon smallRightMargin name="trash" />trash</li>}
                                {displayedIcons.includes("move") && <li><Icon smallRightMargin name="move" />move</li>}
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list">
                                {displayedIcons.includes("link") && <li><Icon smallRightMargin name="link" />link</li>}
                                {displayedIcons.includes("question") && <li><Icon smallRightMargin name="question" />question</li>}
                                {displayedIcons.includes("info") && <li><Icon smallRightMargin name="info" />info</li>}
                                {displayedIcons.includes("warning") && <li><Icon smallRightMargin name="warning" />warning</li>}
                                {displayedIcons.includes("image") && <li><Icon smallRightMargin name="image" />image</li>}
                                {displayedIcons.includes("thumbnails") && <li><Icon smallRightMargin name="thumbnails" />thumbnails</li>}
                                {displayedIcons.includes("table") && <li><Icon smallRightMargin name="table" />table</li>}
                                {displayedIcons.includes("list") && <li><Icon smallRightMargin name="list" />list</li>}
                                {displayedIcons.includes("menu") && <li><Icon smallRightMargin name="menu" />menu</li>}
                                {displayedIcons.includes("grid") && <li><Icon smallRightMargin name="grid" />grid</li>}
                                {displayedIcons.includes("more") && <li><Icon smallRightMargin name="more" />more</li>}
                                {displayedIcons.includes("more-vertical") && <li><Icon smallRightMargin name="more-vertical" />more-vertical</li>}
                                {displayedIcons.includes("plus") && <li><Icon smallRightMargin name="plus" />plus</li>}
                                {displayedIcons.includes("plus-circle") && <li><Icon smallRightMargin name="plus-circle" />plus-circle</li>}
                                {displayedIcons.includes("minus") && <li><Icon smallRightMargin name="minus" />minus</li>}
                                {displayedIcons.includes("minus-circle") && <li><Icon smallRightMargin name="minus-circle" />minus-circle</li>}
                                {displayedIcons.includes("close") && <li><Icon smallRightMargin name="close" />close</li>}
                                {displayedIcons.includes("check") && <li><Icon smallRightMargin name="check" />check</li>}
                                {displayedIcons.includes("ban") && <li><Icon smallRightMargin name="ban" />ban</li>}
                                {displayedIcons.includes("refresh") && <li><Icon smallRightMargin name="refresh" />refresh</li>}
                                {displayedIcons.includes("play") && <li><Icon smallRightMargin name="play" />play</li>}
                                {displayedIcons.includes("play-circl") && <li><Icon smallRightMargin name="play-circle" />play-circle</li>}
                            </ul>
                        </div>
                    </div>
                    <h4 className="uk-heading-line"><span>Devices</span></h4>
                    <div className="uk-child-width-1-3@s uk-grid">
                        <div className="uk-first-column">
                            <ul className="uk-list">
                                {displayedIcons.includes("tv") && <li><Icon smallRightMargin name="tv" />tv</li>}
                                {displayedIcons.includes("desktop") && <li><Icon smallRightMargin name="desktop" />desktop</li>}
                                {displayedIcons.includes("laptop") && <li><Icon smallRightMargin name="laptop" />laptop</li>}
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list">
                                {displayedIcons.includes("tablet") && <li><Icon smallRightMargin name="tablet" />tablet</li>}
                                {displayedIcons.includes("phone") && <li><Icon smallRightMargin name="phone" />phone</li>}
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list">
                                {displayedIcons.includes("tablet-landscape") && <li><Icon smallRightMargin name="tablet-landscape" />tablet-landscape</li>}
                                {displayedIcons.includes("phone-landscape") && <li><Icon smallRightMargin name="phone-landscape" />phone-landscape</li>}
                            </ul>
                        </div>
                    </div>
                    <h4 className="uk-heading-line"><span>Storage</span></h4>
                    <div className="uk-child-width-1-3@s uk-grid">
                        <div className="uk-first-column">
                            <ul className="uk-list">
                                {displayedIcons.includes("file") && <li><Icon smallRightMargin name="file" />file</li>}
                                {displayedIcons.includes("file-text") && <li><Icon smallRightMargin name="file-text" />file-text</li>}
                                {displayedIcons.includes("file-pdf") && <li><Icon smallRightMargin name="file-pdf" />file-pdf</li>}
                                {displayedIcons.includes("copy") && <li><Icon smallRightMargin name="copy" />copy</li>}
                                {displayedIcons.includes("file-edit") && <li><Icon smallRightMargin name="file-edit" />file-edit</li>}
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list">
                                {displayedIcons.includes("folder") && <li><Icon smallRightMargin name="folder" />folder</li>}
                                {displayedIcons.includes("album") && <li><Icon smallRightMargin name="album" />album</li>}
                                {displayedIcons.includes("push") && <li><Icon smallRightMargin name="push" />push</li>}
                                {displayedIcons.includes("pull") && <li><Icon smallRightMargin name="pull" />pull</li>}
                                {displayedIcons.includes("server") && <li><Icon smallRightMargin name="server" />server</li>}
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list">
                                {displayedIcons.includes("database") && <li><Icon smallRightMargin name="database" />database</li>}
                                {displayedIcons.includes("cloud-upload") && <li><Icon smallRightMargin name="cloud-upload" />cloud-upload</li>}
                                {displayedIcons.includes("cloud-download") && <li><Icon smallRightMargin name="cloud-download" />cloud-download</li>}
                                {displayedIcons.includes("download") && <li><Icon smallRightMargin name="download" />download</li>}
                                {displayedIcons.includes("upload") && <li><Icon smallRightMargin name="upload" />upload</li>}
                            </ul>
                        </div>
                    </div>
                    <h4 className="uk-heading-line"><span>Direction</span></h4>
                    <div className="uk-child-width-1-3@s uk-grid">
                        <div className="uk-first-column">
                            <ul className="uk-list">
                                {displayedIcons.includes("reply") && <li><Icon smallRightMargin name="reply" />reply</li>}
                                {displayedIcons.includes("forward") && <li><Icon smallRightMargin name="forward" />forward</li>}
                                {displayedIcons.includes("expand") && <li><Icon smallRightMargin name="expand" />expand</li>}
                                {displayedIcons.includes("shrink") && <li><Icon smallRightMargin name="shrink" />shrink</li>}
                                {displayedIcons.includes("arrow-up") && <li><Icon smallRightMargin name="arrow-up" />arrow-up</li>}
                                {displayedIcons.includes("arrow-down") && <li><Icon smallRightMargin name="arrow-down" />arrow-down</li>}
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list">
                                {displayedIcons.includes("arrow-left") && <li><Icon smallRightMargin name="arrow-left" />arrow-left</li>}
                                {displayedIcons.includes("arrow-right") && <li><Icon smallRightMargin name="arrow-right" />arrow-right</li>}
                                {displayedIcons.includes("chevron-up") && <li><Icon smallRightMargin name="chevron-up" />chevron-up</li>}
                                {displayedIcons.includes("chevron-down") && <li><Icon smallRightMargin name="chevron-down" />chevron-down</li>}
                                {displayedIcons.includes("chevron-left") && <li><Icon smallRightMargin name="chevron-left" />chevron-left</li>}
                                {displayedIcons.includes("chevron-right") && <li><Icon smallRightMargin name="chevron-right" />chevron-right</li>}
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list">
                                {displayedIcons.includes("chevron-double-left") && <li><Icon smallRightMargin name="chevron-double-left" />chevron-double-left</li>}
                                {displayedIcons.includes("chevron-double-right") && <li><Icon smallRightMargin name="chevron-double-right" />chevron-double-right</li>}
                                {displayedIcons.includes("triangle-up") && <li><Icon smallRightMargin name="triangle-up" />triangle-up</li>}
                                {displayedIcons.includes("triangle-down") && <li><Icon smallRightMargin name="triangle-down" />triangle-down</li>}
                                {displayedIcons.includes("triangle-left") && <li><Icon smallRightMargin name="triangle-left" />triangle-left</li>}
                                {displayedIcons.includes("triangle-right") && <li><Icon smallRightMargin name="triangle-right" />triangle-right</li>}
                            </ul>
                        </div>
                    </div>
                    <h4 className="uk-heading-line"><span>Editor</span></h4>
                    <div className="uk-child-width-1-3@s uk-grid">
                        <div className="uk-first-column">
                            <ul className="uk-list">
                                {displayedIcons.includes("bold") && <li><Icon smallRightMargin name="bold" />bold</li>}
                                {displayedIcons.includes("italic") && <li><Icon smallRightMargin name="italic" />italic</li>}
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list">
                                {displayedIcons.includes("strikethrough") && <li><Icon smallRightMargin name="strikethrough" />strikethrough</li>}
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list">
                                {displayedIcons.includes("quote-right") && <li><Icon smallRightMargin name="quote-right" />quote-right</li>}
                            </ul>
                        </div>
                    </div>
                    <h4 className="uk-heading-line"><span>Brands</span></h4>
                    <div className="uk-child-width-1-3@s uk-grid">
                        <div className="uk-first-column">
                            <ul className="uk-list">
                                {displayedIcons.includes("500px") && <li><Icon smallRightMargin name="500px" />500px</li>}
                                {displayedIcons.includes("behance") && <li><Icon smallRightMargin name="behance" />behance</li>}
                                {displayedIcons.includes("dribbble") && <li><Icon smallRightMargin name="dribbble" />dribbble</li>}
                                {displayedIcons.includes("facebook") && <li><Icon smallRightMargin name="facebook" />facebook</li>}
                                {displayedIcons.includes("flickr") && <li><Icon smallRightMargin name="flickr" />flickr</li>}
                                {displayedIcons.includes("foursquare") && <li><Icon smallRightMargin name="foursquare" />foursquare</li>}
                                {displayedIcons.includes("github") && <li><Icon smallRightMargin name="github" />github</li>}
                                {displayedIcons.includes("github-alt") && <li><Icon smallRightMargin name="github-alt" />github-alt</li>}
                                {displayedIcons.includes("gitter") && <li><Icon smallRightMargin name="gitter" />gitter</li>}
                                {displayedIcons.includes("google") && <li><Icon smallRightMargin name="google" />google</li>}
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list">
                                {displayedIcons.includes("google-plus") && <li><Icon smallRightMargin name="google-plus" />google-plus</li>}
                                {displayedIcons.includes("instagram") && <li><Icon smallRightMargin name="instagram" />instagram</li>}
                                {displayedIcons.includes("joomla") && <li><Icon smallRightMargin name="joomla" />joomla</li>}
                                {displayedIcons.includes("linkedin") && <li><Icon smallRightMargin name="linkedin" />linkedin</li>}
                                {displayedIcons.includes("pagekit") && <li><Icon smallRightMargin name="pagekit" />pagekit</li>}
                                {displayedIcons.includes("pinterest") && <li><Icon smallRightMargin name="pinterest" />pinterest</li>}
                                {displayedIcons.includes("reddit") && <li><Icon smallRightMargin name="reddit" />reddit</li>}
                                {displayedIcons.includes("soundcloud") && <li><Icon smallRightMargin name="soundcloud" />soundcloud</li>}
                                {displayedIcons.includes("tripadvisor") && <li><Icon smallRightMargin name="tripadvisor" />tripadvisor</li>}
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list">
                                {displayedIcons.includes("tumblr") && <li><Icon smallRightMargin name="tumblr" />tumblr</li>}
                                {displayedIcons.includes("twitter") && <li><Icon smallRightMargin name="twitter" />twitter</li>}
                                {displayedIcons.includes("uikit") && <li><Icon smallRightMargin name="uikit" />uikit</li>}
                                {displayedIcons.includes("vimeo") && <li><Icon smallRightMargin name="vimeo" />vimeo</li>}
                                {displayedIcons.includes("whatsapp") && <li><Icon smallRightMargin name="whatsapp" />whatsapp</li>}
                                {displayedIcons.includes("wordpress") && <li><Icon smallRightMargin name="wordpress" />wordpress</li>}
                                {displayedIcons.includes("xing") && <li><Icon smallRightMargin name="xing" />xing</li>}
                                {displayedIcons.includes("yelp") && <li><Icon smallRightMargin name="yelp" />yelp</li>}
                                {displayedIcons.includes("youtube") && <li><Icon smallRightMargin name="youtube" />youtube</li>}
                            </ul>
                        </div>
                    </div>

            </React.Fragment>
                );
            }
        }
        
export default IconLibrary;
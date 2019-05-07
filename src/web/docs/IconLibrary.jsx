import React, { Component } from 'react';
import { Icon } from '../../components'
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
                    <div className="uk-margin">
                        <div className="uk-inline">
                            <Icon name="search" className="uk-form-icon"/>
                            <input className="uk-input" type="text" placeholder="Search" onChange={this.handleFilterChange}/>
                        </div>
                    </div>
                    <h4 className="uk-heading-line"><span>App</span></h4>
                    <div className="uk-child-width-1-3@s uk-grid">
                        <div className="uk-first-column">
                            <ul className="uk-list">
                                {displayedIcons.includes("home") && <li><Icon name="home" className="uk-margin-small-right" />home</li>}
                                {displayedIcons.includes("sign-in") && <li><Icon name="sign-in" className="uk-margin-small-right" />sign-in</li>}
                                {displayedIcons.includes("sign-out") && <li><Icon name="sign-out" className="uk-margin-small-right" />sign-out</li>}
                                {displayedIcons.includes("user") && <li><Icon name="user" className="uk-margin-small-right" />user</li>}
                                {displayedIcons.includes("users") && <li><Icon name="users" className="uk-margin-small-right" />users</li>}
                                {displayedIcons.includes("lock") && <li><Icon name="lock" className="uk-margin-small-right" />lock</li>}
                                {displayedIcons.includes("unlock") && <li><Icon name="unlock" className="uk-margin-small-right" />unlock</li>}
                                {displayedIcons.includes("settings") && <li><Icon name="settings" className="uk-margin-small-right" />settings</li>}
                                {displayedIcons.includes("cog") && <li><Icon name="cog" className="uk-margin-small-right" />cog</li>}
                                {displayedIcons.includes("nut") && <li><Icon name="nut" className="uk-margin-small-right" />nut</li>}
                                {displayedIcons.includes("comment") && <li><Icon name="comment" className="uk-margin-small-right" />comment</li>}
                                {displayedIcons.includes("commenting") && <li><Icon name="commenting" className="uk-margin-small-right" />commenting</li>}
                                {displayedIcons.includes("comments") && <li><Icon name="comments" className="uk-margin-small-right" />comments</li>}
                                {displayedIcons.includes("hashtag") && <li><Icon name="hashtag" className="uk-margin-small-right" />hashtag</li>}
                                {displayedIcons.includes("tag") && <li><Icon name="tag" className="uk-margin-small-right" />tag</li>}
                                {displayedIcons.includes("cart") && <li><Icon name="cart" className="uk-margin-small-right" />cart</li>}
                                {displayedIcons.includes("credit-cart") && <li><Icon name="credit-card" className="uk-margin-small-right" />credit-card</li>}
                                {displayedIcons.includes("mail") && <li><Icon name="mail" className="uk-margin-small-right" />mail</li>}
                                {displayedIcons.includes("receiver") && <li><Icon name="receiver" className="uk-margin-small-right" />receiver</li>}
                                {displayedIcons.includes("print") && <li><Icon name="print" className="uk-margin-small-right" />print</li>}
                                {displayedIcons.includes("search") && <li><Icon name="search" className="uk-margin-small-right" />search</li>}
                                {displayedIcons.includes("location") && <li><Icon name="location" className="uk-margin-small-right" />location</li>}
                                {displayedIcons.includes("bookmark") && <li><Icon name="bookmark" className="uk-margin-small-right" />bookmark</li>}
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list">
                                {displayedIcons.includes("code") && <li><Icon name="code" className="uk-margin-small-right" />code</li>}
                                {displayedIcons.includes("paint-bucket") && <li><Icon name="paint-bucket" className="uk-margin-small-right" />paint-bucket</li>}
                                {displayedIcons.includes("camera") && <li><Icon name="camera" className="uk-margin-small-right" />camera</li>}
                                {displayedIcons.includes("video-camera") && <li><Icon name="video-camera" className="uk-margin-small-right" />video-camera</li>}
                                {displayedIcons.includes("bell") && <li><Icon name="bell" className="uk-margin-small-right" />bell</li>}
                                {displayedIcons.includes("microphone") && <li><Icon name="microphone" className="uk-margin-small-right" />microphone</li>}
                                {displayedIcons.includes("bolt") && <li><Icon name="bolt" className="uk-margin-small-right" />bolt</li>}
                                {displayedIcons.includes("star") && <li><Icon name="star" className="uk-margin-small-right" />star</li>}
                                {displayedIcons.includes("heart") && <li><Icon name="heart" className="uk-margin-small-right" />heart</li>}
                                {displayedIcons.includes("happy") && <li><Icon name="happy" className="uk-margin-small-right" />happy</li>}
                                {displayedIcons.includes("lifesaver") && <li><Icon name="lifesaver" className="uk-margin-small-right" />lifesaver</li>}
                                {displayedIcons.includes("rss") && <li><Icon name="rss" className="uk-margin-small-right" />rss</li>}
                                {displayedIcons.includes("social") && <li><Icon name="social" className="uk-margin-small-right" />social</li>}
                                {displayedIcons.includes("git-branch") && <li><Icon name="git-branch" className="uk-margin-small-right" />git-branch</li>}
                                {displayedIcons.includes("git-fork") && <li><Icon name="git-fork" className="uk-margin-small-right" />git-fork</li>}
                                {displayedIcons.includes("world") && <li><Icon name="world" className="uk-margin-small-right" />world</li>}
                                {displayedIcons.includes("calendar") && <li><Icon name="calendar" className="uk-margin-small-right" />calendar</li>}
                                {displayedIcons.includes("clock") && <li><Icon name="clock" className="uk-margin-small-right" />clock</li>}
                                {displayedIcons.includes("history") && <li><Icon name="history" className="uk-margin-small-right" />history</li>}
                                {displayedIcons.includes("future") && <li><Icon name="future" className="uk-margin-small-right" />future</li>}
                                {displayedIcons.includes("pencil") && <li><Icon name="pencil" className="uk-margin-small-right" />pencil</li>}
                                {displayedIcons.includes("trash") && <li><Icon name="trash" className="uk-margin-small-right" />trash</li>}
                                {displayedIcons.includes("move") && <li><Icon name="move" className="uk-margin-small-right" />move</li>}
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list">
                                {displayedIcons.includes("link") && <li><Icon name="link" className="uk-margin-small-right" />link</li>}
                                {displayedIcons.includes("question") && <li><Icon name="question" className="uk-margin-small-right" />question</li>}
                                {displayedIcons.includes("info") && <li><Icon name="info" className="uk-margin-small-right" />info</li>}
                                {displayedIcons.includes("warning") && <li><Icon name="warning" className="uk-margin-small-right" />warning</li>}
                                {displayedIcons.includes("image") && <li><Icon name="image" className="uk-margin-small-right" />image</li>}
                                {displayedIcons.includes("thumbnails") && <li><Icon name="thumbnails" className="uk-margin-small-right" />thumbnails</li>}
                                {displayedIcons.includes("table") && <li><Icon name="table" className="uk-margin-small-right" />table</li>}
                                {displayedIcons.includes("list") && <li><Icon name="list" className="uk-margin-small-right" />list</li>}
                                {displayedIcons.includes("menu") && <li><Icon name="menu" className="uk-margin-small-right" />menu</li>}
                                {displayedIcons.includes("grid") && <li><Icon name="grid" className="uk-margin-small-right" />grid</li>}
                                {displayedIcons.includes("more") && <li><Icon name="more" className="uk-margin-small-right" />more</li>}
                                {displayedIcons.includes("more-vertical") && <li><Icon name="more-vertical" className="uk-margin-small-right" />more-vertical</li>}
                                {displayedIcons.includes("plus") && <li><Icon name="plus" className="uk-margin-small-right" />plus</li>}
                                {displayedIcons.includes("plus-circle") && <li><Icon name="plus-circle" className="uk-margin-small-right" />plus-circle</li>}
                                {displayedIcons.includes("minus") && <li><Icon name="minus" className="uk-margin-small-right" />minus</li>}
                                {displayedIcons.includes("minus-circle") && <li><Icon name="minus-circle" className="uk-margin-small-right" />minus-circle</li>}
                                {displayedIcons.includes("close") && <li><Icon name="close" className="uk-margin-small-right" />close</li>}
                                {displayedIcons.includes("check") && <li><Icon name="check" className="uk-margin-small-right" />check</li>}
                                {displayedIcons.includes("ban") && <li><Icon name="ban" className="uk-margin-small-right" />ban</li>}
                                {displayedIcons.includes("refresh") && <li><Icon name="refresh" className="uk-margin-small-right" />refresh</li>}
                                {displayedIcons.includes("play") && <li><Icon name="play" className="uk-margin-small-right" />play</li>}
                                {displayedIcons.includes("play-circl") && <li><Icon name="play-circle" className="uk-margin-small-right" />play-circle</li>}
                            </ul>
                        </div>
                    </div>
                    <h4 className="uk-heading-line"><span>Devices</span></h4>
                    <div className="uk-child-width-1-3@s uk-grid">
                        <div className="uk-first-column">
                            <ul className="uk-list">
                                {displayedIcons.includes("tv") && <li><Icon name="tv" className="uk-margin-small-right" />tv</li>}
                                {displayedIcons.includes("desktop") && <li><Icon name="desktop" className="uk-margin-small-right" />desktop</li>}
                                {displayedIcons.includes("laptop") && <li><Icon name="laptop" className="uk-margin-small-right" />laptop</li>}
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list">
                                {displayedIcons.includes("tablet") && <li><Icon name="tablet" className="uk-margin-small-right" />tablet</li>}
                                {displayedIcons.includes("phone") && <li><Icon name="phone" className="uk-margin-small-right" />phone</li>}
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list">
                                {displayedIcons.includes("tablet-landscape") && <li><Icon name="tablet-landscape" className="uk-margin-small-right" />tablet-landscape</li>}
                                {displayedIcons.includes("phone-landscape") && <li><Icon name="phone-landscape" className="uk-margin-small-right" />phone-landscape</li>}
                            </ul>
                        </div>
                    </div>
                    <h4 className="uk-heading-line"><span>Storage</span></h4>
                    <div className="uk-child-width-1-3@s uk-grid">
                        <div className="uk-first-column">
                            <ul className="uk-list">
                                {displayedIcons.includes("file") && <li><Icon name="file" className="uk-margin-small-right" />file</li>}
                                {displayedIcons.includes("file-text") && <li><Icon name="file-text" className="uk-margin-small-right" />file-text</li>}
                                {displayedIcons.includes("file-pdf") && <li><Icon name="file-pdf" className="uk-margin-small-right" />file-pdf</li>}
                                {displayedIcons.includes("copy") && <li><Icon name="copy" className="uk-margin-small-right" />copy</li>}
                                {displayedIcons.includes("file-edit") && <li><Icon name="file-edit" className="uk-margin-small-right" />file-edit</li>}
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list">
                                {displayedIcons.includes("folder") && <li><Icon name="folder" className="uk-margin-small-right" />folder</li>}
                                {displayedIcons.includes("album") && <li><Icon name="album" className="uk-margin-small-right" />album</li>}
                                {displayedIcons.includes("push") && <li><Icon name="push" className="uk-margin-small-right" />push</li>}
                                {displayedIcons.includes("pull") && <li><Icon name="pull" className="uk-margin-small-right" />pull</li>}
                                {displayedIcons.includes("server") && <li><Icon name="server" className="uk-margin-small-right" />server</li>}
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list">
                                {displayedIcons.includes("database") && <li><Icon name="database" className="uk-margin-small-right" />database</li>}
                                {displayedIcons.includes("cloud-upload") && <li><Icon name="cloud-upload" className="uk-margin-small-right" />cloud-upload</li>}
                                {displayedIcons.includes("cloud-download") && <li><Icon name="cloud-download" className="uk-margin-small-right" />cloud-download</li>}
                                {displayedIcons.includes("download") && <li><Icon name="download" className="uk-margin-small-right" />download</li>}
                                {displayedIcons.includes("upload") && <li><Icon name="upload" className="uk-margin-small-right" />upload</li>}
                            </ul>
                        </div>
                    </div>
                    <h4 className="uk-heading-line"><span>Direction</span></h4>
                    <div className="uk-child-width-1-3@s uk-grid">
                        <div className="uk-first-column">
                            <ul className="uk-list">
                                {displayedIcons.includes("reply") && <li><Icon name="reply" className="uk-margin-small-right" />reply</li>}
                                {displayedIcons.includes("forward") && <li><Icon name="forward" className="uk-margin-small-right" />forward</li>}
                                {displayedIcons.includes("expand") && <li><Icon name="expand" className="uk-margin-small-right" />expand</li>}
                                {displayedIcons.includes("shrink") && <li><Icon name="shrink" className="uk-margin-small-right" />shrink</li>}
                                {displayedIcons.includes("arrow-up") && <li><Icon name="arrow-up" className="uk-margin-small-right" />arrow-up</li>}
                                {displayedIcons.includes("arrow-down") && <li><Icon name="arrow-down" className="uk-margin-small-right" />arrow-down</li>}
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list">
                                {displayedIcons.includes("arrow-left") && <li><Icon name="arrow-left" className="uk-margin-small-right" />arrow-left</li>}
                                {displayedIcons.includes("arrow-right") && <li><Icon name="arrow-right" className="uk-margin-small-right" />arrow-right</li>}
                                {displayedIcons.includes("chevron-up") && <li><Icon name="chevron-up" className="uk-margin-small-right" />chevron-up</li>}
                                {displayedIcons.includes("chevron-down") && <li><Icon name="chevron-down" className="uk-margin-small-right" />chevron-down</li>}
                                {displayedIcons.includes("chevron-left") && <li><Icon name="chevron-left" className="uk-margin-small-right" />chevron-left</li>}
                                {displayedIcons.includes("chevron-right") && <li><Icon name="chevron-right" className="uk-margin-small-right" />chevron-right</li>}
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list">
                                {displayedIcons.includes("chevron-double-left") && <li><Icon name="chevron-double-left" className="uk-margin-small-right" />chevron-double-left</li>}
                                {displayedIcons.includes("chevron-double-right") && <li><Icon name="chevron-double-right" className="uk-margin-small-right" />chevron-double-right</li>}
                                {displayedIcons.includes("triangle-up") && <li><Icon name="triangle-up" className="uk-margin-small-right" />triangle-up</li>}
                                {displayedIcons.includes("triangle-down") && <li><Icon name="triangle-down" className="uk-margin-small-right" />triangle-down</li>}
                                {displayedIcons.includes("triangle-left") && <li><Icon name="triangle-left" className="uk-margin-small-right" />triangle-left</li>}
                                {displayedIcons.includes("triangle-right") && <li><Icon name="triangle-right" className="uk-margin-small-right" />triangle-right</li>}
                            </ul>
                        </div>
                    </div>
                    <h4 className="uk-heading-line"><span>Editor</span></h4>
                    <div className="uk-child-width-1-3@s uk-grid">
                        <div className="uk-first-column">
                            <ul className="uk-list">
                                {displayedIcons.includes("bold") && <li><Icon name="bold" className="uk-margin-small-right" />bold</li>}
                                {displayedIcons.includes("italic") && <li><Icon name="italic" className="uk-margin-small-right" />italic</li>}
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list">
                                {displayedIcons.includes("strikethrough") && <li><Icon name="strikethrough" className="uk-margin-small-right" />strikethrough</li>}
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list">
                                {displayedIcons.includes("quote-right") && <li><Icon name="quote-right" className="uk-margin-small-right" />quote-right</li>}
                            </ul>
                        </div>
                    </div>
                    <h4 className="uk-heading-line"><span>Brands</span></h4>
                    <div className="uk-child-width-1-3@s uk-grid">
                        <div className="uk-first-column">
                            <ul className="uk-list">
                                {displayedIcons.includes("500px") && <li><Icon name="500px" className="uk-margin-small-right" />500px</li>}
                                {displayedIcons.includes("behance") && <li><Icon name="behance" className="uk-margin-small-right" />behance</li>}
                                {displayedIcons.includes("dribbble") && <li><Icon name="dribbble" className="uk-margin-small-right" />dribbble</li>}
                                {displayedIcons.includes("facebook") && <li><Icon name="facebook" className="uk-margin-small-right" />facebook</li>}
                                {displayedIcons.includes("flickr") && <li><Icon name="flickr" className="uk-margin-small-right" />flickr</li>}
                                {displayedIcons.includes("foursquare") && <li><Icon name="foursquare" className="uk-margin-small-right" />foursquare</li>}
                                {displayedIcons.includes("github") && <li><Icon name="github" className="uk-margin-small-right" />github</li>}
                                {displayedIcons.includes("github-alt") && <li><Icon name="github-alt" className="uk-margin-small-right" />github-alt</li>}
                                {displayedIcons.includes("gitter") && <li><Icon name="gitter" className="uk-margin-small-right" />gitter</li>}
                                {displayedIcons.includes("google") && <li><Icon name="google" className="uk-margin-small-right" />google</li>}
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list">
                                {displayedIcons.includes("google-plus") && <li><Icon name="google-plus" className="uk-margin-small-right" />google-plus</li>}
                                {displayedIcons.includes("instagram") && <li><Icon name="instagram" className="uk-margin-small-right" />instagram</li>}
                                {displayedIcons.includes("joomla") && <li><Icon name="joomla" className="uk-margin-small-right" />joomla</li>}
                                {displayedIcons.includes("linkedin") && <li><Icon name="linkedin" className="uk-margin-small-right" />linkedin</li>}
                                {displayedIcons.includes("pagekit") && <li><Icon name="pagekit" className="uk-margin-small-right" />pagekit</li>}
                                {displayedIcons.includes("pinterest") && <li><Icon name="pinterest" className="uk-margin-small-right" />pinterest</li>}
                                {displayedIcons.includes("reddit") && <li><Icon name="reddit" className="uk-margin-small-right" />reddit</li>}
                                {displayedIcons.includes("soundcloud") && <li><Icon name="soundcloud" className="uk-margin-small-right" />soundcloud</li>}
                                {displayedIcons.includes("tripadvisor") && <li><Icon name="tripadvisor" className="uk-margin-small-right" />tripadvisor</li>}
                            </ul>
                        </div>
                        <div>
                            <ul className="uk-list">
                                {displayedIcons.includes("tumblr") && <li><Icon name="tumblr" className="uk-margin-small-right" />tumblr</li>}
                                {displayedIcons.includes("twitter") && <li><Icon name="twitter" className="uk-margin-small-right" />twitter</li>}
                                {displayedIcons.includes("uikit") && <li><Icon name="uikit" className="uk-margin-small-right" />uikit</li>}
                                {displayedIcons.includes("vimeo") && <li><Icon name="vimeo" className="uk-margin-small-right" />vimeo</li>}
                                {displayedIcons.includes("whatsapp") && <li><Icon name="whatsapp" className="uk-margin-small-right" />whatsapp</li>}
                                {displayedIcons.includes("wordpress") && <li><Icon name="wordpress" className="uk-margin-small-right" />wordpress</li>}
                                {displayedIcons.includes("xing") && <li><Icon name="xing" className="uk-margin-small-right" />xing</li>}
                                {displayedIcons.includes("yelp") && <li><Icon name="yelp" className="uk-margin-small-right" />yelp</li>}
                                {displayedIcons.includes("youtube") && <li><Icon name="youtube" className="uk-margin-small-right" />youtube</li>}
                            </ul>
                        </div>
                    </div>

            </React.Fragment>
                );
            }
        }
        
export default IconLibrary;
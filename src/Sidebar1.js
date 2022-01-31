import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar1.css';

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <img src='https://c4.wallpaperflare.com/wallpaper/515/19/769/minimalism-naruto-shippuuden-anime-red-eyes-wallpaper-preview.jpg' alt='' />
                <Avatar className='sidebar_avatar' src='https://c4.wallpaperflare.com/wallpaper/116/412/889/naruto-anime-uchiha-itachi-hd-wallpaper-preview.jpg'/>
                <h2>UCHIHA</h2>
                <h4>uchiha@hotmail.com</h4>
                <div className="sidebar_stats">
                    <div className="sidebar_stat">
                        <p>Who viewed you</p>
                        <p className='sidebar_statNumber'>69</p>
                    </div>
                    <div className="sidebar_stat">
                        <p>Views on post</p>
                        <p className='sidebar_statNumber'>420</p>
                    </div>
                </div>
            </div>
            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('React.js')}
                {recentItem('Programming')}
                {recentItem('Design')}
                {recentItem('Software')}
                {recentItem('Developer')}

            </div>
        </div>
    )
}

export default Sidebar
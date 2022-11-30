import React, { useState } from 'react'
import "./VideoSlideBar.css"
import FavortieIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/Messsage'
import ShareIcon from '@material-ui/icons/Share'

const VideoSideBar = ({likes, shares, messages}) => {

    const [liked, setLiked] = useState (false)

  return (
    <div className='videoSideBar'>
      <div className='videoSidebar_button'>
        {liked ? <FavortieIcon  fontSize='large' onClick={e => setLiked(false)} /> : <FavoriteBorderIcon fontSize='large' onClick={e => setLiked(true)} />}
        <p>{liked ? +likes + 1 : likes}</p>
      </div>

      <div className='videoSidebar_button'>
        <MessageIcon fontSize="large" />
        <p>{messages}</p>
      </div>

      <div className='videoSidebar_button'>
        <ShareIcon fontSize='large' />
        <p>{shares}</p>
      </div>
    </div>
  )
}

export default VideoSideBar

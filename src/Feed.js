import React from "react";
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import InputItems from "./InputItems";

function Feed(){
    return(
        <div className="FeedContainer">
            <div className="container">
              <div className="input_container">
                  <CreateIcon/>
                  <form>
                     <input type='text'/>
                     <button type="submit">Post</button>
                  </form>
              </div>
              <div className="inputItems">
                  <InputItems Icon={ImageIcon} title='Photo' color='#7085F9' />
                  <InputItems Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
                  <InputItems Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
                  <InputItems Icon={CalendarViewDayIcon} title='Write Article' color='#7FC15E' />
              </div>
         </div>
     </div>
    )
}
export default Feed;
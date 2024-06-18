import React from 'react'
import './App.css'
import TitleBar from './components/TitleBar';
import MainCard from './components/MainCard';
import ReviewCard from './components/ReviewCard'
import faceIcon from './images/icon-facebook.svg'
import instaIcon from './images/icon-instagram.svg'
import twitterIcon from './images/icon-twitter.svg'
import ytIcon from './images/icon-youtube.svg'
import iconUp from './images/icon-up.svg'
import iconDown from './images/icon-down.svg'

function App() {
  return (
    <div className="App">
      <TitleBar/>

      <div className='mainContainer'>
        <MainCard 
          icon = {faceIcon} 
          at = '@nathanf' 
          number = '1987' 
          subtitle = 'FOLLOWERS' 
          arrowIcon = {iconUp} 
          label = '12 today'
        />
        <MainCard 
           icon = {twitterIcon} 
           at = '@nathanf' 
           number = '1044' 
           subtitle = 'FOLLOWERS' 
           arrowIcon = {iconUp} 
           label = '99 today'
          />
        <MainCard
           icon = {instaIcon} 
           at = '@nathanf' 
           number = '1100' 
           subtitle = 'FOLLOWERS' 
           arrowIcon = {iconUp} 
           label = '1099 today'
          />
        <MainCard
           icon = {ytIcon} 
           at = 'Nathan F.' 
           number = '8239' 
           subtitle = 'SUBSCRIBER' 
           arrowIcon = {iconDown} 
           label = '144 today'
          />
      </div>

      <div className='reviewContainerOne'>
        <ReviewCard
          label = 'Page Views'
          mediaIcon = {faceIcon}
          number = '87'
          arrowIcon = {iconUp}
          percent = '3%'
        />
        <ReviewCard
          label = 'Retweets'
          mediaIcon = {twitterIcon}
          number = '117'
          arrowIcon = {iconUp}
          percent = '303%'
          />
        <ReviewCard
          label = 'Profile'
          mediaIcon = {instaIcon}
          number = '52k'
          arrowIcon = {iconUp}
          percent = '1375%'
         />
        <ReviewCard
          label = 'Views'
          mediaIcon = {ytIcon}
          number = '1407'
          arrowIcon = {iconDown}
          percent = '12%'
          />
      </div>
      <div className='reviewContainerTwo'>
        <ReviewCard
          label = 'Likes'
          mediaIcon = {faceIcon}
          number = '52'
          arrowIcon = {iconDown}
          percent = '2%'
          />
        <ReviewCard
          label = 'Likes'
          mediaIcon = {twitterIcon}
          number = '507'
          arrowIcon = {iconDown}
          percent = '553%'
          />
        <ReviewCard
          label = 'Likes'
          mediaIcon = {instaIcon}
          number = '5462'
          arrowIcon = {iconDown}
          percent = '12%'
          />
        <ReviewCard
          label = 'Likes'
          mediaIcon = {ytIcon}
          number = '107'
          arrowIcon = {iconDown}
          percent = '19%'
          />
      </div>

    </div>
  );
}

export default App;

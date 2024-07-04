import React from 'react'
import { ProfileHeader } from './ProfileHeader'
import '../styles/profile.css'
import userImage from '../assets/image.png'
import { icons } from 'antd/es/image/PreviewGroup'
import {BiBook} from 'react-icons/bi'
const courses=[
  {
    title: 'HTML CSS',
    duration: '2 Hours',
    icon:<BiBook/>,
  },
  {
    title: 'JavaScript',
    duration: '2 Hours',
    icon:<BiBook/>,
  },
  {
    title: 'React JS',
    duration: '2 Hours',
    icon:<BiBook/>,
  },
]
const Profile = () => {
  return (
    <div className='profile'>
      <ProfileHeader/>

      <div className="user--profile">
        <div className="user--detail">
          <img src={userImage} alt="" />
          <h3 className='username'>Julianto</h3>
          <span className="profession">Student</span>
        </div>
        <div className="user-courses">
          {courses.map(coures=><div className='course'>
            <div className="course-detail">
              <div className="course-cover">{coures.icon}</div>
              <div className="course-name">
                <h5 className='title'>{coures.title}</h5>
                <span className="duration">{coures.duration}</span>
              </div>
            </div>
            <div className="action">:</div>
          </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Profile
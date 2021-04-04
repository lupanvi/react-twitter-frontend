import React,{useState} from 'react'

import { AiOutlineTwitter } from 'react-icons/ai'
import { RiHome7Fill } from 'react-icons/ri'
import { BiHash } from 'react-icons/bi'
import { VscBell } from 'react-icons/vsc'
import { FiMail } from 'react-icons/fi'
import { BsBookmark, BsCardList } from 'react-icons/bs'
import { MdPermIdentity } from 'react-icons/md'
import { CgMoreO } from 'react-icons/cg'

import SidebarOption from "../SidebarOption"
import TwitterButton from './Components/TwitterButton'

const Sidebar = (props) => {
  return (
    <div className="sidebar px-5 pt-5 h-screen border-r-2" data-test="component-sidebar">
      <AiOutlineTwitter className="mb-5 text-3xl ml-3 text-twitter " data-test="twitter-icon" />
      <SidebarOption active Icon={RiHome7Fill} text="Home" data-test="home-icon" />
      <SidebarOption Icon={BiHash} text="Explore" data-test="search-icon" />
      <SidebarOption Icon={VscBell} text="Notifications" data-test="notifications-icon" />
      <SidebarOption Icon={FiMail} text="Messages" data-test="mail-icon" />
      <SidebarOption Icon={BsBookmark} text="Bookmarks" data-test="bookmark-icon" />
      <SidebarOption Icon={BsCardList} text="Lists" data-test="lists-icon" />
      <SidebarOption Icon={MdPermIdentity} text="Profile" data-test="profile-icon" />
      <SidebarOption Icon={CgMoreO} text="More" data-test="more-icon" />
      <TwitterButton />            
    </div>
  )
}

export default Sidebar;
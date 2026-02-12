import {Navbar, Welcome,Dock, Home, InfoNotification} from '#components'
import React from 'react'
import { Draggable } from 'gsap/Draggable';
import gsap from 'gsap';
import { Finder, Resume, Safari, Terminal, Text,Image, Contact, Photos } from '#windows';
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome/>
      <Dock/>
      <InfoNotification/>

      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder/>
      <Text/>
      <Image/>
      <Contact/>
      <Home/>
      <Photos/>
    </main>
  )
}

export default App
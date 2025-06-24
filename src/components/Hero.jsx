import { useState } from 'react'
import App from './Header.jsx'

function block1() {

  return (
    <div class='text-white flex items-center flex-col text-center '>
        <img class="h-80" src="./src/assets/uj-yhbgt-ytgdfdhgv.png" alt="" />
        <h1 class = "mt-12 text-[40px] ">Nice to meet you! I’m <u>Bassem Braïki</u>.</h1>
        <p class = " mt-12 text-[20px]">Based in  Vénissieux, I’m a front-end developer passionate about building accessible web apps that users love.</p>
        <span class = "underline mt-12 text-[20px]">CONTACT ME</span>
        <hr class="text-#d9d9d9" />
    </div>
  )
}

export default block1
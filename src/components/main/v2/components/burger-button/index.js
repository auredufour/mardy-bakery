import React from "react"
import { Toggle } from './styles'


export const BurgerToggle = ({ isToggled, toggleSideNav }) => (
    <Toggle isOpen={isToggled} onClick={toggleSideNav}>
      <div>
        <span></span>
      </div>
      <div>
        <span></span>
      </div>
      <div>
        <span></span>
      </div>
    </Toggle>
  )


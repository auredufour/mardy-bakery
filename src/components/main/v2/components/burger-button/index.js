import React, {forwardRef} from "react"
import { Toggle } from './styles'


export const BurgerToggle = forwardRef(({ isToggled, toggleSideNav }, ref) => (
  <Toggle
    isOpen={isToggled}
    onClick={toggleSideNav}
    aria-haspopup={true}
    aria-expanded={isToggled}
    aria-label="Menu"
    ref={ref}
  >
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
))

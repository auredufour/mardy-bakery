import React, { useState } from "react"

import { FacebookIcon } from "../../assets/facebook-icon"
import { InstagramIcon } from "../../assets/instagram-icon"
import { BurgerToggle } from "../burger-button"

import {
  MenuContainer,
  NavContainer,
  SocialMediaContainer,
  SocialMediaItem,
  BurgerToggleContainer,
  Sidebar,
  MenuItem,
  MenuLink,
  hiddenStyles,
} from "./styles"

export const Nav = () => {
   const [isToggled, setToggle] = React.useState(false)

   const toggleSideNav = () => {
     setToggle(!isToggled)
   }

  const links = {
    home: "Home",
    about: "About",
    enquiries: "Enquiries",
    tandc: "T&Cs",
  }

  return (
    <NavContainer>
      <BurgerToggleContainer>
        <BurgerToggle isToggled={isToggled} toggleSideNav={toggleSideNav} />
        <Sidebar isShowing={isToggled}>
          <MenuContainer>
            {Object.keys(links).map(link => (
              <MenuItem>
                <MenuLink to={`/${link}`} isShowing={isToggled}>
                  {links[link]}
                </MenuLink>
              </MenuItem>
            ))}
          </MenuContainer>
        </Sidebar>
      </BurgerToggleContainer>
      <SocialMediaContainer>
        <SocialMediaItem withMarginRight>
          <a href="https://www.instagram.com/mardy.bakery/?hl=en">
            <InstagramIcon />
          </a>
        </SocialMediaItem>
        <SocialMediaItem>
          <a href="https://m.facebook.com/profile.php?id=100065623353819&_rdr">
            <FacebookIcon />
          </a>
        </SocialMediaItem>
      </SocialMediaContainer>
    </NavContainer>
  )
}

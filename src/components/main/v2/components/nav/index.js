import React, { useState, useRef, useEffect } from "react"

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
} from "./styles"

export const Nav = () => {
  const [isToggled, setToggle] = useState(false)
  const listItems = useRef([])
  const navButton = useRef()

   const links = {
    home: "Home",
    about: "About",
    celebrationCakes: 'Celebration cakes',
    enquiries: "Enquiries",
    tandc: "T&Cs",
  }
  
  const toggleSideNav = () => {
    setToggle(!isToggled)
  }

  const handleBlur = evt => {
    if (evt.target.text === links.tandc) {
      navButton?.current?.focus()
    }
  }

  useEffect(() => {
    if (isToggled) {
      listItems?.current[0]?.focus()
    }
  }, [isToggled])

 

  return (
    <NavContainer>
      <BurgerToggleContainer>
        <BurgerToggle
          isToggled={isToggled}
          toggleSideNav={toggleSideNav}
          ref={navButton}
        />
        <Sidebar isShowing={isToggled}>
          <MenuContainer>
            {Object.keys(links).map((link, index) => (
              <MenuItem key={link}>
                <MenuLink
                  to={`/${link}`}
                  isShowing={isToggled}
                  ref={el => listItems.current.push(el)}
                  onBlur={handleBlur}
                >
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
        <SocialMediaItem style={{position: 'relative', top: '-1.2px'}}>
          <a href="https://m.facebook.com/profile.php?id=100065623353819&_rdr">
            <FacebookIcon />
          </a>
        </SocialMediaItem>
      </SocialMediaContainer>
    </NavContainer>
  )
}

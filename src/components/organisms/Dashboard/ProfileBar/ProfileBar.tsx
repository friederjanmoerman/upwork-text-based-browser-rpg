import React from "react"
import { StyledSidebar, StyledNavList, StyledFooter, StyledSearchInputWrapper } from "./ProfileBar.styles"
import { City, Car, Pill, NotePencil, NavigationArrow, MedalMilitary, Heart, Money, Bank } from "@phosphor-icons/react"

import { NavItem } from "@/components/atoms/NavItem/NavItem"
import ProfileCard from "@/components/molecules/ProfileCard/ProfileCard"

interface NavItemData {
  label: string
  background?: string
  icon?: React.ElementType
}

const profileData: NavItemData[] = [
  { label: "Amsterdam, NL", icon: NavigationArrow },
  { label: "Legendary Don", icon: MedalMilitary },
  { label: "Health", icon: Heart },
  { label: "$300.045", icon: Money },
  { label: "$300.045", icon: Bank },
]

const ProfileBar = () => {
  return (
    <StyledSidebar>
      <ProfileCard />
      <StyledNavList>
        {profileData.map(item => (
          <NavItem key={item.label} label={item.label} icon={item.icon} background={item.background} />
        ))}
      </StyledNavList>

      <StyledFooter>&copy; {new Date().getFullYear()} Crime Club</StyledFooter>
    </StyledSidebar>
  )
}

export default ProfileBar

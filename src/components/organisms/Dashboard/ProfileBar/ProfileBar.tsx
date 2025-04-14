import React from "react"
import { StyledSidebar, StyledNavList } from "./ProfileBar.styles"
import {
  NavigationArrow,
  MedalMilitary,
  Heart,
  Money,
  Bank,
  NumberOne,
  NumberTwo,
  NumberFour,
  NumberFive,
  NumberThree,
} from "@phosphor-icons/react"

import { NavItem } from "@/components/atoms/NavItem/NavItem"
import ProfileCard from "@/components/molecules/ProfileCard/ProfileCard"
import Leaderboard from "@/components/molecules/Leaderboard/Leaderboard"

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

const topPlayersData: NavItemData[] = [
  { label: "Joan_Brown", icon: NumberOne },
  { label: "Cheryl.Towne", icon: NumberTwo },
  { label: "Karl.Jerde", icon: NumberThree },
  { label: "Name", icon: NumberFour },
  { label: "Name", icon: NumberFive },
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
      <Leaderboard />
    </StyledSidebar>
  )
}

export default ProfileBar

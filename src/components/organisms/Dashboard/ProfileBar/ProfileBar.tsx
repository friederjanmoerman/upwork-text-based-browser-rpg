import React from "react"
import { StyledSidebar, StyledNavList } from "./ProfileBar.styles"
import { NavigationArrow, MedalMilitary, Heart, Money, Bank, Crown, Trophy, Medal } from "@phosphor-icons/react"

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

const leaderboardPlayers = [
  { name: "Joan_Brown", icon: Crown },
  { name: "Cheryl.Towne", icon: Trophy },
  { name: "Karl.Jerde", icon: Medal },
  { name: "Sonja_Fahey6" },
  { name: "Manuel6" },
]

const leaderboardFamilies = [
  { name: "Family", icon: Crown },
  { name: "Family Very Long Name", icon: Trophy },
  { name: "666", icon: Medal },
  { name: "What's up" },
  { name: "Last but not least" },
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
      <Leaderboard title="Top Players" data={leaderboardPlayers} />
      <Leaderboard title="Top Families" data={leaderboardFamilies} />
    </StyledSidebar>
  )
}

export default ProfileBar

// src/components/organisms/Sidebar/Sidebar.tsx

import React from "react"
import { StyledSidebar, StyledNavList, StyledFooter } from "./Sidebar.styles"
import {
  AirplaneTilt,
  Bank,
  ShoppingCartSimple,
  PokerChip,
  Dumbbell,
  FirstAid,
  Newspaper,
  LockLaminated,
  HouseLine,
  Lipstick,
  CrosshairSimple,
} from "@phosphor-icons/react"

import { NavItem } from "@/components/atoms/NavItem/NavItem"

interface NavItemData {
  label: string
  icon?: React.ElementType
}

// 1) Define your nav items & pick suitable icons
const navItems: NavItemData[] = [
  { label: "Airport", icon: AirplaneTilt },
  { label: "Bank", icon: Bank },
  { label: "Black Market", icon: ShoppingCartSimple },
  { label: "Casino", icon: PokerChip },
  { label: "Gym", icon: Dumbbell },
  { label: "Hospital", icon: FirstAid },
  { label: "News", icon: Newspaper },
  { label: "Prison", icon: LockLaminated },
  { label: "Real Estate Agency", icon: HouseLine },
  { label: "Red Light District", icon: Lipstick },
  { label: "Shooting Range", icon: CrosshairSimple },
]

export function Sidebar() {
  return (
    <StyledSidebar>
      <StyledNavList>
        The City
        {navItems.map(item => (
          <NavItem key={item.label} label={item.label} icon={item.icon} />
        ))}
      </StyledNavList>

      <StyledFooter>&copy; {new Date().getFullYear()} Crime Club</StyledFooter>
    </StyledSidebar>
  )
}

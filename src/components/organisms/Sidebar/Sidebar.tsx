// src/components/organisms/Sidebar/Sidebar.tsx

import React from "react"
import { StyledSidebar, StyledNavList, StyledFooter } from "./Sidebar.styles"
import {
  AirplaneTilt,
  Bank,
  ShoppingCartSimple,
  PokerChip,
  Barbell,
  FirstAid,
  Newspaper,
  LockLaminated,
  HouseLine,
  Lamp,
  CrosshairSimple,
} from "@phosphor-icons/react"

import { NavItem } from "@/components/atoms/NavItem/NavItem"

interface NavItemData {
  label: string
  background?: string
  icon?: React.ElementType
}

// 1) Define your nav items & pick suitable icons
const navItems: NavItemData[] = [
  { label: "Airport", icon: AirplaneTilt, background: "#3b82f7" },
  { label: "Bank", icon: Bank, background: "#6bd45f" },
  { label: "Black Market", icon: ShoppingCartSimple, background: "#2c2c2e" },
  { label: "Casino", icon: PokerChip, background: "#f2f2f2" },
  { label: "Gym", icon: Barbell, background: "#f2a33c" },
  { label: "Hospital", icon: FirstAid, background: "#eb445a" },
  { label: "News", icon: Newspaper, background: "#3b82f7" },
  { label: "Prison", icon: LockLaminated, background: "#2c2c2e" },
  { label: "Real Estate Agency", icon: HouseLine, background: "#5e5cde" },
  { label: "Red Light District", icon: Lamp, background: "#eb445a" },
  { label: "Shooting Range", icon: CrosshairSimple, background: "#2c2c2e" },
]

export function Sidebar() {
  return (
    <StyledSidebar>
      <StyledNavList>
        The City
        {navItems.map(item => (
          <NavItem key={item.label} label={item.label} icon={item.icon} background={item.background} />
        ))}
      </StyledNavList>

      <StyledFooter>&copy; {new Date().getFullYear()} Crime Club</StyledFooter>
    </StyledSidebar>
  )
}

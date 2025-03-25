import React from "react"

import {
  StyledSidebar,
  StyledSidebarHeader,
  StyledNavList,
  StyledNavItem,
  StyledNavItemLabel,
  StyledFooter,
} from "./Sidebar.styles"

interface NavItem {
  label: string
  icon?: React.ElementType
}

const navItems: NavItem[] = [
  { label: "Commit a Crime" },
  { label: "Commit a Crime" },
  { label: "Commit a Crime" },
  { label: "Commit a Crime" },
]

export function Sidebar() {
  return (
    <StyledSidebar>
      <StyledSidebarHeader>Crime Club</StyledSidebarHeader>

      <StyledNavList>
        {navItems.map(item => (
          <StyledNavItem key={item.label}>
            {item.icon && <item.icon />}
            <StyledNavItemLabel>{item.label}</StyledNavItemLabel>
          </StyledNavItem>
        ))}
      </StyledNavList>

      <StyledFooter>&copy; {new Date().getFullYear()} Crime Club</StyledFooter>
    </StyledSidebar>
  )
}

import React from "react"
import { StyledNavItem } from "./NavItem.styles"

interface NavItemProps {
  label: string
  icon?: React.ElementType
}

export function NavItem({ label, icon: Icon }: NavItemProps) {
  return (
    <StyledNavItem>
      {Icon && <Icon size={24} weight="fill" color="white" />}
      {label}
    </StyledNavItem>
  )
}

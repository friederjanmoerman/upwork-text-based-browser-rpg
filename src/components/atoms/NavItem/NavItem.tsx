import React from "react"
import { StyledNavItem } from "./NavItem.styles"

interface NavItemProps {
  label: string
  icon?: React.ElementType
}

export function NavItem({ label, icon }: NavItemProps) {
  return <StyledNavItem>{label}</StyledNavItem>
}

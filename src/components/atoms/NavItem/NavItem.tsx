import React from "react"
import { StyledIcon, StyledIconWrapper, StyledNavItem } from "./NavItem.styles"

interface NavItemProps {
  label: string
  icon?: React.ElementType
}

export function NavItem({ label, icon: Icon }: NavItemProps) {
  return (
    <StyledNavItem>
      <StyledIconWrapper>
        <StyledIcon>{Icon && <Icon size={12} weight="fill" color="white" />}</StyledIcon>
      </StyledIconWrapper>
      {label}
    </StyledNavItem>
  )
}

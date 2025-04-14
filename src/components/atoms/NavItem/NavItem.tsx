import React from "react"
import { StyledIcon, StyledIconWrapper, StyledNavItem } from "./NavItem.styles"
import ProgressBar from "../ProgressBar/ProgressBar"

interface NavItemProps {
  label: string
  background?: string
  icon?: React.ElementType
  progress?: number
  progressColor?: string
}

export function NavItem({ label, icon: Icon, background, progress, progressColor }: NavItemProps) {
  return (
    <StyledNavItem>
      <StyledIconWrapper>
        <StyledIcon backgroundColor={background}>{Icon && <Icon size={12} weight="fill" color="white" />}</StyledIcon>
      </StyledIconWrapper>

      <div style={{ flex: 1 }}>
        <div>{label}</div>
        {progress !== undefined && <ProgressBar value={progress} color={progressColor} />}
      </div>
    </StyledNavItem>
  )
}

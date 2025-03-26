import { IconBadge } from "@medusajs/ui"
import styled from "styled-components"

export const StyledNavItem = styled.li`
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0;
  color: #a1a1aa;
  cursor: pointer;
  display: flex;
  gap: 8px;
  align-items: center;
  &:hover {
    color: #fff;
  }
`

export const StyledIconWrapper = styled(IconBadge)`
  padding: 2px;
  border-radius: 4px;
  border: 1px solid #333333;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledIcon = styled.div<{ backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor || "transparent"};
  padding: 2px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`

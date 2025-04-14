import React from "react"
import { StyledProgressContainer, StyledProgressBar } from "./ProgressBar.styles"

interface ProgressBarProps {
  value: number
  color?: string
}

const ProgressBar = ({ value, color = "#22c55e" }: ProgressBarProps) => {
  return (
    <StyledProgressContainer>
      <StyledProgressBar style={{ width: `${value}%`, backgroundColor: color }} />
    </StyledProgressContainer>
  )
}

export default ProgressBar

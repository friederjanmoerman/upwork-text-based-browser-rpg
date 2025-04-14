import { StyledIcon, StyledIconWrapper, StyledLeaderboardItem } from "./LeaderboardItem.styles"

interface LeaderboardItemProps {
  rank: number
  name: string
  icon?: React.ElementType
}

export function LeaderboardItem({ name, icon: Icon }: LeaderboardItemProps) {
  return (
    <StyledLeaderboardItem>
      {name}
      <StyledIconWrapper>
        <StyledIcon>{Icon && <Icon size={12} weight="fill" color="white" />}</StyledIcon>
      </StyledIconWrapper>
    </StyledLeaderboardItem>
  )
}

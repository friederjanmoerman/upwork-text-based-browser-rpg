import {
  StyledIcon,
  StyledIconWrapper,
  StyledLeaderboardItem,
  StyledLeaderboardNumber,
  StyledLeaderboardPlayerName,
} from "./LeaderboardItem.styles"

interface LeaderboardItemProps {
  rank: number
  name: string
  icon?: React.ElementType
}

export function LeaderboardItem({ rank, name, icon: Icon }: LeaderboardItemProps) {
  return (
    <StyledLeaderboardItem>
      <StyledLeaderboardNumber>{rank}</StyledLeaderboardNumber>
      <StyledLeaderboardPlayerName>{name}</StyledLeaderboardPlayerName>
      <StyledIconWrapper>
        <StyledIcon>{Icon && <Icon size={12} weight="fill" color="white" />}</StyledIcon>
      </StyledIconWrapper>
    </StyledLeaderboardItem>
  )
}

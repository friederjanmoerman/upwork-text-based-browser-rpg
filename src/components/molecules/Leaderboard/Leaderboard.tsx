import React from "react"
import { CaretRight } from "@phosphor-icons/react"
import { LeaderboardItem } from "@/components/atoms/LeaderboardItem/LeaderboardItem"
import { StyledLeaderboard, StyledLeaderboardHeader } from "./Leaderboard.styles"

interface LeaderboardData {
  name: string
  icon?: React.ElementType
}

interface LeaderboardProps {
  title?: string
  data: LeaderboardData[]
}

const Leaderboard = ({ title, data }: LeaderboardProps) => {
  return (
    <StyledLeaderboard>
      <StyledLeaderboardHeader href="#">
        {title} <CaretRight size={12} />
      </StyledLeaderboardHeader>
      {data.map((player, index) => (
        <LeaderboardItem key={player.name} rank={index + 1} name={player.name} icon={player.icon} />
      ))}
    </StyledLeaderboard>
  )
}

export default Leaderboard

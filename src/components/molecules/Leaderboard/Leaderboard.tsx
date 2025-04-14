import { LeaderboardItem } from "@/components/atoms/LeaderboardItem/LeaderboardItem"
import { Crown, Medal, Trophy } from "@phosphor-icons/react"
import { StyledLeaderboard } from "./Leaderboard.styles"

const mockData = [
  { name: "Joan_Brown", icon: Crown },
  { name: "Cheryl.Towne", icon: Trophy },
  { name: "Karl.Jerde", icon: Medal },
  { name: "Sonja_Fahey6" },
  { name: "Manuel6" },
]

const Leaderboard = () => {
  return (
    <StyledLeaderboard>
      {mockData.map((player, index) => (
        <LeaderboardItem
          key={player.name}
          rank={index + 1} // 👈 Add 1 to the index
          name={player.name}
          icon={player.icon}
        />
      ))}
    </StyledLeaderboard>
  )
}

export default Leaderboard

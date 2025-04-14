import { Avatar } from "@medusajs/ui"

import { StyledProfileContent, StyledProfileFamily, StyledProfileName, StyledWrapper } from "./ProfileCard.styles"

interface ProfileCardProps {
  name: string
  family?: string
}

const ProfileCard = ({ name, family }: ProfileCardProps) => {
  return (
    <StyledWrapper>
      <Avatar src="https://avatars.githubusercontent.com/u/10656202?v=4" fallback="M" />
      <StyledProfileContent>
        <StyledProfileName>{name}</StyledProfileName>
        <StyledProfileFamily>{family} Family</StyledProfileFamily>
      </StyledProfileContent>
    </StyledWrapper>
  )
}

export default ProfileCard

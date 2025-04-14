import { Avatar } from "@medusajs/ui"

import { StyledWrapper } from "./ProfileCard.styles"

const ProfileCard = () => {
  return (
    <StyledWrapper>
      <Avatar src="https://avatars.githubusercontent.com/u/10656202?v=4" fallback="M" />
    </StyledWrapper>
  )
}

export default ProfileCard

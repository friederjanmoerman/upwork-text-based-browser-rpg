import ProfileBar from "../ProfileBar/ProfileBar"
import Sidebar from "../Sidebar/Sidebar"
import { StyledDashboardContent, StyledDashboardWrapper } from "./DashboardWrapper.styles"

const DashboardWrapper = () => {
  return (
    <StyledDashboardWrapper>
      <Sidebar />
      <StyledDashboardContent></StyledDashboardContent>
      <ProfileBar />
    </StyledDashboardWrapper>
  )
}

export default DashboardWrapper

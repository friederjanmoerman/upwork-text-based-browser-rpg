import ProfileBar from "../ProfileBar/ProfileBar"
import Sidebar from "../Sidebar/Sidebar"
import { StyledDashboardContent, StyledDashboardWrapper } from "./DashboardWrapper.styles"

const DashboardWrapper = () => {
  return (
    <StyledDashboardWrapper>
      <ProfileBar />
      <StyledDashboardContent></StyledDashboardContent>
      <Sidebar />
    </StyledDashboardWrapper>
  )
}

export default DashboardWrapper

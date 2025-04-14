import { PasswordInput } from "@/components/atoms/PasswordInput/PasswordInput"
import { TextInput } from "@/components/atoms/TextInput/TextInput"
import { ButtonWithIcon } from "@/components/atoms/ButtonWithIcon/ButtonWithIcon"
import {
  StyledWrapper,
  StyledLeftPanel,
  StyledRightPanel,
  StyledFormContainer,
  StyledHeader,
  StyledTitleWithBadge,
  StyledTitle,
  StyledBadge,
  StyledSubtitle,
  StyledFormContainerFooter,
} from "./CreateAccount.styles"

const handleButtonClick = () => {
  console.log("Button clicked!")
}

export function CreateAccount() {
  return (
    <StyledWrapper>
      <StyledLeftPanel src="/illustrations/splash.png" alt="Splash" />
      <StyledRightPanel>
        <StyledFormContainer>
          <StyledHeader>
            <StyledTitleWithBadge>
              <StyledTitle>Crime club</StyledTitle>
              <StyledBadge>Beta</StyledBadge>
            </StyledTitleWithBadge>
            <StyledSubtitle>Create your account</StyledSubtitle>
          </StyledHeader>
          <TextInput placeholder="Username" />
          <TextInput placeholder="Email" />
          <PasswordInput placeholder="Password" />
          <PasswordInput placeholder="Repeat Password" />
          <StyledFormContainerFooter>
            <ButtonWithIcon onClick={handleButtonClick} label="Create account"></ButtonWithIcon>
          </StyledFormContainerFooter>
        </StyledFormContainer>
      </StyledRightPanel>
    </StyledWrapper>
  )
}

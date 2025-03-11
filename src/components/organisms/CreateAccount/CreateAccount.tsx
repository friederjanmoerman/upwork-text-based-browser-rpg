import { PasswordInput } from "@/components/atoms/PasswordInput/PasswordInput"
import { TextInput } from "@/components/atoms/TextInput/TextInput"
import { ButtonWithIcon } from "@/components/atoms/ButtonWithIcon/ButtonWithIcon"

import {
  StyledWrapper,
  StyledFormContainer,
  StyledLeftPanel,
  StyledRightPanel,
  StyledTitle,
  StyledBadge,
  StyledTitleWithBadge,
  StyledSubtitle,
  StyledHeader,
  StyledFormContainerFooter,
} from "./CreateAccount.styles"

const handleButtonClick = () => {
  // Your logic here
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

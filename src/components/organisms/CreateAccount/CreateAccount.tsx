import { PasswordInput } from "@/components/atoms/PasswordInput/PasswordInput"
import { TextInput } from "@/components/atoms/TextInput/TextInput"

import { StyledWrapper, StyledFormContainer, StyledLeftPanel, StyledRightPanel } from "./CreateAccount.styles"

export function CreateAccount() {
  return (
    <StyledWrapper>
      <StyledLeftPanel src="/illustrations/splash.png" alt="Splash" />
      <StyledRightPanel>
        <StyledFormContainer>
          <TextInput placeholder="Username" />
          <TextInput placeholder="Email" />
          <PasswordInput placeholder="Password" />
          <PasswordInput placeholder="Repeat Password" />
        </StyledFormContainer>
      </StyledRightPanel>
    </StyledWrapper>
  )
}

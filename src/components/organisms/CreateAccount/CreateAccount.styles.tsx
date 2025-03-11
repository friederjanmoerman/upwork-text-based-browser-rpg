import { Container } from "@medusajs/ui"
import styled from "styled-components"

export const StyledWrapper = styled(Container)`
  margin: auto;
  max-width: 888px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  overflow: hidden;
`

export const StyledLeftPanel = styled.img`
  flex: 0 0 50%;
`

export const StyledRightPanel = styled.div`
  flex: 0 0 50%;
`

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`

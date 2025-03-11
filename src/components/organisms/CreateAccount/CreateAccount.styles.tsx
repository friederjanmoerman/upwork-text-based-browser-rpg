import { Badge, Container } from "@medusajs/ui"
import styled from "styled-components"

export const StyledWrapper = styled(Container)`
  margin: auto;
  max-width: 888px;
  height: 100%;
  max-height: 420px;
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
  height: 100%;
`

export const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  height: 100%;
`

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`

export const StyledTitleWithBadge = styled.div`
  display: flex;
  gap: 12px;
`

export const StyledBadge = styled(Badge)`
  color: #fbbf24;
  background: #451a03;
  border: 1px solid #78350f;
  height: 20px;
  text-transform: uppercase;
  padding: 2px 4px;
`

export const StyledTitle = styled.h1`
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  color: #fafafa;
`

export const StyledSubtitle = styled.h2`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #71717a;
`

export const StyledFormContainerFooter = styled.div`
  background: #2a2a2a;
  padding: 12px 16px;
  width: 100%;
  align-self: flex-end;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
`

import styled from "styled-components"

export const StyledSidebar = styled.nav`
  width: 220px;
  height: 100vh;
  background-color: #141414;
  color: #71717a;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  font-size: 12px;
`

export const StyledSearchInputWrapper = styled.div`
  width: 100%;
  padding: 12px;
`

export const StyledNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 0;
  margin: 0 12px;
  border-top: 1px dotted #71717a;
`

export const StyledFooter = styled.footer`
  margin-top: auto;
  padding: 1rem;
  font-size: 0.8rem;
  text-align: center;
  border-top: 1px solid #2a2a2a;
  color: #888;
`

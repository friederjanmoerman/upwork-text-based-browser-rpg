import styled from "styled-components"

export const StyledSidebar = styled.nav`
  width: 220px;
  height: 100vh;
  background-color: #141414;
  color: #fafafa;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const StyledNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 12px;
`

export const StyledFooter = styled.footer`
  margin-top: auto;
  padding: 1rem;
  font-size: 0.8rem;
  text-align: center;
  border-top: 1px solid #2a2a2a;
  color: #888;
`

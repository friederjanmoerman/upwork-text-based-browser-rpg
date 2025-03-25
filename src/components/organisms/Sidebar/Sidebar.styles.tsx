import styled from "styled-components"

export const StyledSidebar = styled.nav`
  width: 220px;
  height: 100vh;
  background-color: #141414;
  color: #fafafa; /* or your brand’s light text color */
  display: flex;
  flex-direction: column;
  overflow-y: auto; /* so you can scroll if the list is long */
`

export const StyledSidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.95rem;
  border-bottom: 1px solid #2a2a2a;
`

export const StyledNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const StyledNavItem = styled.li`
  padding: 0.75rem 1rem;
  transition: background 0.2s ease;
  cursor: pointer;
  border-bottom: 1px solid #2a2a2a;

  &:hover {
    background-color: #1f1f1f;
  }
`

export const StyledNavItemLabel = styled.span`
  margin-left: 8px;
`

export const StyledFooter = styled.footer`
  margin-top: auto;
  padding: 1rem;
  font-size: 0.8rem;
  text-align: center;
  border-top: 1px solid #2a2a2a;
  color: #888;
`

import styled from "styled-components"

export const StyledLeaderboard = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 12px 0;
  margin: 0 12px;
  border-top: 1px dotted #71717a;
  li:first-child {
    background: #252525;
  }
  li:nth-child(2) {
    background: #202020;
  }
  li:nth-child(3) {
    background: #1b1b1b;
  }
`

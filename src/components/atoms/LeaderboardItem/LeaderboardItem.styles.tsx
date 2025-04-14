import styled from "styled-components"

export const StyledLeaderboardItem = styled.li`
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0;
  color: #a1a1aa;
  cursor: pointer;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  &:hover {
    color: #fff;
  }
`
export const StyledLeaderboardPlayerName = styled.div`
  flex: 1;
  max-width: 125px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const StyledLeaderboardNumber = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: #a1a1aa;
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledIconWrapper = styled.div`
  padding: 3px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
`

export const StyledIcon = styled.div<{ backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor || "transparent"};
  padding: 2px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`

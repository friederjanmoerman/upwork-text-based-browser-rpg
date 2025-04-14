import styled from "styled-components"

export const StyledWrapper = styled.div`
  display: flex;
  margin: 12px;
  padding: 10px 8px;
  background: #27272a;
  box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.12), 0px 4px 8px rgba(0, 0, 0, 0.32);
  border-radius: 8px;
  align-items: center;
`

export const StyledProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7px;
`

export const StyledProfileName = styled.div`
  max-width: 120px;
  height: 20px;
  font-weight: 500;
  font-size: 13px;
  color: #fafafa;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export const StyledProfileFamily = styled.div`
  max-width: 120px;
  height: 20px;
  font-weight: 400;
  font-size: 12px;
  color: #a1a1aa;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

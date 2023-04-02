import { StatusMsgStyled } from "./styles/StatusMsg.styled"

function StatusMsg({ children, color }) {
  return (
    <StatusMsgStyled color={color}>
        {children}
    </StatusMsgStyled>
  )
}

export default StatusMsg
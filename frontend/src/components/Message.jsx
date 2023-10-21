import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({variant,children}) => {
  return (
    <Alert variant={variant}>{children}</Alert>
  )
}

//variant: 'danger'-it shown in red, 'info'-in blue, 'success'-green
Message.defaultProps = {
    variant: 'info',
}

export default Message
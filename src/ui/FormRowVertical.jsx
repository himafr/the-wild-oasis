/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;
function FormRow({error,label,children}) {
    return (
        <StyledFormRow>
        <Label htmlFor={children.props?.id} > {label} </Label>
       {children}
        {error&& <Error role="alert">{error}</Error>}
      </StyledFormRow>
    )
}

export default FormRow

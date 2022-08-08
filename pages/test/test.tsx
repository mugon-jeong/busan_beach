import type { NextPage } from 'next'
import styled, { ThemeProvider } from 'styled-components'

const StyledButton = styled.button`
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};

  font-size: 1rem;
  margin: 1rem;
  padding: 0.25rem 1rem;
  border-radius: 3px;
`;

const theme = {
  fg: "palevioletred",
  bg: "white",
};



const Test: NextPage = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <div>
          <StyledButton>Styled Button</StyledButton>
          <StyledButton>Styled Button</StyledButton>
        </div>
      </ThemeProvider>
    </div>
  )
}

export default Test

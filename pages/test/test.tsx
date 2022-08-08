import type { NextPage } from 'next'
import styled, { ThemeProvider } from 'styled-components'

const StyledButton = styled.button`
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};

  font-size:${props => props.theme.fontTheme.rgl_s};
  margin: 1rem;
  padding: 0.25rem 1rem;
  border-radius: 3px;
`;

const theme = {
  fg: "palevioletred",
  bg: "white",

  fontTheme: {
    bold_s: "1.125rem",
    bold_m: "3rem",
    bold_l: "3.5rem",
    mdm_xs: "1.375rem",
    mdm_s: "1.625rem",
    mdm_m: "1.875rem",
    mdm_l: "2.25rem",
    rgl_s: "0.75rem",
    rgl_m: "0.875rem",
    rgl_l: "1.125rem"
  }
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

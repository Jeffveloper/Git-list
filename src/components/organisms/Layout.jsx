import styled from "styled-components";

const LayoutStyled = styled.div``;

function Layout({ children }) {
  return <LayoutStyled>{children}</LayoutStyled>;
}

export default Layout;

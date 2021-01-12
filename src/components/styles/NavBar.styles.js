import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--nav-size);
  background-color: var(--bg);
  padding: 0 1rem;

   h1{
    color: var(--text-color);
    padding: 0.5rem;
    border-radius: var(--border-radius);
    border: var(--border);
    cursor: pointer;
  }

  ul{
    max-width: 100%;
    height: 100%;
    display: flex; 
    justify-content: flex-end;
  }
`;
export default Nav;
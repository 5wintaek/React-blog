import styled from 'styled-components';

export function Header() {
  return (
    <Container>
      <header>
        <h4>Velog</h4>
        <h2>Test</h2>
      </header>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background: black;
  width: 100%;
  color: white;
  padding-left: 20px;
`;

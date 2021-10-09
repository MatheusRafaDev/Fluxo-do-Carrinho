import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2em 5em;
  background-color: #99c1ff;

  .itens {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  h1 {
    font-family: 'Brush Script MT', cursive;
  }
`


export { Container }
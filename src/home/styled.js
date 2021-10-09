import styled from "styled-components";

const Container = styled.div`

display: flex;
flex-direction: column;
align-content: center;
align-items: center;
background-color: #99c1ff;
background-size: cover;
padding-top: 2em;
width: 100vw;
height: 120vh;


h1 {
  color: white;
  font-family: 'Brush Script MT', cursive;
  text-shadow: 2px 2px 5px black;
}
.lista-produtos {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

button {
  border-radius: 2em;
  border: none;
  outline: none;
  padding: .5em 1.5em;

  font-family: 'Brush Script MT', cursive;
  font: 400 1em;
  background-color: #44bcff;
  color: #fff;
  cursor: pointer;
  box-shadow: 2px 2px 5px black;
}

`
export { Container }
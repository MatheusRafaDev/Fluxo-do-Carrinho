
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;

  padding: 3em;
  font-family: 'Brush Script MT', cursive;
  background-color: #99c1ff;

  & > div { 
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  
    margin: 1em;
  }

  h1,h3 {
    text-align: center;
    font-family: 'Brush Script MT', cursive;
  }

  h2 {
    margin-top: 2em;
    font-family: 'Brush Script MT', cursive;
  }

  button {
    margin-top: 2em;
    border-radius: 2em;
    border: none;
    outline: none;
    padding: .5em 1.5em;

    font: 400 1em Roboto;
    background-color: #44bcff;
    box-shadow: 2px 2px 5px black;
    color: #fff;
    cursor: pointer;
  }

  img {
    width: 20em;
    height: auto;
    border-radius: 30px;
    box-shadow: 2px 2px 5px black;
  }

`


export { Container }
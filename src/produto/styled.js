import styled from "styled-components";

const Container = styled.div`

display: flex;
flex-direction: row;
justify-content: center;
padding: 1.5em;
margin: 1em;
border-radius: 10px;
background-color: #0f52ba;
align-items: center;
box-shadow: 2px 2px 5px black;


  .capa {
    width: 7em;
    height: 8em;
    border-radius: 0.5em;
    font-family: 'Brush Script MT', cursive;
    box-shadow: 2px 2px 5px black;
  }

  .titulo {
    font: 700 1.5em;
    color: white;
    margin-left: 1em;
    font-family: 'Brush Script MT', cursive;
    text-shadow: 2px 2px 5px black;
  }

  .preco {
    font: 400 1.5em;
    margin-left: 1em;
    color: white;
    font-family: 'Brush Script MT', cursive;
    text-shadow: 2px 2px 5px black;
  }

  button {
    border-radius: 2em;
    margin-left: 1em;
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
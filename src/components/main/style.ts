import styled from "styled-components";

export const mainArea = styled.main`
height: 100vh;
display: flex;
justify-content: center;
background: linear-gradient(90deg,#3cb8de,#3b82de);
`;

export const columArea = styled.div`
width: 300px;
margin: 2rem 1rem;
border: solid 2px;
border-color: #3cb8de;
border-radius: 10px;
`;


export const taskDescription = styled.div`
display: flex;
border-bottom: solid 1px;
padding-left: 1rem;
color: white;
`;

export const todoTaskArea = styled.div`
margin-top: 1rem;

input {
  margin: 10px;
  width: 75%;
  background-color: transparent;
  border: none;
  border-bottom: solid 1px;
  outline: none;
  height: 1.5rem;
  font-size: 15px;
    ::-webkit-input-placeholder {
    padding-left: 5px;
    font-size: 15px;
    color: white;
  }
}

button {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  }
`;

export const inProgressArea = styled.div`
margin-top: 1rem;
/* border: solid 1px; */
`;

export const doneArea = styled.div`
margin-top: 1rem;
/* border: solid 1px; */
`;


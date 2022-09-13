import styled from "styled-components";

export const mainArea = styled.main`
background: linear-gradient(90deg, #a29099 , #ab879a);
height: 100vh;
display: flex;
justify-content: center;
`;

export const columArea = styled.div`
width: 300px;
margin: 2rem 1rem;
`;


export const taskDescription = styled.div`
display: flex;
border-bottom: solid 1px;
`;

export const todoTaskArea = styled.div`
/* display: block; */
margin-top: 1rem;
border: solid 1px;
height: 50%;

input {
  margin: 5px;
  background-color: transparent;
  border: none;
  border-bottom: solid 1px;
}
`;

export const inProgressArea = styled.div`
/* display: block; */
margin-top: 1rem;
border: solid 1px;
height: 50%;
`;

export const doneArea = styled.div`
/* display: block; */
margin-top: 1rem;
border: solid 1px;
height: 50%;
`;


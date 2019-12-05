import React from "react";
import ReactDOM from "react-dom";

import {
  StyledApp,
  StyledWeek,
  StyledDay,
  StyledDayName,
  StyledMeal
} from './styles';
import './styles.css';

import data from './data.json';

function App() {
  return (
    <StyledApp>
      <h1>Weekly Panner</h1>
      <StyledWeek>
      {
        data.map(item => {
          return (
            <StyledDay key={item.daya}>
              <StyledDayName>{item.day}</StyledDayName>
              <StyledMeal>
                  {item.meal}
              </StyledMeal>
            </StyledDay> 
          )
        })
      }
      </StyledWeek>
    </StyledApp>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

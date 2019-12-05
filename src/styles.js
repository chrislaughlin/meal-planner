import styled from 'styled-components';

const StyledApp = styled.div`
  color: #e0dbd1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const StyledWeek = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const StyledDay = styled.div`
  display: flex;
  flex-direction: column;
  height: 14%;
  width: 90%
  border: 1px solid #e0dbd17d;
  margin-bottom: 20px;
  align-items: center;
`;

const StyledDayName = styled.span`
    border-bottom: 1px solid #aca9a230;
    padding-left: 30px;
    padding-right: 30px;
`;

const StyledMeal = styled.span`
  font-size: 30px;
`;

export {
  StyledApp,
  StyledWeek,
  StyledDay,
  StyledDayName,
  StyledMeal
};

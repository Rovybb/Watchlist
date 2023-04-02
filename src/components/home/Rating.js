import { StarsStyled } from "./styles/Rating.styled";

function Rating({ rating }) {
    let integers = Math.trunc(rating);
    let decimal = rating - integers;
    let i;
    const fillValues = [];
    for(i = 0; i < integers; i++) {
      fillValues.push('100%');
    }
  
    fillValues.push(`${decimal * 100}%`);
  
    while(fillValues.length < 5) {
      fillValues.push('0%');
    }
  
    return (
      <div className="Rating">
        <h1>Rating</h1>
        <StarsStyled fillValues={fillValues}>
          <div className="Star" />
          <div className="Star" />
          <div className="Star" />
          <div className="Star" />
          <div className="Star" />
        </StarsStyled>
      </div>
    )
  }

  export default Rating;
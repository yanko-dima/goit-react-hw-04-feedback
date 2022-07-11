// import { Component } from 'react';

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  );
};

// class Statistics extends Component {
//   render() {
//     return (
//       <div>
//         <p>Good: 3</p>
//         <p>Neutral: 2</p>
//         <p>Bad: 2</p>
//       </div>
//     );
//   }
// }

export default Statistics;

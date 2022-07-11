// import { Component } from 'react';

const Feedback = ({ onGood, onNeutral, onBad }) => {
  return (
    // <h1> Please leave feedback </h1>
    <div>
      <button type="button" onClick={onGood}>
        Good
      </button>
      <button type="button" onClick={onNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onBad}>
        Bad
      </button>
    </div>
  );
};

// class Feedback extends Component {
//   render() {
//     return (
//       // <h1>Please leave feedback</h1>

//       <div>
//         <button type="button" onClick={this.onClickGood}>
//           Good
//         </button>
//         <button
//           type="button"
//           onClick={() => {
//             console.log('Neutral');
//           }}
//         >
//           Neutral
//         </button>
//         <button
//           type="button"
//           onClick={() => {
//             console.log('Bad');
//           }}
//         >
//           Bad
//         </button>
//       </div>
//     );
//   }
// }

export default Feedback;

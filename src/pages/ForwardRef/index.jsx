// import React from "react";
// import { Container } from "react-bootstrap";

import React from "react";
import { useEffect } from "react";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.aRef = React.createRef();
//   }
//   render() {
//     return (
//       <Container className="pt-5">
//         <Counter ref={this.aRef} />
//         <button
//           onClick={() => {
//             console.log(this.aRef);
//           }}
//         >
//           Ref
//         </button>
//       </Container>
//     );
//   }
// }

// const Counter = React.forwardRef((props, ref) => {
//   class Counter extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         count: 0,
//       };
//     }
//     render() {
//       return (
//         <div className="mb-5">
//           Count: {this.state.count}
//           <button
//             ref={ref}
//             onClick={() => this.setState({ count: this.state.count + 1 })}
//             className="mx-5"
//           >
//             Increment
//           </button>
//         </div>
//       );
//     }
//   }
//   return <Counter />;
// });

// const ForwardRefTest = React.forwardRef((props, ref) => {
//   //ref.displayName = `logProps("test ref displayName")`;
//   return <input ref={ref} />;
// });

// function Test() {
//   const ref = React.useRef(null);
//   return (
//     <div>
//       <ForwardRefTest ref={ref} />
//       <button onClick={() => console.log("ref", ref)}>test</button>
//     </div>
//   );
// }
// export default Test;

const Button = () => {
  const [number, setNumber] = React.useState([1, 2, 3, 4, 5]);
  useEffect(() => {
    console.log("number", number);
  }, [number]);

  return <div>{number.slice().sort((a, b) => b - a)}</div>;
};

export default Button;

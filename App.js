// import React, { useState } from "react";

// import ReactDOM from "react-dom/client";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const Section = ({ title, description }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   return (
//     <div className="border-2 border-red-500">
//       <h1>{title}</h1>
//       <button
//         onClick={() => {
//           setIsVisible(isVisible ? false : true);
//         }}
//       >
//         {isVisible ? "hide" : "show"}
//       </button>
//       {isVisible && <p>{description}</p>}
//       <hr />
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <Section

//         title={"cricket"}
//         description={
//           "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsum illo sed aliquam totam fugit obcaecati perspiciatis modi optio magnam ipsam nihil quia sequi earum vero esse, illum fuga expedita itaque assumenda rem ut architecto! Nulla minus quidem voluptas inventore molestias aut tenetur fuga. Iure?"
//         }
//       ></Section>
//       <Section
//         title={"chess"}
//         description={
//           "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsum illo sed aliquam totam fugit obcaecati perspiciatis modi optio magnam ipsam nihil quia sequi earum vero esse, illum fuga expedita itaque assumenda rem ut architecto! Nulla minus quidem voluptas inventore molestias aut tenetur fuga. Iure?"
//         }
//       ></Section>
//       <Section
//         title={"football"}
//         description={
//           "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsum illo sed aliquam totam fugit obcaecati perspiciatis modi optio magnam ipsam nihil quia sequi earum vero esse, illum fuga expedita itaque assumenda rem ut architecto! Nulla minus quidem voluptas inventore molestias aut tenetur fuga. Iure?"
//         }
//       ></Section>
//     </div>
//   );
// };
// root.render(<App />);

////////////////////////////////Method-1/////////////////////////////////////////////////
// import React, { useState } from "react";

// import ReactDOM from "react-dom/client";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const Section = ({ title, description, isVisible, setIsVisible }) => {
//   // const [isVisible, setIsVisible] = useState(false);
//   return (
//     <div className="border-2 border-red-500">
//       <h1>{title}</h1>
//       <button
//         onClick={() => {
//           setIsVisible(isVisible ? false : true);
//         }}
//       >
//         {isVisible ? "hide" : "show"}
//       </button>
//       {isVisible && <p>{description}</p>}
//       <hr />
//     </div>
//   );
// };

// const App = () => {
//   const [config, setConfig] = useState({
//     cricket: false,
//     chess: false,
//     football: false,
//   });
//   return (
//     <div>
//       <Section
//         title={"cricket"}
//         description={
//           "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsum illo sed aliquam totam fugit obcaecati perspiciatis modi optio magnam ipsam nihil quia sequi earum vero esse, illum fuga expedita itaque assumenda rem ut architecto! Nulla minus quidem voluptas inventore molestias aut tenetur fuga. Iure?"
//         }
//         isVisible={config.cricket}
//         setIsVisible={(bool) =>
//           setConfig({
//             cricket: bool,
//             chess: false,
//             football: false,
//           })
//         }
//       ></Section>
//       <Section
//         title={"chess"}
//         description={
//           "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsum illo sed aliquam totam fugit obcaecati perspiciatis modi optio magnam ipsam nihil quia sequi earum vero esse, illum fuga expedita itaque assumenda rem ut architecto! Nulla minus quidem voluptas inventore molestias aut tenetur fuga. Iure?"
//         }
//         isVisible={config.chess}
//         setIsVisible={(bool) =>
//           setConfig({
//             cricket: false,
//             chess: bool,
//             football: false,
//           })
//         }
//       ></Section>
//       <Section
//         title={"football"}
//         description={
//           "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsum illo sed aliquam totam fugit obcaecati perspiciatis modi optio magnam ipsam nihil quia sequi earum vero esse, illum fuga expedita itaque assumenda rem ut architecto! Nulla minus quidem voluptas inventore molestias aut tenetur fuga. Iure?"
//         }
//         isVisible={config.football}
//         setIsVisible={(bool) =>
//           setConfig({
//             cricket: false,
//             chess: false,
//             football: bool,
//           })
//         }
//       ></Section>
//     </div>
//   );
// };
// root.render(<App />);
//////////////////////////Method3///////////////////////////////////////////////////////

import React, { useState } from "react";

import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Section = ({ title, description, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="border-2 border-red-500">
      <h1>{title}</h1>
      <button
        onClick={() => {
          setIsVisible(isVisible ? false : true);
        }}
      >
        {isVisible ? "hide" : "show"}
      </button>
      {isVisible && <p>{description}</p>}
      <hr />
    </div>
  );
};

const App = () => {
  const [config, setConfig] = useState("");
  return (
    <div>
      <Section
        title={"cricket"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsum illo sed aliquam totam fugit obcaecati perspiciatis modi optio magnam ipsam nihil quia sequi earum vero esse, illum fuga expedita itaque assumenda rem ut architecto! Nulla minus quidem voluptas inventore molestias aut tenetur fuga. Iure?"
        }
        isVisible={config === "cricket"}
        setIsVisible={() => setConfig(config == "cricket" ? "" : "cricket")}
      ></Section>
      <Section
        title={"chess"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsum illo sed aliquam totam fugit obcaecati perspiciatis modi optio magnam ipsam nihil quia sequi earum vero esse, illum fuga expedita itaque assumenda rem ut architecto! Nulla minus quidem voluptas inventore molestias aut tenetur fuga. Iure?"
        }
        isVisible={config === "chess"}
        setIsVisible={() => setConfig(config == "chess" ? "" : "chess")}
      ></Section>
      <Section
        title={"football"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ipsum illo sed aliquam totam fugit obcaecati perspiciatis modi optio magnam ipsam nihil quia sequi earum vero esse, illum fuga expedita itaque assumenda rem ut architecto! Nulla minus quidem voluptas inventore molestias aut tenetur fuga. Iure?"
        }
        isVisible={config === "football"}
        setIsVisible={() => setConfig(config == "football" ? "" : "football")}
      ></Section>
    </div>
  );
};
root.render(<App />);

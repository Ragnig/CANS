// import React, { useState } from "react";

// const ConcreteSupportsForm = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedHelp, setSelectedHelp] = useState(null);

//   const rows = [
//     {
//       id: 105,
//       title: "Involvement with Care",
//       help: "Measures how engaged and cooperative the caregiver is with the care process.",
//     },
//     {
//       id: 106,
//       title: "Parent/Caregiver’s Knowledge of Rights and Responsibilities",
//       help: "Assesses understanding of rights, duties, and legal obligations as a caregiver.",
//     },
//     {
//       id: 107,
//       title: "Financial Status",
//       help: "Examines stability of income, budgeting, and ability to meet basic needs.",
//     },
//     {
//       id: 108,
//       title: "Organization",
//       help: "Evaluates planning, scheduling, and ability to manage tasks effectively.",
//     },
//     {
//       id: 109,
//       title: "Resources",
//       help: "Checks access to concrete supports such as food, housing, transportation, etc.",
//     },
//     {
//       id: 110,
//       title: "Knowledge of Social Service Options",
//       help: "Determines awareness and understanding of available support services.",
//     },
//     {
//       id: 111,
//       title: "Residential Stability",
//       help: "Assesses consistency and security of the living situation.",
//     },
//     {
//       id: 112,
//       title: "Job Functioning",
//       help: "Evaluates employment stability, job performance, and ability to sustain work.",
//     },
//   ];

//   return (
//     <div
//       style={{
//         backgroundColor: "#f9f9f9",
//         border: "1px solid #ddd",
//         borderRadius: "10px",
//         padding: "20px",
//         maxWidth: "950px",
//         margin: "40px auto",
//       }}
//     >
//       {/* Heading with dropdown toggle */}
//       <div
//         onClick={() => setIsOpen(!isOpen)}
//         style={{
//           cursor: "pointer",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           backgroundColor: "#9A98CA",
//           color: "white",
//           padding: "12px 18px",
//           borderRadius: "5px",
//           fontWeight: "bold",
//           fontSize: "16px",
//         }}
//       >
//         <span>Identification and Use of Concrete Supports in Times of Need</span>
//         <span>{isOpen ? "▲" : "▼"}</span>
//       </div>

//       {isOpen && (
//         <div style={{ marginTop: "25px", overflowX: "auto" }}>
//           <table
//             style={{
//               width: "100%",
//               borderCollapse: "collapse",
//               fontFamily: "Arial, sans-serif",
//               fontSize: "14px",
//             }}
//           >
//             <thead>
//               <tr style={{ backgroundColor: "#9A98CA", color: "white" }}>
//                 <th style={thStyle}>Previous Score</th>
//                 <th style={thStyle}>0</th>
//                 <th style={thStyle}>1</th>
//                 <th style={thStyle}>2</th>
//                 <th style={thStyle}>3</th>
//                 <th style={thStyle}>Unk</th>
//                 <th style={thStyle}>N/A</th>
//                 <th style={thStyle}>Factor</th>
//               </tr>
//             </thead>

//             <tbody>
//               {rows.map((row, index) => (
//                 <tr
//                   key={row.id}
//                   style={{
//                     backgroundColor: index % 2 !== 0 ? "#DFE6F8" : "white",
//                     borderBottom: "1px solid #ccc",
//                   }}
//                 >
//                   {/* Radio button columns */}
//                   <td style={tdRadioStyle}></td>
//                   {[0, 1, 2, 3].map((score) => (
//                     <td key={score} style={tdRadioStyle}>
//                       <input
//                         type="radio"
//                         name={`score-${row.id}`}
//                         value={score}
//                       />
//                     </td>
//                   ))}
//                   <td style={tdRadioStyle}></td>
//                   <td style={tdRadioStyle}></td>

//                   {/* Factor column */}
//                   <td style={{ padding: "8px", width: "55%" }}>
//                     <div
//                       onClick={() => setSelectedHelp(row)}
//                       style={{
//                         cursor: "pointer",
//                         color: "#333",
//                       }}
//                     >
//                       <strong>
//                         {row.id}. {row.title}
//                       </strong>
//                       <div style={{ marginTop: "6px" }}>
//                         <label style={{ fontWeight: "bold" }}>Describe:</label>
//                         <textarea
//                           rows="2"
//                           style={{
//                             width: "100%",
//                             borderRadius: "5px",
//                             border: "1px solid #ccc",
//                             padding: "5px",
//                             marginTop: "5px",
//                             resize: "vertical",
//                           }}
//                         ></textarea>
//                       </div>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {/* Help modal popup */}
//       {selectedHelp && (
//         <div
//           style={overlayStyle}
//           onClick={() => setSelectedHelp(null)} // close when clicking outside
//         >
//           <div
//             style={modalStyle}
//             onClick={(e) => e.stopPropagation()} // prevent modal from closing when clicked inside
//           >
//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//               <h3 style={{ margin: 0 }}>{selectedHelp.title}</h3>
//               <button
//                 onClick={() => setSelectedHelp(null)}
//                 style={closeBtnStyle}
//               >
//                 ❌
//               </button>
//             </div>
//             <p style={{ marginTop: "10px" }}>{selectedHelp.help}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // ===== Inline Styles =====
// const thStyle = {
//   padding: "10px",
//   textAlign: "center",
//   border: "1px solid #ccc",
//   fontWeight: "bold",
// };

// const tdRadioStyle = {
//   textAlign: "center",
//   padding: "10px",
//   borderRight: "1px solid #ddd",
// };

// const overlayStyle = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
//   backgroundColor: "rgba(0, 0, 0, 0.4)",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   zIndex: 1000,
// };

// const modalStyle = {
//   backgroundColor: "white",
//   padding: "20px",
//   borderRadius: "8px",
//   maxWidth: "400px",
//   width: "90%",
//   boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
//   fontFamily: "Arial, sans-serif",
//   animation: "fadeIn 0.3s ease-in-out",
// };

// const closeBtnStyle = {
//   background: "transparent",
//   border: "none",
//   cursor: "pointer",
//   fontSize: "18px",
// };

// export default ConcreteSupportsForm;




// this code is for the right scroll bar fixed box

// import React, { useState } from "react";

// const ConcreteSupportsForm = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedRowId, setSelectedRowId] = useState(null);

//   const rows = [
//     { id: 105, title: "Involvement with Care", help: "Measures how engaged and cooperative the caregiver is with the care process." },
//     { id: 106, title: "Parent/Caregiver’s Knowledge of Rights and Responsibilities", help: "Assesses understanding of rights, duties, and legal obligations as a caregiver." },
//     { id: 107, title: "Financial Status", help: "Examines stability of income, budgeting, and ability to meet basic needs." },
//     { id: 108, title: "Organization", help: "Evaluates planning, scheduling, and ability to manage tasks effectively." },
//     { id: 109, title: "Resources", help: "Checks access to concrete supports such as food, housing, transportation, etc." },
//     { id: 110, title: "Knowledge of Social Service Options", help: "Determines awareness and understanding of available support services." },
//     { id: 111, title: "Residential Stability", help: "Assesses consistency and security of the living situation." },
//     { id: 112, title: "Job Functioning", help: "Evaluates employment stability, job performance, and ability to sustain work." },
//   ];

//   const handleRowClick = (rowId) => {
//     setSelectedRowId(selectedRowId === rowId ? null : rowId); // toggle
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: "#f9f9f9",
//         border: "1px solid #ddd",
//         borderRadius: "10px",
//         padding: "20px",
//         maxWidth: "950px",
//         margin: "40px auto",
//         position: "relative",
//       }}
//     >
//       {/* Heading */}
//       <div
//         onClick={() => setIsOpen(!isOpen)}
//         style={{
//           cursor: "pointer",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           backgroundColor: "#9A98CA",
//           color: "white",
//           padding: "12px 18px",
//           borderRadius: "5px",
//           fontWeight: "bold",
//           fontSize: "16px",
//         }}
//       >
//         <span>Identification and Use of Concrete Supports in Times of Need</span>
//         <span>{isOpen ? "▲" : "▼"}</span>
//       </div>

//       {/* Table */}
//       {isOpen && (
//         <div style={{ marginTop: "25px", overflowX: "auto" }}>
//           <table
//             style={{
//               width: "100%",
//               borderCollapse: "collapse",
//               fontFamily: "Arial, sans-serif",
//               fontSize: "14px",
//             }}
//           >
//             <thead>
//               <tr style={{ backgroundColor: "#9A98CA", color: "white" }}>
//                 <th style={thStyle}>Previous Score</th>
//                 <th style={thStyle}>0</th>
//                 <th style={thStyle}>1</th>
//                 <th style={thStyle}>2</th>
//                 <th style={thStyle}>3</th>
//                 <th style={thStyle}>Unk</th>
//                 <th style={thStyle}>N/A</th>
//                 <th style={thStyle}>Factor</th>
//               </tr>
//             </thead>
//             <tbody>
//               {rows.map((row, index) => (
//                 <tr
//                   key={row.id}
//                   style={{
//                     backgroundColor: index % 2 !== 0 ? "#DFE6F8" : "white",
//                     borderBottom: "1px solid #ccc",
//                     position: "relative", // relative for absolute box inside row
//                   }}
//                 >
//                   <td style={tdRadioStyle}></td>
//                   {[0, 1, 2, 3].map((score) => (
//                     <td key={score} style={tdRadioStyle}>
//                       <input type="radio" name={`score-${row.id}`} value={score} />
//                     </td>
//                   ))}
//                   <td style={tdRadioStyle}></td>
//                   <td style={tdRadioStyle}></td>

//                   {/* Factor Column */}
//                   <td style={{ padding: "8px", width: "55%" }}>
//                     <div
//                       onClick={() => handleRowClick(row.id)}
//                       style={{ cursor: "pointer", color: "#333" }}
//                     >
//                       <strong>
//                         {row.id}. {row.title}
//                       </strong>
//                       <div
//                         style={{ marginTop: "6px" }}
//                         onClick={(e) => e.stopPropagation()} // prevent opening when clicking textarea
//                       >
//                         <label style={{ fontWeight: "bold" }}>Describe:</label>
//                         <textarea
//                           rows="2"
//                           style={{
//                             width: "100%",
//                             borderRadius: "5px",
//                             border: "1px solid #ccc",
//                             padding: "5px",
//                             marginTop: "5px",
//                             resize: "vertical",
//                           }}
//                         ></textarea>
//                       </div>
//                     </div>

//                     {/* Help Box inside the same row */}
//                     {selectedRowId === row.id && (
//                       <div style={rowHelpBoxStyle}>
//                         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                           <h4 style={{ margin: 0 }}>{row.title}</h4>
//                           <button onClick={() => setSelectedRowId(null)} style={closeBtnStyle}>
//                             ❌
//                           </button>
//                         </div>
//                         <p style={{ marginTop: "10px" }}>{row.help}</p>
//                       </div>
//                     )}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// // Styles
// const thStyle = { padding: "10px", textAlign: "center", border: "1px solid #ccc", fontWeight: "bold" };
// const tdRadioStyle = { textAlign: "center", padding: "10px", borderRight: "1px solid #ddd" };
// const closeBtnStyle = { background: "transparent", border: "none", cursor: "pointer", fontSize: "18px" };
// const rowHelpBoxStyle = {
//   position: "absolute",
//   top: "0",
//   left: "100%", // right of row cell
//   marginLeft: "10px",
//   width: "300px",
//   backgroundColor: "white",
//   padding: "15px",
//   borderRadius: "8px",
//   border: "1px solid #ccc",
//   boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
//   zIndex: 10,
// };

// export default ConcreteSupportsForm;




import React, { useState } from "react";

const ConcreteSupportsForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedHelp, setSelectedHelp] = useState(null);

  const rows = [
    { id: 105, title: "Involvement with Care", help: "Measures how engaged and cooperative the caregiver is with the care process." },
    { id: 106, title: "Parent/Caregiver’s Knowledge of Rights and Responsibilities", help: "Assesses understanding of rights, duties, and legal obligations as a caregiver." },
    { id: 107, title: "Financial Status", help: "Examines stability of income, budgeting, and ability to meet basic needs." },
    { id: 108, title: "Organization", help: "Evaluates planning, scheduling, and ability to manage tasks effectively." },
    { id: 109, title: "Resources", help: "Checks access to concrete supports such as food, housing, transportation, etc." },
    { id: 110, title: "Knowledge of Social Service Options", help: "Determines awareness and understanding of available support services." },
    { id: 111, title: "Residential Stability", help: "Assesses consistency and security of the living situation." },
    { id: 112, title: "Job Functioning", help: "Evaluates employment stability, job performance, and ability to sustain work." },
  ];

  const handleRowClick = (row) => {
    setSelectedHelp(row); // open the right fixed box
  };

  return (
    <div style={{ position: "relative", padding: "20px", maxWidth: "950px", margin: "40px auto", backgroundColor: "#f9f9f9", border: "1px solid #ddd", borderRadius: "10px" }}>
      {/* Heading */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#9A98CA",
          color: "white",
          padding: "12px 18px",
          borderRadius: "5px",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        <span>Identification and Use of Concrete Supports in Times of Need</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>

      {/* Table */}
      {isOpen && (
        <div style={{ marginTop: "25px", overflowX: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "Arial, sans-serif", fontSize: "14px" }}>
            <thead>
              <tr style={{ backgroundColor: "#9A98CA", color: "white" }}>
                <th style={thStyle}>Previous Score</th>
                <th style={thStyle}>0</th>
                <th style={thStyle}>1</th>
                <th style={thStyle}>2</th>
                <th style={thStyle}>3</th>
                <th style={thStyle}>Unk</th>
                <th style={thStyle}>N/A</th>
                <th style={thStyle}>Factor</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={row.id} style={{ backgroundColor: index % 2 !== 0 ? "#DFE6F8" : "white", borderBottom: "1px solid #ccc" }}>
                  <td style={tdRadioStyle}></td>
                  {[0, 1, 2, 3].map((score) => (
                    <td key={score} style={tdRadioStyle}>
                      <input type="radio" name={`score-${row.id}`} value={score} />
                    </td>
                  ))}
                  <td style={tdRadioStyle}></td>
                  <td style={tdRadioStyle}></td>

                  {/* Factor Column */}
                  <td style={{ padding: "8px", width: "55%" }}>
                    <div
                      onClick={() => handleRowClick(row)}
                      style={{ cursor: "pointer", color: "#333" }}
                    >
                      <strong>{row.id}. {row.title}</strong>
                      <div style={{ marginTop: "6px" }} onClick={(e) => e.stopPropagation()}>
                        <label style={{ fontWeight: "bold" }}>Describe:</label>
                        <textarea
                          rows="2"
                          style={{ width: "100%", borderRadius: "5px", border: "1px solid #ccc", padding: "5px", marginTop: "5px", resize: "vertical" }}
                        ></textarea>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Fixed Right-side Help Box */}
      {selectedHelp && (
        <div style={fixedRightBoxStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h4 style={{ margin: 0 }}>{selectedHelp.title}</h4>
            <button onClick={() => setSelectedHelp(null)} style={closeBtnStyle}>❌</button>
          </div>
          <p style={{ marginTop: "10px" }}>{selectedHelp.help}</p>
        </div>
      )}
    </div>
  );
};

// ===== Styles =====
const thStyle = { padding: "10px", textAlign: "center", border: "1px solid #ccc", fontWeight: "bold" };
const tdRadioStyle = { textAlign: "center", padding: "10px", borderRight: "1px solid #ddd" };
const closeBtnStyle = { background: "transparent", border: "none", cursor: "pointer", fontSize: "18px" };
const fixedRightBoxStyle = {
  position: "fixed",
  top: "100px", // adjust vertical position
  right: "20px",
  width: "300px",
  backgroundColor: "white",
  padding: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  zIndex: 1000,
};

export default ConcreteSupportsForm;

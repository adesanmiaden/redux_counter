import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';


function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated)

  return (
    <>
    <Header/>
    {!isAuth && <Auth/>}
    {isAuth && <UserProfile/>}
    <Counter />
    </>
  );
}

export default App;


// import React from "react";
// import ActiveIcon from "../../assets/icons/ActiveIcon";
// import ApprovedIcon from "../../assets/icons/ApprovedIcon";
// import ArrowLeft from "../../assets/icons/ArrowLeft";
// import Dot from "../../assets/icons/Dot";
// import DottedLines from "../../assets/icons/DottedLines";
// import Export from "../../assets/icons/Export";
// import Filter from "../../assets/icons/Filter";
// import Notification from "../../assets/icons/Notification";
// import PendingIcon from "../../assets/icons/PendingIcon";
// import Search from "../../assets/icons/Search";
// import Settings from "../../assets/icons/Settings";
// import SuspendedIcon from "../../assets/icons/SuspendedIcon";
// import User from "../../assets/icons/User";
// import { Table } from "react-bootstrap";

// import "./farmers.scss";
// import ArrowRight from "../../assets/icons/ArrowRight";
// import ArrowLeftFooter from "../../assets/icons/ArrowLeftFooter";
// import Click from "../../assets/icons/Click";

// function Farmers() {
//     const data = [
//         {
//             name: 'Ajayi Johnson',
//             phone: '08819990099',
//             project: 'National Rice 98',
//             state: 'Lagos',
//             lga: 'YAN',
//             bvn: '10298393',
//             captured:'Emeka Dada',
//             status: 'approved',
//             date: '12-12-22' 
//         },
//         {
//             name: 'Ajayi Chukwuemeka',
//             phone: '08819990099',
//             project: 'National Rice 98',
//             state: 'Lagos',
//             lga: 'YAN',
//             bvn: '10298393',
//             captured:'Emeka Dada',
//             status: 'pending',
//             date: '12-12-22' 
//         },
//         {
//             name: 'Abdullahi Shadrach',
//             phone: '08819990099',
//             project: 'National Rice 98',
//             state: 'Lagos',
//             lga: 'YAN',
//             bvn: '10298393',
//             captured:'Emeka Dada',
//             status: 'approved',
//             date: '12-12-22' 
//         },
//         {
//             name: 'Abshedhu Shadrach',
//             phone: '08819990099',
//             project: 'National Rice 98',
//             state: 'Lagos',
//             lga: 'Agege',
//             bvn: '10298393',
//             captured:'Emeka Dada',
//             status: 'approved',
//             date: '12-12-22' 
//         },
//         {
//             name: 'Abshedhu Shadrach',
//             phone: '08819990099',
//             project: 'National Rice 98',
//             state: 'Lagos',
//             lga: 'Agege',
//             bvn: '10298393',
//             captured:'Emeka Dada',
//             status: 'pending',
//             date: '12-12-22' 
//         },
//         {
//             name: 'Abshedhu Shadrach',
//             phone: '08819990099',
//             project: 'National Rice 98',
//             state: 'Lagos',
//             lga: 'Agege',
//             bvn: '10298393',
//             captured:'Emeka Dada',
//             status: 'pending',
//             date: '12-12-22' 
//         },
//         {
//             name: 'Abshedhu Shadrach',
//             phone: '08819990099',
//             project: 'National Rice 98',
//             state: 'Lagos',
//             lga: 'Agege',
//             bvn: '10298393',
//             captured:'Emeka Dada',
//             status: 'pending',
//             date: '12-12-22' 
//         },
        
//     ];

//   return (
//     <div className="farmer">
//       <div className="farmer_header">
//         <h3>Farmer's Details</h3>
//         <div className="farmer_header_icon">
//           <div className="farmer_header_icon_left">
//             <h3>Rice Wet Season</h3>
//             <p>
//               <Dot />
//             </p>
//           </div>
//           <div className="farmer_header_icon_right">
//             <Settings />
//             <Notification />
//             <User />
//           </div>
//         </div>
//       </div>
//       <div className="farmer_header2">
//         <h2>Dashboard</h2>
//         <p>
//           <ArrowLeft />
//         </p>
//         <h2>Farmers</h2>
//       </div>
//       <div className="farmer_filter">
//         <button>
//           <Filter />
//         </button>
//         <div className="farmer_filter_state">
//           <input placeholder="Filter By State" />
//           <p>
//             <Dot />
//           </p>
//         </div>
//         <div className="farmer_filter_state">
//           <input placeholder="Filter By Agent" />
//           <p>
//             <Dot />
//           </p>
//         </div>
//       </div>
//       <div className="farmer_subheader">
//         <div className="farmer_subheader_summary">
//           <h2>Summary</h2>
//           <div className="farmer_subheader_summary_header">
//             <div>
//               <h3>Farmers</h3>
//               <p>
//                 <DottedLines />
//               </p>
//             </div>
//             <div>
//               <h3>Approved</h3>
//               <p>
//                 <DottedLines />
//               </p>
//             </div>
//             <div>
//               <h3>Pending</h3>
//               <p>
//                 <DottedLines />
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="farmer_subheader_list">
//           <div className="farmer_subheader_list_status">
//             <h3>Approved Farmers</h3>
//             <div className="farmer_subheader_list_status_percent">
//               <p>
//                 <ApprovedIcon />
//               </p>
//               <p>65%</p>
//             </div>
//           </div>
//           <div className="farmer_subheader_list_status">
//             <h3>Pending Approval</h3>
//             <div className="farmer_subheader_list_status_percent">
//               <p>
//                 <PendingIcon />
//               </p>
//               <p>20%</p>
//             </div>
//           </div>
//           <div className="farmer_subheader_list_status">
//             <h3>Active Farmers</h3>
//             <div className="farmer_subheader_list_status_percent">
//               <p>
//                 <ActiveIcon />
//               </p>
//               <p>19%</p>
//             </div>
//           </div>
//           <div className="farmer_subheader_list_status">
//             <h3>Suspended Farmers</h3>
//             <div className="farmer_subheader_list_status_percent">
//               <p>
//                 <SuspendedIcon />
//               </p>
//               <p>10%</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="farmer_body">
//         <div className="farmer_body_header">
//           <div className="farmer_body_header_left">
//             <h2>Farmers</h2>
//             <div className="farmer_body_header_left_search">
//               <Search />
//               <input placeholder="Search"></input>
//             </div>
//           </div>
//           <div className="farmer_body_header_right">
//             <div className="farmer_body_header_right_box">
//               <Filter />
//               <input placeholder="Filter" />
//             </div>
//             <div className="farmer_body_header_right_box">
//               <Export />
//               <input placeholder="Export" />
//             </div>
//           </div>
//         </div>
//         <div className="farmer_table">
//             <Table className="table">
//                 <thead className="farmer_table_head">
//                     <tr>
//                         {[
//                             'FULL NAME',
//                             'PHONE NO',
//                             'PROJECT',
//                             'STATE',
//                             'LGA',
//                             'BVN',
//                             'CAPTURED BY',
//                             'STATUS',
//                             'DATE'
//                         ].map((section, index) => (
//                             <th key={index}>
//                                 {section}
//                             </th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody className="farmer_table_body">
//                     {data.map((row, i) => (
//                         <tr key={i}>
//                             {Object.values(row).map((value, i) => (
//                                 <td key={i} >
//                                     <span className={i === 7 && value === 'approved' ? 'approved' : value === 'pending' ? 'pending' :''}>{value}</span>
//                                 </td>
//                             ))}
//                             <span className="click"><div><Click/></div></span>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>
//         </div>
//         <div className="farmer_footer">
//                 <div className="farmer_footer_left">
//                     <select>
//                         <option><p>10</p> Per Page</option>
//                         <option><p>20</p> Per Page</option>
//                         <option><p>30</p> Per Page</option>
//                     </select>
//                     <span>Showing <p>10 of 800</p></span>
//                 </div>
//                 <div className="farmer_footer_center">
//                     <ArrowLeftFooter/>
//                     <p>Page 1 0f 80</p>
//                     <ArrowRight/>
//                 </div>
//                 <div className="farmer_footer_right">
//                     <h2>Jump to</h2>
//                     <div className="farmer_footer_right_page">
//                         <p>Page no.</p>
//                         <h3>Go</h3>
//                     </div>
//                 </div>
//             </div>
//       </div>
//     </div>
//   );
// }

// export default Farmers;







// <tbody className="farmer_table_body">
// {data.filter(val => val[0].toLowercase().includes(search)).map((value, i) => (
//         <tr key={i}>
//                 <td  >
//                     {/* <span className={i === 7 && value === 'approved' ? 'approved' : value === 'pending' ? 'pending' :''}>{value}</span> */}
//                     {value[0]}
//                 </td>
//                 <td>{value[1]}</td>
//                 <td>{value[2]}</td>
//                 <td>{value[3]}</td>
//                 <td>{value[4]}</td>
//                 <td>{value[5]}</td>
//                 <td>{value[6]}</td>
//                 <td>{value[7]}</td>
//                 <td>{value[8]}</td>
//             <span className="click"><div><Click/></div></span>
//         </tr>
//         ))}
// </tbody>
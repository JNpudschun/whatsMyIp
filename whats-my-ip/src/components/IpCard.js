// import React, { useEffect, useState } from "react"

// function IpCard({ip, details}){
//     const [Ip, setIp] = useState(ip);
//     const[ipDetails, setdetails] = useState(details);
//     useEffect(()=>{
//         console.log(Ip)
//         console.log(ipDetails)
//     },[]);
//     return(
//         <div>
//             <h2>Your IP-Adresse is:</h2>
//             <h3>{Ip}</h3>
//             {/* <table>
//                 <tr>
//                     <td>Country:</td>
//                     <td>{ipDetails.location.country}</td>
//                 </tr>
//                 <tr>
//                     <td>Region:</td>
//                     <td>{ipDetails.location.region}</td>
//                 </tr>
//                 <tr>
//                     <td>Timezone:</td>
//                     <td>{ipDetails.location.timezone}</td>
//                 </tr>
//                 <tr>
//                     <td>ISP:</td>
//                     <td>{ipDetails.isp}</td>
//                 </tr>
//             </table> */}
//         </div>

//     );
// }
// export default IpCard;
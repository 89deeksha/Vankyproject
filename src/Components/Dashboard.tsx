import React from "react";
import img from "../Images/cardimg.png";
import {
  FaUser,
  FaCog,
  FaFileAlt,
  FaSearch,
  FaEdit,
  FaWallet,
  FaRegUser,
  FaRupeeSign,
} from "react-icons/fa";

const Dashboard: React.FC = () => {
  const cards = [
    {
      img: img,
      title: "Admin Details",
      icon: <FaUser className="h-8 w-8 text-white" />,
      metricvalue: "My Team",
    },
    {
      img: img,
      title: "Sports Betting",
      icon: <FaCog className="h-8 w-8 text-white" />,
      metricvalue: "-",
    },
    {
      img: img,
      title: "Ledger",
      icon: <FaWallet className="h-8 w-8 text-white" />,
      metricvalue: "0",
    },
    {
      img: img,
      title: "Reports",
      icon: <FaFileAlt className="h-8 w-8 text-white" />,
      metricvalue: "Statement",
    },
    {
      img: img,
      title: "Search Result",
      icon: <FaSearch className="h-8 w-8 text-white" />,
      metricvalue: "0%",
    },
    {
      img: img,
      title: "Dead Master",
      icon: <FaEdit className="h-8 w-8 text-white" />,
      metricvalue: "0%",
    },
    {
      img: img,
      title: "Dead Master",
      icon: <FaEdit className="h-8 w-8 text-white" />,
      metricvalue: "0%",
    },
    {
      img: img,
      title: "Dead Master",
      icon: <FaEdit className="h-8 w-8 text-white" />,
      metricvalue: "0%",
    },
  ];

  const plainCards = [
    {
      title: "Admin Details",
      icon: <FaRegUser className="h-8 w-8 text-gray-700" />,
      metricvalue: "My Team",
    },
    {
      title: "Transactions",
      icon: <FaRupeeSign className="h-8 w-8 text-gray-700" />,
      metricvalue: "₹ 0",
    },
  ];
const Tabledata =[
  {
"S/N":"1",
Name:"Zimbawbe vs Sri Lanka",
Inplay:"",
Details:"Details",
Completition:"One Day Internationals",
Date:"2025-08-31 13:00:00"

  },
  {
    "S/N":"2",
    Name:"Zimbawbe vs Sri Lanka",
    Inplay:"",
    Details:"Details",
    Completition:"One Day Internationals",
    Date:"2025-08-31 13:00:00"
    
      },
      {
        "S/N":"3",
        Name:"Zimbawbe vs Sri Lanka",
        Inplay:"",
        Details:"Details",
        Completition:"One Day Internationals",
        Date:"2025-08-31 13:00:00"
        
          },
          {
            "S/N":"4",
            Name:"Zimbawbe vs Sri Lanka",
            Inplay:"",
            Details:"Details",
            Completition:"One Day Internationals",
            Date:"2025-08-31 13:00:00"
            
              },
              {
                "S/N":"5",
                Name:"Zimbawbe vs Sri Lanka",
                Inplay:"",
                Details:"Details",
                Completition:"One Day Internationals",
                Date:"2025-08-31 13:00:00"
                
                  },
                  {
                    "S/N":"6",
                    Name:"Zimbawbe vs Sri Lanka",
                    Inplay:"",
                    Details:"Details",
                    Completition:"One Day Internationals",
                    Date:"2025-08-31 13:00:00"
                    
                      },
                      {
                        "S/N":"7",
                        Name:"Zimbawbe vs Sri Lanka",
                        Inplay:"",
                        Details:"Details",
                        Completition:"One Day Internationals",
                        Date:"2025-08-31 13:00:00"
                        
                          },
                          {
                            "S/N":"8",
                            Name:"Zimbawbe vs Sri Lanka",
                            Inplay:"",
                            Details:"Details",
                            Completition:"One Day Internationals",
                            Date:"2025-08-31 13:00:00"
                            
                              },
                              {
                                "S/N":"9",
                                Name:"Zimbawbe vs Sri Lanka",
                                Inplay:"",
                                Details:"Details",
                                Completition:"One Day Internationals",
                                Date:"2025-08-31 13:00:00"
                                
                                  },
  
]
  return (
    <>
    
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-6 p-6">
      {/* Background image cards */}
      {cards.map((item, index) => (
        <div
          key={index}
          className="relative rounded-xl overflow-hidden shadow-lg"
        >
          {/* Stadium Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${item.img})` }}
          ></div>

          {/* Subtle Dark Overlay (to keep text readable) */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative flex justify-between items-center  p-5 text-white">
            <div>
              <p className="text-sm font-medium">{item.title}</p>
              <h4 className="text-lg font-bold">{item.metricvalue}</h4>
            </div>
            {item.icon}
          </div>
        </div>
      ))}

      {/* Plain white background cards */}
      {plainCards.map((items, index) => (
        <div
          key={index}
          className="relative flex justify-between items-center p-5 rounded-xl shadow-md bg-[rgb(255,255,255)]"
        >
          <div>
            <p className="text-sm font-medium text-gray-600">{items.title}</p>
            <h4 className="text-lg font-bold text-gray-800">{items.metricvalue}</h4>
          </div>
          <div className="p-3 bg-red-100 text-red-800 rounded-full">{items.icon}</div>
          
        </div>
      ))}
       
    </div>
    <div className="rounded-xl shadow-md bg-[rgb(255,255,255)] h-70 w-full">
        <div className="flex justify-center">
        <h3 className=" text-xl text-[#0A6F78]">Active Matches</h3>
        
        </div>
        <div className="overflow-x-auto">
    <table className="min-w-full border-collapse">
      <thead className="bg-black">
        <tr>
          <th className="px-4 py-2 text-left text-xs font-semibold text-white">S/N</th>
          <th className="px-4 py-2 text-left text-xs font-semibold text-white">NAME</th>
          <th className="px-4 py-2 text-left text-xs font-semibold text-white">INPLAY</th>
          <th className="px-4 py-2 text-left text-xs font-semibold text-white">DETAILS</th>
          <th className="px-4 py-2 text-left text-xs font-semibold text-white">COMPETITION</th>
          <th className="px-4 py-2 text-left text-xs font-semibold text-white">DATE</th>
        </tr>
      </thead>
      <tbody>
  {Tabledata.map((val, index) => (
    <tr
      key={index}
      className={`${
        index % 2 === 0 ? "bg-gray-50" : "bg-white"
      } border-t`}
    >
      <td className="px-4 py-2 text-sm text-gray-700">{val["S/N"]}</td>
      <td className="px-4 py-2 text-sm text-gray-700">{val.Name}</td>
      <td className="px-4 py-2 text-sm text-gray-700">{val.Inplay}</td>
      <td className="px-4 py-2 text-sm text-[#09A6EA] cursor-pointer hover:underline">
        {val.Details}
      </td>
      <td className="px-4 py-2 text-sm text-gray-700">{val.Completition}</td>
      <td className="px-4 py-2 text-sm text-gray-700">{val.Date}</td>
    </tr>
  ))}
</tbody>

      
    </table>
  </div>
    </div>
    </>
   
  );
};

export default Dashboard;

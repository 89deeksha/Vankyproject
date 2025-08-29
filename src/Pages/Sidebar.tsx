import sidebar from '../Images/sidebar.png'
import { FaTachometerAlt } from "react-icons/fa";
import { FaFutbol } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { CiMoneyBill } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { CiMoneyCheck1 } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";
import { FaBan } from "react-icons/fa6";
import { FaUserAltSlash } from "react-icons/fa";
import { FaKey } from "react-icons/fa";


const Sidebar: React.FC = () => {
  const menu = [
    {
      title: "General",
      items: [
        { name: "Dashboard", icon: <FaTachometerAlt /> },
        { name: "Admin Details", icon: <FaUsers />, icon_1: <FaAngleRight /> },
        { name: "Sports-Betting", icon: <FaFutbol />, icon_1: <FaAngleRight /> }
      ]
    },
    {
      title: "Transaction",
      items: [
        { name: "Ledger", icon: <CiMoneyCheck1 />, icon_1: <FaAngleRight /> },
        { name: "Cash Transactions", icon: <CiMoneyBill />, icon_1: <FaAngleRight /> },
        { name: "Reports", icon: <CiFileOn />, icon_1: <FaAngleRight /> }
      ]
    },
    {
      title: "Extra",
      items: [
        { name: "Search Result", icon: <FaSearch /> },
        { name: "Dead Master", icon: <FaUserAltSlash />},
        { name: "Block Market", icon: <FaBan /> },
        { name: "Change Password", icon: <FaKey /> }
      ]
    },
  ]

  return (
    <div
      className="h-screen w-64 bg-[rgb(16,48,25)] flex flex-col shadow-lg"
      style={{
        backgroundImage: `url(${sidebar})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex-1 overflow-y-auto p-3 space-y-4 text-white">
        {menu.map((section, index) => (
          <div key={index}>
            <h3 className="text-xs uppercase font-semibold mb-2">{section.title}</h3>
            <ul className="space-y-2">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-[rgba(255,255,255,0.1)] rounded group"
                >
                  <div className="flex items-center gap-3">
                    {/* Left Icon */}
                    <div className="bg-[rgba(1,47,27,0.93)] p-2 rounded-md">
                      <span className="text-white text-lg group-hover:text-orange-400 transition-colors duration-200">
                        {item.icon}
                      </span>
                    </div>
                    {/* Text */}
                    <span className="text-white group-hover:text-orange-400 transition-colors duration-200">
                      {item.name}
                    </span>
                  </div>
                  {/* Right Icon (optional) */}
                  {item.icon_1 && (
                    <span className="text-white group-hover:text-orange-400 transition-colors duration-200">
                      {item.icon_1}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar

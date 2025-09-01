import sidebar from '../Images/sidebar.png'
import { FaTachometerAlt } from "react-icons/fa";
import { FaFutbol, FaAngleRight, FaBan } from "react-icons/fa6";
import { CiMoneyBill, CiMoneyCheck1, CiFileOn } from "react-icons/ci";
import { FaUsers, FaSearch, FaUserAltSlash, FaKey } from "react-icons/fa";
import { useState } from 'react';

const Sidebar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (name: string) => {
    setOpenMenu((prev) => (prev === name ? null : name));
  };

  const menu = [
    {
      title: "General",
      items: [
        { name: "Dashboard", icon: <FaTachometerAlt /> },
        {
          name: "Admin Details", icon: <FaUsers />, icon_1: <FaAngleRight />,
          children: [
            { name: "Master Master" },
            { name: "Agent Master" },
            { name: "Client Master" }
          ]
        },
        {
          name: "Sports-Betting", icon: <FaFutbol />, icon_1: <FaAngleRight />,
          children: [
            { name: "All Match Position" },
            { name: "Inplay Games" },
            { name: "Completed Games" },
            { name: "Inplay Casino" },
            { name: "Completed Casino" }
          ]
        }
      ]
    },
    {
      title: "Transaction",
      items: [
        {
          name: "Ledger", icon: <CiMoneyCheck1 />, icon_1: <FaAngleRight />,
          children: [
            { name: "My Ledger" },
            { name: "Lena Aur Dena" }
          ]
        },
        {
          name: "Cash Transactions", icon: <CiMoneyBill />, icon_1: <FaAngleRight />,
          children: [
            { name: "Debit/Credit Entry(MM)" },
            { name: "Debit/Credit Entry(A)" },
            { name: "Debit/Credit Entry(C)" }
          ]
        },
        {
          name: "Reports", icon: <CiFileOn />, icon_1: <FaAngleRight />,
          children: [
            { name: "Statement" },
            { name: "Report Details" },
            { name: "Match Report" },
            { name: "Casino Report" },
            { name: "Login Report" },
            { name: "Mobile App Report" }
          ]
        }
      ]
    },
    {
      title: "Extra",
      items: [
        { name: "Search Result", icon: <FaSearch /> },
        { name: "Dead Master", icon: <FaUserAltSlash /> },
        { name: "Block Market", icon: <FaBan /> },
        { name: "Change Password", icon: <FaKey /> }
      ]
    }
  ];

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
                <li key={idx}>
                  {/* Parent Item */}
                  <div
                    className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-[rgba(255,255,255,0.1)] rounded group"
                    onClick={() =>
                      item.children ? toggleMenu(item.name) : null
                    }
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-[rgba(1,47,27,0.93)] p-2 rounded-md">
                        <span className="text-white text-lg group-hover:text-orange-400 transition-colors duration-200">
                          {item.icon}
                        </span>
                      </div>
                      <span className="text-white group-hover:text-orange-400 transition-colors duration-200">
                        {item.name}
                      </span>
                    </div>
                    {item.icon_1 && (
                      <span
                        className={`text-white transform transition-transform duration-200 ${
                          openMenu === item.name
                            ? "rotate-90 text-orange-400"
                            : ""
                        }`}
                      >
                        {item.icon_1}
                      </span>
                    )}
                  </div>

                  {/* Submenu */}
                  {item.children && openMenu === item.name && (
                    <ul className="w-full bg-green-950 py-4 mt-2">
                      {item.children.map((child, cidx) => (
                        <li
                          key={cidx}
                          className="flex items-center text-sm text-gray-300 hover:text-orange-400 cursor-pointer pl-6 py-2"
                        >
                          {/* Custom bullet */}
                          <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                          {child.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

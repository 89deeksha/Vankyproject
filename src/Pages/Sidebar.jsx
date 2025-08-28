import React, { FC, useEffect, useState } from "react";
import {
  FaAngleLeft,
  FaChartLine,
  FaChevronRight,
  FaDatabase,
  FaPlay,
  FaRegStopCircle,
  FaTrashAlt,
  FaSignInAlt,
  FaSignal,
  FaWallet,
  FaLock,
  FaPlus,
} from "react-icons/fa";
import {
  MdOutlinePauseCircleFilled,
  MdOutlinePlayCircleFilled,
} from "react-icons/md";
import { SiMarketo } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlinePieChart } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { MdBarChart } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import MasterDetails from "./MasterDetails";
import CtSide from "./CtSide";
import LedgerSide from "./LedgerSide";
import ReportSide from "./ReportSide";
import LoginSide from "./LoginSide";

interface Props {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  userType: string | null;
  casinoList: any;
}

export interface NavItem {
  to: string;
  icon?: React.ComponentType<{ className: string }>;
  text: string;
  img?: string;
}
const SidebarItem: FC<Props> = ({
  isActive,
  setIsActive,
  userType,
  casinoList,
}) => {
  const [activeItem, setActiveItem] = useState("");
  const [showCasino, setShowCasino] = useState(false);
  const [showDataReport, setShowDataReport] = useState(false);
  const [showLoginReport, setLoginReport] = useState(false);
  const nav = useNavigate();

  const handleItemClick = (itemName: string, to: string) => {
    setIsActive(false);
    setActiveItem(itemName);
    nav(to);
  };
  const handleItemCasinoClick = (itemName: string, id: string) => {
    setIsActive(false);
    setActiveItem(itemName);
    const name: any = {
      teenpatti: 51,
      andarbahar: 60,
      dragontiger: 52,
      amarakbaranthony: 54,
      bollywoodcasino: 55,
      lucky7a: 53,
      dragontigerlion: 61,
    };

    nav(`/live/${id}/${name[itemName]}`);
  };

  const handleLiveCasino = () => {
    setShowCasino(!showCasino);
  };
  const handleDataReport = () => {
    setShowDataReport(!showDataReport);
  };
  const handleLoginReport = () => {
    setLoginReport(!showLoginReport);
  };

  const pathName = window.location.pathname;

  const renderNavItem = ({ to, icon, text, img }: NavItem) => {
    const itemName = text.replace(/\s+/g, "").toLowerCase();

    return (
      <li
        className={`nav-item `}
        key={itemName}
        onClick={() => handleItemClick(itemName, to)}>
        <Link
          to={to}
          className={`nav-link ${pathName === to ? "active_side" : ""}`}>
          {img ? (
            <img src={img} height={25} style={{ marginRight: "4px" }} />
          ) : (
            icon && React.createElement(icon, { className: "nav-icon" })
          )}

          <p className={isActive ? "hide_text" : ""}>{text}</p>
        </Link>
      </li>
    );
  };

  const host = window.location.hostname;

  return (
    <aside
      className={`main-sidebar elevation-4 sidebar-light-indigo ${
        isActive ? "nav_sort" : "navigation"
      }`}>
      {!isActive && (
        <div className="overlay" onClick={() => setIsActive(false)}></div>
      )}
      {host?.includes("fastbet365") ||
      host?.includes("3xbat") ||
      host?.includes("betexch247") ? (
        <Link
          to="/"
          className="brand-link bg-indigo text-white"
          onClick={() => setIsActive(false)}>
          <img
            src="https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span
            className={`brand-text font-weight-light ${
              isActive ? "hide_text" : ""
            }`}
            id="brandName">
            {host?.toUpperCase().split(".")[1]?.includes("BETEXCH247")
              ? "BetExch"
              : host?.toUpperCase().split(".")[1]}
          </span>
        </Link>
      ) : (
        <Link to="/" onClick={() => setIsActive(false)}>
          <img
            src="/img/betguru.png"
            alt="logo"
            style={{
              width: "100px",
              height: "100px",
              transition: "width 1ms 100ms",
              marginLeft: "25px",
              marginTop: "8px",
              marginBottom: "-25px",
            }}></img>
        </Link>
      )}

      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false">
            <li className={`nav-header ${isActive ? "hide_text" : ""}`}>
              {/* MASTER DETAILS */}
              Main
            </li>

            {renderNavItem({
              to: "/",
              icon: AiFillHome,
              text: "Dashboard",
            })}

            <li className={`nav-header ${isActive ? "hide_text" : ""}`}>
              {/* MASTER DETAILS */}
              Master Details
            </li>
            {/* {renderNavItem({ to: '/collection', icon: FaRupeeSign, text: 'Collection Master' })} */}

            <MasterDetails userType={userType} renderNavItem={renderNavItem} />

            <li className={`nav-header ${isActive ? "hide_text" : ""}`}>
              {/* GAMES */}
              Games
            </li>
            {renderNavItem({
              to: "/game/inPlay",
              icon: MdOutlinePlayCircleFilled,
              text: "InPlay Game",
            })}
            {renderNavItem({
              to: "/game/completeGame",
              icon: MdOutlinePauseCircleFilled,
              text: "Complete Game",
            })}
            {renderNavItem({
              to: "/game/market-analysis",
              icon: SiMarketo,
              text: "Market Analysis",
            })}
            {renderNavItem({
              to: "/game/market",
              icon: SiMarketo,
              text: "Market Report",
            })}
            {renderNavItem({
              to: "/game/fancy",
              icon: SiMarketo,
              text: "Fancy Report",
            })}
            {renderNavItem({
              to: "/game/addfancy",
              icon: SiMarketo,
              text: "AddFancy Report",
            })}

            {userType == "7" &&
              renderNavItem({
                to: "/cancel-bet",
                icon: FaTrashAlt,
                text: "Deleted Bet",
              })}

            <li className={`nav-header ${isActive ? "hide_text" : ""}`}>
              Casino
            </li>
            <li className="nav-item">
              <Link to="#" onClick={handleLiveCasino} className="nav-link">
                <FaChartLine className="nav-icon" />
                <p className={`${isActive ? "hide_text" : ""}`}>
                  Live Casino Position
                  <IoIosArrowDown
                    className={`right_icon ${showCasino ? "rotate-icon" : ""}`}
                  />
                </p>
              </Link>
              <ul
                className={`nav ${
                  showCasino
                    ? "casino-nav-treeview show"
                    : "hide_sub_menu casino-nav"
                }`}>
                {casinoList?.data
                  ?.filter((items: any) => {
                    if (host.includes("betexch247")) {
                      return items?.tableId === "51" || items?.tableId === "54";
                    }
                    return true;
                  })
                  .map((items: any) => {
                    const itemName = items?.name
                      .replace(/\s+/g, "")
                      .toLowerCase();
                    return (
                      <li
                        className={`nav-item `}
                        key={itemName}
                        onClick={() =>
                          handleItemCasinoClick(itemName, items?.tableId)
                        }>
                        <Link
                          to="#"
                          className={`nav-link ${
                            pathName === `/casino/${items?.tableId}`
                              ? "active_side"
                              : ""
                          }`}>
                          <FaSignal />
                          <p className={isActive ? "hide_text" : ""}>
                            {items?.name}
                          </p>
                        </Link>
                      </li>
                    );
                  })}

                {/* {renderNavItem({
                  to: "/casino/liveTeenPatti20Position",
                  icon: FaChartLine,
                  text: "LiveTeen20 Position",
                })} */}
              </ul>
            </li>
            {renderNavItem({
              to: "/matka",
              // icon: FaSignal,
              text: "Matka",
              img: "https://fastbet365.in/assets/matka-LIJflmEU.png",
            })}
            {renderNavItem({
              to: "/casino/ledger",
              icon: FaWallet,
              text: "Casino Details",
            })}
            {renderNavItem({
              to: "/icasino/report",
              icon: FaChartLine,
              text: "Int. Casino Details",
            })}

            <li className={`nav-header ${isActive ? "hide_text" : ""}`}>
              {/* CASH TRANSACTION */}
              Cash Transaction
            </li>
            <CtSide userType={userType} renderNavItem={renderNavItem} />

            <li className={`nav-header ${isActive ? "hide_text" : ""}`}>
              {/* LEDGER */}
              Ledger
            </li>

            <LedgerSide userType={userType} renderNavItem={renderNavItem} />

            {userType === "7" && (
              <>
                <li className={`nav-header ${isActive ? "hide_text" : ""}`}>
                  {/* POST LEDGER */}
                  Post Ledger
                </li>
                {renderNavItem({
                  to: "/create-ledeger",
                  icon: MdBarChart,
                  text: "Cricket",
                })}
                {/* {renderNavItem({
                  to: "/create-casino-ledger",
                  icon: MdBarChart,
                  text: "Create Casino",
                })}
                {renderNavItem({
                  to: "/casino-list",
                  icon: MdBarChart,
                  text: "Casino List",
                })} */}
                {renderNavItem({
                  to: "/create-rollback",
                  icon: MdBarChart,
                  text: "Cricket Rollback",
                })}
              </>
            )}
            {userType === "7" && (
              <>
                <li className={`nav-header ${isActive ? "hide_text" : ""}`}>
                  {/* EVENT CONTROLLER */}
                  Event Controller
                </li>
                {renderNavItem({
                  to: "/event-lock",
                  icon: FaLock,
                  text: "Event Lock",
                })}
                {renderNavItem({
                  to: "/add-channelId",
                  icon: FaPlus,
                  text: "Update ChannelID",
                })}
                {renderNavItem({
                  to: "/unsettled-bet",
                  icon: FaRegStopCircle,
                  text: "Complete Match Active Bet",
                })}
                {renderNavItem({
                  to: "/delete-bet",
                  icon: FaTrashAlt,
                  text: "Delete Bet",
                })}
              </>
            )}

            <li className={`nav-header ${isActive ? "hide_text" : ""}`}>
              {/* OLD DATA */}
              Old Data
            </li>
            {renderNavItem({
              to: "/old/game/completeGame",
              icon: MdBarChart,
              text: "Sport Game",
            })}
            {renderNavItem({
              to: "/old/ledger",
              icon: FaChevronRight,
              text: "My Ledger",
            })}
            {renderNavItem({
              to: "/old/ct/client",
              icon: FaChevronRight,
              text: "Debit/Credit Entry (C)",
            })}
            {renderNavItem({
              to: "/old/ct/agent",
              icon: FaChevronRight,
              text: "Debit/Credit Entry (A)",
            })}
            {renderNavItem({
              to: "/old/ct/super",
              icon: FaChevronRight,
              text: "Debit/Credit Entry (SA)",
            })}
            {renderNavItem({
              to: "/old/ct/master",
              icon: FaChevronRight,
              text: "Debit/Credit Entry (M)",
            })}

            <li className={`nav-header ${isActive ? "hide_text" : ""}`}>
              {/* REPORTS */}
              Reports
            </li>
            <li className="nav-item">
              <div onClick={handleDataReport} className="nav-link ">
                <AiOutlinePieChart className="nav-icon" />
                <p
                  className={isActive ? "hide_text" : ""}
                  style={{
                    color: "#000",
                  }}>
                  Data Reports
                  <IoIosArrowDown
                    className={`right_icon ${
                      showDataReport ? "rotate-icon" : ""
                    }`}
                  />
                </p>
              </div>
              <ul
                className={`nav login_ui_data ${
                  showDataReport ? "nav-data show" : "hide_sub_menu"
                }`}>
                <ReportSide userType={userType} renderNavItem={renderNavItem} />
              </ul>
            </li>
            <li className="nav-item">
              <div onClick={handleLoginReport} className="nav-link ">
                <AiOutlinePieChart className="nav-icon" />
                <p
                  className={isActive ? "hide_text" : ""}
                  style={{
                    color: "#000",
                  }}>
                  Login Reports
                  <IoIosArrowDown
                    className={`right_icon ${
                      showLoginReport ? "rotate-icon" : ""
                    }`}
                  />
                </p>
              </div>
              <ul
                className={`nav login_ui_data ${
                  showLoginReport ? "nav-data show" : "hide_sub_menu"
                }`}>
                <LoginSide userType={userType} renderNavItem={renderNavItem} />
              </ul>
            </li>
            <br />
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SidebarItem;

import React, { useState } from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { signOut } from "firebase/auth";
import { firbaseauth } from "../utils/firebase_config";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaBell } from "react-icons/fa";
import { TfiPencil, TfiUser, TfiHelpAlt, TfiInfoAlt } from "react-icons/tfi";
export default function Navbar({ scrolled }) {
  const navigate = useNavigate();
  const [small, isSmall] = useState(false);
  const [error, Seterror] = useState("");
  const [search, setSearch] = useState("");
  const Logout = async function (event) {
    event.preventDefault();
    try {
      await signOut(firbaseauth);
      navigate("/login");
    } catch (error) {
      Seterror(error.message);
      setTimeout(() => {
        Seterror("");
      }, 2000);
    }
  };
  const [showsearch, setshowsearch] = useState(false);
  const [inputhover, setinputhover] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const handlenav = () => {
    console.log("WoW");
  };
  const links = [
    { name: "Home", links: "/home" },
    { name: "TV Shows", links: "/TV" },
    { name: "Movies", links: "/Movies" },
    { name: "News & Popular", links: "/Movies" },
    { name: "My List", links: "/MyList" },
    { name: "Surprise Me", links: { handlenav } },
  ];
  const settings = [
    {
      name: "Manage Profiles",
      links: "/profile",
      icons: <TfiPencil></TfiPencil>,
    },
    {
      name: "Account",
      links: "/profile",
      icons: <TfiUser />,
    },
    {
      name: "Help",
      links: "/profile",
      icons: <TfiHelpAlt></TfiHelpAlt>,
    },
    {
      name: "T&C",
      links: "/profile",
      icons: <TfiInfoAlt></TfiInfoAlt>,
    },
  ];
  return (
    <Container>
      <nav className={`flex ${scrolled ? "scrolled" : ""}`}>
        <div
          className={`left flex a-center j-center ${
            isSmall === true ? "small" : ""
          }`}
        >
          <div className="brand a-center j-center">
            <img src={logo} alt="logo" />
          </div>
          <ul className={`links  flex ${isSmall === true ? "small" : ""}`}>
            {links.map(({ name, links }) => {
              return (
                <li key={name}>
                  <Link to={links}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="right flex a-center">
          <div className={`search ${showsearch === true ? "show-search" : ""}`}>
            <button
              style={{ marginRight: "8px" }}
              onFocus={() => {
                setshowsearch(true);
              }}
              onBlur={() => {
                if (inputhover === true) {
                  setshowsearch(false);
                }
              }}
            >
              <FaSearch />
            </button>
            <>
              <input
                type="text"
                placeholder="Search"
                onMouseEnter={() => {
                  inputhover(true);
                }}
                onMouseLeave={() => {
                  inputhover(false);
                }}
                onBlur={() => {
                  setshowsearch(false);
                  inputhover(false);
                }}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </>
            <button>
              <FaBell></FaBell>
            </button>
            <div
              className={`container drop ${isActive ? "active" : ""}`}
              onMouseEnter={() => setIsActive(!isActive)}
              onMouseLeave={() => setIsActive(!isActive)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="svgs"
                viewBox="0 0 200 200"
              >
                <g strokeWidth="6.5" strokeLinecap="round">
                  <path
                    d="M72 82.286h28.75"
                    fill="#009100"
                    fillRule="evenodd"
                    stroke="#fff"
                  />
                  <path
                    d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                    fill="none"
                    stroke="#fff"
                  />
                  <path
                    d="M72 125.143h28.75"
                    fill="#009100"
                    fillRule="evenodd"
                    stroke="#fff"
                  />
                  <path
                    d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                    fill="none"
                    stroke="#fff"
                  />
                  <path
                    d="M100.75 82.286h28.75"
                    fill="#009100"
                    fillRule="evenodd"
                    stroke="#fff"
                  />
                  <path
                    d="M100.75 125.143h28.75"
                    fill="#009100"
                    fillRule="evenodd"
                    stroke="#fff"
                  />
                </g>
              </svg>
              {isActive === true ? (
                <ul className="links flex mw">
                  <div className="group-link">
                    {settings.map(({ name, links, icons }) => {
                      return (
                        <li
                          key={name}
                          onClick={() => {
                            navigate(`${links}`);
                          }}
                        >
                          <Link to={links}>
                            {icons}
                            <span>{name}</span>{" "}
                          </Link>
                        </li>
                      );
                    })}
                    <li onClick={Logout} className="lgout">
                      <a>
                        <AiOutlineLogout></AiOutlineLogout>
                        <span>Log Out</span>
                      </a>
                    </li>
                  </div>
                </ul>
              ) : (
                <div className="d-none"></div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </Container>
  );
}
const Container = styled.div`
  .scrolled {
    background: black;
  }
  nav {
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.7) 10%,
      transparent
    );
    position: fixed;
    top: 0;
    width: 100%;
    justify-content: space-between;
    height: 68px;
    postion: fixed;
    z-index: 2;
    padding: 0 3rem;
    align-items: center;
    transition: 0.3s ease-in-out;
    .left {
      gap: 3rem;
      .brand {
        img {
          height: 49px;
          margin-top: 5px;
        }
      }
      .links {
        list-style: none;
        gap: 2rem;
        li {
          a {
            color: #e5e5e5;
            text-decoration: none;
            font-size: 14px;
          }

          a:hover {
            color: #b3b3b3;
          }
        }
      }
    }
    .right {
      gap: 1rem;
      button {
        background: transparent;
        border: none;
        cursor: pointer;
        &:focus {
          outline: none;
        }
      }
      .search {
        display: flex;
        gap: 0.4rem;
        justify-content: center;
        align-items: center;
        padding: 0.2rem;
        padding-left: 0.5rem;
        button {
          background: transparent;
          svg {
            color: white;
            font-size: 1.2rem;
          }
        }
        input {
          width: 0;
          opacity: 0;
          visiblity: hidden;
          transition: 0.3s ease-in-out;
          border: none;
          color: white;
          &:focus {
            outline: none;
          }
        }
      }
      .show-search {
        input {
          border: 1px solid white;
          background: rgb(0 0 0 / 60%);
          width: 100%;
          opacity: 1;
          visiblity: visible;
          padding: 0.3rem;
        }
      }
      .links {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        li {
          a {
            color: white;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .mw {
    background-color: rgba(0, 0, 0, 0.9);
    border: 1px solid hsla (0, 0%, 100%, 0.15);
    box-sizing: border-box;
    color: #fff;
    margin-left: 0;
    padding: 0;
    width: 220px;
    right: 0;
    position: absolute;
    cursor: default;
    line-height: 21px;
    display: block;
    height: auto;
    top: 55px;
    .group-link {
      height: auto;
      overflow: hidden;
      padding: 10px 0 5px;
      display: block;
      width: 100%;
      li {
        display: block;
        font-size: 16px;
        line-height: 16px;
        padding: 5px 10px;
        a {
          align-items: center;
          display: flex;
          text-decoration: none;
          color: #fff;
          display: flex;
          text-transform: none;
          width: 100%;
          flex-direction: row;
          align-items: stretch;
          align-content: center;
          justify-content: flex-start;
          padding-top: 5px;
          padding-bottom: 5px;

          svg {
            margin-right: 15px;
            height: 1.1rem;
            width: 1.1rem;
            color: #b3b3b3;
          }
        }
      }
    }
  }
  .lgout {
    cursor: pointer;
    border-top: 1px solid #ffffffad;
    padding: 10px 0;
    a {
      svg {
        color: #f34242 !important;
        font-size: bolder;
      }
    }
  }
`;

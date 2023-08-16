/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";

export function NestedSidebarItem({
  icon,
  name,
  onTap,
  className,
  children,
  path,
  set_path,
}: any) {
  const [open, set_open] = useState(false);
  return (
    <div className={className + " nested-sidebar-item "}>
      <div
        className={
          "sidebar-item items-center gap-6 p-3 my-3 rounded-lg cursor-pointer hover:bg-[#6F6AF8] bg-opacity-10 text-[#2B3674] font text-sm flex w-100 "
        }
        onClick={() => {
          set_open(!open);
          // onTap();
        }}
      >
        {icon && (
          <div className="icon">
            <img className="w-3 h-3" src={icon} alt="" />{" "}
          </div>
        )}
        <div className="name">{name}</div>
        <i className={"fa-solid fa-angle-up " + (open ? "" : "rotate-180")}></i>
      </div>

      <div className="pl-10">
        {open
          ? children.map((c: any, i: any) => {
              return React.cloneElement(c, { key: i, path, set_path });
            })
          : null}
      </div>
    </div>
  );
}

export function SidebarItem({
  icon,
  name,
  onTap,
  className,
  to,
  path,
  set_path,
  Link,
}: any) {
  return (
    <Link to={to} className={className}>
      <div
        className={
          "sidebar-item flex items-center gap-6 p-3 my-3  cursor-pointer  hover:text-[#2B3674]  font-bold text-[16px] " +
          (path === to
            ? "border-r-4 text-[#2B3674] border-[#4318FF]"
            : "text-[#A3AED0]")
        }
        onClick={() => {
          set_path(to);
          if (onTap) onTap();
        }}
      >
        {
          icon && (
            <div
              className={
                " " + (path === to ? " text-[#4318FF]" : "text-[#A3AED0]")
              }
            >
              {icon}
            </div>
          )
          //   <div className="icon">
          //     <img className="w-3 h-3" src={icon} alt="" />{" "}
          //   </div>
        }
        {name}
      </div>
    </Link>
  );
}
export const Sidebar = ({ children, schoolName, Link }: any) => {
  const [path, set_path] = useState(window.location.pathname);

  useEffect(() => {
    set_path(window.location.pathname);
  }, [window.location.pathname]);
  return (
    <div className="sidebar-container font-Poppins z-40 min-h-screen flex w-72 sticky top-0">
      <div
        className={`bg-[#FFFFFF] rounded-br-xl  flex flex-col w-72 fixed h-full`}
      >
        {/* <img src={user.school.logo_url} alt="" /> */}
        <div className="school_name mx-auto  font-bold text-[26px] my-10 capitalize  text-[#2B3674]">
          {schoolName.replace(/.{10}\S*\s+/g, "$&@").split(/\s+@/)[0]}
          <h4 className="text-base">
            {schoolName.slice(
              schoolName.replace(/.{10}\S*\s+/g, "$&@").split(/\s+@/)[0].length
            )}
          </h4>
        </div>
        <div className="sidebar-items border-t-2 border-[#F4F7FE] p-3 flex flex-col h-full">
          {children?.map((c: any, i: any) => {
            return React.cloneElement(c, { key: i, path, set_path, Link });
          })}
        </div>
      </div>
    </div>
  );
};

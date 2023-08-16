/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable prefer-const */
import React, { useEffect, useRef } from "react";

export const Table = ({
  data,
  heading,
  footer,
  description,
  actions,
  className,
  csv_name,
}: any) => {
  const [csv_link, set_csv_link] = React.useState("");
  const refs: any = useRef<any>([]);

  useEffect(() => {
    // console.log({ refs });
    let csvContent =
      "data:text/csv;charset=utf-8," +
      (data[0].join(",") +
        "\n" +
        refs?.current
          .map((r?: any) =>
            r
              ? [].slice.call(r?.children).map((c: any) => {
                  return JSON.stringify(c?.innerText).replace("\u20b9", "");
                })
              : ""
          )
          .map((e: any) => (e ? e.join(",") : ""))
          .join("\n"));
    let encodedUri = encodeURI(csvContent);
    set_csv_link(encodedUri);
  }, [data]);

  // const []

  return (
    <div className="flex flex-col w-full">
      <div className="table w-full shadow p-5 rounded-lg my-2 text-[#1e1b59]">
        <div className=" flex  w-full">
          <div className="w-full">
            <div className="text-lg font-semibold mx-5 mt-3 mb-2">
              {heading}
            </div>

            <div className="text-sm text-gray-500 mx-5 mb-3">{description}</div>
          </div>
          <div className={"ml-auto flex-none " + className}>
            <a
              download={typeof heading !== "string" ? csv_name : heading}
              href={csv_link}
              className="focus:outline-none outline-none"
            >
              <button className="ml-auto bg-[#6F6AF8] text-white px-5 py-2 rounded-lg mt-2">
                Download CSV
              </button>
            </a>

            {actions}
          </div>
        </div>
        <div
          ref={(e) => (refs.current[0] = e)}
          className={`grid grid-cols-${data[0].length} grid-header p-3 font-semibold m-5 bg-[#ECEDFB] rounded-t-lg text-violet-900`}
        >
          {data[0].map((item: any, i: any) => {
            return (
              <div className="text-center col-span-1" key={i}>
                {item}
              </div>
            );
          })}
        </div>
        {data.slice(1).map((row: any, key: any) => {
          const get_grids_class = (len: number) => {
            switch (len) {
              case 1:
                return "grid-cols-1";
              case 2:
                return "grid-cols-2";
              case 3:
                return "grid-cols-3";
              case 4:
                return "grid-cols-4";
              case 5:
                return "grid-cols-5";
              case 6:
                return "grid-cols-6";
              case 7:
                return "grid-cols-7";
              case 8:
                return "grid-cols-8";
              case 9:
                return "grid-cols-9";
              case 10:
                return "grid-cols-10";
            }
          };
          // console.log({ key });
          return (
            <div
              ref={(e) => (refs.current[key] = e)}
              className={`grid ${get_grids_class(
                data[0].length
              )} grid-body items-center p-3 mx-5 my-2 odd:bg-[#ECEDFB] even:bg-white odd:border-none even:border border-[#ECEDFB] rounded-lg`}
            >
              {row.map((item: any, i: any) => {
                return (
                  <div className="text-center col-span-1 truncate" key={i}>
                    {item}
                  </div>
                );
              })}
            </div>
          );
        })}
        {footer}
      </div>
    </div>
  );
};

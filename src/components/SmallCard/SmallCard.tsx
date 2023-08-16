export const SmallCard = ({
  icon,
  label,
  labelValue,
  smallLabel,
  smallLabelValue,
  status,
}: any) => {
  return (
    <div className="h-[97px] p-4 flex gap-x-4 bg-white items-center min-w-[248px] rounded-[20px] border">
      {icon && (
        <div className="w-[56px] text-[32px] text-[#4318FF] flex justify-center items-center bg-[#F4F7FE] h-[56px] rounded-full">
          {icon}
        </div>
      )}
      <div className="flex flex-col text-[#A3AED0]">
        <h3 className=" text-sm font-medium">{label && label}</h3>
        <h2 className="text-2xl font-bold text-[#2B3674]">
          {labelValue && labelValue}
        </h2>
        <h6 className="text-xs font-normal">
          <span
            className={
              "mr-2 " + (status === "up" ? "text-[#05CD99]" : "text-[#EE5D50]")
            }
          >
            {smallLabelValue}
          </span>
          {smallLabel}
        </h6>
      </div>
    </div>
  );
};

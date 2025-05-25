import React from "react";
import { ChevronDown } from "lucide-react";
import { To, useNavigate, useLocation } from "react-router-dom";

const NavItem = ({ label, to, submenu = [] }: any) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive =
    (to && location.pathname === to) ||
    submenu.some((item: { to: string }) => location.pathname === item.to);

  const handleClick = () => {
    if (to) navigate(to);
  };

  return (
    <div className="relative group hover:text-[#7AC33E]">
      <div
        className={`flex cursor-pointer ${
          isActive ? "text-[#7AC33E]" : "hover:text-[#7AC33E]"
        }`}
        onClick={handleClick}
      >
        {label}
        {submenu.length > 0 && (
          <ChevronDown className="pl-1 pt-[2px]" strokeWidth={3} width={20} />
        )}
      </div>

      {submenu.length > 0 && (
        <div className="absolute hidden group-hover:block top-full left-0 bg-white shadow-lg text-sm text-[#0A4884] font-normal z-50">
          {submenu.map(
            (
              item: {
                to: To;
                label: string | null | undefined;
              },
              id: React.Key | null | undefined
            ) => (
              <div
                key={id}
                className="w-[265px] px-4 py-3 hover:bg-buttonColor hover:text-white cursor-pointer whitespace text-[16px] font-bold text-[#0A4884]"
                onClick={() => navigate(item.to)}
              >
                {item.label}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default NavItem;

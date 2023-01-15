import React from 'react';
import { Link, useLocation } from "react-router-dom";

interface ButtonProps {
  path: string;
  name: string;
  selected: boolean;
}

const Button: React.FC<ButtonProps> = ({
  path,
  name,
  selected
}) =>
  <Link to={path}>
    <div className={`${selected ? "bg-[rgb(165,62,50)] border-[rgb(165,62,50)] text-white " : "border-dashed border-black "} hover:bg-[rgb(165,62,50,0.7)] border-2 py-[3px] px-[10px] rounded-lg last-of-type:ml-[7px] transition-all`}>
      {name}
    </div>
  </Link>;

export const Navigation: React.FC = () => {
  const {pathname} = useLocation();

  return (
    <div className="flex fixed h-[50px] w-full justify-center items-center text-black">
      <Button
        path="/glossary"
        name="Словарь определений"
        selected={"/glossary" === pathname}
      />

      <Button
        path="/mind-map"
        name="Семантический граф"
        selected={"/mind-map" === pathname}
      />
    </div>
  );
};
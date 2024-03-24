"use client"
import NavLink from "./NavLink";
import ThemeSwitch from "./ThemeSwitch";
const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
      <div className="mt-2">
        <ThemeSwitch></ThemeSwitch>
      </div>
    </ul>
  );
};

export default MenuOverlay;

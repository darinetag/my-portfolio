import Link from "next/link";
const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 md:p-0 dark:text-[#ADB7BE] sm:text-xl rounded  dark:hover:text-white hover:text-gray-600"
      aria-current="page"
    >
      {title}
    </Link>
  );
};

export default NavLink;

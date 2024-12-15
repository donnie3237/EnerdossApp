import { NavLink, Outlet } from "react-router-dom";

function NewProject() {
  return (
    <div className="w-[100vw] flex mt-[20px] overflow-y-scroll">
      <div className=" top-[100px] fixed border-r-[1px] h-[calc(100vh-100px)] w-[300px] flex flex-col">
        <NavLink
          to="/new/new"
          className={({ isActive }) =>
            `text-black dark:text-white pl-6 w-full py-4 font-semibold ${
              isActive ? "bg-gray-600 text-white" : ""
            }`}
        >
          New Project
        </NavLink>
        <NavLink
          to="/new/open"
          className={({ isActive }) =>
            `text-black pl-6 dark:text-white w-full py-4 font-semibold ${
              isActive ? "bg-gray-600 text-white" : ""
            }`}
        >
          Open Project
        </NavLink>
        <NavLink
          to="/new/import"
          className={({ isActive }) =>
            `text-black pl-6 dark:text-white w-full py-4 font-semibold ${
              isActive ? "bg-gray-600 text-white" : ""
            }`}
        >
          Import Project
        </NavLink>
      </div>
      <div className="w-[calc(100vw-300px)] ml-[300px]">
        <Outlet />
      </div>
    </div>
  );
}

export default NewProject;

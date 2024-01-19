const Dropdown = () => {
  return (
    <div
      id="dropdownNavbar"
      className="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44"
    >
      <ul className="py-1" aria-labelledby="dropdownLargeButton">
        <li>
          <a
            href="#"
            className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
          >
            Settings
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
          >
            Earnings
          </a>
        </li>
      </ul>
      <div className="py-1">
        <a
          href="#"
          className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
        >
          Sign out
        </a>
      </div>
    </div>
  );
};
export default Dropdown;

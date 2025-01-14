function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-secondary text-gray-300 shadow-lg">
      <div className="flex justify-end p-4">
        <ul className="flex space-x-8">
          {["Home", "About", "Projects", "Contact"].map((page) => (
            <li key={page}>
              <a
                href={`#${page.toLowerCase()}`}
                className="text-lg hover:text-primary transition-colors duration-300"
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

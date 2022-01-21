const Header = ({ children }) => {
  return (
    <nav className="w-full fixed top-0 py-8 select-none z-50 bg-gradient-to-b from-gray-900 bg-opacity-30 to-transparent">
      <div className="flex justify-between section-container">
        <a href="#home" className="link">
          <img src="/oceanumlogo.svg"
            alt="Logo Oceanum"  className="w-10 h-10" />
        </a>
        <div className="flex justify-center">
            <img
              src="/oceanum_logo_white.svg"
              alt="Logo Oceanum"
              className="fixed top-9 w-5/12 md:w-60 md:h-auto"
            />
        </div>
        <div className="outer-menu relative">
          <input
            aria-labelledby="menu"
            className="checkbox-toggle link absolute top-0 right-0 w-6 h-6 opacity-0"
            type="checkbox"
          />
          <div className="hamburger absolute top-0 right-0 w-6 h-6 flex items-center justify-center">
            <div className="relative flex-none w-full bg-white duration-300 flex items-center justify-center"></div>
          </div>
          {children}
        </div>
      </div>
    </nav>
  );
};

export default Header;

import Star from '../animatedUI/star';

const Header = ({ children }) => {
  return (
    <nav className="w-full fixed left-0 top-0 py-8 select-none z-50 bg-gradient-to-b from-gray-900 bg-opacity-30 to-transparent">
      <div className="flex justify-between section-container">
        <div className="flex gap-1 justify-center">
          <Star playAnimation={1} />
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

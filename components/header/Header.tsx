
import HeaderBanner from "./HeaderBanner";
import HeaderBg from "./HeaderBg";
import HeaderCTA from "./HeaderCTA";
import HeaderNav from "./HeaderNav";

const Header = () => {
  return (
    <header className="flex flex-col relative header p-8">
     
      {/* nav */}
     <HeaderBg/>
     <HeaderNav/>
     <HeaderBanner/>
     <HeaderCTA/>
    </header>
  );
};

export default Header;

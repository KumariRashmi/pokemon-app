import Logo from "../assets/img/pokemon_logo.png";

const Title = () => (
  <a href="/">
    <img data-testid="logo" className="h-16 p-2" alt="logo" src={Logo} />
  </a>
);
const Header = () => {

  return (
    <div className="flex h-14 bg-pink-50 shadow-lg sm:bg-blue-50 md:bg-yellow-50">
      <Title/>
      <div className="nav-items">
        <p className="font-bold text-xl justify-center m-4 ml-96">POKEMON APPLICATION</p>
      </div>
    </div>
  );
};

export default Header;

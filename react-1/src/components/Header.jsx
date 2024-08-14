function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Serviços</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <header>
      <a href="#">
        <h1>Meu site</h1>
      </a>
      <Navbar />
    </header>
  );
}

export default Header;

const NavLinks = ({ href, text, setToggle }) => {
  return (
    <div onClick={(prev) => setToggle(!prev)}>
      <a className="text-xl" href={`#${href}`}>
        {text}
      </a>
    </div>
  );
};

export default NavLinks;

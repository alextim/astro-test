const genericHamburgerLine = 'h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300';

const Hamburger = ({ open, onClick }) => (
  <button className="flex flex-col h-12 w-12 relative m-0 border-none bg-transparent justify-center items-center group xl:hidden xl:pointer-events-none" type="button" aria-label={`${open ? 'Close' : 'Open'} menu`} onClick={onClick}>
    <div
      className={`${genericHamburgerLine} ${
        open
          ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
          : "opacity-50 group-hover:opacity-100"
      }`}
    />
    <div
      className={`${genericHamburgerLine} ${
        open ? "opacity-0" : "opacity-50 group-hover:opacity-100"
      }`}
    />
    <div
      className={`${genericHamburgerLine} ${
        open
          ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
          : "opacity-50 group-hover:opacity-100"
      }`}
    />
  </button>
);

export default Hamburger;

const genericHamburgerLine = 'h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300';

const Hamburger = ({ open, onClick }) => (
  <button
    className="group relative m-0 flex h-12 w-12 flex-col items-center justify-center border-none bg-transparent xl:pointer-events-none xl:hidden"
    type="button"
    aria-label={`${open ? 'Close' : 'Open'} menu`}
    onClick={onClick}
  >
    <div
      className={`${genericHamburgerLine} ${
        open ? 'translate-y-3 rotate-45 opacity-50 group-hover:opacity-100' : 'opacity-50 group-hover:opacity-100'
      }`}
    />
    <div className={`${genericHamburgerLine} ${open ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'}`} />
    <div
      className={`${genericHamburgerLine} ${
        open ? '-translate-y-3 -rotate-45 opacity-50 group-hover:opacity-100' : 'opacity-50 group-hover:opacity-100'
      }`}
    />
  </button>
);

export default Hamburger;

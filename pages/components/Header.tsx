function Header() {
  return (
    <header>
      <div className="flex flex-col rounded-b-xl bg-white py-2 drop-shadow-md">
        {/* upper section */}
        <div className="relative flex h-[40px] items-center justify-end pr-[16.5px]">
          <h3 className="absolute left-[31px] top-[14.09px] bottom-[7.91px] text-[15px]">
            9:41
          </h3>
          <div className="flex space-x-1">
            <img
              className="h-[10.57px] w-[17px]"
              src="header/status_bar.svg"
              alt="status bar icon"
            />
            <img
              className="h-[10.57px] w-[14.34px]"
              src="header/wifi.svg"
              alt="wifi icon"
            />
            <img
              className="h-[11px] w-[24.25px]"
              src="header/battery.svg"
              alt="battery icon"
            />
          </div>
        </div>
        {/* lower section */}
        <div className="flex h-[63px] items-center justify-between px-[25px] py-[21px]">
          <div>
            <img
              className="h-[24px] w-[24px]"
              src="header/menu.svg"
              alt="menu icon"
            />
          </div>
          <div className="flex space-x-[24px]">
            <img
              className="h-[24px] w-[24px]"
              src="header/shopping-cart.svg"
              alt="search icon"
            />
            <img
              className="h-[24px] w-[24px]"
              src="header/bell.svg"
              alt="search icon"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

import { usePathname } from "next/navigation";
import Link from "next/link";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useMobileMenuStateState } from "../../../store/useMobileMenuState";
import { NavItems } from "./headerData";
import useDeviceProperties from "../../../Hooks/UseMediaQueries";
import { XMarkIcon } from "@heroicons/react/24/outline";
const mainNavMobile = () => {
  const pathname = usePathname();
  const { isDesktopOrLaptop } = useDeviceProperties();
  const { MobileMenuState, setMobileMenuState } = useMobileMenuStateState();
  const toggleDrawer = () => {
    setMobileMenuState(!MobileMenuState);
  };

  const displayNameItems = NavItems.map((links, idx) => (
    <li
      key={idx}
      className={`${
        pathname == links.link
          ? `transistionMode my-2 text-primary border-0`
          : "my-2"
      }`}
    >
      <Link href={links.link} shallow onClick={() => setMobileMenuState(false)}>
        {links.name}
      </Link>
      <hr></hr>
    </li>
  ));
  return (
    <Drawer
      open={MobileMenuState}
      onClose={toggleDrawer}
      direction="top"
      duration={1000}
      style={{
        width: isDesktopOrLaptop ? "40vw" : "100vw",
        height: "50%",
        zIndex: "99999999999999999",
        overflow: "hidden",
        // background: "pink",
      }}
    >
      <div className="flex justify-end mt-6  mx-7 text-end">
        <XMarkIcon
          className="w-6 h-6 mr-2 cursor-pointer"
          onClick={toggleDrawer}
        />
      </div>
      <ul className="uppercase mx-5   h-full flex flex-col my-10 mb-20 text-[#0D0E43] text-lg">
        {displayNameItems}
      </ul>
    </Drawer>
  );
};

export default mainNavMobile;

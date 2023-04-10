import { RiHomeFill, RiNotificationBadgeFill, RiAliensFill, RiLogoutCircleFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarEchoButton from "./SidebarEchoButton";

const Sidebar = () => {
  const items =[
    {
      label: 'Home',
      href: '/',
      icon: RiHomeFill
    },
    {
      label: 'Notifications',
      href: '/notifications',
      icon: RiNotificationBadgeFill
    },
    {
      label: 'Profile',
      href: '/users/123',
      icon: RiAliensFill
    }
  ];

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo/>
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}
          <SidebarItem onClick={() => {}} icon={RiLogoutCircleFill} label="Logout"/>
          <SidebarEchoButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

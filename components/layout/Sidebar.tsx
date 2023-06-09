import { RiHomeFill, RiAliensFill, RiLogoutCircleFill } from "react-icons/ri";
import { AiFillAlert } from "react-icons/ai";
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarEchoButton from "./SidebarEchoButton";
import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();
  const items =[
    {
      label: 'Home',
      href: '/',
      icon: RiHomeFill
    },
    {
      label: 'Notifications',
      href: '/notifications',
      icon: AiFillAlert,
      auth: true,
      alert: currentUser?.hasNotification
    },
    {
      label: 'Profile',
      href: `/users/${currentUser?.id}`,
      icon: RiAliensFill,
      auth: true
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
              auth={item.auth}
              alert={item.alert}
            />
          ))}
          {currentUser &&
            <SidebarItem onClick={() => signOut()} icon={RiLogoutCircleFill} label="Logout"/>
          }

          <SidebarEchoButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

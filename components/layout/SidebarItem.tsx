import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface SidebarItemProps {
  label: string;
  href?: string;
  icon: IconType
  onClick?: () => void;
  auth?:boolean;
}


const SidebarItem: React.FC<SidebarItemProps> = ({ label, icon: Icon, href, auth, onClick, }) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const { data: currentUser } = useCurrentUser();

  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }

    if (auth && !currentUser) {
      loginModal.onOpen();
    } else if (href) {
      router.push(href);
    }
  }, [router, href, auth, loginModal, onClick, currentUser]);
  return (
    <div onClick={handleClick} className="flex flex-row items-center">
      <div
        className="
          relative
          rounded-sm
          h-14
          w-14
          flex
          items-center
          justify-center
          p-4
          hover:bg-slate-300
          hover:bg-opacity-10
          cursor-pointer
          lg:hidden
        "
      >
        <Icon size={15} color="white"/>
      </div>
      <div
      className="
      relative
      hidden
      lg:flex
      items-center
      gap-4
      p-4
      rounded-sm
      hover:bg-slate-300
      hover:bg-opacity-10
      cursor-pointer
      "
      >
        <Icon size={18} color="white"/>
        <p className="hidden lg:block text-white text-sm">
          {label}
        </p>

      </div>
    </div>
  );
};

export default SidebarItem;

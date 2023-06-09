import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { FaSatelliteDish } from "react-icons/fa";

const SidebarEchoButton = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const { data: currentUser } = useCurrentUser();

  const onClick = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    router.push('/');
  }, [loginModal, router, currentUser]);


  return (
    <div onClick={onClick}>
      <div className="
      mt-6
      rounded-full
      h-14
      w-14
      flex
      items-center
      justify-center
      p-4
      bg-lime-500
      hover:bg-opacity-80
      cursor-pointer
      lg:hidden
      "
    >
     <FaSatelliteDish size={15} color='white'/>
      </div>
      <div
      className="
      mt-6
      hidden
      lg:block
      px-4
      py-2
      rounded-sm
      bg-lime-500
      hover:bg-opacity-90
      cursor-pointer
      transition
      "

      >
        <p className="
        hidden
        lg:block
        text-center
        font-semibold
        text-white
        text-[20px]
        ">
          Echo
        </p>

      </div>

    </div>
  );
};

export default SidebarEchoButton;

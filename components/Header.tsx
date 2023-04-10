import { useRouter } from "next/router";
import { useCallback } from "react";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

interface HeaderProps {
  label: string;
  showBackArrow?: boolean;
}

const Header: React.FC<HeaderProps> = ( {label, showBackArrow }) => {
  const router = useRouter();

  const HandleBack = useCallback(()=> {
    router.back();
  }, [router]);

  return (
    <div className="border-b-[3px] border-neutral-800 p-5">
      <div className="flex flex-row items-center gap-2">
        {
          showBackArrow && (
            <MdKeyboardDoubleArrowLeft
            onClick={HandleBack}
            color="white"
            size={20}
            className="
            cursor-pointer
            hover:opacity-70
            transition
            "
            />
          )
        }
        <h1 className="text-white text-md font-semibold">{label}</h1>

      </div>

    </div>
  );
};

export default Header;

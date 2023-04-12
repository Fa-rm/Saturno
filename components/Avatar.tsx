import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import { useCallback } from "react";
import Image from "next/image";
// import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

interface AvatarProps {
  userId: string;
  islarge?: boolean;
  hasBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ( {
  userId,
  islarge,
  hasBorder
}) => {
  const { data: fetchedUser } = useUser(userId);
  const router = useRouter();

  const onClick = useCallback((event: any)=>{
    event.stopPropagation();

    const url = `/users/${userId}`;

    router.push(url);
  }, [router, userId]);

  return (
    <div
      className={`
      ${hasBorder ? 'border-4 border-black' : ''}
      ${islarge ? 'h-32' : 'h-12'}
      ${hasBorder ? 'w-32' : 'w-12'}
      rounded-full
      hover:opacity-90
      cursor-pointer
      relative
      `}
    >
      <Image
      fill
      style={{
        objectFit: "cover",
        borderRadius: '70%'
      }}
      alt="Avatar"
      onClick={onClick}
      src={fetchedUser?.profileImage || '/images/placeholder.png'}
      />
    </div>
  );
};

export default Avatar;

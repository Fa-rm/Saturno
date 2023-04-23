import { useRouter } from 'next/router';
import { useCallback, useMemo } from 'react';
import { RiMessage3Fill } from "react-icons/ri";
import { HiLightningBolt, HiOutlineLightningBolt } from "react-icons/hi";
import { formatDistanceToNowStrict } from 'date-fns';

import useLoginModal from '@/hooks/useLoginModal';
import useCurrentUser from '@/hooks/useCurrentUser';
import useLike from '@/hooks/useLike';

import Avatar from '../Avatar';
interface PostItemProps {
  data: Record<string, any>;
  userId?: string;
}

const PostItem: React.FC<PostItemProps> = ({ data = {}, userId }) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const { data: currentUser } = useCurrentUser();
  const { hasLiked, toggleLike } = useLike({ postId: data.id, userId});

  const goToUser = useCallback((ev: any) => {
    ev.stopPropagation();
    router.push(`/users/${data.user.id}`)
  }, [router, data.user.id]);

  const goToPost = useCallback(() => {
    router.push(`/posts/${data.id}`);
  }, [router, data.id]);

  const onLike = useCallback(async (ev: any) => {
    ev.stopPropagation();

    if (!currentUser) {
      return loginModal.onOpen();
    }

    toggleLike();
  }, [loginModal, currentUser, toggleLike]);


  const createdAt = useMemo(() => {
    if (!data?.createdAt) {
      return null;
    }

    return formatDistanceToNowStrict(new Date(data.createdAt));
  }, [data.createdAt])

  const LikeIcon = hasLiked ? HiLightningBolt : HiOutlineLightningBolt;

  return (
    <div
      onClick={goToPost}
      className="
        border-b-[3px]
        border-neutral-800
        p-5
        cursor-pointer
        hover:bg-neutral-900
        transition
      ">
      <div className="flex flex-row gap-3 flex-wrap">
        <Avatar userId={data.user.id} />
        <div>
          <div className="flex flex-row items-center gap-2">
            <p
              onClick={goToUser}
              className="
                text-white
                font-semibold
                cursor-pointer
                hover:underline
            ">
              {data.user.name}
            </p>
            <span
              onClick={goToUser}
              className="
                text-neutral-500
                cursor-pointer
                hover:underline
                hidden
                md:block
            ">
              @{data.user.username}
            </span>
            <span className="text-neutral-500 text-sm">
              {createdAt}
            </span>
          </div>
          <div className="text-white mt-1">
            {data.body}
          </div>
          <div className="flex flex-row items-center mt-3 gap-10">
            <div
              className="
                flex
                flex-row
                items-center
                text-neutral-500
                gap-2
                cursor-pointer
                transition
                hover:text-lime-500
            ">
              <RiMessage3Fill size={20} />
              <p>
                {data.comments?.length || 0}
              </p>
            </div>
            <div
              onClick={onLike}
              className="
                flex
                flex-row
                items-center
                text-neutral-500
                gap-2
                cursor-pointer
                transition
                hover:text-yellow-500
            ">
              <LikeIcon size={20} color={hasLiked ? 'yellow' : '' }/>
              <p>
                {data.likedIds.length || 0}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PostItem;

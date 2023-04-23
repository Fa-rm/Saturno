import Form from "@/components/Form";
import Header from "@/components/Header";
import PostItem from "@/components/posts/PostItem";
import usePost from "@/hooks/usePost";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";

const PostVIew = () => {
  const router = useRouter();
  const {postId} = router.query;

  const {data: fetchedPost, isLoading} = usePost(postId as string);

  if (isLoading || !fetchedPost){
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={18}/>
      </div>
    )
  }
  return (
  <>
  <Header label="Echo" showBackArrow/>
  <PostItem data={fetchedPost}/>
  <Form
    postId={postId as string}
    placeholder="Echo your reply"
    isComment

    />

  </> );

};

export default PostVIew;

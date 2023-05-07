import Form from "@/components/Form";
import Header from "@/components/Header";
import PostFeed from "@/components/posts/PostFeed";

export default function Home() {
  return (
    <>
      <Header label="Home" />
      <Form placeholder="What's happening?" />
      <PostFeed />
      <footer style={{ textAlign: "center", margin: "2rem 0", color: 'lime' }}>
        Made with love by fa-rm 2023
      </footer>
    </>
  );
}

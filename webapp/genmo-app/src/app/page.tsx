import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import Card from "./components/card";


export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <HeroPost
          // title={heroPost.title}
          title="Welcome to Genmo Combo Community"
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author="Tara Liu"
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {/* Add the Card component here */}
        <Card
          title="Your AI Assistant"
          description="Click here to interact with secured  AI chatbot."
          link="https://gemini-pro-chat-smoky-chi-29.vercel.app/"
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}

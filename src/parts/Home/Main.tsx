import Header from "./Header";
import PostJob from "./PostJob";
import SuggestedSearches from "./SuggestedSearches";

export default function Main() {
  return (
    <main className="mt-6 container mx-auto">
      <Header />
      <SuggestedSearches />
      <PostJob />
    </main>
  );
}

import Carousel from "./Carousel";
import FeatureAndProduct from "./FeatureAndProduct";
import FindPeopleAndLearn from "./FindPeopleAndLearn";
import Header from "./Header";
import Join from "./Join";
import PostJob from "./PostJob";
import Step from "./Step";
import SuggestedSearches from "./SuggestedSearches";

export default function Main() {
  return (
    <main className="mt-6 container mx-auto">
      <Header />
      <SuggestedSearches />
      <PostJob />
      <Carousel />
      <FindPeopleAndLearn />
      <Step />
      <Join />
      <FeatureAndProduct />
    </main>
  );
}

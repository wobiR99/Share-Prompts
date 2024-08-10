import Feed from "@components/Feed";

const Home = () => {
  return (
    <div className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Share Prompts is an open source AI prompting tool for modern world to
        discover, create and share creative fonts
      </p>

      <Feed />
    </div>
  );
};

export default Home;

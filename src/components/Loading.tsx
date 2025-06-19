import { logo } from "../assets";

const Loading = () => {
  return (
    <div className="fixed inset-0 w-full h-screen flexCenter bg-[#3e3f5e] z-[999]">
      <div className="text-center">
        <img src={logo} className="mx-auto mb-3" alt="Logo" />
        <p className="text-whiteColor text-2xl uppercase">Pixel Diamond</p>
        <p className="text-gray-400">Loading...</p>
        {/* loaders */}
        <div className="flexCenter h-10 space-x-1 mt-5">
          <div className="loader-bar bg-[#615dfa]" />
          <div
            className="loader-bar bg-[#5d71fb]"
            style={{ animationDelay: ".1s" }}
          />
          <div
            className="loader-bar bg-[#5d71fb]"
            style={{ animationDelay: ".1s" }}
          />
          <div
            className="loader-bar bg-[#5983fb]"
            style={{ animationDelay: ".2s" }}
          />
          <div
            className="loader-bar bg-[#549afc]"
            style={{ animationDelay: ".3s" }}
          />
          <div
            className="loader-bar bg-[#4eb2fd]"
            style={{ animationDelay: ".4s" }}
          />
          <div
            className="loader-bar bg-[#49c9fe]"
            style={{ animationDelay: ".5s" }}
          />
          <div
            className="loader-bar bg-[#45ddfe]"
            style={{ animationDelay: ".6s" }}
          />
          <div
            className="loader-bar bg-[#41efff]"
            style={{ animationDelay: ".7s" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;

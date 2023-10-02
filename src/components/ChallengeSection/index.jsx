import React, { useRef, useState } from "react";
import { useGetAllPostsQuery } from "../../controller/apiSlice";
import tw from "tailwind-styled-components";
import Button from "../UI/Button";
import MotionWrapper from "../UI/Layout";

const Challenges = () => {
  const [page, setPage] = useState(1);
  const sectionRef = useRef(null);
  const { data: posts, isFetching, error } = useGetAllPostsQuery();

  const itemsPerPage = 5;

  if (isFetching) {
    return <div>Loading...</div>;
  }

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visiblePosts = posts?.slice(startIndex, endIndex);

  const handleLoadMore = () => {
    if (page !== 20) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  };

  return (
    <MotionWrapper ref={sectionRef}>
      <section className="flex items-center h-fit justify-center space-x-12 py-20">
        <img src="/img/cube.png" alt="cube" className="w-[738px] h-[552px]" />
        <div className="flex flex-col text-black">
          <p className="text-[36px] font-bold">
            OUR <span className="text-primary">CHALLENGES</span>
          </p>
          <div className="flex flex-col space-y-[34px] my-[47px]">
            {visiblePosts &&
              visiblePosts.map((post, i) => (
                <StyledChallenge key={post.id}>
                  <p className="font-bold text-[40px]">
                    {post.id < 10 ? "0" + post.id : post.id}
                  </p>
                  <p
                    className={`text-[18px] max-w-[598px] ${
                      i !== 0 && "text-black"
                    }`}
                  >
                    {post.title}
                  </p>
                </StyledChallenge>
              ))}
          </div>
          {error && (
            <p className="text-red-600 text-[18px] font-bold">
              Something Went Wrong! Please Try again.
            </p>
          )}
          {visiblePosts?.length < posts?.length && (
            <Button width={215} height={74} onClickHandler={handleLoadMore}>
              VIEW MORE
            </Button>
          )}
        </div>
      </section>
    </MotionWrapper>
  );
};

export default Challenges;

const StyledChallenge = tw.div`
  w-[712px] h-[76px] shadow-custom flex items-center text-primary space-x-[19px] px-[22px]
  first:text-white first:bg-gradient-to-r first:from-primary first:to-secondary

`;

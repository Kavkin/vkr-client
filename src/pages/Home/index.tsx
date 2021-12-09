import React, { FC } from "react";

type HomeProps = {
  className?: string;
};

const Home: FC<HomeProps> = (props): JSX.Element => {
  return <div className="Home">Home</div>;
};

export default Home;

import React from "react";
import { useGetRandomGreetingQuery } from "../redux/greeting";

const Greeting = () => {
  const { data, error, isLoading } = useGetRandomGreetingQuery(null, {
    refetchOnMountOrArgChange: 1,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oh no, there was an error</div>;
  }

  return (
    <div>
        <p><strong>Server:</strong> {data.message}</p>
    </div>
  );
};

export default Greeting;

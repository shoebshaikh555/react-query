import React from "react";
import axios from "axios";
import { useQueries } from "react-query";
const fetchSuperHeroes = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const DynamicParallelQueries = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-heroes", id],
        queryFn: () => fetchSuperHeroes(id),
      };
    })
  );
  console.log({ queryResults });
  return <div>DynamicParallelQueries</div>;
};

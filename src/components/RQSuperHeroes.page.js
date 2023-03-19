import axios from "axios";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

// const fetchSuperHeroes = () => {
//   return axios.get("http://localhost:4000/superheroes");
// };

const addSuperHero = (hero) => {
  return axios.post("http://localhost:4000/superheroes", hero);
};

const useAddSuperHeroesData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    onSuccess: (data) => {
      // queryClient.invalidateQueries("super-heroes");
      queryClient.setQueryData("super-heroes", (oldQueryData) => {
        // console.log({ oldQueryData });
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data],
        };
      });
    },
  });
};

const RQSuperHeroes = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const onSuccessFunction = (data) => {
    console.log("Perform side effect on successfully fetching the query", data);
  };
  const onErrorFunction = (error) => {
    console.log("Perform side effect on error while fetching the query", error);
  };

  // const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
  //   "super-heroes",
  //   fetchSuperHeroes,
  //   {
  //     // cacheTime: 5000,
  //     // staleTime: 30000,
  //     // refetchOnMount: true,
  //     // refetchOnWindowFocus: true,
  //     // refetchInterval: 2000,
  //     // refetchIntervalInBackground: true,
  //     // enabled: false,
  //     onSuccess: onSuccessFunction,
  //     onError: onErrorFunction,
  //     select: (data) => {
  //       const superHeroesNames = data.data.map((hero) => hero.name);
  //       return superHeroesNames;
  //     },
  //   }
  // );

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccessFunction, onErrorFunction);

  const { mutate: addHero } = useAddSuperHeroesData();

  const handleAddHeroClick = () => {
    const hero = { name, alterEgo };
    addHero(hero);
  };

  if (isLoading || isFetching) return <h2>Loading...</h2>;
  if (isError) return <h2>{error.message}</h2>;

  return (
    <>
      <h2>
        <div>RQSuperHeroes page</div>
      </h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>Add Hero</button>
      </div>
      <button onClick={refetch} style={{ margin: "10px 0px" }}>
        Refetch Heroes
      </button>
      {data?.data?.map((hero) => (
        // <div key={hero.name}>{hero.name}</div>
        <div key={hero.id}>
          <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
        </div>
      ))}
      {/* {data.map((hero) => (
        <div key={hero}>{hero}</div>
      ))} */}
    </>
  );
};

export default RQSuperHeroes;

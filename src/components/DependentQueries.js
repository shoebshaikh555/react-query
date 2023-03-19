import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
const fetchUserByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};
const fetchProfilesByProfileId = (profileId) => {
  return axios.get(`http://localhost:4000/profiles/${profileId}`);
};

export const DependentQueries = ({ email }) => {
  const { data: user } = useQuery(["users", email], () =>
    fetchUserByEmail(email)
  );

  const profileId = user?.data.profileId;

  useQuery(["profiles", profileId], () => fetchProfilesByProfileId(profileId), {
    enabled: !!profileId,
  });

  return <div>DependentQueries</div>;
};

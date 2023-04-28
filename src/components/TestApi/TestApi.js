import React, { useEffect } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { MEMBER_BY_ID } from "../Pages/Members/graphql/MemberInfo";
export default function TestApi() {
  // const TEST_QUERY = gql`
  //   query GetMembers {
  //     members {
  //       id
  //       email
  //     }
  //   }
  // `;

  const { loading, error, data } = useQuery(MEMBER_BY_ID);
  useEffect(() => {
    let authToken = sessionStorage.getItem("token");
    console.log(authToken);
    if (!loading) {
      console.log(data);
    }

    if (error) {
      console.log(error);
    }
    // console.log(loading);
  }, [loading]);
  return (
    <div>
      <p style={{ color: "white" }}>Test api yo</p>
      {/* <h1>{process.env.REACT_APP_API_URL}</h1> */}
    </div>
  );
}

import { useState } from "react";
import { useEffect } from "react";

export const withFetch = (Component, url) => {
  return function HOCcomponent(props) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      (async () => {
        const resp = await fetch(url);
        const data = await resp.json();

        if (data) {
          setUsers(data);
        }
      })();
    }, []);
    return <Component {...props} users={users} />;
  };
};

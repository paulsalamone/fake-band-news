import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const BandsContext = createContext();

export const BandsController = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    await axios
      .get("https://randomuser.me/api/?results=25")
      .then((res) => setUsers(res.data));
    setLoading(false);
  };

  return (
    <BandsContext.Provider value={[users, setUsers]}>
      {!loading && props.children}
    </BandsContext.Provider>
  );
};

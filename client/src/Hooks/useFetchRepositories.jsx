import { useEffect, useState } from "react";
import { Alert } from "react-native";

export default function useFetchRepositories() {
  const [repositories, setRepositories] = useState(null);
  const fetchRepositories = async () => {
    try {
      const response = await globalThis.fetch(
        "http://192.168.0.160:5000/api/repositories"
      );
      const json = await response.json();
      setRepositories(json);
    } catch (error) {
      console.error(error);
      Alert.alert("Lost conexion");
    }
  };

  const repositoriesNode = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositoriesNode };
}

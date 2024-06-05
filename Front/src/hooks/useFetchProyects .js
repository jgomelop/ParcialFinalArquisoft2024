import { useEffect, useState } from "react";
import { getProyects } from "../helpers/getProyects";

const useFetchProyects = ( cedula ) => {
  const [proyects, seProyects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getNewProyects = async () => {
    const newProyect = await getProyects(cedula);
    seProyects(newProyect);
  }
  
  useEffect( () => {
    getNewProyects();
    setIsLoading(false);
    
  }, []);

  return {
    proyects,
    isLoading,
  }
}

export default useFetchProyects ;

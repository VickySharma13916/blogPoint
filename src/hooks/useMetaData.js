import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../services/constant";

const usePageData = (key) => {
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`${BASE_URL}seodata`);
        const filterData = result?.data?.docs?.data?.filter(
          (item) => item?.name === key
        );
        setPageData(filterData);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors as needed
      }
    };

    fetchData(); // Fetch data when the component mounts

    // Add any dependencies to the dependency array if needed
  }, [key]); // Dependency array ensures the effect runs only when key changes

  return pageData;
};

export default usePageData;

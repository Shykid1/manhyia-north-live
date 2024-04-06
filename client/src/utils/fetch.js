import instance from "./instance";

const fetchCandidates = async (state) => {
  try {
    const response = await instance.get("/candidate");
    state(response.data);
  } catch (error) {
    console.error("Error fetching candidates");
  }
};

export default fetchCandidates;

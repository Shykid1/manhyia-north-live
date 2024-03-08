export const useAuth = () => {
  // Get the token from the local storage
  const token = localStorage.getItem("token");

  // Check if the token is present
  return !!token;
};

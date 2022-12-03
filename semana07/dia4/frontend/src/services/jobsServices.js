export const getAllJobs = async () => {
  const response = await fetch("url");
  const responseJson = await response.json();
  return { status: response.status, data: responseJson };
};

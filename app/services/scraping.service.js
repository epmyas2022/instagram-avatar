const Base = process.env.URL || "https://www.instagram.com/";
import network from "../utils/network.js";
import { BadRequestException } from "../utils/exceptions.js";

const getInfoUser = async ({ username }) => {
  const response = await network.get(`${Base}api/v1/users/web_profile_info/`, {
    params: { username },
  });

  if (response.status !== 200)
    throw new BadRequestException("Error to get user data");
  return response.data?.data;
};

const getStreamImage = async (imageUrl) => {
  const response = await network.get(imageUrl, {
    responseType: "stream",
  });

  if (response.status !== 200)
    throw new BadRequestException("Error to get image");
  return response.data;
};

export default { getInfoUser, getStreamImage };

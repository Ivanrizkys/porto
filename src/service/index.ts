import { User } from "../dto";

const getUser = async (): Promise<User> => {
  const res = await fetch(`${process.env.API_URL}/user`);

  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }

  return res.json();
};

export { getUser };

const API = "http://localhost:3000";

export const registerRequest = async (user) => {
  const response = await fetch(`${API}/user/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error("Failed to register user");
  }

  return await response.json();
};

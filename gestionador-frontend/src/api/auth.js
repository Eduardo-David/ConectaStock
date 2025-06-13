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

export const loginRequest = async (credentials) => {
  const response = await fetch(`${API}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
    credentials: 'include', // Asegúrate de incluir las cookies en la solicitud
  });

  if (!response.ok) {
    throw new Error("Failed to login");
  }
  return await response.json();
}

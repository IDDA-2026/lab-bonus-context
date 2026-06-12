const API_URL = "https://jsonplaceholder.typicode.com/users";

export async function fetchUser(id) {
  const response = await fetch(`${API_URL}/${id}`);
  const data = await response.json();

  if (!data.id) {
    return null;
  }

  return data;
}

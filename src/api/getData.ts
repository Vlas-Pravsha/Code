export async function getData() {
  const url = `https://frontend-test-assignment-api.abz.agency/api/v1/users?count=20`;
  try {
    const res = await fetch(url);
    return (await res.json()).users;
  } catch (e) {
    console.error(e);
  }
}
export async function getUser(id: string) {
  const url = `https://frontend-test-assignment-api.abz.agency/api/v1/users/${id}`;
  try {
    const res = await fetch(url);
    return (await res.json()).user;
  } catch (e) {
    console.error(e);
  }
}

export async function getUsersDebounced() {
  const url = "http://localhost:3000/items";
  try {
    const res = await fetch(url);
    return (await res.json()).users;
  } catch (e) {
    console.error(e);
  }
}

const API_ROOT = `http://localhost:3000/api/v1`;

const token = () => localStorage.getItem("token");

const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token(),
  };
};

const getBugs = () => {
  return fetch(`${API_ROOT}/bugs/`, { headers: headers() }).then((res) =>
    res.json()
  );
};

const getFish = () => {
  return fetch(`${API_ROOT}/fish/`, { headers: headers() }).then((res) =>
    res.json()
  );
};

const getFossils = () => {
  return fetch(`${API_ROOT}/fossils/`, { headers: headers() }).then((res) =>
    res.json()
  );
};

const getVillagers = () => {
  return fetch(`${API_ROOT}/villagers/`, { headers: headers() }).then((res) =>
    res.json()
  );
};

const newUser = (data) => {
  return fetch(`${API_ROOT}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ user: data }),
  }).then((res) => res.json());
};

const login = (data) => {
  return fetch(`${API_ROOT}/login`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user`, {
    headers: headers(),
  }).then((res) => {
    return res.json();
  });
};

export const api = {
  auth: {
    login,
    getCurrentUser,
    newUser,
  },
  bugs: {
    getBugs,
  },
  fish: {
    getFish,
  },
  fossils: {
    getFossils,
  },
  villagers: {
    getVillagers,
  },
};

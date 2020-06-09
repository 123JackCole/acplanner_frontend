const API_ROOT = `http://localhost:3000/api/v1`;
const NOOKIPEDIA_API_ROOT = `https://nookipedia.com/api`;
const NOOKIPEDIA_API_KEY = process.env.REACT_APP_API_TOKEN;

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

const getChecklist = (user_id) => {
  return fetch(`${API_ROOT}/dailychecklists/${user_id}`, {
    headers: headers(),
  }).then((res) => res.json());
};

// maybe just pass in the hash to see if that works?
// come back to this method
const putChecklist = (checklist) => {
  let string_statuses = "";
  checklist.checked_statuses.forEach((outerArray) => {
    string_statuses += "[";
    outerArray.forEach((char, index) => {
      string_statuses += char;
      if (index !== outerArray.length - 1) {
        string_statuses += ",";
      }
    });
    string_statuses += "]";
  });

  return fetch(`${API_ROOT}/dailychecklists/${checklist.user_id}`, {
    method: "PUT",
    headers: headers(),
    body: JSON.stringify({
      dailychecklist: {
        id: checklist.id,
        user_id: checklist.user_id,
        checked_statuses: string_statuses,
      },
    }),
  }).then((res) => res.json());
};

const getTasks = (checklist_id) => {
  return fetch(`${API_ROOT}/tasks/${checklist_id}`, {
    headers: headers(),
  }).then((res) => res.json());
};

const getEventsToday = () => {
  return fetch(`${NOOKIPEDIA_API_ROOT}/today/?api_key=${NOOKIPEDIA_API_KEY}`, {
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());
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
  checklists: {
    getChecklist,
    putChecklist,
  },
  tasks: {
    getTasks,
  },
  events: {
    getEventsToday,
  },
};

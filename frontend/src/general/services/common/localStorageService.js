export function set(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function get(key){
  return JSON.parse(localStorage.getItem(key));
}

export function remove(key) {
  localStorage.removeItem(key);
}

export function setUser(data) {
  set("user", data);
}

export function getUser(){
  return get('user');
}

export function removeUser() {
  remove("user");
}
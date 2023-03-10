function getFromLocalStorage(key) {
  let data = JSON.parse(localStorage.getItem(key));
  return data;
}

function addCacheResponse(url, response) {
  let responseCache = this.getFromLocalStorage("responseCache") || {};
  responseCache[url] = response;
  localStorage.setItem("responseCache", JSON.stringify(responseCache));
}

function getCacheResponse(url) {
  let responseCache = this.getFromLocalStorage("responseCache") || {};
  return responseCache[url];
}

export default {
  getFromLocalStorage: getFromLocalStorage,
  addCacheResponse: addCacheResponse,
  getCacheResponse: getCacheResponse,
};

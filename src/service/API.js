import StorageService from "./StorageService";

function modifyData(data) {
  let books = [];
  console.log(data['docs'])
  if(data['docs']){
    data['docs'].forEach(book => {
      if(book.title && book['author_name'] && book.first_publish_year && book.publish_year)
        books.push({ title: book.title, author: book['author_name'][0], firstPublishedDate: book.first_publish_year, lastPublishedDate: Math.max(...(book.publish_year)) })
    });
  }
  
  else{
    console.log(data['works'])
    if(data['works']){
      data['works'].forEach(book => {
        books.push({ title: book.title, author: book['authors'][0].name, firstPublishedDate: book.first_publish_year, lastPublishedDate: book.first_publish_year })
      });
    }
  }

  return { success: true, books, count: data.num_found };
}

export default {
  get: function (url) {
    let cached = StorageService.getCacheResponse(url);
    if (cached) {
      return new Promise((resolve, reject) => {
        resolve(cached);
      });
    }
    return fetch(url, { method: "GET" })
      .then(parseResponse)
      .then((data) => {
        data = modifyData(data);
        StorageService.addCacheResponse(url, data);
        return data;
      })
      .catch(console.log("error"));
  },
};

function parseResponse(response) {
  return response.json();
}

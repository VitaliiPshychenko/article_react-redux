export const LOAD = 'load';
export const DISPLAY = 'display';

export function load() {
  return (dispatch) => {
    dispatch({
      type: LOAD
    });
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://my-json-server.typicode.com/mate-academy/literary-blog/articles');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      const title = xhr.response[0].title;
      dispatch(display(title));
    })
    xhr.send();

    const xhrAuthor = new XMLHttpRequest();
    xhrAuthor.open('GET', 'http://my-json-server.typicode.com/mate-academy/literary-blog/articles');
    xhrAuthor.responseType = 'json';
    xhrAuthor.addEventListener('load', () => {
      const author = xhrAuthor.response[0].author;
      dispatch(display(author));
    })
    xhrAuthor.send();
  };
}

export function display(title, author) {
  return {
    type: DISPLAY,
    title,
    author
  }
}
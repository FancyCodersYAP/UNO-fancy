export const setCookie = (
  name: string,
  value: string,
  days = 30,
  path = '/'
) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie =
    name +
    '=' +
    encodeURIComponent(value) +
    '; expires=' +
    expires +
    '; path=' +
    path;
};

export const getCookie = (name: string, cookies = ''): string | null => {
  const cookiesString =
    typeof document === 'undefined' ? cookies : document.cookie;
  return cookiesString.split('; ').reduce((acc, sum) => {
    const parts = sum.split('=');
    return parts[0] === name ? decodeURIComponent(parts[1]) : acc;
  }, '');
};

export const deleteCookie = (name: string, path: string) => {
  setCookie(name, '', -1, path);
};

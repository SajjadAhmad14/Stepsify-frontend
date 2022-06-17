/* eslint-disable */

const isLoggedIn = () => {
  return !!sessionStorage.getItem('token');
};

export default isLoggedIn;

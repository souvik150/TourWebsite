/*eslint-disable*/

const login = (email, password) => {
  axios({
    method: 'post'
  });
};

document.querySelector('.form').addEventListener('submit', e => {
  e.preventDefault();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  login({ email, password });
});

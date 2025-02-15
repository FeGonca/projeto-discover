function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  const img = document.querySelector('#profile img');
  const alt = document.querySelector('#profile alt');

  if(html.classList.contains('light')) {
      img.setAttribute('src', './assets/avatar-light.png');
      alt.setAttribute('alt', 'Avatar do usuário na versão light');
  } else {
    img.setAttribute('src', './assets/avatar.png');
    alt.setAttribute('alt', 'Avatar do usuário na versão normal');
}
}
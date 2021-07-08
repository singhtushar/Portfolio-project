const getCv = document.getElementById('btn');

getCv.addEventListener('click', (e) => {
  window.open(
    "https://drive.google.com/file/d/14S93u3eWpB3SIMn2vOzasyVwTTdkupd4/view?usp=sharing", '_blank'
  );
})

const css = document.getElementById('theme-style');
const dark = document.getElementById('blue-mode');

if (localStorage.getItem('theme') === 'dark') {
  darkTheme();
}
else {
  lightTheme();
}

function darkTheme() {
  css.setAttribute("href", "css/dark.css");
  localStorage.setItem('theme', 'dark');
}

function lightTheme() {
  css.setAttribute("href", "");
  localStorage.setItem("theme", "light");
}

dark.addEventListener('click', (e) => {
  darkTheme();
})

const light = document.getElementById('light-mode')
light.addEventListener('click', (e) => {
  lightTheme();
})


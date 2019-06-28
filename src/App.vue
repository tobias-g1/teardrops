<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700,900&display=swap');
body {
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4, h5, h6, p {
    font-family: 'Roboto', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: lighter;
    text-transform: uppercase;
}

p {
    font-weight: normal;
}

.flex-center {
    display: flex;
    align-items: column;
    justify-content: center;
    flex-direction: column;
}

.pad-20 {
  padding: 20px;
} 
.center {
  text-align: center;
}
</style>

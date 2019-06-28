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

h2 {
  font-size: 30px;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: lighter;
    text-transform: uppercase;
    line-height: 40px;
    margin: 0;
    letter-spacing: 7.5px;
}

h4, h5 {
  letter-spacing: initial;
}

h4 {
  font-weight: bold;
}

p {
    font-weight: lighter;
    line-height: 25px;
    font-size: 14px;
}

.flex-center {
    display: flex;
    align-items: column;
    justify-content: center;
    flex-direction: column;
}

.pad-20 {
  padding: 50px;
} 
.center {
  text-align: center;
}
button {
  padding: 10px 12px;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 5px;
  &.outline {
    background: 0;
    border: 2px solid #fff;
    color: #fff;
    &.blue {
      color: #5FBDD8;
      border-color: #5FBDD8;
    }
  }
  &.primary {
    color: #fff;
    background: #5FBDD8;;
    border: 1px solid #5FBDD8;
  }

}
</style>

<template>
<div id="app">
    <navbar />
    <router-view />
    <footerbar />
</div>
</template>

<script>
import navbar from '@/components/nav.vue'
import footerbar from '@/components/footer.vue'
export default {
    name: 'app',
    components: {
        navbar,
        footerbar
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700,900&display=swap');

body {
    margin: 0;
    padding: 0;
    overflow-y: scroll;
    scroll-behavior: smooth;
}

section {
    overflow-y: scroll;
    scroll-behavior: smooth;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
li,
label {
    font-family: 'Roboto', sans-serif;
}

h2 {
    font-size: 30px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: lighter;
    text-transform: uppercase;
    line-height: 40px;
    margin: 0;
}

h1, h2  {
    letter-spacing: 7.5px;
}

h3, h4 {
      letter-spacing: 2px;
}
h4,
h5 {
    letter-spacing: initial;
}

h4 {
    font-weight: bold;
}

p {
    line-height: 20px;
    font-size: 14.5px;
}

label {
    font-weight: lighter;
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
    letter-spacing: 3px;
    font-weight: bold;
    cursor: pointer;

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
        background: #5FBDD8;
        ;
        border: 1px solid #5FBDD8;
    }

}
</style>

<template>
<div class="nav-wrapper">
    <div class="nav-bar">
        <h3 class="text-logo">
            Teardrops
        </h3>
        <ul class="nav-options">
            <a class="simple" v-smooth-scroll="{ duration: 700, offset: -100}" href="#about"><li>About</li></a>
            <a class="simple" v-smooth-scroll="{ duration: 700, offset: -100}" href="#communities"><li>Communities</li></a>
            <a class="simple" v-smooth-scroll="{ duration: 700, offset: -100}" href="#certified"><li>Certified</li></a>
            <a class="simple" v-smooth-scroll="{ duration: 700, offset: -100}" href="#support"><li>Support</li></a>
            <a v-smooth-scroll="{ duration: 700, offset: -100}" href="#buy"><li><button class="primary">Buy</button></li></a>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    name: 'nav'
}
</script>

<style lang="scss">
.nav-wrapper {
    position: fixed;
    width: 100%;
    z-index: 100000;
    background: #221b2f;

    .nav-bar {
        padding: 0 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        color: white;

        .text-logo {
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 5px;
        }

        a {
            text-decoration: initial !important;
        }

        ul {
            list-style: none;
            display: inline-flex;
            flex-direction: row;
            align-items: center;

            li {
                margin-left: 20px;
                cursor: pointer;
                text-transform: uppercase;
                font-size: 14px;
                color: white;
            }
        }
    }

}

@media only screen and (max-width: 992px) {
   .simple {
        display: none;
    }
}
</style>

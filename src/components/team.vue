<template>
<div class="team">
    <img :src="userImage" alt="User Image">
    <h4> {{ username }} </h4>
    <h5> {{ position }} </h5>
    <p> {{ desc }} </p>
    <a :href="link" target="_blank" rel="noopener noreferrer"><button class="outline blue">Learn More</button></a>
</div>
</template>

<script>
export default {
    name: 'team',
    props: {
        username: String,
        position: String,
        desc: Boolean
    },
    computed: {
        userImage() {
            return `https://steemitimages.com/u/${this.username}/avatar`
        },
        link() {
            return `https://steemit.com/@${this.username}`
        }
    }
}
</script>

<style lang="scss">
.team {
    padding: 25px;

    img {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        margin-bottom: 10px;
    }

    h4,
    h5 {
        line-height: initial;
    }

    h4 {
        margin-bottom: 5px;
    }
}
</style>

<template>
<div class="community-card">
    <div class="img-wrapper">
        <img :src="image" alt="Community Image" />
    </div>
        <h3>{{ header }}</h3>
        <p>{{ desc }}</p>
        <a :href="url" target="_blank"><button :disabled="!active" class="primary"> {{ buttonText }} </button></a>
    </div>
</template>

<script>
export default {
    name: 'community-card',
    props: {
        image: String,
        header: String,
        desc: String,
        active: Boolean,
        buttonText: String,
        url: String
    }
}
</script>

<style lang="scss">
.community-card {
    text-align: center;
    padding: 20px 50px 50px 50px;

    .img-wrapper {
        height: 225px;
        width: 225px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        border: 1px solid #EAEAEA;
        margin: auto auto 10px auto;

        img {
            width: 80%;
            padding: 20px;
            height: auto;
            margin: auto;
        }
    }

    h3 {
        font-weight: bold;
    }

    p {
        margin-top: 0;
    }
}
</style>

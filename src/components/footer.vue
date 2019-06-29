<template>
<div class="footer">
        <h3 class="text-logo">
            Teardrops
        </h3>
    </div>
</template>

<script>
export default {
    name: 'footer'
}
</script>

<style lang="scss">

    .footer {
        padding: 10px 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        color: white;
        background: #221b2f;

        .text-logo {
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 5px;
        }
}
</style>

<template>
    <div class="home-header">
        <a class="content">
            <span>搜索饿了么商家、商品名称</span>
        </a>
    </div>
</template>

<script>

export default {
    name: 'HomeHeader'
}

</script>

<style lang='scss' scoped>
.home-header{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: .51rem;
    position:sticky;
    top: 0;
    background: #0085ff;
    z-index: 999;

    .content{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3.43rem;
        height: .31rem;
        background: #fff;
        color: #999;
        font-size: 0.14rem
    }
}
</style>
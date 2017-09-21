<template>
    <div class="amap">
        <h1>VUE调用高德地图</h1>
        <p>地图宽高根据自己所需设置</p>
        <el-amap vid="amapDemo" >
        </el-amap>
        <div class="kong"></div>
    </div>   
</template>
<script>
    
</script>
<style scoped>
    .amap{
        width:50%;
        height: 500px;
        margin: 0 auto;
    }
    .amap h1{
        line-height: 50px;
        margin-top: 50px;
    }
    .amap p{
        line-height: 100px;
    }
    .kong{
        height: 300px;
    }
</style>
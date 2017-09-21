<template>
    <div class="loadingImg">
        <img v-lazy="img"alt="" v-for="img in list" ondragstart="return false">
        <div class="gototop" @click="BackToTop">
            <a>回到<br>顶部</a>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                list:[
                    "/static/img/2.jpg",
                    "/static/img/3.jpg",
                    "/static/img/4.jpg",
                    "/static/img/5.jpg",
                    "/static/img/6.jpg",
                    "/static/img/7.jpg",
                    "/static/img/8.jpg",
                    "/static/img/9.jpg",
                    "/static/img/10.jpg",
                    "/static/img/11.jpg"
                ]
            }
        },
        methods:{
            BackToTop(){
                $('html,body').animate({ scrollTop: 0 }, 700);  
            },
            handleScroll () {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                console.log(scrollTop)
                if(scrollTop >100){
                    $(".gototop").fadeIn(500);
                }
            },      

        },
        mounted(){
           window.addEventListener('scroll', this.handleScroll)
            $(".gototop").hide();
        },
        created(){
               
        }
    }
</script>
<style scoped>
img[lazy=loading]{
    
}
img[lazy=loaded]{
  animation:fade 0.5s;
}
img{
  transition:all 0.5s;
  display: block;
  width: 400px;
  margin: 0 auto;
}

@keyframes fade {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
.gototop{
    width: 40px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ccc;
    background: #f2f2f5;
    position: fixed;
    right: 30px;
    bottom: 50px;
    font-size: 12px;
    cursor: pointer;
}
.gototop a{
    color: #666;
    line-height: 20px;
    display: inline-block;
}
</style>
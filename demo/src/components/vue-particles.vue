<template>
    <div>
        <vue-particles
	        color="#fff"
	        :particleOpacity="0.7"
	        :particlesNumber="60"
	        shapeType="circle"
	        :particleSize="4"
	        linesColor="#fff"
	        :linesWidth="1"
	        :lineLinked="true"
	        :lineOpacity="0.4"
	        :linesDistance="150"
	        :moveSpeed="2"
	        :hoverEffect="true"
	        hoverMode="grab"
	        :clickEffect="true"
	        clickMode="push"
	        class="lizi"
        >
        </vue-particles>        
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>
<style scoped>
.lizi{
  background:url('/static/img/1.jpg') no-repeat;
  background-size: 100%;
}    
</style>
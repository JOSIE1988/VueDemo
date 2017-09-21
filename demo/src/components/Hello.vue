<template>
  <div class="hello">

    <h1>{{ msg }}</h1>
    <div class="shop_box" ref="shopBox">
	    <ul class="content">
	        <li v-for="item in nums">{{item}}</li>
	    </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
  name: 'hello',
  data () {
    return {
    	msg: 'This is vue-particles',
    	nums:[1,2,3,4,5,6,6,7,8,9,0,12]
    }
  },
  methods:{
  		_initScroll () {
                this.shopBoxScroll = new BScroll(this.$refs.shopBox, {
                    // better-scroll 会将点击事件去掉，要在这里开启，同时点击在PC 会被执行两次，要在这里控制
                    click: true
                });
            }
  },
  mounted(){
    	this.$nextTick(() => {
                this._initScroll();
            });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 10px;
  display: block;
  background: #f2f2f5;
  border: 1px solid #eee;
  border-radius: 2px;
  line-height: 40px;
}

a {
  color: #42b983;
}
</style>

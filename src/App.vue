<template>
  <div class="app" style="background-color: #2f3136;">
    <Table>

    </table>
    <Reader>
    </Reader>
  </div>
</template>
<script>
//import BookList from './components/BookList.vue'
import Reader from './components/Reader.vue'
import Table from './components/table.vue'
//import ReadMain from './components/ReadMain.vue'
export default {
  name: 'app',
  components: {
    //BookList,
    Reader,
    Table
},
  data(){
    return{
      list:true
    }
  }
}
</script>
<style>
#App {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.tip{
  position: absolute;
  height: 3rem;
  width: 18rem;
  right: 1rem;
  bottom: 3rem;
  color: rgb(212, 212, 212);
  background-color: rgb(42, 45, 46);
  display: flex;
}
.tip span{
  position: absolute;
  margin-left: 2.5rem;
  bottom: 0.8rem;
}
.tip .icon{
  position: absolute;
  margin-left: 0.9rem;
  bottom: 0.8rem;
}
.tip #close{
  position: absolute;
  right: 0.9rem;
  bottom: 0.8rem;
}
.tip #close:hover{
  background-color: rgb(57, 60, 61);
}
.tip:hover{
  background-color: rgb(47, 49, 54);
}
.gg-danger {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs,1));
  width: 20px;
  height: 20px;
  border: 2px solid;
  border-radius: 40px;
  color: rgb(55, 148, 255);
}

.gg-danger::after,
.gg-danger::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  border-radius: 3px;
  width: 2px;
  background: currentColor;
  left: 7px
}

.gg-danger::after {
  top: 2px;
  height: 8px
}

.gg-danger::before {
  height: 2px;
  bottom: 2px
} 
.gg-close {
 box-sizing: border-box;
 position: relative;
 display: block;
 transform: scale(var(--ggs,1));
 width: 22px;
 height: 22px;
 border: 2px solid transparent;
 border-radius: 40px;
 color: rgb(212, 212, 212);
}

.gg-close::after,
.gg-close::before {
 content: "";
 display: block;
 box-sizing: border-box;
 position: absolute;
 width: 16px;
 height: 2px;
 background: currentColor;
 transform: rotate(45deg);
 border-radius: 5px;
 top: 8px;
 left: 1px
}

.gg-close::after {
 transform: rotate(-45deg)
} 
</style>
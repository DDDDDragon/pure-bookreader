<template>
  <div class="app">
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
</style>
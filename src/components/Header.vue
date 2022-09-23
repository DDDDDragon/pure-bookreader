<template>
    <div class="header">
        <div class="logo"> 大爷阅读器 </div>
        <div v-if="list" class="importBook">
            <el-button size="mini"> 导入 <i class="el-icon-upload el-icon--right"></i></el-button>
        </div>
        <div v-else class="bookName"></div>
        <div class="handler">
            <el-button-group>
                <el-button type="primary"  size="mini" icon="el-icon-minus"></el-button>
                <el-button type="primary"  size="mini" icon="el-icon-full-screen"></el-button>
                <el-button type="primary"  size="mini" icon="el-icon-switch-button"></el-button>
            </el-button-group>
        </div>
    </div>
    </template>
    <script>
        export default {
            // eslint-disable-next-line vue/multi-word-component-names
            name: "Header",
            data(){
                return{
                    list:true
                }
            }
        }
    </script>
    <style scoped>
     .header{
         display: flex;
         height: 30px;
         width: 100%;
     }
        .logo{
            display: flex;
            width: 100px;
            justify-content: center;
            align-items: center;
        }
        .bookName,.importBook{
            display: flex;
            align-items: center;
            flex: 1;
        }
        .handler{
            display: flex;
            width: 132px;
        }
    </style>
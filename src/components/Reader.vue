<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="box">
        <div class="topTitle">
            <h2 id="docName"></h2>
        </div>
        <div class="reader" id="reader">
            <div id="modCreater" class="modCreater">
                <span class="modText">tModLoader路径(必填)</span>
                <input id="tmlPath" type="text" class="tmlPath BOX" placeholder="输入tModLoader的路径 例如C:\Users\ASUS\Documents\My Games\Terraria\tModLoader"><br>
                <span class="modText">Mod内部名(必填)</span>
                <input id="modName" type="text" value="NewMod" class="modName BOX" placeholder="输入Mod的内部名">
                <span class="modText">Mod显示名(必填)</span>
                <input id="modDName" type="text" value="NewMod" class="modDName BOX" placeholder="输入Mod的显示名">
                <span class="modText">作者名(必填)</span>
                <input id="authorName" type="text" value="GoodAuthor" class="authorName BOX" placeholder="输入作者的名称"><br>
                <button id="createMod" class="createMod">生成</button>
            </div>
            <div id="modManager" class="modManager">
                <table id="modList" class="modList">
                    <div class="modObject">
                        <img src="C:\Users\ASUS\Documents\My Games\Terraria\tModLoader\ModSources\ElementMachine\icon.png" class="modIcon">
                        <div class="modSettings">
                            <span class="modDes">ElementMachine</span>
                            <span class="modAuthor">作者: DDDDDragon</span>
                            <span class="modVersion">版本号: v2.0.0.0</span>
                            <div class="buttons">
                                <button class="editMod Modbutton">编辑</button>
                                <button class="buildMod Modbutton">编译</button>
                            </div>
                        </div>
                    </div>
                    <div class="modObject">

                    </div>
                </table>
            </div>
            <div class="container" id="container"></div>
            <iframe src="" frameborder="0" class="iframe" id="iframe"></iframe>
            <div id="container" style="width:800px;height:600px;border:1px solid grey"></div>
        </div>
        <div class="bottom">

        </div>
    </div>
    
</template>
<script>
    export default{}
    
</script>
<style>
    ::-webkit-scrollbar{width:1rem;height:0.6rem;background-color: rgb(54, 57, 63);}
    ::-webkit-scrollbar-button{width:0.5rem;height:0.6rem}
    ::-webkit-scrollbar-track{background:0 0}
    ::-webkit-scrollbar-thumb{background:rgb(86, 96, 74);-webkit-transition:.3s;transition:.3s}
    ::-webkit-scrollbar-thumb:hover{background-color:rgb(48, 48, 48)}
    ::-webkit-scrollbar-thumb:active{background-color:rgb(48, 48, 48)}
    .modCreater{
        height: 100%;
        width: 100%;
    }
    .modManager{
        height: 100%;
        width: 100%;
    }
    .modObject{
        background-color: rgb(35, 37, 39);
        width: 45%;
        height: 20%;
        margin-left: 1.5rem;
        margin-right: 1.5rem;
        margin-top: 1rem;
        background-color: #282A2E;
        border-radius: 0.5rem;
        border: none;
        font-size: 1rem;
        color: #8B8E9D;
        display: flex;
    }
    .modSettings{
        width: 73%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .modDes{
        color: rgb(212, 212, 212);
        margin-top: 1.2rem;
        margin-left: 0.4rem;
        font-size: 20px;
        font-weight: bold;
    }
    .modAuthor{
        color: rgb(212, 212, 212);
        margin-top: 0.3rem;
        margin-left: 0.4rem;
    }
    .modVersion{
        color: rgb(212, 212, 212);
        margin-top: 0.3rem;
        margin-left: 0.4rem;
    }
    .modIcon{
        margin: 2rem;
    }
    .modList{
        display: flex;
        color: rgb(212, 212, 212);
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        flex-wrap: wrap;
        align-content: flex-start;
    }
    .buttons{
        margin-left: 0.4rem;
        height: 2rem;
    }
    .editMod{
        margin-left: 12rem;
        padding-left: 0.2rem;
    }
    .buildMod{
        margin-left: 1.5rem;
        padding-left: 0.2rem;
    }
    .Modbutton{
        height: 2rem;
        width: 5rem;
        margin-top: 0.2rem;
        border-radius: 0.5rem;
        background-color: rgb(47, 49, 54);
        color: rgb(212, 212, 212);
        flex: 1;
        border: none;
        cursor: pointer;
    }
    .Modbutton:hover{
        background-color: rgb(54, 57, 63);
    }
    .createMod{
        height: 2.5rem;
        width: 5rem;
        margin-left: 57.2rem;
        padding-left: 0.4rem;
        margin-top: 2rem;
        border-radius: 0.5rem;
        background-color: #282A2E;
        color: rgb(212, 212, 212);
        border: none;
        cursor: pointer;
    }
    .createMod:hover{
        background-color: rgb(47, 49, 54);
    }
    .BOX{
        height: 2.5rem;
        margin-left: 1.2rem;
        padding-left: 0.4rem;
        margin-top: 2rem;
        background-color: #282A2E;
        border-radius: 0.5rem;
        border: none;
        font-size: 1rem;
        color: #8B8E9D;
    }
    .tmlPath{
        width: 40rem;
    }
    .modName{
        width: 10rem;
    }
    .modDName{
        width: 10rem;
    }
    .authorName{
        width: 10rem;
    }
    .modText{
        margin-left: 2rem;
        margin-top: 2rem;
        color: rgb(212, 212, 212);
        background-color: rgb(54, 57, 63);
    }
</style>
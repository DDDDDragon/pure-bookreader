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
            <iframe src="" frameborder="0" class="iframe" id="iframe"></iframe>
        </div>
        <div class="bottom">

        </div>
    </div>
    
</template>
<script>
    export default{}
</script>
<style>
    .modCreater{
        height: 100%;
        width: 100%;
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
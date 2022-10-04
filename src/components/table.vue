<!-- eslint-disable vue/multi-word-component-names -->
<template> 
    <nav>
        <div class="header">
            <div class="top">
                <div class="logo"><i class="gg-terminal"></i></div>
                <div class="return"><i class="gg-log-out"></i></div>
            </div>
            <div class="search">
                <span class="icon"><i class="gg-search"></i></span>
                <input placeholder=" 搜索文档源" id="search"/>
                <ul class="dropdown">
                    <div class="dropdown-content" id="myUL">
                    </div>
                </ul>
            </div>
        </div>
        <section>
            <div class="list">
            <div class="item">
                <span class="icon" style="float: right;"><i class="gg-menu-left-alt"></i></span>
                <div class="text">
                    <details>
                        <summary style="font-size: 20px;font-weight: bold;">目录</summary>
                        <ol id="content">
                        </ol>
                    </details>
                </div>
            </div>
            <div class="item">
                <div class="text" id="modCreaterBtn" style="font-size: 20px;font-weight: bold;">创建新mod</div>
            </div>
            <div class="item">
                <div class="text" id="mb" style="font-size: 20px;font-weight: bold;">使用指南</div>
            </div>
            <div class="item">
                <div class="text" id="modManagerBtn" style="font-size: 20px;font-weight: bold;">Mod管理</div>
            </div>
            <div class="item"><span class="icon" style="float: right;"><i class="gg-npm"></i></span>
                <div class="text">Npm</div>
                <div class="sub-list">
                <div class="item">Vue</div>
                <div class="item">React</div>
                </div>
            </div>
            </div>
            <div class="list bottom-list">
            <div class="item"><span class="icon" style="float: right;"><i class="gg-cloud"></i></span>
                <div class="text">Cloud</div>
            </div>
            <div class="item"><span class="icon" style="float: right;"><i class="gg-info"></i></span>
                <div class="text">Info</div>
            </div>
            </div>
        </section>
        <footer>
            <div class="picture"></div>
            <div class="user-info">
                <div class="name">THY</div>
                <div class="email">thy@tmail.thy</div>
            </div>
            <div class="button"><i class="gg-external"></i></div>
        </footer>
    </nav>
</template>
<script>
    export default{}
</script>
<style scoped>
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}
#myUL {
    /* 移除默认的列表样式 */
    list-style-type: none;
    padding: 0;
    margin: 0;
}
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}
.dropdown .dropdown-content {
    display: block;
}
html,
body {
  height: 100%;
}
body {
  display: grid;
  place-items: center;
  background-color: #E9EBEF;
}
nav {
  display: flex;
  flex-direction: column;
  width: 25rem;
  height: 50rem;
  background-color: #161818;
  height: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  color: #8B8E9D;
}
nav > .header {
  padding: 2rem 1.5rem 0;
}
nav > .header > .top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 1rem;
}
nav > .header > .top > .logo {
  display: grid;
  place-items: center;
  width: 2.5rem;
  height: 2.5rem;
  color: #FFFFFF;
  font-size: 1.5rem;
  background-color: #2B67FE;
  border-radius: 0.5rem;
}
nav > .header > .top > .return {
  --ggs: 0.7;
  width: 1.5rem;
  height: 1.5rem;
  display: grid;
  place-items: center;
  color: #898B95;
  background-color: #303238;
  border-radius: 0.3rem;
}
nav > .header > .search {
  position: relative;
  padding-bottom: 1rem;
}
nav > .header > .search > .icon {
  display: grid;
  place-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 2.5rem;
  height: 2.5rem;
}
nav > .header > .search > input {
  width: 100%;
  height: 2.5rem;
  padding-left: 2.2rem;
  background-color: #282A2E;
  border-radius: 0.5rem;
  border: none;
  font-size: 1rem;
  color: #8B8E9D;
}
nav > section {
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  padding: 0 1.5rem;
}
nav > section > .list {
  flex-grow: 2;
  height: 0;
  overflow: auto;
  border-top: 2px #282A2E solid;
  padding: 1rem 0.5rem;
}
nav > section > .list > .item {
  border-radius: 0.5rem;
  line-height: 2.5rem;
  margin: 0 0 0.3rem;
  cursor: pointer;
}
nav > section > .list > .item > .text {
  display: block;
  width: 100%;
  line-height: 2.5rem;
  border-radius: 0.5rem;
}
nav > section > .list > .item > .text:hover {
  background-color: #222426;
}
nav > section > .list > .item:hover,
nav > section > .list > .item:hover > .icon {
  color: #F8F8F9;
}
nav > section > .list > .item:hover > .sub-list {
  height: auto;
}
nav > section > .list > .item > .sub-list {
  overflow: hidden;
  margin-left: 1rem;
  padding: 0 1rem;
  border-left: 2px #282A2E solid;
  color: #8B8E9D;
}
nav > section > .list > .item > .sub-list > .item {
  border-radius: 0.5rem;
  line-height: 2.5rem;
  padding: 0 0.5rem;
}
nav > section > .list > .item > .sub-list > .item:hover {
  background-color: #222426;
  color: #F8F8F9;
}
nav > section > .list > .item > .icon {
  display: grid;
  place-items: center;
  float: left;
  width: 2.5rem;
  height: 2.5rem;
  color: #474F4D;
}
nav > section > .list::-webkit-scrollbar {
  width: 0.2rem;
  background-color: #161818;
}
nav > section > .list::-webkit-scrollbar-thumb {
  border-radius: 0.1rem;
  background-color: #474F4D;
}
nav > section > .bottom-list {
  flex-grow: 0;
  height: auto;
}
nav > footer {
  display: flex;
  justify-content: space-between;
  background-color: #232527;
  align-items: center;
  padding: 1.5rem;
}
nav > footer > .picture {
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  background-color: #F0A538;
  border-radius: 50%;
}
nav > footer > .picture::after {
  content: "";
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #2B67FE;
  border-radius: 50%;
  border: 2px #E3E4E9 solid;
}
nav > footer > .user-info {
  padding-left: 1rem;
  flex-grow: 2;
}
nav > footer > .user-info > .name {
  color: #F8F8F9;
  font-weight: bold;
}
nav > footer > .button {
  --ggs: 0.7;
  display: grid;
  place-items: center;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #303238;
  border-radius: 0.3rem;
}
.gg-menu-left-alt {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 16px;
    height: 14px;
    transform: scale(var(--ggs,1))
}

.gg-menu-left-alt::after,
.gg-menu-left-alt::before {
    content: "";
    position: absolute;
    box-sizing: border-box;
    display: block;
    height: 2px;
    border-radius: 4px;
    background: currentColor
}

.gg-menu-left-alt::before {
    width: 16px;
    box-shadow: 0 12px 0
}

.gg-menu-left-alt::after {
    width: 10px;
    top: 6px
}
.gg-terminal {
 box-sizing: border-box;
 position: relative;
 display: block;
 transform: scale(var(--ggs,1));
 width: 24px;
 height: 20px;
 border: 2px solid;
 border-radius: 2px
}

.gg-terminal::after,
.gg-terminal::before {
 content: "";
 display: block;
 box-sizing: border-box;
 position: absolute
}

.gg-terminal::before {
 border-right: 2px solid;
 border-bottom: 2px solid;
 transform: rotate(-45deg);
 width: 6px;
 height: 6px;
 top: 5px;
 left: 3px
}

.gg-terminal::after {
 width: 4px;
 height: 2px;
 background: currentColor;
 top: 10px;
 left: 11px
} 
.gg-log-out {
 box-sizing: border-box;
 position: relative;
 display: block;
 width: 6px;
 height: 16px;
 border: 2px solid;
 transform: scale(var(--ggs,1));
 border-right: 0;
 border-top-left-radius: 2px;
 border-bottom-left-radius: 2px;
 margin-left: -10px
}

.gg-log-out::after,
.gg-log-out::before {
 content: "";
 display: block;
 box-sizing: border-box;
 position: absolute
}

.gg-log-out::after {
 border-top: 2px solid;
 border-left: 2px solid;
 transform: rotate(-45deg);
 width: 8px;
 height: 8px;
 left: 4px;
 bottom: 2px
}

.gg-log-out::before {
 border-radius: 3px;
 width: 10px;
 height: 2px;
 background: currentColor;
 left: 5px;
 bottom: 5px
} 
.gg-search {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs,1));
    width: 16px;
    height: 16px;
    border: 2px solid;
    border-radius: 100%;
    margin-left: -4px;
    margin-top: -4px
}

.gg-search::after {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    width: 2px;
    height: 8px;
    background: currentColor;
    transform: rotate(-45deg);
    top: 10px;
    left: 12px
}
</style>
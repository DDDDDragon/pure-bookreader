/* eslint-disable no-unused-vars */
const fs = require("fs-extra")
const path = require("path")


function createTip(message)
{
    var tips = document.getElementsByClassName("tip")
    console.log("adadadadad")
    for(var i of tips) 
    {
        i.remove()
    }
    var tip = document.createElement("div")
    tip.classList.add("tip")
    var span = document.createElement("span")
    span.innerHTML = message
    var span2 = document.createElement("span")
    span2.classList.add("icon")
    var ii = document.createElement("i")
    ii.classList.add("gg-danger")
    span2.appendChild(ii)
    tip.appendChild(span2)
    
    var close = document.createElement("span")
    close.classList.add("icon")
    close.id = "close"
    close.onclick = function(){
        close.parentNode.remove()
    }
    var ii2 = document.createElement("i")
    ii2.classList.add("gg-close")
    close.appendChild(ii2)
    tip.appendChild(close)
    tip.appendChild(span)
    document.body.appendChild(tip)
}
// eslint-disable-next-line no-unused-vars
function createMod()
{
    var tmlPath, modName, displayName, authorName
    tmlPath = document.getElementById("tmlPath").value
    console.log(tmlPath)
    if(tmlPath == "")
    {
        createTip("请输入tModLoader路径")
        return
    }
    modName = document.getElementById("modName").value
    displayName = document.getElementById("modDName").value
    authorName = document.getElementById("authorName").value
    var modSourcesPath = path.join(tmlPath, "ModSources")
    if(!fs.existsSync(modSourcesPath))
    {
        createTip("tModLoader路径不正确")
        return
    }
    var modPath = path.join(modSourcesPath, modName)

    if(!fs.existsSync(modPath))
    {
        fs.mkdirSync(modPath);
        fs.appendFileSync(path.join(modPath, "build.txt"), "displayName = " + displayName + "\n", {});
        fs.appendFileSync(path.join(modPath, "build.txt"), "author = " + authorName + "\n");
        fs.appendFileSync(path.join(modPath, "build.txt"), "version = 0.1");
        fs.appendFileSync(path.join(modPath, "description.txt"), displayName + " is a pretty cool mod, it does...this. Modify this file with a description of your mod");
        fs.appendFileSync(path.join(modPath, modName + ".cs"), "using Terraria.ModLoader;\n\n");
        fs.appendFileSync(path.join(modPath, modName + ".cs"), "namespace " + modName + "\n");
        fs.appendFileSync(path.join(modPath, modName + ".cs"), "{\n");
        fs.appendFileSync(path.join(modPath, modName + ".cs"), "    public class " + modName + " : Mod\n");
        fs.appendFileSync(path.join(modPath, modName + ".cs"), "    {\n");
        fs.appendFileSync(path.join(modPath, modName + ".cs"), "    }\n");
        fs.appendFileSync(path.join(modPath, modName + ".cs"), "}");
        fs.appendFileSync(path.join(modPath, modName + ".csproj"), "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n");
        fs.appendFileSync(path.join(modPath, modName + ".csproj"), "<Project Sdk=\"Microsoft.NET.Sdk\">\n");
        fs.appendFileSync(path.join(modPath, modName + ".csproj"), "  <Import Project=\"..\\tModLoader.targets\" />\n");
        fs.appendFileSync(path.join(modPath, modName + ".csproj"), "  <PropertyGroup>\n");
        fs.appendFileSync(path.join(modPath, modName + ".csproj"), "    <AssemblyName>ab</AssemblyName>\n");
        fs.appendFileSync(path.join(modPath, modName + ".csproj"), "    <TargetFramework>net6.0</TargetFramework>\n");
        fs.appendFileSync(path.join(modPath, modName + ".csproj"), "    <PlatformTarget>AnyCPU</PlatformTarget>\n");
        fs.appendFileSync(path.join(modPath, modName + ".csproj"), "    <LangVersion>latest</LangVersion>\n");
        fs.appendFileSync(path.join(modPath, modName + ".csproj"), "  </PropertyGroup>\n");
        fs.appendFileSync(path.join(modPath, modName + ".csproj"), "  <ItemGroup>\n");
        fs.appendFileSync(path.join(modPath, modName + ".csproj"), "    <PackageReference Include=\"tModLoader.CodeAssist\" Version=\"0.1.*\" />\n");
        fs.appendFileSync(path.join(modPath, modName + ".csproj"), "  </ItemGroup>\n");
        fs.appendFileSync(path.join(modPath, modName + ".csproj"), "</Project>");
        fs.mkdirSync(path.join(modPath, "Properties"));
        fs.appendFileSync(path.join(modPath, "Properties", "launchSettings.json"), "{\n");
        fs.appendFileSync(path.join(modPath, "Properties", "launchSettings.json"), "  \"profiles\": {\n");
        fs.appendFileSync(path.join(modPath, "Properties", "launchSettings.json"), "    \"Terraria\": {\n");
        fs.appendFileSync(path.join(modPath, "Properties", "launchSettings.json"), "      \"commandName\": \"Executable\",\n");
        fs.appendFileSync(path.join(modPath, "Properties", "launchSettings.json"), "      \"executablePath\": \"dotnet\",\n");
        fs.appendFileSync(path.join(modPath, "Properties", "launchSettings.json"), "      \"commandLineArgs\": \"$(tMLPath)\",\n");
        fs.appendFileSync(path.join(modPath, "Properties", "launchSettings.json"), "      \"workingDirectory\": \"$(tMLSteamPath)\"\n");
        fs.appendFileSync(path.join(modPath, "Properties", "launchSettings.json"), "    },\n");
        fs.appendFileSync(path.join(modPath, "Properties", "launchSettings.json"), "    \"TerrariaServer\": {\n");
        fs.appendFileSync(path.join(modPath, "Properties", "launchSettings.json"), "      \"commandName\": \"Executable\",\n");
        fs.appendFileSync(path.join(modPath, "Properties", "launchSettings.json"), "      \"executablePath\": \"dotnet\",\n");
        fs.appendFileSync(path.join(modPath, "Properties", "launchSettings.json"), "      \"commandLineArgs\": \"$(tMLServerPath)\",\n");
        fs.appendFileSync(path.join(modPath, "Properties", "launchSettings.json"), "      \"workingDirectory\": \"$(tMLSteamPath)\"\n");
        fs.appendFileSync(path.join(modPath, "Properties", "launchSettings.json"), "    }\n");
        fs.appendFileSync(path.join(modPath, "Properties", "launchSettings.json"), "  }\n");
        fs.appendFileSync(path.join(modPath, "Properties", "launchSettings.json"), "}");
        fs.mkdirSync(path.join(modPath, ".vscode"));
        fs.appendFileSync(path.join(modPath, ".vscode", "launch.json"), " ");
        fs.appendFileSync(path.join(modPath, ".vscode", "tasks.json"), "{");
        fs.appendFileSync(path.join(modPath, ".vscode", "tasks.json"), "    \"version\": \"2.0.0\",\n");
        fs.appendFileSync(path.join(modPath, ".vscode", "tasks.json"), "    \"tasks\": [\n");
        fs.appendFileSync(path.join(modPath, ".vscode", "tasks.json"), "        {\n");
        fs.appendFileSync(path.join(modPath, ".vscode", "tasks.json"), "            \"label\": \"build\",\n");
        fs.appendFileSync(path.join(modPath, ".vscode", "tasks.json"), "            \"type\": \"shell\",\n");
        fs.appendFileSync(path.join(modPath, ".vscode", "tasks.json"), "            \"command\": \"msbuild\",\n");
        fs.appendFileSync(path.join(modPath, ".vscode", "tasks.json"), "            \"args\": [\n");
        fs.appendFileSync(path.join(modPath, ".vscode", "tasks.json"), "                \"property:GenerateFullPaths=true\",\n");
        fs.appendFileSync(path.join(modPath, ".vscode", "tasks.json"), "                \"/t:build\",\n");
        fs.appendFileSync(path.join(modPath, ".vscode", "tasks.json"), "                \"/consoleloggerparameters:NoSummary\"\n");
        fs.appendFileSync(path.join(modPath, ".vscode", "tasks.json"), "            ],\n");
        fs.appendFileSync(path.join(modPath, ".vscode", "tasks.json"), "            \"group\": \"build\",\n");
        fs.appendFileSync(path.join(modPath, ".vscode", "tasks.json"), "            \"presentation\": {\n");
        fs.appendFileSync(path.join(modPath, ".vscode", "tasks.json"), "                \"reveal\": \"silent\"\n");
        fs.appendFileSync(path.join(modPath, ".vscode", "tasks.json"), "            },\n");
        fs.appendFileSync(path.join(modPath, ".vscode", "tasks.json"), "            \"problemMatcher\": \"msCompile\"\n");
        fs.appendFileSync(path.join(modPath, ".vscode", "tasks.json"), "        }\n");
        fs.appendFileSync(path.join(modPath, ".vscode", "tasks.json"), "    ]\n");
        fs.appendFileSync(path.join(modPath, ".vscode", "tasks.json"), "}");    
        createTip("Mod创建成功")
    }
    else
    {
        createTip("已存在此名称的Mod")
    }
}

async function fetchGithub(command, name)
{
    await fetch("https://api.github.com/repos/DDDDDragon/UnderTheSky/contents/Books")
    .then(response => response.json())
    .then(data => {
        var json = JSON.parse(JSON.stringify(data))
        if(command == "len")
        {
            return json.length
        }
        if(command == "get")
        {
            var target = json.find(result => result.name == name)
            console.log(target)
        }
    })
}

async function onclickFs49()
{
    var frame = document.getElementById("iframe")
    frame.src = "https://fs49.org/sample-page/"
    localStorage.setItem("page", "fs49");
    var ol = document.getElementById("content")
    ol.innerHTML = ""
    ol.appendChild(createH1Link("第一部分——入门", 
    [
        "Mod制作准备",
        "TML安装",
        "第一个Mod",
        "物品属性修改",
        "第一个远程武器——枪",
        "Mod基本信息修改",
        "自定义翅膀和饰品",
        "自定义套装和Buff",
        "给物品加特技"
    ],
    [
        "https://fs49.org/%e8%a3%99%e4%b8%ad%e4%b8%96%e7%95%8c-%e5%ba%8f%e8%a8%80/",
        "https://fs49.org/2020/03/05/tmodloader%e4%bb%8b%e7%bb%8d%e4%b8%8e%e5%ae%89%e8%a3%85/",
        "https://fs49.org/2020/03/06/%e7%ac%ac%e4%b8%80%e4%b8%aamod/",
        "https://fs49.org/2020/03/07/%e7%89%a9%e5%93%81%e5%b1%9e%e6%80%a7%e4%bf%ae%e6%94%b9/",
		"https://fs49.org/2020/03/09/%e7%ac%ac%e4%b8%80%e4%b8%aa%e8%bf%9c%e7%a8%8b%e6%ad%a6%e5%99%a8-%e6%89%8b%e6%9e%aa/",
		"https://fs49.org/2020/03/09/mod%e5%9f%ba%e6%9c%ac%e4%bf%a1%e6%81%af/",
		"https://fs49.org/2020/03/11/%e8%87%aa%e5%ae%9a%e4%b9%89%e9%a5%b0%e5%93%81%e5%92%8c%e7%bf%85%e8%86%80/",
		"https://fs49.org/2020/03/12/%e8%87%aa%e5%ae%9a%e4%b9%89%e5%a5%97%e8%a3%85%e5%92%8cbuff/",
		"https://fs49.org/2020/03/13/%e7%bb%99%e7%89%a9%e5%93%81%e5%8a%a0%e7%89%b9%e6%8a%80/"
    ]))
    ol.appendChild(createH1Link("第二部分——Mod基础",
    [
        "第二部分介绍",
        "C#基础知识——基本数据类型，条件，循环",
        "C#基础知识——函数、 类、方法与继承",
        "弹幕基础——弹幕&向量",
        "弹幕基础——三角函数",
        "弹幕基础——计时器、插值、其他",
        "源码参考",
        "*AI与状态机"
    ],
    [
        "https://fs49.org/2020/03/15/%e7%ac%ac%e4%ba%8c%e9%83%a8%e5%88%86%e4%bb%8b%e7%bb%8d/",
		"https://fs49.org/2020/03/16/c%e5%9f%ba%e7%a1%80%e7%9f%a5%e8%af%86%ef%bc%881%ef%bc%89/",
		"https://fs49.org/2020/03/17/c%e5%9f%ba%e7%a1%80%e7%9f%a5%e8%af%86%ef%bc%882%ef%bc%89/",
        "https://fs49.org/2020/03/21/%e5%bc%b9%e5%b9%95%e5%90%91%e9%87%8f%e5%9f%ba%e7%a1%80/",
		"https://fs49.org/2020/03/22/%e5%bc%b9%e5%b9%95%e4%b8%89%e8%a7%92%e5%87%bd%e6%95%b0%e5%9f%ba%e7%a1%80/",
		"https://fs49.org/2020/03/28/%e5%bc%b9%e5%b9%95%e5%9f%ba%e7%a1%80-%e8%ae%a1%e6%97%b6%e5%99%a8%e3%80%81%e6%8f%92%e5%80%bc%e4%bb%a5%e5%8f%8a%e5%85%b6%e4%bb%96/",
		"https://fs49.org/2020/03/30/%e6%ba%90%e7%a0%81%e5%8f%82%e8%80%83/",
        "https://fs49.org/2020/03/31/ai%e7%bc%96%e5%86%99%e4%b8%8e%e7%8a%b6%e6%80%81%e6%9c%ba/",
    ]))
    ol.appendChild(createH1Link("第三部分——游戏机制与实战详解", 
    [
        "AI运动指南",
        "魔法导弹类武器",
        "双用途武器",
        "中学生:城镇NPC",
        "Steve_666:从零开始的NPC教程",
        "Korate: 从零开始的简单坐骑",
        "Kid:物块属性讲解一:基本物块",
        "简单绘制",
        "对数螺线:Draw用法与帧图绘制",
        "TeddyTerri:使用绘制来实现影子拖尾",
        "白银:UI基础",
        "白银:进度条",
        "白银:魔改原版函数之On",
        "Cyril:IEntitySource",
        "小天使:Global系列",
        "小天使:1.4物品"
    ],
    [
        "https://fs49.org/2020/06/01/%e6%b8%b8%e6%88%8fai%e8%bf%90%e5%8a%a8%e6%8c%87%e5%8d%97/",
        "https://fs49.org/2022/01/22/%e9%ad%94%e6%b3%95%e5%af%bc%e5%bc%b9%e7%b1%bb%e6%ad%a6%e5%99%a8/",
        "https://fs49.org/2022/07/12/%e5%8f%8c%e7%94%a8%e9%80%94%e6%ad%a6%e5%99%a8/",
        "https://fs49.org/2020/03/31/%e5%88%9b%e5%bb%ba%e4%b8%80%e4%b8%aa%e5%9f%ba%e7%a1%80%e5%9f%8e%e9%95%87npc/",
        "https://fs49.org/2022/01/18/%e4%bb%8e%e9%9b%b6%e5%bc%80%e5%a7%8b%e7%9a%84npc%e7%bc%96%e5%86%99/",
        "https://fs49.org/2022/01/17/%e4%bb%8e%e9%9b%b6%e5%bc%80%e5%a7%8b%e7%9a%84%e7%ae%80%e5%8d%95%e5%9d%90%e9%aa%91/",
        "https://fs49.org/2022/08/26/kid%ef%bc%9a%e7%89%a9%e5%9d%97%e5%b1%9e%e6%80%a7%e8%ae%b2%e8%a7%a3%e4%b8%80%ef%bc%9a%e5%9f%ba%e6%9c%ac%e7%89%a9%e5%9d%97/",
        "https://fs49.org/2021/12/22/%e7%ae%80%e5%8d%95%e7%bb%98%e5%88%b6/",
        "https://fs49.org/2021/12/26/%e5%af%b9%e6%95%b0%e8%9e%ba%e7%ba%bf-%e5%b8%a7%e5%9b%be%e7%bb%98%e5%88%b6%e4%b8%8e%e7%94%a8%e7%bb%98%e5%88%b6%e6%95%b4%e5%87%ba%e7%9a%84%e8%8a%b1%e6%b4%bb/",
        "https://fs49.org/2022/03/28/teddyterri%ef%bc%9a%e4%bd%bf%e7%94%a8%e7%bb%98%e5%88%b6%e6%9d%a5%e5%ae%9e%e7%8e%b0%e5%bd%b1%e5%ad%90%e6%8b%96%e5%b0%be/",
        "https://fs49.org/2020/03/27/ui%e7%9a%84%e5%88%b6%e4%bd%9c/",
        "https://fs49.org/2020/03/31/ui%e9%83%a8%e4%bb%b6%e7%a4%ba%e4%be%8b%ef%bc%9a%e8%bf%9b%e5%ba%a6%e6%9d%a1/",
        "https://fs49.org/2021/10/28/on%e7%9a%84%e5%8a%9f%e8%83%bd%e4%b8%8e%e5%ba%94%e7%94%a8/",
        "https://fs49.org/2022/05/03/1-4-%e7%94%9f%e6%88%90%e6%ba%90%e4%bf%a1%e6%81%afientitysource%e7%9a%84%e7%94%a8%e6%b3%95/",
        "https://fs49.org/2022/06/27/global%e7%b3%bb%e5%88%97%e6%95%99%e7%a8%8b/",
        "https://fs49.org/2022/04/18/%e5%b0%8f%e5%a4%a9%e4%bd%bf-%e8%bd%ac1-4%e6%95%99%e7%a8%8b-1-4tml%e7%9a%84%e6%9b%b4%e6%94%b9%e4%b8%8e%e5%88%b6%e4%bd%9c1-4%e7%9a%84%e7%89%a9%e5%93%81/"
    ]))
    ol.appendChild(createH1Link("第四部分——游戏编程高级知识", 
    [
        "Shader简介",
        "联机同步(一)基础概念",
        "龙舞: 认识IL",
        "整数和浮点数的表示"
    ],
    [
        "https://fs49.org/2020/04/09/shader%e7%ae%80%e4%bb%8b/",
        "https://fs49.org/2020/07/13/%e8%81%94%e6%9c%ba%e5%90%8c%e6%ad%a5%e5%9f%ba%e6%9c%ac%e6%a6%82%e5%bf%b5/",
        "https://fs49.org/2022/02/08/il%e5%9f%ba%e7%a1%80%e6%95%99%e7%a8%8b%e2%91%a0-%e8%ae%a4%e8%af%86il%e5%92%8cil%e8%a1%a5%e4%b8%81%e7%bc%96%e5%86%99%e6%96%b9%e5%bc%8f/",
        "https://fs49.org/2021/05/01/%e6%95%b4%e6%95%b0%e5%92%8c%e6%b5%ae%e7%82%b9%e6%95%b0%e7%9a%84%e8%a1%a8%e7%a4%ba/"
    ]))
    ol.appendChild(createH1Link("第五部分——其他",
    [
        "随机数生成入门",
        "预判问题研究",
        "生成树研究",
        "魔改进阶——Mod联动"
    ],
    [
        "https://fs49.org/2020/03/06/%e9%9a%8f%e6%9c%ba%e6%95%b0%e7%94%9f%e6%88%90%e5%85%a5%e9%97%a8/",
        "https://fs49.org/2020/03/23/%e9%a2%84%e5%88%a4%e9%97%ae%e9%a2%98/",
        "https://fs49.org/2020/04/01/%e7%94%9f%e6%88%90%e6%a0%91%e7%a0%94%e7%a9%b6/",
        "https://fs49.org/2020/05/30/%e9%ad%94%e6%94%b9%e8%bf%9b%e9%98%b6-mod%e8%81%94%e5%8a%a8/"
    ]))
}

async function onclickRunoob()
{
    var frame = document.getElementById("iframe")
    frame.src = "https://www.runoob.com/csharp/csharp-tutorial.html"
    localStorage.setItem("page", "runoob")
    var ol = document.getElementById("content")
    ol.innerHTML = ""
    ol.appendChild(createH1Link("C#教程", 
    [
        "C# 简介",
        "C# 环境",
        "C# 程序结构",
        "C# 基本语法",
        "C# 数据类型",
        "C# 类型转换",
        "C# 变量",
        "C# 常量",
        "C# 运算符",
        "C# 判断",
        "C# 循环",
        "C# 封装",
        "C# 方法",
        "C# 可空类型",
        "C# 数组(Array)",
        "C# 字符串(String)",
        "C# 结构体(Struct)",
        "C# 枚举(Enum)",
        "C# 类(Class)",
        "C# 继承",
        "C# 多态性",
        "C# 运算符重载",
        "C# 接口(Interface)",
        "C# 命名空间(Namespace)",
        "C# 预处理器指令",
        "C# 正则表达式",
        "C# 异常处理",
        "C# 文件的输入与输出"
    ],
    [
        "https://www.runoob.com//csharp/csharp-intro.html",
		"https://www.runoob.com//csharp/csharp-environment-setup.html",
		"https://www.runoob.com//csharp/csharp-program-structure.html",
		"https://www.runoob.com//csharp/csharp-basic-syntax.html",
		"https://www.runoob.com//csharp/csharp-data-types.html",
		"https://www.runoob.com//csharp/csharp-type-conversion.html",
		"https://www.runoob.com//csharp/csharp-variables.html",
		"https://www.runoob.com//csharp/csharp-constants.html",
		"https://www.runoob.com//csharp/csharp-operators.html",
		"https://www.runoob.com//csharp/csharp-decision.html",
		"https://www.runoob.com//csharp/csharp-loops.html",
		"https://www.runoob.com//csharp/csharp-encapsulation.html",
		"https://www.runoob.com//csharp/csharp-methods.html",
		"https://www.runoob.com//csharp/csharp-nullable.html",
		"https://www.runoob.com//csharp/csharp-array.html",
		"https://www.runoob.com//csharp/csharp-string.html",
		"https://www.runoob.com//csharp/csharp-struct.html",
		"https://www.runoob.com//csharp/csharp-enum.html",
		"https://www.runoob.com//csharp/csharp-class.html",
		"https://www.runoob.com//csharp/csharp-inheritance.html",
		"https://www.runoob.com//csharp/csharp-polymorphism.html",
		"https://www.runoob.com//csharp/csharp-operator-overloading.html",
		"https://www.runoob.com//csharp/csharp-interface.html",
		"https://www.runoob.com//csharp/csharp-namespace.html",
		"https://www.runoob.com//csharp/csharp-preprocessor-directives.html",
		"https://www.runoob.com//csharp/csharp-regular-expressions.html",
		"https://www.runoob.com//csharp/csharp-exception-handling.html",
		"https://www.runoob.com//csharp/csharp-file-io.html"
    ]))
    ol.appendChild(createH1Link("C#高级教程",
    [
        "C# 特性(Attribute)",
        "C# 反射(Reflection)",
        "C# 属性(Property)",
        "C# 索引器(Indexer)",
        "C# 委托(Delegate)",
        "C# 事件(Event)",
        "C# 集合(Collection)",
        "C# 泛型(Generic)",
        "C# 匿名方法",
        "C# 不安全代码",
        "C# 多线程",
        "C# 语言测验"
    ],
    [
        "https://www.runoob.com//csharp/csharp-reflection.html",
		"https://www.runoob.com//csharp/csharp-property.html",
		"https://www.runoob.com//csharp/csharp-indexer.html",
		"https://www.runoob.com//csharp/csharp-delegate.html",
		"https://www.runoob.com//csharp/csharp-event.html",
		"https://www.runoob.com//csharp/csharp-collection.html",
		"https://www.runoob.com//csharp/csharp-generic.html",
		"https://www.runoob.com//csharp/csharp-anonymous-methods.html",
		"https://www.runoob.com//csharp/csharp-unsafe-codes.html",
		"https://www.runoob.com//csharp/csharp-multithreading.html",
		"https://www.runoob.com//csharp/csharp-quiz.html"
    ]))
}

function createH1Link(name, childs, childsLink)
{
    var details = document.createElement("details")
    var summary = document.createElement("summary")
    summary.classList.add("h1Link");
    summary.innerHTML = name;
    details.append(summary);
    if(childs.length > 0)
    {
        var ol = document.createElement("ol")
        ol.style.display = "flex"
        ol.style.flexDirection = "column"
        for(let i in childs)
        {
            var a = document.createElement("a")
            a.innerHTML = childs[i]
            a.classList.add("conItem")
            a.style.borderRadius = "5px"
            a.style.marginBottom = "2px"
            a.style.fontSize = "12px"
            //a.style.width = (18 * childs[i].length + 10).toString() + "px"
            a.onclick = function(){
                onclickA(childsLink[i])
            }
            ol.append(a)
        }
        details.append(ol)
    }
    return details;
}

function onclickA(link)
{
    var frame = document.getElementById("iframe")
    frame.src = link
}

function onclickSearch(name)
{
    document.getElementById("modCreater").style.display = "none"
    switch(name) {
        case "fs49" :
            onclickFs49()
            break
        case "runoob" :
            onclickRunoob()
            break
    }
}

function Search() {
    var input, filter, ul
    input = document.getElementById("search")
    filter = input.value
    ul = document.getElementById("myUL")
    if(filter == "")
    {
        ul.innerHTML = ""
        return
    }    
    for(let i of DocOrigin)
    {
        if(i.indexOf(filter) > -1)
        {
            if(ul.childElementCount > 0)
            {
                for(let item of ul.childNodes)
                {
                    if(item.firstChild.innerText == i)
                    {
                        ul.removeChild(item)
                    }
                }
            }
            var a = document.createElement("a")
            a.innerText = i
            a.childElementCount
            a.onclick = function(){
                onclickSearch(i)
            }
            var child = document.createElement("li")
            child.appendChild(a)
            ul.appendChild(child)
        }
        else
        {
            if(ul.childElementCount > 0)
            {
                for(let item of ul.childNodes)
                {
                    if(item.firstChild.innerText == i) 
                    {
                        ul.removeChild(item)
                    }
                }
            }
        }
    }
}

const DocOrigin = ["fs49", "runoob"]

window.onload = function(){
    //fetchGithub("get", "README.md");
    //var fs49 = document.getElementById("fs49")
    //fs49.onclick = onclickFs49
    //var runoob = document.getElementById("runoob")
    //runoob.onclick = onclickRunoob
    localStorage.setItem("page", "none")
    var search = document.getElementById("search")
    search.oninput = Search
    var modCreater = document.getElementById("modCreaterBtn")
    modCreater.onclick = ModCreater
    var create = document.getElementById("createMod")
    document.getElementById("modCreater").style.display = "none"
    create.onclick = function(){
        createMod()
    }
    window.addEventListener("mousemove", () => {
        if(localStorage.getItem("page") == "modCreater")
        {
            document.getElementById("iframe").style.display = "none"
        }
        else
        {
            document.getElementById("iframe").style.display = ""
        }
    })
}

function ModCreater()
{
    localStorage.setItem("page", "modCreater")
    document.getElementById("modCreater").style.display = ""
}

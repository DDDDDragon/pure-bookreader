/* eslint-disable no-unused-vars */
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
    localStorage.setItem("docName", "fs49");
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
            a.style.fontSize = "16px"
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


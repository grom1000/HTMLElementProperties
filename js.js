var context = document.querySelector(".element"); //Берём расположение элемента по селектору класса//

// 1. HTMLElement.accessKey

/* Задаётся как атрибут тэга. Даёт возможность быстро перейти к элементу с помощью комбинации клавиш.
Значение атрибута состоит из одного печатного символа (в том числе спец. символы, акценты и другие, которые можно написать с клавиатуры).
Пример: <p class="element" accesskey="h"></p>. в Chrome работает по вызову Alt + h */

// 2. HTMLElement.accessKeyLabel

/* Доступен только для чтения.
Выводит значение атрибута HTMLElement.accessKey (номер 1)
Пример var result = context.accessKeyLabel;
console.log(result)
РАБОТАЕТ ТОЛЬКО В FIREFOX */

// 3. HTMLElement.contentEditable

/* Позволяет редактировать страницу сайта прямо в браузере(не в консоли, а в окне браузера)
Имеет 3 значения: 1 .true или пустая строка, 2. false, 3. inherit
Может быть задан как атрибут тэга, например: <p class="element" contenteditable="true"></p> или же в js, например:
context.contentEditable = 'false' */

// 4. HTMLElement.isContentEditable

/* Доступен только для чтения.
Выводит значение атрибута HTMLElement.contentEditable (номер 3)
Пример:
context.contentEditable = 'false'
var result = context.isContentEditable;
console.log(result) */

// 5. HTMLElement.contextMenu

/* Позволяет выводить контекстное меню любого элемента, т.е. при нажатии правой кнонки мыши на элементе, среди всплывающих вариантов типа копировать, вставить и т.д. появляются варианты из указанного контестного меню в элементе.
Пример:
<div contextmenu="mymenu">
<p>Right-click inside this box to see the context menu!

<menu type="context" id="mymenu">
    <menuitem label="Refresh" onclick="window.location.reload();" icon="ico_reload.png"></menuitem>
    <menu label="Share on...">
    <menuitem label="Twitter" icon="ico_twitter.png" onclick="window.open('//twitter.com/intent/tweet?text=' + window.location.href);"></menuitem>
    <menuitem label="Facebook" icon="ico_facebook.png" onclick="window.open('//facebook.com/sharer/sharer.php?u=' + window.location.href);"></menuitem>
    </menu>
    <menuitem label="Email This Page" onclick="window.location='mailto:?body='+window.location.href;"></menuitem>
</menu>

</div>
При нажатии на правую кнопку мыши появяться также такие варианты как: "Refresh", "Share on" и "Email This Page"
РАБОТАЕТ ТОЛЬКО В FIREFOX
*/

// 6. HTMLElement.dataset

/* Записывается как атрибут элемента. Любой атрибут, чьё имя начинается с data-, является data-* атрибутом. Используется для хранения дополнительной информации без визуального представления.
Пример:
<article
    id="electriccars"
    data-columns="3"
    data-index-number="12314"
    data-parent="cars">
...
</article>
Доступ в js:
1. Через getElementById с параметром, равным полному имени атрибута
2. Используя объект dataset. Чтобы получить data-атрибут можно взять свойство объекта dataset с именем, равным части имени атрибута после data- (дефисы в имени преобразуются в camelCase).
Пример:
var article = document.getElementById('electriccars');

article.dataset.columns // "3"
article.dataset.indexNumber // "12314"
article.dataset.parent // "cars"

Каждое свойство является строкой и может быть прочитано и записано. В приведённом выше примере выполнение кода article.dataset.columns = 5 приведёт к тому, что новое значение атрибута станет равным "5".

Доступ в CSS:

Например, чтобы показать родительские данные:
article::before {
    content: attr(data-parent);
}
Отобразит строку "cars"

Пример с изменением цвета:
article[data-columns='3']{
    background-color: red;
}
article[data-columns='4']{
    background-color: green;
}

Data-аттрибуты также могут использоваться для хранения информации, которая постоянно изменяется, например, счёт в игре.

Недостатки:
1. В некоторых случаях невозможность доступа к информации
2. Поисковые роботы не индексируют данные
3. Поддерживается последними версиями браузеров
4. Dataset медленнее чем getAtribute и ещё медленее чем данные в хранилище данных js
*/

// 6. HTMLElement.dir

/* Получает или задает направленность написания текста содержимого текущего элемента.
Может быть задано в атрибуте, например:
<p class="element" dir="rtl">qwerty</p>
или же в js, например:
context.dir = "ltr"
Возможные значения:
ltr - слева направо,
rtl - справо налево,
auto - направление элемента должно быть определено на основе содержимого элемента.
*/

// 7. HTMLElement.draggable

/* Глобальный атрибут перетаскивания - это перечисляемый атрибут, который указывает, можно ли перетаскивать элемент с использованием собственного поведения браузера или API-интерфейса перетаскивания HTML.
может иметь следующие значения:
Пример: <p draggable="true"></p>
1. true - элемент можно перетаскивать
2. false - элемент нельзя перетаскивать */

// 8. HTMLElement.dropzone

/* Глобальный атрибут dropzone является перечисляемым атрбутом, указывающем, какие типы содержимого могут быть опущены в элементе, используя HTML Drag and Drop API.
Может иметь следующие значения:
1. copy, которая указывает что сброс создает копию перетаскиваемого элемента.
2. move, которое указывает, что перетаскиваемы элемент будет перемещен в новое местоположение.
3. link, которая создает ссылку на перетаскивамые данные.
Пример: <div dropzone="copy"></div> */

// document.getElementById("okButton")
//         .addEventListener("click", function() {
//   document.getElementById("welcome").hidden = true;
//   document.getElementById("awesome").hidden = false;
// }, false);

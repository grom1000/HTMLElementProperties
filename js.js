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

// 9. HTMLElement.hidden

/* Скрытый атрибут - является логическим атрибутом. Когда атрибут стоит в true - указывает что элемент более не актуален.
Браузеры не должны отоброжать элементы с атрибутом = false. Атрибут hidden также можно использовать, чтобы пользователь не видел элемент, 
пока не будет выполнено какое-либо другое условие (например, установка флажка и т.д.). Затем JavaScript может удалить скрытый атрибут и
сделать элемент видимым.
Пример:
var p = document.querrySelector('.p')
p.hidden = true - элемент виден на странице
p.hidden = false - элемент не виден на странице */

// 10. HTMLElement.itemScope - эксперементальное API

/* Когда указывается атрибут itemscope для элемента, создаётся новый элемент. Этот элемент состоит из группы пар и имя-значение.
Связанный атрибут itemtype используется для указания действительного URL-адреса словаря (такого как schema.org), который описывает
элемент и контекст его свойств. Связанные атрибуты itemprop выступают в роли описания этих самых свойств.
Пример:
<div itemscope itemtype="http://schema.org/Movie">
    <h1 itemprop="name">Avatar</h1>
    <span>Director: <span itemprop="director">James Cameron</span> (born August 16, 1954)</span>
    <span itemprop="genre">Science fiction</span>
    <a href="https://youtu.be/0AY1XIkX7bY" itemprop="trailer">Trailer</a>
</div>  
В данном примере itemtype приведёт на страницу schema.org с описанием спецификации, связанной с КИНО. Она выглядит следующим образом:
https://schema.org/Movie
О пользе микроразметки(микроданных, микроформате):
Микроразметка указывает поисковым роботам информацию, которую следует обрабатывать. Это позволяет добиться улучшенной релевантности
страницы для поисковых роботов и пользователей 
*/

// 11. HTMLElement.itemType - эксперементальное API

/* Только для чтения.
Определяет URL словаря, который будет использоваться для определения itemprops (свойства элемента) в структуре данных.
Itemprops используется для установки области, в которой в структуре данных будет активен словарь заданный itemtype.  */

// 12. HTMLElement.itemId - эксперементальное API

/* Глобальный атрибут itemid предоставляет микроданные в форме уникального глобального идентификатора элемента. Атрибут itemid может
быть указан только для элемента, который имеет атрибуты itemscope и itemtype. Кроме того, itemid может быть указан только для
элементов, которые обладают атрибутом itemscope, соответствующий тип элемента которого ссылается или определяет словарь, который
поддерживает глобальныее идентификаторы.
Точное значение глобального идентификатора типа элемента обеспечивается определением этого идентификатора в указанном словаре.
Словарь определяет, могут ли сосуществовать нескольео элементов с одним и тем же глобальным идентификатором, и, если да, то, как
обрабатываютс элементы с одним и тем же идентификатором.
Пример: 
Для словаря http://schema.org/Book, который описывает книги, в качестве идентификатора может служить ISBN — 
уникальный международный номер книжного издания.
*/

// 13. HTMLElement.itemRef - эксперементальное API

/* Только для чтения 
Иногда так получается, что данные, относящиеся к размечаемому объекту, находятся за пределами "корневого" элемента. Специально для этого
случая предусмотрен атрибут itemref. Он применяется к элементу с itemscope и содержит id другого DOM-элемента, где находятся остальные
свойства. Можно указать через пробел идентификаторы нескольких элементов.
Пример: из=за особенностей оформления страницы, автор и комментарии к статье физически не могут находиться внутри <article></article>
<div itemscope itemtype="http://schema.org/Person" itemprop="author" id="author">
    <a itemprop="name url" href="http://noteskeeper.ru/about/">
        Владимир Кузнецов
    </a>
    </div>

    <article itemscope itemtype="http://schema.org/Article" itemref="author comments">
    <header>
        <h2 itemprop="name">Особенности микроразметки microdata</h2>
        <link itemprop="url" href="http://noteskeeper.ru/758/">
    </header>
    <div itemprop="articleBody">
        ... статья ...
    </div>
    </article>

    <section id="comments">
    <div itemprop="comment" itemscope itemtype="http://schema.org/UserComments">
        <div itemprop="name commentText">
        ... комментарий 1 ...
        </div>
    </div>
    <div itemprop="comment" itemscope itemtype="http://schema.org/UserComments">
        <div itemprop="name commentText">
        ... комментарий 2 ...
        </div>
    </div>
    </section>
    Автор статьи и комментарии примешались в основной поток свойств статьи так как, если бы они были фактически размещены там.
    Порядок следования свойств не оказывает никакого влияния на структуру. Парсер просто перечисляет их по мерер обхода документа.
    Структура выглядит следующим образом:
    @type	Article
    name	            Особенности микроразметки microdata
    url	                http://noteskeeper.ru/758/
    articleBody	        ... статья ...
    author	
        @type	        Person
        @id	            https://search.google.com/structured-data/testing-tool/author
        name	        http://noteskeeper.ru/about/
        url             http://noteskeeper.ru/about/
    comments
        @type           UserComments – недопустимый тип целевого объекта для свойства comment.
	    commentText	    ... комментарий 1 ...
        name	..      ... комментарий 1 ...
    comments
        @type           UserComments – недопустимый тип целевого объекта для свойства comment.
	    commentText	    ... комментарий 1 ...
        name	..      ... комментарий 1 ...
*/

// 14. HTMLElement.itemProp - эксперементальное API

/* Только для чтения
Глобальный атрибут itemprop используется для добавления свойств к элементу. Каждый элемент HTML может иметь указанный атрибут itemprop, 
а itemprop состоит из пары имя-значение. Каждая пара имя-значение называется свойством, а группа из одного или нескольких свойств 
образует элемент. Значения свойства являются либо строкой, либо URL-адресом и могут быть связаны с очень широким диапазоном элементов, 
включая <audio>, <embed>, <iframe>, <img>, <link>, <object>, <source>, < дорожка> и <видео>. 
В приведенном ниже примере показан источник для набора элементов, размеченных с помощью атрибутов itemprop, а затем таблица, 
показывающая полученные структурированные данные.
<div itemscope itemtype="http://schema.org/Movie">
    <h1 itemprop="name">Avatar</h1>
    <span>Director:
        <span itemprop="director">James Cameron</span>
        (born August 16, 1954)</span>
    <span itemprop="genre">Science fiction</span>
    <a href="../movies/avatar-theatrical-trailer.html"
    itemprop="trailer">Trailer</a>
</div>
Результат:
itemprop	name	    Avatar
itemprop	director	James Cameron
itemprop	genre	    Science fiction
itemprop	trailer	    ../movies/avatar-theatrical-trailer.html

Свойства имеют значения, которые являются либо строкой, либо URL-адресом. Если строковое значение является URL-адресом, 
оно выражается с использованием элемента <a> и его атрибута href, элемента <img> и его атрибута src или других элементов, 
которые ссылаются на внешние ресурсы или встраивают их.
Пример строкового выражения:
<div itemscope>
    <p>My name is
    <span itemprop="name">Neil</span>.</p>
    <p>My band is called
    <span itemprop="band">Four Parts Water</span>.</p>
    <p>I am
    <span itemprop="nationality">British</span>.</p>
    </div>
Пример с изображением:
    <div itemscope>
        <img itemprop="image"
            src="google-logo.png" alt="Google">
    </div>
Для сложных значений можно применить значения value, а в itemprops применить понятный человеку язык
Пример:
    <h1 itemscope>
        <data itemprop="product-id"
            value="9678AOU879">The Instigator 2000</data>
    </h1>
Для метрик использовать min, max, value
    <div itemscope itemtype="http://schema.org/Product">
        <span itemprop="name">Panasonic White
            60L Refrigerator</span>
        <img src="panasonic-fridge-60l-white.jpg" alt="">
            <div itemprop="aggregateRating"
                itemscope
                itemtype="http://schema.org/AggregateRating">
            <meter itemprop="ratingValue"
                min=0 value=3.5 max=5>Rated 3.5/5</meter>
            (based on <span
                itemprop="reviewCount">11</span>
                customer reviews)
            </div>
    </div>
    Для даты использовать datetime:
    <div itemscope>
        I was born on <time
        itemprop="birthday"
        datetime="2009-05-10">May 10th 2009</time>
    </div>*/

// var q = document.querySelector('#q');
// q.className = 'color';

function pow(x, n) {
    if (n == 1) {
      return x;
    } else {
      return x * pow(x, n - 1);
    }
  }
  
  alert( pow(2, 3) ); // 8

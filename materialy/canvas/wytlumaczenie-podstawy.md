# Wprowadzenie do el. canvas

[[toc]]

## Wstęp do elementu canvas

### jak czytać dokumentację WebAPI

Naszym głównym źródłem wiedzy jest [MDN](https://developer.mozilla.org/), niestety większość materiałów jest tam po angielsku.

Są dwa rodzaje materiałów 

* Refrence - to jest klasyczna dokumentacja ze szczegółowym opisem narzędzi do naszej dyspozycji
* Guide - to są krótkie kursy jak kożystać z onych narzędzi.

Zazwyczaj nalepiej zobaczyć po pierwsze kurs (Guide) i gopiero kiedy nie będzie w nim odpowiedzi przejść do klasycznej dokumentacji (Refrence)

Są cztery kategorie treści
* CSS - jak pisać style CSS
* HTML - jak pisać dokumenty HTML
* JS - opis samego języka javascript, który jest w CtJS, przeglądarce, NodeJS i wielu innych miejscach
* WebAPI - opis API przeglądarki, czyli obiektów które pozwalają używać skryptów na stronie internetowej. Będą tu opisane zarówno obiekty document i window, jak i obiekty do obsługi elementów strony takich jak Canvas czy zdarzenia (Eventy) 

W tej lekcji będziemy korzystać głównie z kursu i dokumentacji do WebAPI.

#### Interface i dziedziczenie

Korzystając z dokumentacji możemy trafić na podobny obrazek:

![Przykład dziedziczenia](./dziedziczenie-canvas.jpg "Przykład dziedziczenia")

Oznacza on tylko tyle, że nasz obiekt jest bardziej rozbudowaną wersją innego, prostszego obiektu.

Np. HTMLCanvasElement umie wszystko to co podstawowe elementy (HTMLElement) ale ma też własne specjalne zdolności opisane na tej stronie. Podstawowe rzeczy nie są powtórzone ale możemy się ich dowiedzieć w dokumentacji obiektu HTMLElement.

### element canvas

Nas interesują głównie 3 rzeczy:

width i height oraz getContext('2d')

With i height to szerokość i wysokość płótna do rysowania. Żeby nasz obrazek wyglądał estetycznie, chcemy żeby wymiary płótna były równe wymiarom wlwmentu canvas. Dzięki temu obraz będzie ostry.

`getContext("nazwa_kontekstu")` pozwala nam pobrać kontekst do rysowania, czyli zestaw narzędzi. 

Mamy do wyboru róże konteksty bo nadają się do różnych zadań, do prostych rysunków 2d, najłatwiej użyć kontkestu `2d`.

W ramach ciekawostki, dostępne aktualnie opcje to:

* `2d` - kontekst do prostych rysnkó 2d
* `webgl`- kontekst do rysowania w 3d z pomocą OpenGL ES 2.0
* `webgl2` - kontekst do rysowania w 3d z pomocą OpenGL ES 3.0
* `bitmaprenderer` - kontekst do rysowania obrazków zapisanych w zmiennej, np pobranych z internetu w niestandardowy sposób


## Podstawy rysowania

### rysowanie kontekstowe

Rysowanie kontekstem jest odrobine nie intuicyjne.

Nie mówimy co chcemy narysować, ale zamiast tego podajemy kolejne instrukcje:

* wybierz kolor
* narysuj prostokąt

Oznacza to, że raz ustawiony kolor obowiązuje aż go zmienimy.

### style 

Jest kilka rzeczy które można ustawić przed rysowaniem żeby wpłynęły na wygląd rysunku.


Po pierwsze możemy zmieniać wygląd wypełnienia

* kolor i przeźroczystość -`fillStyle`


Po drugie możemy zmieniać linie i odbrysy:

* kolor i przeźroczystość - `strokeStyle = kolor` `hsl[a](H, S, L[, A]), rgba[]() albo po prostyu kolor`
* szerogość linii - `lineWidth = liczba` Sets the width of lines drawn in the future.
* kształt końca linii - `lineCap = typ zakończenia linii` typy to `butt`, `round` i `square`, domyślnie jest `butt`
* kształt łączenia linii - `lineJoin = typ łączenia linii` typy to `bevel`, `round` i `miter`, domyślnie jest `miter`

::: tip
* `miterLimit = value` Establishes a limit on the miter when two lines join at a sharp angle, to let you control how thick the junction becomes.
* `getLineDash()` Returns the current line dash pattern array containing an even number of non-negative numbers.
* `setLineDash(segments)` Sets the current line dash pattern.
* `lineDashOffset = value` Specifies where to start a dash array on a line.
:::

### rysowanie prostokątów

Można zrobić z prostokątem 3 rzeczy:

* narysować - `strokeRect(x, y, szerokość, wysokość)`
* wypełnić - `fillRect(x, y, szerokość, wysokość)`
* wygumkować - `clearRect(x, y, szerokość, wysokość)`

### czyszczenie płótna

Nie ma dpobrego sposobu, używamy więc `clearRect(x, y, szerokość, wysokość)` ustawonego na całe płótno.

### rysowanie linii

1. zgłaszamy, że będziemy rysowac linię `beginPath()`
2. wybieramy początek `moveTo(x, y)`
3. tworzymy linię dodając kolejne kawałki, na końcu jest instrukcja jak to robić
4. możemy zamknąć linię jeśli chcemy, `closePath()` naryszuje kreskę od miejsca gdzie skończyliśmy do początku linii (ustawionego funkcją moveTo)
5. możemy narysować linię metodą `stroke()` i/lub wypełnić kształt  który otacza metodą `fill()`

### dodawanie kawałków do linii

* dodanie prostego odcinka `lineTo(x, y)`
* dodanie kawałka okręgu `ctx.arc(x, y, radius, startAngle, endAngle [, counterclockwise]);`
  * 2 * Math.PI

### jak więc narysowac kółko?

```js
// środek koła
const x = 100
const y = 100

// promień
const r = 50

// kąt początkowy i końcowy
const startAngle = 0
const endAngle = 2 * Math.PI

beginPath()
arc(x,y,r,startAngle,endAngle)
stroke()
```

## Rysowanie funkcją

### Jak zrobić funkcję rysującą?

Musimy pamiętać żeby za każdym razem ustawić sposób rysowania, bo inna funkcja mogła zmienić go w międzyczasie.

To w sumie wszystko.

Zróbmy prosty przykład, funkcję rysującą koło o podanym srodku i promieniu 10 z jakimiś parametrami wyglądu

```js
function circle(ctx, x, y){
  ctx.lineWidth = 1;
  ctx.strokeColor = "blue";

  ctx.beginPath();
  ctx.arc(x,y,10,0,Math.PI*2);
  ctx.stroke();
}
```

### periodyczne renderowanie obiektów

Najprościej jest zorbić funkcję którą uruchomimy co jakiś czas i która narysuje wszystko.

Jak uruchamiać ją co jakiś czas?

#### Najprościej

`setInterval(nazwaFunkcji, liczba ms między uruchomieniami)`
(ms to liczba sekund razy 1000)

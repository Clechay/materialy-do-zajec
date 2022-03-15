# Ściągawka z canvasów i kontekstu 2d

[[toc]]

## HTMLCanvasElement

Nas interesują głównie 3 rzeczy:

width i height oraz getContext('2d')

With i height to szerokość i wysokość płótna do rysowania. Żeby nasz obrazek wyglądał estetycznie, chcemy żeby wymiary płótna były równe wymiarom wlwmentu canvas. Dzięki temu obraz będzie ostry.

## style 

Wygląd wypełnienia

* kolor i przeźroczystość -`fillStyle`


Linie i odbrysy:

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

## rysowanie

### rysowanie prostokątów

Można zrobić z prostokątem 3 rzeczy:

* narysować - `strokeRect(x, y, szerokość, wysokość)`
* wypełnić - `fillRect(x, y, szerokość, wysokość)`
* wygumkować - `clearRect(x, y, szerokość, wysokość)`

### czyszczenie płótna

Używamy `clearRect(x, y, szerokość, wysokość)` ustawonego na całe płótno.

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

## Gotowe funkcje rysjące

### Koło

```js
function circle(ctx, x, y){
  ctx.lineWidth = 1;
  ctx.strokeColor = "blue";

  ctx.beginPath();
  ctx.arc(x,y,10,0,Math.PI*2);
  ctx.stroke();
}
```

## periodyczne renderowanie obiektów

Najprościej jest zorbić funkcję którą uruchomimy co jakiś czas i która narysuje wszystko.

`setInterval(nazwaFunkcji, liczba ms między uruchomieniami)`
(ms to liczba sekund razy 1000)

# Podstawy rysowania

## rysowanie kontekstowe

Rysowanie kontekstem jest odrobine nie intuicyjne.

Nie mówimy co chcemy narysować, ale zamiast tego podajemy kolejne instrukcje:

* wybierz kolor
* narysuj prostokąt

Oznacza to, że raz ustawiony kolor obowiązuje aż go zmienimy.

## style 

Jest kilka rzeczy które można ustawić przed rysowaniem żeby wpłynęły na wygląd rysunku.


Po pierwsze możemy zmieniać wygląd wypełnienia

* kolor i przeźroczystość -`fillStyle`


Po drugie możemy zmieniać linie i odbrysy:

* kolor i przeźroczystość - `strokeStyle = kolor` `hsl[a](H, S, L[, A]), rgba[]() albo po prostyu kolor`
* szerogość linii - `lineWidth = liczba` Sets the width of lines drawn in the future.
* kształt końca linii - `lineCap = typ zakończenia linii` typy to `butt`, `round` i `square`, domyślnie jest `butt`
* kształt łączenia linii - `lineJoin = typ łączenia linii` typy to `bevel`, `round` i `miter`, domyślnie jest `miter`

## rysowanie prostokątów

Można zrobić z prostokątem 3 rzeczy:

* narysować - `strokeRect(x, y, szerokość, wysokość)`
* wypełnić - `fillRect(x, y, szerokość, wysokość)`
* wygumkować - `clearRect(x, y, szerokość, wysokość)`

## czyszczenie płótna

Nie ma dpobrego sposobu, używamy więc `clearRect(x, y, szerokość, wysokość)` ustawonego na całe płótno.

## rysowanie linii

1. zgłaszamy, że będziemy rysowac linię `beginPath()`
2. wybieramy początek `moveTo(x, y)`
3. tworzymy linię dodając kolejne kawałki, na końcu jest instrukcja jak to robić
4. możemy zamknąć linię jeśli chcemy, `closePath()` naryszuje kreskę od miejsca gdzie skończyliśmy do początku linii (ustawionego funkcją moveTo)
5. możemy narysować linię metodą `stroke()` i/lub wypełnić kształt  który otacza metodą `fill()`

## dodawanie kawałków do linii

* dodanie prostego odcinka `lineTo(x, y)`
* dodanie kawałka okręgu `ctx.arc(x, y, radius, startAngle, endAngle [, counterclockwise]);`
  * 2 * Math.PI

## jak więc narysowac kółko?

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


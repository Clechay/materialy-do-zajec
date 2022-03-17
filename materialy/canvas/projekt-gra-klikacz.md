# Projekt gry z elementem canvas

[[toc]]

## Przygotowujemy pliki

Będziemy potrzebować dwóch plików:

* `index.html` - nasz dokument html
* `script.js` - na nasze skrypty


::: details index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    canvas#screen{
      position: fixed;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
    }
  </style>
</head>
<body>
  <canvas id="screen"></canvas>
  <script src="./script.js"></script>
</body>
</html>
```
:::

::: details script.js
```js
/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.querySelector("canvas#screen");
const ctx = canvas.getContext("2d");

window.onresize = window.onload = ()=>{
  console.log("pierniczek")
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
```
:::

Można je zrobić w vscode lub na glitch.com

## Potrzebujemy móc narysować obiekt do kliknięcia, robimy funkcję

## Robimy listę obiektów

## Dodajemy obiekty do listy co jakiś czas

## Rysujemy wszystkie obiekty z listy

## Dodajemy rodzaje obiektów

## Dodajemy licznik punktów

## Dodajemy ekran początku gry

## Dodajemy ekran końca gry

## Dodajemy listę wysokich wyników
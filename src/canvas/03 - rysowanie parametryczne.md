# Rysowanie funkcją

## Jak zrobić funkcję rysującą?

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

## periodyczne renderowanie obiektów

Najprościej jest zorbić funkcję którą uruchomimy co jakiś czas i która narysuje wszystko.

Jak uruchamiać ją co jakiś czas?

### Najprościej

`setInterval(nazwaFunkcji, liczba ms między uruchomieniami)`
(ms to liczba sekund razy 1000)

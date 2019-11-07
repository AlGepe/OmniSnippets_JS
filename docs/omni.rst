 Table of Content
==============

1. [Create Value Select](#vselect)

**below needs reviewing**
1. [Create Value Setter](#vsetter)

**below need doing**
1. [Define functions](#def)
1. [Do Stuff on Initialisation](#oninit)
1. [Do Stuff on Result/Calculation](#onresult)

<a name=vselect></a>
## omni.createValueSelect(data)

Creates a new value select, the same as you can do on the BB by clicking and typing. 

Arguments
===========

#### `data`

When you use the fuction `omni.createValueSelect` you should provide data to it as an [Object](https://www.w3schools.com/js/js_object_definition.asp) containing each pair of key-value in the value select. The _key_ should be a unique identifier and the value should be an object containing the name and value of each item in the value select:

```javascript
var yourValueSelect = omni.createValueSelect({
  uniqueIdentifier1: { name: 'NameOfItem1', value: 'valueOfItem1' },  
  uniqueIdentifier2: { name: 'NameOfItem2', value: 'valueOfItem2' },
  // Add as many items as you need...
});
```


| Name    | Type   | Description                               | Required |
| ------- | ------ | ----------------------------------------- | -------- |
| `name`  | string | name to be displayed in the calculator    | Yes      |
| `value` | string | value used internally in the calculations | Yes      |

### Example

Let's look now at an example of how you would use `omni.createValueSelect` to create a value select with pairs of Country-Life expectancy:

```javascript
// New value select would be stored in the variable lifeExpectancySelect
var lifeExpectancySelect = omni.createValueSelect({
  PL: { name: 'Poland', value: '77.4' },
  US: { name: 'United States', value: '79.68' }
});
```
For completeness, this is how you would use it later on, find more details about `omni.onInit(callback)` check out the [dedicated section](#oninit)
```javascript
omni.onInit(function(ctx) {
  // We bind it to the variable Life_expectancy_country for usage in the calculator
  ctx.bindValueSelect(lifeExpectancySelect, 'Life_expectancy_country');
});
```

<a name=vsetter></a>
## omni.createValueSetter(variableName, data, options = {})

This function creates a value setter in much the same way that you can do by using the Omni tool: https://bb.omnicalculator.com/#/tools.

```javascript
omni.createValueSetter('nameOfVariable', DATA, { defaultUid: $defaultValueSetterUid });
```

### Argumenty

#### `variableName`

Nazwa zmiennej do której zostanie przypisany nowo utworzony value setter.
Powinna być zdefiniowana w panelu w polu _Extra variable names_.

| Type   | Required |
| ------ | -------- |
| string | Yes      |

#### `data`

Dane value selecta wygenerowane przy pomocy narzędzia dostępnego na stronie
<https://bb.omnicalculator.com/#/tools>.

| Type   | Required |
| ------ | -------- |
| object | Yes      |

#### `options`

Opcjonalne dodatkowe opcje. Obiekt zawierający następujące pola:

|Arguement      | Name           | Type   | Description                                                                                                                                                                               | Required |
| ------------- | -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---- |
|`variableName` | `variableName` | string | Name of the variable to which you want to bind/assign the value setter                                                                                                   | Yeah | 
|`data`         | `data`         | object | Data contained in the value setter as an object with pairs key-value                                                                                                     | Yeah | 
|`options`      | `defaultUid`   | string | Identifier of the value setter.Added to the generated code if the values pasted into the generic contain a column named _default_ and one of its lines has the value `y` | Nope |     |

<a name=def></a>
## `omni.define(name, func)`

Tworzy nową funkcję, której możemy używać we wzorach definiowanych w panelu.
Przykładowe użycie:

```javascript
'use strict';

// Przykładowa funkcja, która mnoży przez siebie dwie liczby. Po jej zdefiniowaniu
// możemy dodać do panelu administracyjnego wzory w rodzaju: `a = pomnoz(b, c)`
// Uwaga: funkcja ta ma charakter przykładowy, lepiej zamiast niej użyć po
// prostu wzoru: `a = b * c`
// --------------------------> funkcja dostaje tyle parametrów, ile zostało użytych w panelu
omni.define('pomnoz', function(_liczba1, _liczba2) {
  // ponieważ argumenty są obiektami biblioteki decimal.js, przekonwertuj je
  // na zwykłe numery javascriptowe. Alternatywnie można korzystać z API
  // opisanego na strone http://mikemcl.github.io/decimal.js/
  // - jest to istotne zwłaszcza w przypadku, gdy zależy nam na precyzji
  // obliczeń (konwersja na numery javascriptowe ją zmniejsza)
  var liczba1 = _liczba1.toNumber();
  var liczba2 = _liczba2.toNumber();
  var result = liczba1 * liczba2;
  return mathjs.bignumber(result);
});
```

Alternatywna implementacja używająca API biblioteki
[decimal.js](http://mikemcl.github.io/decimal.js/) (np. gdy zależy nam na
precyzji):

```javascript
'use strict';

omni.define('pomnoz_alt', function(liczba1, liczba2) {
  return liczba1.times(liczba2);
});
```

### Argumenty

#### `name`

Nazwa funkcji, której będzie można używać we wzorach wprowadzanych w panelu
administracyjnym

| Typ    | Wymagane |
| ------ | -------- |
| string | Tak      |

#### `func`

Funkcja, która przyjmuje tyle argumentów, ile zostało podanych podczas
wprowadzania wzoru w panelu administracyjnym. Argumenty te są obiektami
biblioteki [decimal.js](http://mikemcl.github.io/decimal.js/). Tego typu
argument powinien również zostać zwrócony przez funkcję (np. przy użyciu
wywołania `mathjs.bignumber(result)` pokazanego powyżej).

| Typ      | Wymagane |
| -------- | -------- |
| function | Tak      |

<a name=oninit></a>
## `omni.onInit(callback)`

Funkcja ta umożliwia zdefiniowanie akcji, które będą się wykonywać podczas
inicjalizacji kalkulatora. Przykład zastosowania:

```javascript
// -----------> Zdefiniowana funkcja ("callback") jest wywoływana z jednym
// -----------> argumentem (nazwanym tutaj "ctx") który daje nam dostęp
// -----------> do kilku akcji opisanych poniżej
omni.onInit(function(ctx) {
  // wyświetlenie komunikatu w konsoli developerskiej podczas inicjalizacji
  console.log('Kalkulator zainicjalizowany');
  // pobierz kod kraju użytkownika
  var countryCode = ctx.getCountryCode();
  console.log('Kod kraju użytkownika: ' + countryCode);

  // ustaw domyślną wartość jednej ze zmiennych - inną dla Amerykanów
  // i inną dla pozostałych krajów
  if (countryCode === 'US') {
    // ----------------------------> ostatni argument `ctx.setDefault` jest
    // ----------------------------> opcjonalny i pozwala na ustalenie jednostki
    // ----------------------------> w jakiej została wprowadzona wartość
    ctx.setDefault('zmiennaA', '50', 'inch');
  } else {
    ctx.setDefault('zmiennaA', '80', 'cm');
  }

  // przypisz zdefiniowany wcześniej value select do zmiennej kalkulatora
  // zerknij na dokumentację `omni.createValueSelect(data)` żeby zobaczyć
  // jak definiować value select.
  ctx.bindValueSelect(lifeExpectancySelect, 'Life_expectancy_country');
});
```

### Argumenty

#### `callback`

Funkcja która ma być wykonywana podczas inicjalizacji kalkulatora. Otrzymuje
jeden argument (nazywany zwykle _ctx_) zawierający kilka funkcji (opisanych
poniżej) możliwych do wykonania podczas inicjalizacji.

| Typ      | Wymagane |
| -------- | -------- |
| function | Tak      |

### Funkcje dostępne wewnątrz kontekstu `omni.onInit`

#### `bindValueSelect(valueSelect, ...variables)`

Przypisz zdefiniowany wcześniej value select do zmiennej (lub zmiennych).
Zerkinij na dokumentację `omni.createValueSelect(data)` żeby zobaczyć przykład
użycia. Możliwe jest również przypisanie value selecta od razu do więcej niż
jednej zmiennej - poprzez wywołanie `bindValueSelect` z większą ilością
argumetów, np.:

```javascript
omni.onInit(function(ctx) {
  ctx.bindValueSelect(
    jakisValueSelectZdefiniowanyWczesniej,
    'zmiennaA',
    'zmiennaB'
  );
});
```

##### Argumenty

| Nazwa       | Typ                       | Wymagane | Opis                                                                                 |
| ----------- | ------------------------- | -------- | ------------------------------------------------------------------------------------ |
| valueSelect | ValueSelect               | Tak      | Instancja value selecta stworzona przy pomocy funkcji `omni.createValueSelect(data)` |
| variables   | string (jeden lub więcej) | Tak      | Nazwy zmiennych do których value select powinien zostać przypisany                   |

#### `getCountryCode()`

Podaj kod kraju użytkownika. Zwraca dwuliterowy kod wg
[standardu ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
wielkimi literami. Przykładowe wartości: _PL_, _US_, _GB_, _DE_. Jeśli nie można
ustalić kraju zwracana jest wartość: `--`. Przykład zastosowania:

```javascript
omni.onInit(function(ctx) {
  // wyświetlenie komunikatu w konsoli developerskiej podczas inicjalizacji
  console.log('Kalkulator zainicjalizowany');
  // pobierz i wyświetl kod kraju użytkownika
  console.log('Kod kraju użytkownika: ' + ctx.getCountryCode());
});
```

#### `setDefault(variable, value, unit)`

Ustaw domyślną wartość zmiennej kalkulatora. Przykład zastosowania:

```javascript
omni.onInit(function(ctx) {
  // Ustaw domyślną wartość zmiennej `zmiennaA`
  ctx.setDefault('zmiennaA', '50');
  // Ustaw domyślną wartość zmiennej `zmiennaB`. Traktuj tę wartość jako podaną
  // w centymetrach
  ctx.setDefault('zmiennaB', '100', 'cm');
});
```

##### Argumenty

| Nazwa    | Typ               | Wymagane | Opis                                                                                                                                                  |
| -------- | ----------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| variable | string            | Tak      | Nazwa zmiennej dla której chcemy ustawić domyślną wartość                                                                                             |
| value    | string lub number | Tak      | Domyślna wartość zmiennej                                                                                                                             |
| unit     | string            | Nie      | Jeśli podany, to wartość domyślna jest traktowana tak, jakby została wprowadzona w tej jednostce (o ile zmienna ma ustawiony odpowiedni unit swicher) |

<a name=onresult></a>
## `omni.onResult([requiredVariables], callback)`

Funkcja ta umożliwia zdefiniowanie akcji, które będą się wykonywać po wykonaniu
obliczeń. Ma ona dwa warianty:

- `omni.onResult(callback)` - funkcja podana jako _callback_ wykona się zawsze,
  po wprowadzeniu jakiejkolwiek wartości przez użytkownika w dowolne pole
  kalkulatora (lub gdy którekolwiek pole ma ustawioną wartość domyślną).
  Przykład zastosowania:

```javascript
omni.onResult(function(ctx) {
  // pobierz wartość zmiennej `a`
  var a = ctx.getNumberValue('a');
  // wyświetl komunikat, gdy jest wprowadzona jakakolwiek wartość zmiennej `a`
  if (a != null) {
    ctx.addTextInfo('Wprowadziłeś następującą wartość a: ' + a);
  }
  // pobierz wartość zmiennej `b`
  var b = ctx.getNumberValue('b');
  // wyświetl komunikat, gdy wprowadzona wartość jest większa niż 5
  if (b > 5) {
    ctx.addTextInfo('Wprowadziłeś wartość b większą niż 5');
  }
});
```

- `omni.onResult(requiredVariables, callback)` - funkcja podana jako _callback_
  wykona się tylko wtedy, gdy są uzupełnione wszystkie wartości podane jako
  _requiredVariables_. Funkcja podana jako callback przyjmuje konkekst (_ctx_
  tak jak w przykładzie powyżej) oraz dodatkowo aktualne wartości zmiennych z
  _requiredVariables_ (jako obiekty biblioteki
  [decimal.js](http://mikemcl.github.io/decimal.js/)). Przykład zastosowania:

```javascript
// ------------> kod wewnątrz `omni.onResult` wykona się tylko wtedy, gdy
// ------------> uzupełnione są zmienne `a` oraz `b`
omni.onResult(['a', 'b'], function(ctx, _a, _b) {
  // -----------------------------> `_a` i `_b` to aktualne wartości
  // -----------------------------> zmiennych `a` i `b` w postaci obiektów
  // -----------------------------> decimal.js
  //
  // pobierz wartość zmiennej `a` jako numer
  var a = _a.toNumber();
  // wyświetl komunikat, gdy jest wprowadzona jakakolwiek wartość zmiennej `a`
  ctx.addTextInfo('Wprowadziłeś następującą wartość a: ' + a);
  // pobierz wartość zmiennej `b` jako numer
  var b = _b.toNumber('b');
  // wyświetl komunikat, gdy wprowadzona wartość jest większa niż 5
  if (b > 5) {
    ctx.addTextInfo('Wprowadziłeś wartość b większą niż 5');
  }
});
```

### Funkcje dostępne wewnątrz kontekstu `omni.onResult`

#### `addChart({ afterVariable, alwaysShown, data, labels, stacks, title, type })`

Narysuj wykres pod kalkulatorem. Przykład użycia:

```javascript
omni.onResult(function(ctx) {
  // pobierz wartości zmiennych
  var a = ctx.getNumberValue('a');
  var b = ctx.getNumberValue('b');
  var c = ctx.getNumberValue('c');

  // narysuj wykres tylko gdy co najmniej jedna z pobranych zmiennych
  // jest większa niż 0
  if (a > 0 || b > 0 || c > 0) {
    // przygotuj dane do wyrenderowania wykresu
    var chartData = [
      {
        name: 'Wartość A',
        value: a
      },
      {
        name: 'Wartość B',
        value: b
      },
      {
        name: 'Wartość C',
        value: c
      }
    ];

    ctx.addChart({
      type: 'pie',
      data: chartData
    });
  }
});
```

##### Argumenty

`addChart` przyjmuje jeden argument, którym jest obiekt z następującymi polami:

| Nazwa         | Typ              | Wymagane | Opis                                                                                                                                                                                    |
| ------------- | ---------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| data          | tablica          | Tak      | Tablica z danymi potrzebnymi do wyrenderowania wykresu. Dokładny format zależy od rodzaju wykresu. Zerknij poniżej aby zobaczyć listę przykładowych kalkulatorów z wykresami (**TODO**) |
| labels        | tablica stringów | Tak/Nie  | Lista labeli. Wymagana w sytuacji, gdy typ wykresu jest inny niż _pie_                                                                                                                  |
| stacks        | tablica obiektów | Nie      |                                                                                                                                                                                         |
| title         | string           | Nie      | Opcjonalny tytuł wykresu                                                                                                                                                                |
| type          | string           | Tak      | Typ wykresu. Zerknij poniżej na listę obsługowanych typów.                                                                                                                              |
| afterVariable | string           | Nie      | Nazwa zmiennej, pod którą ma się pojawić wykres. Jeśli nie podano to pojawi się on pod ostatnią zmienną.                                                                                |
| alwaysShown   | boolean          | Nie      | Czy wykres ma się pojawić również, gdy zmienna podana jako `afterVariable` jest ukryta?. Domyślnie ma wartość `true`. Podaj `{ alwaysShown: false }` aby zmienić to zachowanie.         |

##### Obsługiwane typy wykresów

- area
- bar
- line
- pie

#### `addHtml(html, options)`

Umożliwia dodanie kodu HTML który zostanie wyrenderowany pod kalkulatorem.

> **UWAGA:** jeśli to możliwe lepiej skorzystać z innych metod dodawania
> informacji dla użytkownika (takich jak `addTextInfo(text)` lub
> `addTable(body, header)`). Jeśli już musimy korzystać z `addHtml` to lepiej
> ograniczyć się do kilku prostych tagów HTML (np. `<p>`, `<b>`, `<i>`, `<img>`,
> `<a>`). Jest to związane z tym, że w przyszłości chcielibyśmy wspierać
> uruchamianie kalkulatorów poza przeglądarką internetową (np. w natywnych
> aplikacjach mobilnych).

Przykład zastosowania:

```javascript
omni.onResult(function(ctx) {
  // pobierz wartość zmiennej `a`
  var a = ctx.getNumberValue('a');
  // wyświetl komunikat, gdy jest wprowadzona jakakolwiek wartość zmiennej `a`
  if (a != null) {
    ctx.addHtml('Wprowadziłeś następującą wartość a: <b>' + a + '</b>');
  }
});
```

##### Argumenty

| Nazwa   | Typ    | Wymagane | Opis                                        |
| ------- | ------ | -------- | ------------------------------------------- |
| html    | string | Tak      | Kod HTML do wyrenderowania pod kalkulatorem |
| options | object | Nie      | Opcje opisanie poniżej                      |

###### Dostępne opcje

| Nazwa         | Typ     | Wymagane | Opis                                                                                                                                                                                        |
| ------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| afterVariable | string  | Nie      | Nazwa zmiennej, pod którą ma się pojawić wyrenderowany HTML. Jeśli nie podano to pojawi się on pod ostatnią zmienną.                                                                        |
| alwaysShown   | boolean | Nie      | Czy wyrenderowany HTML ma się pojawić również, gdy zmienna podana jako `afterVariable` jest ukryta?. Domyślnie ma wartość `true`. Podaj `{ alwaysShown: false }` aby zmienić to zachowanie. |

#### `addTable(body, header, options)`

Umożliwia wyświetlenie tabeli pod kalulatorem.

Przykład zastosowania:

```javascript
// Wyświetl tabelę ze statycznymi danymi (cenami paliwa per kraj),
// jeśli użytkownik wprowadził jakiekolwiek dane do kalkulatora

omni.onResult(function(ctx) {
  // nagłówek tabeli (opcjonalny) - zawiera nazwy kolumn
  var header = ['Kraj', 'Cena paliwa'];
  // zawartość tabeli - składa się z poszczególnych wierszy (poza nagłówkiem)
  var table = [
    ['US', '2.95'],
    ['PL', '4.69'],
    ['NO', '15.96'],
    ['SE', '15.03'],
    ['DK', '11.37'],
    ['GB', '1.20'],
    ['FI', '1.46'],
    ['DE', '1.37'],
    ['FR', '1.49'],
    ['AT', '1.21'],
    ['CH', '1.55'],
    ['AU', '1.39'],
    ['BE', '1.43'],
    ['CA', '1.45'],
    ['ES', '1.28'],
    ['IE', '1.38'],
    ['IT', '1.55'],
    ['NL', '1.58'],
    ['ZA', '14.19']
  ];

  ctx.addTable(table, header);
});
```

Przykład zastosowania 2:

```javascript
// Obsługa generowania tabliczki mnożenia. Użytkownik podaje, ile wierszy
// i kolumn ma mieć tabliczka
omni.onResult(['row_limit', 'column_limit'], function(
  ctx,
  _rowLimit,
  _columnLimit
) {
  var rowLimit = _rowLimit.toNumber();
  var columnLimit = _columnLimit.toNumber();
  var table = [];
  var row;

  for (var currentRow = 1; currentRow <= rowLimit; currentRow++) {
    row = [];
    for (var currentColumn = 1; currentColumn <= columnLimit; currentColumn++) {
      row.push(currentRow * currentColumn);
    }
    table.push(row);
  }

  ctx.addTable(table);
});
```

##### Argumenty

| Nazwa         | Typ              | Wymagane | Opis                                                                                                                                                                            |
| ------------- | ---------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| body          | tablica tablic   | Tak      | Dane do wyświetlenia w tabeli. Zobacz przykłady powyżej aby poznać jak dokładnie wygląda format.                                                                                |
| header        | tablica stringów | Nie      | Nazwy kolumn wyświetlanych w nagłówku tabeli                                                                                                                                    |
| options       | object           | Nie      | Dodatkowe opcje tabeli. Obecnie obsługiwane jest wyłącznie `caption`, którego można użyć do ustawienia tytułu tabeli, np. `{caption: 'Tytuł tabeli'}`.                          |
| afterVariable | string           | Nie      | Nazwa zmiennej, pod którą ma się pojawić tabela. Jeśli nie podano to pojawi się on pod ostatnią zmienną.                                                                        |
| alwaysShown   | boolean          | Nie      | Czy tabela ma się pojawić również, gdy zmienna podana jako `afterVariable` jest ukryta?. Domyślnie ma wartość `true`. Podaj `{ alwaysShown: false }` aby zmienić to zachowanie. |

#### `addTextInfo(text, options)`

Dodaj tekstowy komunikat pod kalkulatorem. Przykład zastosowania:

```javascript
omni.onResult(function(ctx) {
  // pobierz wartość zmiennej `a`
  var a = ctx.getNumberValue('a');
  // wyświetl komunikat, gdy jest wprowadzona jakakolwiek wartość zmiennej `a`
  if (a != null) {
    ctx.addTextInfo('Wprowadziłeś następującą wartość a: ' + a);
  }
});
```

##### Argumenty

| Nazwa   | Typ    | Wymagane | Opis                                   |
| ------- | ------ | -------- | -------------------------------------- |
| text    | string | Tak      | Tekst do wyświetlenia pod kalkulatorem |
| options | object | Nie      | Opcje opisanie poniżej                 |

###### Dostępne opcje

| Nazwa         | Typ     | Wymagane | Opis                                                                                                                                                                           |
| ------------- | ------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| afterVariable | string  | Nie      | Nazwa zmiennej, pod którą ma się pojawić tekst. Jeśli nie podano to pojawi się on pod ostatnią zmienną.                                                                        |
| alwaysShown   | boolean | Nie      | Czy tekst ma się pojawić również, gdy zmienna podana jako `afterVariable` jest ukryta?. Domyślnie ma wartość `true`. Podaj `{ alwaysShown: false }` aby zmienić to zachowanie. |

#### `addUnmetCondition(text)`

Dodaje komunikat błędu przy aktualnie sfokusowanym polu (kalkulator zachowuje
się tak, jabky było niespełnione _condition_ zdefiniowane w panelu
administracyjnym).

> **UWAGA**: funkcja ta nie jest potrzebna w typowych kalkulatorach. Zamiast
> niej można po prostu zdefiniować _condition_ w panelu administracyjnym.

Przykład zastosowania:

```javascript
omni.onResult(function(ctx) {
  var a = ctx.getNumberValue('a');
  if (a < 5) {
    ctx.addUnmetCondition('A powinno być większe niż 5');
  }
});
```

##### Argumenty

| Nazwa | Typ    | Wymagane | Opis            |
| ----- | ------ | -------- | --------------- |
| text  | string | Tak      | Komunikat błędu |

#### `getAllNumberValues()`

Zwraca tablicę z aktualnymi wartościami wszystkich zmiennych kalkulatora (lub
`undefined` w przypadku gdy pole jest puste). Funkcja ta może być przydatna np.
przy liczeniu średnich (jeśli wszystkie pola kalkulatora to elementy średnich).

> **UWAGA**: Bezpieczniejsza w zastosowaniu jest funkcja
> `getNumberValues(variables)`, gdzie definiujemy wprost nazwy zmiennych,
> których wartości chcemy pobrać.

Przykład zastosowania:

```javascript
omni.onResult(function(ctx) {
  var values = ctx.getAllNumberValues();
  var nonEmptyValues = values.filter(function(value) {
    return value !== undefined;
  });
  var sumOfValues = nonEmptyValues.reduce(function(a, b) {
    return a + b;
  }, 0);

  if (nonEmptyValues.length) {
    ctx.addTextInfo('The average is ' + sumOfValues / nonEmptyValues.length);
  }
});
```

#### `getAllValues()`

Zwraca tablicę z aktualnymi wartościami wszystkich zmiennych kalkulatora w
postaci obiektów biblioteki [decimal.js](http://mikemcl.github.io/decimal.js/)
(lub `undefined` w przypadku gdy pole jest puste). Funkcja ta może być przydatna
np. przy liczeniu średnich (jeśli wszystkie pola kalkulatora to elementy
średnich) gdy zależy nam na zachowaniu precyzji.

> **UWAGA**: Bezpieczniejsza w zastosowaniu jest funkcja `getValues(variables)`,
> gdzie definiujemy wprost nazwy zmiennych, których wartości chcemy pobrać.

Przykład zastosowania:

```javascript
omni.onResult(function(ctx) {
  var values = ctx.getAllValues();
  var nonEmptyValues = values.filter(function(value) {
    return value !== undefined;
  });
  var sumOfValues = nonEmptyValues.reduce(function(a, b) {
    return a.plus(b);
  }, mathjs.bignumber(0));

  if (nonEmptyValues.length) {
    ctx.addTextInfo(
      'The average is ' + sumOfValues.dividedBy(nonEmptyValues.length)
    );
  }
});
```

#### `getCurrencySymbol()`

Zwraca symbol waluty użytkownika wykryty na podstawie jego lokalizacji. W
przypadku gdy nie można ustalić lokalizacji użytkownika (oraz zawsze w panelu
administracyjnym) wyświetlany jest `$`. Przykład zastosowania:

```javascript
omni.onResult(function(ctx) {
  ctx.addTextInfo('Your currency symbol is ' + ctx.getCurrencySymbol());
});
```

#### `getDisplayedValue(variable)`

Zwraca obecną wartość zmiennej w takiej postaci sformatowanej, tak jabky była
ona wyświetlona w wierszu kalkulatora. W przypadku, gdy zmienna ta nie ma żadnej
wartości zwracane jest `null`. Przykładowym zastosowaniem może być wyświetlanie
podsumowania w przepisie kulinarnym. Przykładowy kod:

```javascript
omni.onResult(function(ctx) {
  // pobierz sformatowaną wartość zmiennej `a`
  var formattedA = ctx.getDisplayedValue('a');
  // wyświetl sformatowaną wartość zmiennej `a`, jeśli została wprowadzona
  if (formattedA != null) {
    ctx.addTextInfo('Sformatowana wartość a: ' + formattedA);
  }
});
```

##### Argumenty

| Nazwa    | Typ    | Wymagane | Opis                                                         |
| -------- | ------ | -------- | ------------------------------------------------------------ |
| variable | string | Tak      | Nazwa zmiennej dla której chcemy pobrać sformatowaną wartość |

#### `getNumberValue(variable)`

Zwraca aktualną wartość zmiennej kalkulatora (lub `undefined` w przypadku, gdy
jest ona pusta). Przykład zastosowania:

```javascript
omni.onResult(function(ctx) {
  var a = ctx.getNumberValue('a');
  if (a != null) {
    ctx.addTextInfo('Wprowadziłeś następującą wartość a: ' + a);
  }
});
```

##### Argumenty

| Nazwa    | Typ    | Wymagane | Opis                                            |
| -------- | ------ | -------- | ----------------------------------------------- |
| variable | string | Tak      | Nazwa zmiennej dla której chcemy pobrać wartość |

#### `getNumberValues(variables)`

Zwraca tablicę z wartościami wybranych zmiennych (lub `undefined` dla
konkretnych zmiennych jeśli nie są one wypełnione). Przykład zastosowania:

```javascript
// załóżmy, że mamy kalkulator w którym są zmienne `value_1`, `value_2`, `value_3`
// z których chcielibyśmy obliczyć średnią arytmetyczną, oraz inne zmienne,
// których nie możemy w tych obliczeniach użyć

omni.onResult(function(ctx) {
  var values = ctx.getNumberValues(['value_1', 'value_2', 'value_3']);
  var nonEmptyValues = values.filter(function(value) {
    return value !== undefined;
  });
  var sumOfValues = nonEmptyValues.reduce(function(a, b) {
    return a + b;
  }, 0);

  if (nonEmptyValues.length) {
    ctx.addTextInfo('The average is ' + sumOfValues / nonEmptyValues.length);
  }
});
```

##### Argumenty

| Nazwa     | Typ              | Wymagane | Opis                                               |
| --------- | ---------------- | -------- | -------------------------------------------------- |
| variables | tablica stringów | Tak      | Nazwy zmiennych dla których chcemy pobrać wartości |

#### `getLabel(variable)`

Pobierz _label_ zmiennej ustawiony w panelu administracyjnym. Przykład
zastosowania:

```javascript
// załóżmy, że tworzymy kalkulator budżetu (poniższy kod aktualnie bazuje
// na kodzie kalkulatora `budget`)
//
// lista przykładowych zmiennych oznaczających kategorie wydatków
var MONTHLY_EXPENSES = [
  'groceries',
  'clothing',
  'health',
  'transportation',
  'entertainment'
];

omni.onResult(function(ctx) {
  // Dla każdej zmiennej z tablicy MONTHLY_EXPENSES stwórz obiekt
  // który będzie zawierał label zmiennej oraz jej obecną wartość.
  // Label jest zapisywany jako `name`, ponieważ ten format jest wymagany
  // przez funkcję używaną do rysowania wykresów.
  var data = MONTHLY_EXPENSES.map(function(variable) {
    return {
      name: ctx.getLabel(variable),
      value: ctx.getNumberValue(variable) || 0
    };
  });
  // sprawdź, czy chociaż jedna zmienna ma wartość większą od 0
  var shouldShowChart = data.some(function(item) {
    return item.value > 0;
  });
  // jeśli chociaż jedna zmienna ma wartość większą od 0 to narysuj wykres
  if (shouldShowChart) {
    ctx.addChart({
      type: 'pie',
      data: data
    });
  }
});
```

##### Argumenty

| Nazwa    | Typ    | Wymagane | Opis                                          |
| -------- | ------ | -------- | --------------------------------------------- |
| variable | string | Tak      | Nazwa zmiennej dla której chcemy pobrać label |

#### `getRawInput(variable)`

Pobierz tekst wpisany przez użytkownika w wierszu kalkulatora. Test ten nie jest
w żaden sposób przekształcany, np. jeśli użytkownik wpisał `2+2`, to ta funkcja
zwróci nam `2+2` zamiast `4`. Funkcja ta zwróci nam tekst również wtedy, gdy nie
jest możliwe obliczenie wartości wprowadzonej przez użytkownika, np. gdy
wprowadził on `(2`. Przykład użycia:

```javascript
omni.onResult(function(ctx) {
  // pobierz tekst wpisany przez użytkownika jako wartość zmiennej `a`
  var rawA = ctx.getRawInput('a');
  // wyświetl tekst wpisany przez użytkownika (jeśli jest dostępny)
  if (rawA != null) {
    ctx.addTextInfo('Wprowadzona wartość w pole a: ' + rawA);
  }
});
```

##### Argumenty

| Nazwa    | Typ    | Wymagane | Opis                                                                        |
| -------- | ------ | -------- | --------------------------------------------------------------------------- |
| variable | string | Tak      | Nazwa zmiennej dla której chcemy pobrać tekst wprowadzony przez użytkownika |

#### `getUnit(variable)`

Pobierz _slug_ aktualnie wybranej jednostki dla zmiennej. Jeśli zmienna nie ma
ustawionego unit switchera zostanie zwrócona wartość `null`. Przykład użycia:

```javascript
omni.onResult(function(ctx) {
  var unitOfA = ctx.getUnit('a');
  if (unitOfA != null) {
    ctx.addTextInfo('Aktualna jednostka zmiennej a: ' + unitOfA);
  }
});
```

##### Argumenty

| Nazwa    | Typ    | Wymagane | Opis                                                             |
| -------- | ------ | -------- | ---------------------------------------------------------------- |
| variable | string | Tak      | Nazwa zmiennej dla której chcemy pobrać slug aktualnej jednostki |

#### `getUnitFullNameFor(variable)`

Pobierz _Full name_ (zdefiniowany w panelu administracyjnym) aktualnie wybranej
jednostki dla zmiennej. Jeśli _Full name_ nie jest dostępny zwracany jest
_Name_. Jeśli zmienna nie ma ustawionego unit switchera zostanie zwrócona
wartość `null`. Przykład użycia:

```javascript
omni.onResult(function(ctx) {
  var fullUnitNameOfA = ctx.getUnitFullNameFor('a');
  if (fullUnitNameOfA != null) {
    ctx.addTextInfo(
      'Pełna nazwa aktualnej jednostki zmiennej a: ' + fullUnitNameOfA
    );
  }
});
```

##### Argumenty

| Nazwa    | Typ    | Wymagane | Opis                                                                    |
| -------- | ------ | -------- | ----------------------------------------------------------------------- |
| variable | string | Tak      | Nazwa zmiennej dla której chcemy pobrać pełną nazwę aktualnej jednostki |

#### `getUnitNameFor(variable)`

Pobierz _Name_ (zdefiniowany w panelu administracyjnym) aktualnie wybranej
jednostki dla zmiennej. Jeśli zmienna nie ma ustawionego unit switchera zostanie
zwrócona wartość `null`. Przykład użycia:

```javascript
omni.onResult(function(ctx) {
  var unitNameOfA = ctx.getUnitNameFor('a');
  if (unitNameOfA != null) {
    ctx.addTextInfo('Nazwa aktualnej jednostki zmiennej a: ' + unitNameOfA);
  }
});
```

##### Argumenty

| Nazwa    | Typ    | Wymagane | Opis                                                              |
| -------- | ------ | -------- | ----------------------------------------------------------------- |
| variable | string | Tak      | Nazwa zmiennej dla której chcemy pobrać nazwę aktualnej jednostki |

#### `getValue(variable)`

Zwraca aktualną wartość zmiennej kalkulatora jako obiekt biblioteki
[decimal.js](http://mikemcl.github.io/decimal.js/) (lub `undefined` w przypadku,
gdy jest ona pusta). Przykład zastosowania:

```javascript
omni.onResult(function(ctx) {
  var a = ctx.getValue('a');
  if (a != null) {
    ctx.addTextInfo(
      'Wprowadzona przez Ciebie wartość a po podwojeniu: ' +
        a.times(2).toString()
    );
  }
});
```

##### Argumenty

| Nazwa    | Typ    | Wymagane | Opis                                            |
| -------- | ------ | -------- | ----------------------------------------------- |
| variable | string | Tak      | Nazwa zmiennej dla której chcemy pobrać wartość |

#### `getValues(variables)`

Zwraca tablicę z wartościami wybranych zmiennych kalkulatora w postaci obiektów
biblioteki [decimal.js](http://mikemcl.github.io/decimal.js/) (lub `undefined`
dla konkretnych zmiennych jeśli nie są one wypełnione). Przykład zastosowania:

```javascript
// załóżmy, że mamy kalkulator w którym są zmienne `value_1`, `value_2`, `value_3`
// z których chcielibyśmy obliczyć średnią arytmetyczną, oraz inne zmienne,
// których nie możemy w tych obliczeniach użyć

omni.onResult(function(ctx) {
  var values = ctx.getValues(['value_1', 'value_2', 'value_3']);
  var nonEmptyValues = values.filter(function(value) {
    return value !== undefined;
  });

  var sumOfValues = nonEmptyValues.reduce(function(a, b) {
    return a.plus(b);
  }, mathjs.bignumber(0));

  if (nonEmptyValues.length) {
    ctx.addTextInfo(
      'The average is ' + sumOfValues.dividedBy(nonEmptyValues.length)
    );
  }
});
```

##### Argumenty

| Nazwa     | Typ              | Wymagane | Opis                                               |
| --------- | ---------------- | -------- | -------------------------------------------------- |
| variables | tablica stringów | Tak      | Nazwy zmiennych dla których chcemy pobrać wartości |

#### `hideVariables(...variables)`

Ukryj wybrane zmienne.

> **UWAGA**: ta funkcja jest eksperymentalna i prowdopodobnie zostanie zmieniona
> w przyszłości. Przed użyciem zastanów się, czy nie dałoby się zastosować
> innego rozwiązania zamiast ukrywania zmiennych.

Przykład zastosowania:

```javascript
omni.onResult(['time_savings'], function(ctx, _timeSavings) {
  var timeSavings = _timeSavings.toNumber();
  // Pokaż zmienną "time_savings" w kalkulatorze tylko wtedy, gdy jej
  // wartość jest większa od 0
  if (timeSavings > 0) {
    ctx.showVariables('time_savings');
  } else {
    ctx.hideVariables('time_savings');
  }
});
```

Możliwe jest ukrycie więcej niż jednej zmiennej w jednym wywołaniu podając ich
nazwy oddzielone przecinkiem, np.:

```javascript
ctx.hideVariables('a', 'b', 'c');
```

##### Argumenty

| Nazwa     | Typ                                               | Wymagane | Opis                               |
| --------- | ------------------------------------------------- | -------- | ---------------------------------- |
| variables | string lub kolejne stringi oddzielone przecinkiem | Tak      | Nazwy zmiennych które chcemy ukryć |

#### `runningOn(platform)`

Sprawdza, czy kod kalkulatora wykonuje się na określonej _"platformie"_. Obecnie
możemy użyć tej funkcji do sprawdzenia, czy kalkulator jest pokazany w
_embedzie_ czy na stronie <https://www.omnicalculator.com> i w zależności od
tego pokazać dodatkowe dane. W przyszłości będziemy mogli jej użyć również do
sprawdzenia, czy kalkulator jest uruchomiony na desktopie czy mobile lub w
natywnej aplikacji. Przykład zastosowania:

```javascript
omni.onResult(function(ctx) {
  if (!ctx.runningOn('embed')) {
    // Kalkulator nie jest uruchomiony w embedzie. Mamy więcej miejsca i możemy
    // np. dodać dodatkową tabelę lub wykres
  }
});
```

| Nazwa    | Typ    | Wymagane | Opis                                                                |
| -------- | ------ | -------- | ------------------------------------------------------------------- |
| platform | string | Tak      | Nazwa platformy. Obecnie obsługiwana jest wyłącznie wartość `embed` |

#### `showVariables(...variables)`

Pokaż wybrane zmienne (cofnij działanie funkcji _hideVariables_).

> **UWAGA**: ta funkcja jest eksperymentalna i prowdopodobnie zostanie zmieniona
> w przyszłości. Przed użyciem zastanów się, czy nie dałoby się zastosować
> innego rozwiązania zamiast ukrywania zmiennych.

Możliwe jest ukrycie więcej niż jednej zmiennej w jednym wywołaniu podając ich
nazwy oddzielone przecinkiem, np.:

```javascript
ctx.showVariables('a', 'b', 'c');
```

Zerknij do dokumentacji `hideVariables(...variables)` aby zobaczyć przykład
zastosowania.

##### Argumenty

| Nazwa     | Typ                                               | Wymagane | Opis                                 |
| --------- | ------------------------------------------------- | -------- | ------------------------------------ |
| variables | string lub kolejne stringi oddzielone przecinkiem | Tak      | Nazwy zmiennych które chcemy pokazać |

#### `usesImperialUnits()`

Sprawdza, czy użytkownik domyślnie używa jednostek imperialnych (ustalamy to na
podstawie tego, czy znajduje się w USA). Przykład zastosowania:

```javascript
omni.onResult(function(ctx) {
  // załóżmy, że w kalkulatorze jest zmienna length, oznaczająca długość w centymetrach
  var length = ctx.getNumberValue('length');
  if (ctx.usesImperialUnits()) {
    // użytkownik używa jednostek imperialnych - pokaż wartość w calach
    ctx.addTextInfo('Length: ' + length * 0.393701 + ' inches');
  } else {
    ctx.addTextInfo('Length: ' + length + ' cm');
  }
});
```

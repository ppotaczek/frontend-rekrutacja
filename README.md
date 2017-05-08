# frontend-rekrutacja
Cześć!
Przed Tobą dwa zadania, mające na celu sprawdzenie Twoich umiejętności. Czas złożenia oddanego kodu to 15 maj. Odeślij mi link do swojego gita z kodem.

## Zadanie 1 - converter
Userstory 1: Jako użytkownik chcę konwertować kwoty w EUR na kwoty w PLN.
Userstory 2: Jako użytkownik chcę, aby kolejne konwersje EUR/PLN wyświetlały się w formie kolejnych kafli.
Mockup: do pobrania pod tym adresem - http://bidev.pl/rekrutacja/zadanie-js-mockup.png

### Proces:
Użytkownik wpisuje ilość EUR do inputa.
Po kliknięciu w button "CONVERT TO PLN" na widoku dodaje się nowy "kafel" zawierający wartosść PLN (czyli EUR przeliczone za pomocą kursu walutowego na PLN) oraz datę i godzinę konwersji (datę, w której został kliknięty button "CONVERT TO PLN")
Kurs walutowy generuje się losowo wg reguły: 4,2 * (1+(random ­ 50)/1000),​ gdzie random - losowa liczba całkowita z przedziału <0; 100>
Przykład: Użytkownik wpisał 4 EUR i kliknął "CONVERT TO PLN". Wygenerowany losowo kurs walutowy wyniósł 4. W interfejsie pojawił się nowy kafel z wartością PLN 16.

### Założenia:
Nie musimy walidować poprawności liczby wpisywanej przez użytkownika (zakładamy, że zrobimy to w przyszłości)
Konwersje nie zapisują się. Po odświeżeniu strony widzimy ponownie pustą listę.
Użytkownik może wykonać nieskończoną liczbę konwersji. Każda kolejna konwersja dodaje kolejny kafel.
Gotową aplikację wypchnijmy do tego repozytorium git

### Dodatkowe punkty za:
składnie ES6
zadbanie o integralność z różnymi przeglądarkami
prosty server w node.js lub użycie webpacka

### Dodatkowe informacje oczekiwane po wykonaniu zadania:
ile czasu było potrzebne łącznie na wykonanie zadania
co sprawiło Ci największą trudność


## Zadanie 2 - HTML/CSS
Zadanie polega na przygotowaniu htmla i cssa, które będą odzwierciedlały zaprojektowaną grafikę. Ma na celu ogólne sprawdzenie umiejętności pisania semantycznego HTMLa i CSSa. Dobrze by było, żeby efekt był blisko projektu, ale nie jest wymagana dokładność co do piksela.
Dozwolone jest użycie preprocesorów, autoprefixera czy narzędzi automatyzujących workflow.

### Materiały do pobrania:
mockup JPG: http://bidev.pl/rekrutacja/zadanie-templating-mockup.jpg
plik PSD: http://bidev.pl/rekrutacja/zadanie-templating-psd.zip
wyciągnięte z PSD assety: http://bidev.pl/rekrutacja/zadanie-templating-materialy.zip

### Jeśli nie masz Photoshopa, tutaj są pomocne informacje:
font: Lato, rozmiary 14px i 16px, wagi Light i Bold
Bazowy kolor tekstu: #323232
Kolor akcentu: #30306d
Kolor tła: #e5ceae
Kolor labeli grafik: #929292
Kolor 3 z 4 borderów inputa: #b9b9b9
Przezroczystość tła: #000, alpha 0.5
Box shadow: #000, alpha 0.35, 20px


Chciałbym zobaczyć jak najlepsze jakościowo wykonania przy założeniu, że kod miałby trafić na produkcję - z uwzględnieniem wszystkich funkcjonalnych i niefunkcjonalnych aspektów.
Gotową aplikację wypychamy do tego repozytorium git.

### Dodatkowe punkty za:
Wsparcie innych przeglądarkach

### Dodatkowe informacje oczekiwane po wykonaniu zadania:
ile czasu było potrzebne łącznie na wykonanie zadania
co sprawiło Ci największą trudność


# Powodzenia!

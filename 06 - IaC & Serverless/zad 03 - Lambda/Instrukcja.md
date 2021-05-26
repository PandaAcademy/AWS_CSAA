## IaC & Serverless

### Zadanie nr 3

1. Przejdź do serwisu `Lambda`.

2. Klkknij w `Create function`.

3. Pozostaw pierwszą opcję zaznaczoną czyli `Author from scratch`.

4. Podaj nazwę, np. `panda-function`.

5. Jako runtime wybierz najnowszego Node'a, w chwili pisania, jest to `Node.js 14.x`. :)

6. W zakładce `Permissions` rozwiń `Change default execution role`, powinno być zaznaczone `Create a new role with basic Lambda permissions`.

7. W `Advanced settings`, rozwiń, ale nic nie ustawiaj.

8. Naciśnij create function.

9. Naciśnij dwuktornie lewoklikiem w `index.js`, pojawi się kod `JS`owy w inbuildowym IDE.

10. Zwróć uwagę jaka jest wartość `Handler`a poniżej. Jes to `index.handler`, gdzie:

    * `index` - wskazuje na nazwę pliku
    * `handler` - wskazuje na nazwę funkcji w pliku wskazanym wyżej

11. Znawiguj do zakładki `Configuration`.

12. W opcji z ToCa o nazwie `General configuration` kliknij w `Edit`.

13. Podbij RAM np na `2024 MB` i Timetout na `5 min`.

14. W nowej zakładce otwórz `View  the panda-function-role...`.

15. Dopnij manage policy do tej roli o nazwie `AmazonEventBridgeFullAccess`.

16. Wróc do poprzednij zakładki i naciśnij `Save`.

17. Naciśnij `+ Add desination`.

18. Ustaw kolejno:

    * w `Source` podaj `Asynchoronous Invocation`
    * w `Condtion` podaj `On success`
    * w `Destination type` wybierz `EventBridge event bus
    * w w `Destination` wybierz `default`
    * naciśnij `Save`

19. Naciśnij `+ Add trigger`.

20. Wybierz `S3` jako trigger, a potem ustaw:

    * wybierz dowonly bucket może być z poprzednich zajęć, jeśl usunąłeś stwórz nowy
    * jako `Event type` wybierz `PUT`
    * `Prefix` i `Suffix` mogą być puste
    * zatwierdź na dole, checkbox `I acknowledge that using the same S3 bucket for both input and output is not recommended and that this configuration can cause recursive invocations, increased Lambda usage, and increased costs.`

21. Wróc z powrotem do zakładki `Code` i podmień zawartowść pliku `index.js` na kod z `./new-lambda-code.js`

22. W prawym górnym rogu z dropdowna `Actions` wybierz, `Publish new version`.

23. Upuść nowe pliki w S3 bucketcie wspomnianym w `20`.

24. Wróc do swojej Lambdy z zakładki `Monitor`, poszukaj logów pochodzących `console.log()` z kodu Lambdy.
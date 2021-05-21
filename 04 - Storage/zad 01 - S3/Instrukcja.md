## Storage

### Zadanie nr 1

1. Przejdź do serwisu S3 - Simple Storage Service.

2. Naciśnij `Create bucket`.

3. Podaj swoją <u>unikatową</u> nazwę bucketa. 

4. Wybierz region `us-east-1`.

5. Zaakecptuj, naciskając `Create bucket`.

6. Wybeirz swój bucket.

7. Z zakładki `Objects` wybierz `Upload`.

8. Następnie po wybraniu `Add files` wybierz dowonle pliki z Twojego PC.

9. Akceptuj wybierając `Upload`. Włącz wersjonowanie (zakładka `Properties` / sekcja `Bucket versioning ) i powtórz kroki `8` wrzucając ten sam plik. 

10. Wybierz załadowany plik i przejrzyj costępne opcje -- w prawym górnym rogu rozwij drop-down `Object actions` i zapoznaj się z opcjami.

11. Następnie otwórz w nowym oknie przeglądarki `Object URL`, który powinien mieć format: `https://<nazwa-bucketa>.s3-us-east-1.amazonaws.com/<nazwa-pliku>`.

12. W zakładce `Permissions` odznacz `Block public access` i powtórz krok `11`.

13. Będąc na tej stronie widzisz jeszcze `Bucket policy` - nie będziemy tej sekcji edytować, ale jest to format JSON nadający uprawnienia zgodne z regułami `IAM`.

14. Wracjac, na zakładce `Properties` zmień `Storage Class` z `Standard` na `One Zone-IA`.

15. Niżej, włącz `Server-side encryption` wybierając `Amazon S3 key (SSE-S3)`.

16. Załaduj do tego samego bucketa`index.html`, `error.html`, `script.js` i `style.css` dostępne z tego repo do swojego bucketa.

17. Z zakładami `Properties` zjedź na sam dół i wybierz `Static website hosting` włącz opcje, wypełnij Index i Error document domyślnymi opcjami i zaakceptuj.

18. Kliknij w link, powinien mieć format: `htpp://s3-<nazwa-bucketa>.s3-website-us-east-1.amazonaws.com`.

19. Stwórz nowy bucket.

20. Wróć do poprzedniego bucketa, na którym pracowałeś/--aś do tej pory i z zakładki `Proprties` przejdź do sekcji `Server access logging`.

21. Zmodfikuj zawartość pierwszego bucketa i prześledź zawartość drugiego (uwtorzonego później).

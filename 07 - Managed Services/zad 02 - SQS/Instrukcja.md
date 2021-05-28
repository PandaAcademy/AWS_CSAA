## Managed Services

### Zadanie nr 2 - SQS

1. Przejdź do serwisu `SQS`.

2.  Naciśnij `Create queue`.

3. Jako `Type` wybierz `Standard`.

4. Podaj dowolną nazwę jak `Panda Queue`.

5. W sekcji `Configuration` nic nie zmieniaj ale naciśnij przy każdym polu ` Info` i zapoznaj się z treścią.

6. Podobnie w `Access policy`. Jako metodę wybierz `Basic` i na tą chwilę, tylko niech `queue owner` czyli Ty, ”edzi emiał dostęp do kolejki, ale jeśli zaktualizować resource based policy wybierz drugie opcję, podając `ARN`y.

7. Kolejne ustawienia są opcjonalne, rozwiń je, zapoznaj się z nimi, ale ich nie edytuj.

8. Potwierdź naciskając `Create queue`.

9. Po utworzeniu kolejki, kliknij w `Send and recieve messages`.

10. Wpisz w `text area` dowolną treść i naciśnij w prawym górnym rou `Send message`.

11. Przewiń na dół stron do sekcji `Recieve messages` i zoabcz, że w `Messages available` jest cyfra `1`.

12. Naciśnij po prawej `Poll for messages`.

13. Przejdź do sekcji `Messages` i klknij w ID wiadomości.

14. Przejrzyj każdą zakładkę. Na końcu klknij w `Done`.

15. Powtórz krok `12` klika razy. Co zaobserowałeś/-aś?

16. Naciśnij `Delete` i powtórz krok `15`. Jaka jest obserwacja w stonkuku do poprzedniego kroku.

17. Spróbuj wysłać więcej różnych wiadomośći do kolejki i ją "pociągnij" parę razy jak w `15`. Jaka jest różnica?

18. Możesz wyczyścić wiadomości w kolejce naciskając `Purge`.

`BONUS`: połącz poprzednie zadanie z obecnym, tzn, spraw by subsrybentem `SNS Topic`u była kolejka `SQS`owa.
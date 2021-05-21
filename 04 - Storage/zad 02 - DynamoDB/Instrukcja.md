## Storage

### Zadanie nr 2

1. Przejdź do serwisu DynamoDB.

2. Kliknij `Create table`.

3. W `Table name` wpisz `pandy`.

4. W `Primary key` wpisz `imie`. Na razie `Add sort key` zostaw oddznaczone.

5. W dziale `Table settings` odznacz zaznaczone `Use default settings` (z ciekawości możesz odznaczyć i przeczytać poniższe ustawienia, ale pamiętaj o ponownym zaznaczeniu tej opcji).

6. Kliknij `Create`.

7. Obejrzyj `Table details` w zakładce `Overview`.

8. W zakładce `Items` dodajmy pierwszy element tabeli klikacjąc w `Create item` (pojawi się nowe okienko).

9. Wpisz imię pierwszej pandy.

10. Klikając w `(+)` dodaj kolejny atrybut pierwszego elementu  (zawsze najpiew `type` potem `property` a na końcu jego `value`).

11. Gdy już będziesz gotowy ze zmianami naciśniej `Save`.

12. Powtórz kroki `8, 9, 10, 11` dodając nowy atrybut.

13. Porównaj swoje elementy w tabeli.

14. Przejdź przez kolejne zakładki tabeli `Metrics` i `Alarms` (intergracja z `CloudWatch`), `Triggers` to "wzywalacze" stumieni tabeli - `DynamoDB Streams`, pozwawlają na reakcje i przekazanie zmian np. do funkcji `serverless` jaką jest `Lambda`, czy `Action control` czyli kolejny `resource based policy` opierający się "pod spodem" na `IAM`.

15. Stwórz nową tabelę o nowej nazwie - w tym celu:
*  powtórz kroki `2 - 12` tym razem zaznaczając `Add sort key` i wpisując nowy atrybut 
* odznacz `Use default settings`
* odznacz `Read  capacity` i `Write capacity` w dziale `Auto Scaling`
* w dziale `Provisioned capacity` zmień wartości `Read  capacity units` i `Write capacity units` na `2`
* zauważ, że po stworzeniu tabeli i próbie dodanie nowych elementów do tabeli, mamy już "czekające na wypełenienie" dwa pola

16. Zapoznaj się z polem do wyszukiwania elementów w zakładce `Items`, porównaj czy się różni metoda `Query` od `Scan`.
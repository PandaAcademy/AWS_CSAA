## Monitoring & Logging

### Zadanie nr 3

#### X-Ray

1. Wejdź do serwisu `X-Ray`.

2.  Kliknij w `Get started`.

3. `Step 1: Options`:

    * normalnie wbwybierzemy z `Select sample or your own application`, opcję `Launch a sample application (Node.js)`
    * ale zanim, to wybierz drugą opcję `Instrument your application` i naciśnij `Next`
    * wybierz z opcji języków `Node.js` i naciśnij `Next`
    * na kolejnej stronie zapoznaj się ze sposobami instalacji X-Ray SDK (agenta) w tym na różne serwisy (EC2, Lambda, ECS, Elastic Beanstalk)
    * cofnij się dwie stront wstecz, czyli nie naciskaj Done, tylko 2x `Previous` i wybierz `Launch a sample application (Node.js)`
    * naciśnij `Next`

4. Zauważ, że przeszkoczyliśmy o `Step 2: Language`, od razu do `Step 3: Implemenation`, ponieważ platforma `Node.js` została wybrana w kroku 1:

    * zapoznaj się z krokami i podejrzyj repo appki, którą będziemy instalować w `Elastic Beanstalk`
    * naciśnij `Launch sample application`

5. Zostaniesz przeniosiony do serwisu `Cloud Formation` (o którym więcej będzie na kolejnych zajęciah) zaczynając od `Step 1: Specify template`

6. Zostaw ustawienia domyślne, ale możesz podejrzeć graficznie co zostanie stworzone, klikając w `View in Designer`, jeśli tam wszedłeś cofnij się naciskajac `Close` w lewy górnym rogu.

7. Na `Step 2: Specify stack details`, wybierz dowolny subnet i VPC (może być defualtowe) i naciśnij `Next`.

8. Na `Step 3: Configure stack options`, możesz nic nie wybierać, ale rozwiń opcje i zapoznaj się z nimi, po skończeniu, klknij w `Next`

9. Ostatni `Step 4: Review` z Cloudformation to podsumowanie. Na dole zaznacz checkbox od `Configure stack options` i naciśnij `Create Stack`.

10. Poczekaj aż CF stack wstanie. W tym czasie możesz podejrzeć CF template oraz przejrzeć zakładki w CF (sczególnie Resources i Events).

11. Po skończeniu tworzenia CF stacka, przejdź do zakładki `Outputs` i przeklej do przeglądarki publiczne IP.

12. Wy`start`uj applikację, która "umyślnie" spowoduje błąd.

13. Wróc do serwisu `X-Ray` i wejdź z jego ToCa w `Service map`.

14. Zpoznaj się z wyświetlanymi elementami i naciśnij dowolny, pojawią się `Service details` po prawej stronie. Naciśnij `View traces`.

15. Wybierz dowolny URL z `Trace overview` i przejrzyj jego `Trace list`. Wybierz dowolny item, a potem rozwiń jego szczegóły.

16. Po skończeniu, usuń CF stack, naciskając `Delete stack`.

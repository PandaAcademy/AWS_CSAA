## Storage

### Zadanie nr 4

1. Przejdź do serwisu RDS - Relational Databases.

2. Po lewej stronie z TOCa (tabel of content) wybierz `Databases`.

3. W sekcji `Choose a database creation method` wybierz `Standard Create`.

4. W sekcji `Enginie options`:
    * `Enginte type `- wybierz `Amazon Aurora`
    * `Edition `- wybierz `MySQL Comaptibility`
    * `Version` - wybierz najnowszą, powinno być domyślnie, jak nie to rozwiń dropdown i wybierz pierwszy z górnym

5. Z `Database Location`, wybierz `Regional`

6. Z `Database features` wybierz `One writer and multiple readers`

7. Z `Templates` wybierz `Production`.

8. W sekcji `Settings`:

    * `DB cluster identifier` podaj np. `panda-db`
    * `Credentials Settings`:
            
        * `Master username` ustaw np. `panda-db-admin`
        * nie wybieraj `Auto generate a password`
        * zamiast tego, podaj swój własny `Master password` 

9. Jako `DB instance size` wybierz `Bustable classes` i z dropdown wybierz `db.t2.small`.

10. Wybierz `Multi-AZ deployment`.

11. W `Connectivity` podaj swoje VPC, może być default.

12. Rozwiń `Additional Configuration`, prześledź opcje ale nic dodatkowego nie musisz ustawiać.

13. Stwórz Aurorę klikając w `Create database`.

14. Rozwiń stworzony zasób i prześledź dostępne zakładki.

15. W prawym górnym rogu rozwiń dropdown `Actions` i wybierz `Replica Autoscaling`.

17. Podaj nazwę scaling policy, np. `aurora-panda-scaling`.

18. W target metrics wybierz `Average CPU utilization of Aurora Repliocas` i `Target value`, np. `70`.






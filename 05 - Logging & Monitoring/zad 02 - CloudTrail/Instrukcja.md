## Monitoring & Logging

### Zadanie nr 2

#### CloudTrail

1. Wejdź do serwisu `CloudTrail`.

2.  Z ToCa wybierz `Event history`.

3. Nastepnie z rozwijanych opcji (dropdown) wybierz `Event name` a  polu obok dowolną operację, np. `CreateAutoScalingGroup`.

4. Wybiera z ToCa, opcję `Trails` i naciśniej `Create trail`.

5. Nadaj nazwę np. `panda-trail`.

6. Wybierz opcję `Create new S3 bucket`.

7. Pozostałe opcje zostaw odznaczone, poza `CloudWatch Logs` - to zaznacz i nadaj nową nazwę dla roli `IAM`.

8. Naciśniej `Next`.

9. Zaznacz wszystkie trzy typy eventów: `Managment`, `Data` & `Insights` events.

10. Przejdź z powrotem do serwisu `CloudWatch` i zajrzyj do logów.

11. Analogicznie zaglądnij też do serwisu `S3` i obejrzyj logi z bucketa.
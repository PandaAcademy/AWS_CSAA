## Analytics, Security, Costs

### Zadanie nr 1 - SSM

Celem tego zadania będzie postawienie:

* parametru typu `String`
* parametru typu `SecureString` 

za pomocą:

* konsoli AWS
* AWS CLI
* AWS SDK
* AWS CDK
* terraforma

1. Przejdź do serwisu `SSM`, kliknij z wyszukiwarki `System Manager`.

2. Z ToCa, wybierz `Paramater Store`.

3. Naciśnij `Create paramter`.

4. Wpisz jako nazwę paramteru `string-param-name-from-aws-console`.

5. Wybierz jako `Type`, opcję `String`.

6. `Data type` pozostaw `text`.

7. W polu `Value` wpisz `string-param-value-from-aws-console`.

8. Naciśnij `Create parmater`.

9. Powtórz kroki `4` - `8`, ustawiając kolejno:

* `secure-string-param-name-from-aws-console` (paramater name)
* `SecureString` (paramater type) (tutaj możesz użyć AWSowego klucza KMS, czyli `alias/aws/ssm`)
* `secure-string-param-value-from-aws-console` (paramater value)

10. Przejdź do kolejnych pod katalogów i utwórz parametry wg tooli.

`UWAGA`: Upewnij się, że masz poprawnie wpisany profil i klucze `IAM` w `./aws/credentials`. 

Jeśli nie wykonaj jeszcze raz:

        aws configure --profile panda
        aws sts get-caller-identity --profile panda

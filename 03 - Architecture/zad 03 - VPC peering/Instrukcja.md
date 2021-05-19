## Architecture

### Zadanie nr 2

1. Przejdź do serwisu `VPC` i stwórz dwa VPC:

|nazwa VPC|CIDR|
|---|---|
|`panda-vpc-1`|10.1.0.0/16|
|panda-vpc-2|10.2.0.0/16|

3. Stwórz dwa publiczne subnety:

|nazwa SN|w którym VPC?|CIDR|AZ|
|---|---|---|---|
|public-sn-1|panda-vpc-1|10.1.1.0/24|us-east-1a|
|public-sn-2|panda-vpc-2|10.2.1.0/24|us-east-1b|

4. Stwórz 2x Internet Gateway i połącz po 1 do każdeo VPC z `1.`

5. Wykonaj VPC peering, w tym celu:

    * wybierz `Peering Connections` 
    * kliknij w `Create Peering Connection`
    * podaj nazwę `panda-vpc-peering`
    * jako `VPC (Requester)`, podaj `panda-vpc-1`
    * jako `VPC (Accepter)`, podaj `panda-vpc-2`
    * w opcji `Account` wybierz: `My account`
    * w opcji `Region` wybierz: `This region (us-east-1)`
    * zaakcpetuj klikając w `Create Peering Connection`

6. Zaznacz swój `VCP-peer` , kliknij w `Actions` i następnie Accept Request`.

7. Wejdź do `Route Table`, i dla każdego zasobu RT ustaw odpowiednio (2x - 1x per RT):

    * subnet association dla subnetu w danym VPC
    * dla `0.0.0.0/0` ustaw IGW ddanego VPC
    * CIDR drugiego VPC jako `destination`, podając w `target` nazwę drugo subnetu

8. Postaw po 1 instancji w EC2 w obu subnetach.

9. Zaloguj się przez SSH do jednej i pingnij po adresie PRYWATNYM drugą insancją.

10. Skopiuj klucz SSH jak w poprzdnim zadaniu i połącz się z jednej insancji do drugiej poprzez SSH (równiez po adresie prywanym).
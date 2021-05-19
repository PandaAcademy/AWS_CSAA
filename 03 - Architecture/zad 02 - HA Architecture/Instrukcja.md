## Architecture

### Zadanie nr 2

1. Przejdź do serwisu `VPC` i z ToCa wybierz `Your VPCs`.

2. Naciśniej `Create VPC`.

3. Podaj nazwę VPC, np. `panda-vpc` i jego `CIDR`, np. `10.0.0.0/16`.

4. Akceptuj, naciskając `Create VPC`.

5. Następnie z ToCa wybierz `Subnets`.

6. Stwórz 4 subnety wg tabelki poniżej:

|nazwa subneta|CIDR|AZ|
|---|---|---|
| panda-public-1a| 10.0.1.0/24 | us-east-1a|
| panda-public-1b| 10.0.2.0/24 | us-east-1b|
| panda-private-1a| 10.0.3.0/24 | us-east-1a|
| panda-private-1b| 10.0.4.0/24 | us-east-1b|

7. Następnie z ToCa wybierz `Internet Gateway` i stwórz nowe IGW o nazwie `panda-igw`.

8. Następnie zaznacz IGW i z `Acions` wybierz `Attach to VPC` i wybierz jako VPC `panda-vpc`.

9. Następnie z ToCa wybierz `Elastic IPs` i alokuj EIP w regionie `us-east-1`.

10. Następnie z ToCa wybierz `NAT Gateway`, podaj nawę np. panda-nat-gw` i wybierz mu:

    * `panda-public-1a` jako jego subnet
    * `EIP` z `9`.

11. Następnie z ToCa wybierz `Route Tables`.

12. Stwórz dwie Route table o nazwach : `panda-public-rt` i `panda-private-rt`.

13. Wybierz `panda-public-rt` i:

    * z zakładki `Routes` kliknij w `Edit routes` i wybierz `Add route`:

        * `Destination`: `0.0.0.0/0` 
        * `Target`: IGW z `7`

14. Następnie przejdź do zakładki `Subnet Associations`, kliknij w `Edit subnet associations` i wybierz dwa subnety publiczne  i naciśnij `Save`

15. Wybierz `panda-private-rt` i:

    * z zakładki `Routes` kliknij w `Edit routes` i wybierz `Add route`:

        * `Destination`: `0.0.0.0/0` 
        * `Target`: NAT-GW z `10`

15. Następnie przejdź do zakładki `Subnet Associations`, kliknij w `Edit subnet associations` i wybierz dwa subnety prywatne i naciśnij `Save`.

16. Teraz stwórz 3x EC2 (dowolną techniką, czyli z wizzarda albo z Launch Template) w 3ech różnych subnetach:  panda-public-1b,  panda-private-1a i  panda-private-1b, tylko nie twórz w `panda-public-1a`, tam ma być tylko `NAT-GW`.

17. EC2 w publicznym SN będzie służył jako bastion host, wykonaj poniże  komendy, gdzie publiczą instancją jest EC2 w SN: `panda-public-1b`, a prywatną EC2 np. w podsieci `panda-private-1b`:

        scp -i key_to_private_instance.pem ec2-user@my.ec2.<public-ec2-id>.amazonaws.com

        ssh –i key_to_public_instance.pem ec2-user@my.ec2.<public-ec2-id>.amazonaws.com​

        ssh –i key_to_private_instance.pem ec2-user@my.ec2.<private-ec2-id>.amazonaws.com​

UWAGA! Na tym etapie sprawdź czy NACL i Security Grupy mają otwarte porty 22 i 80.

BONUS: Pomyśl jak dołączyć `ALB` do subnetów prywatnch ?
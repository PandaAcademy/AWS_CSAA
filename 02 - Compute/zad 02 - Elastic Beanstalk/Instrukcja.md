## Architecture

### Zadanie nr 1

1. Przejdź do serwisu VPC.

2. Z VPC Wizzard, wybierz - `VPC with a Signle Public Subnet` oraz poniższe opcje:
* IPv4 CIDR block: 10.0.0.0/16 
* IPv6 CIDR block: No IPv6 CIDR Block
* Public subnet's IPv4 CIDR: 10.0.0.0/24
* Availability Zone: us-east-1a

3. Stwórz drugi subnet w us-east-1b

4. Połącz powstały subnet z `3` do Route Table, które zostało stworzone w `2`.

4. Stwórz dwie instancje EC2 (tak jak w Module 1 - Zadaniu 1) po jednej do subentu.

5. Sprawdź Security Group i Network Access Control list czy przepuszczą ruch.

6. Stwrórz Application Load Balancer:
* protokół - HTTP
* port - 80 
* VPC i subnets - z `2` i `3`
* healths checks:
 
    -> protokół: HTTP

    -> path: /index.html

    -> port: traffic port

    -> thresholds (s): 5 / 2 / 30 / 200

7. Zarejestruj dwie instancje EC2 w Target Groups.

8. Na ostaniej stronie wizzarda sprwadź czy wszystko jest w porządku i naciśnij `Create`
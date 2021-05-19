## Architecture

### Zadanie nr 1

1. Wejdź do serwisu `EC2`.

2. Wybierz `Auto Scaling Groups` i kliknij `Create Auto Scaling Group`.

3. Nadaj dowolną nazwę, np. `panda-asg`.

4. Poniżej kiknij w `Create Launch Template`.

5. Nadaj dowolną nazwę, np. `panda-ec2-template`.

6. Dla `AMI`, wybierz `Amazon Linux 2 AMI (HVM), SSD Volume Type` (architektura: 64-bit (x86))

7. Typ instancji, `t2.micro`.

8. Dla `key-pair` wybierz klucze, które już stworzyłeś.

9. W networking settings:

    *  `Networking platform`, wybierz: `Virtual Private Cloud (VPC)`
    * `Secuity groups`, wybierz SG, które juz wcześniej tworzyłeś (dowolne o szerokim zakresie), tzn. takie z CIDR: `0.0.0.0/0`, i dla portów `22` i `80`.

10. W `Storage` wybierz domyślne ustawienie, czyli `Volume 1 (AMI Root) (8GiB, EBS, General Purpose SSD (gp2))`

11. Rozwiń `Advanced details`, na samym dole w secji `User data`, wklej:

```
#!/bin/bash

sudo su

yum update -y

yum install -y httpd.x86_64

systemctl start httpd.service

echo " " > /var/www/html/index.html

curl -s http://169.254.169.254/latest/meta-data/public-ipv4 > /var/www/html/index.html
```

12. Kliknij w `Create launch template`.

13. Wracjac do tworzenia ASG, odświerz listę Lanuch template, klikając w ikonę po prawej i wybierz nowo powstałay template.

14. Kliknij w `Next`.

15. W sekcji `Instance purchase options` wybierz `Adhere to launch template`

16. W dziale `Network`:

    * `VPC`: wybierz swoje defualtowe VPC
    * `Subnets`: wybierz 3 subnety, mogą to być odpowiednio, dla `us-east-1a`, `us-east-1b` , `us-east-1c`.

17. Kliknij w `Next`.

18. `Load balancing`, wybierz `Attach to a new load balancer`  # !!

19. Nadaj nazwę Load balancerowi, np. `panda-alb`.

20. Jego typ to `Internet-facing`.

21. Subnety powinny buż już zaznaczone jak w `16`

22. Ustaw port `80` i stwórz nową target groupę np. o nazwie `panda-tg`.

23. Zaznacz checkbox w `Monitoring`.

23. Kliknij w `Next`.

24. W group size:

    * Desired capacity: 2

    * Minmum capacity: 1

    * Maximum capacity: 3

25. W `Scaling policies` wybierz `Target tracking scaling policy` z ustawieniami domyślnymi.

26. Nie ustawiamy na razie notyfikacji, daj `Next`.

27. Pomiń też tagi i daj `Next`.

28. Na podsumowaniu nacisnij `Create AutoScaling group`.


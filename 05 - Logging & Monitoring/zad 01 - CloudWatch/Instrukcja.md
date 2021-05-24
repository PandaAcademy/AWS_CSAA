## Monitoring & Logging

### Zadanie nr 1

#### Metryki

1. Przejdź do serwis `CloudWatch`.

2. Z ToCa po lewej stronie wybierz `Metrics`

3. Wybierz `EC2  / Auto Scaling Group` i wpisz w wyszukiwarce `CPU Utilization`.

4. Wybierz przedział dowolny element z list poprzez jego zaznacznie i zaznacz przedział czasowy na `3h` (prawy górny róg).

5. Zaznacz pewien zakres z wykresu.

6. W prawym górny rogu, wybierz, `Actions / Add dashboard`.

7. Kliknij w `Create new` i nadaj dowolną nazwę, np. `Panda Dashboard`.

8. `Widget type` może pozostać jako `Line`.

9. Akceptuj, klikając w `Add to dashboard`.

10. Następnie kliknij w `Save dashboard`.

11. Następnie powtórz kroki `1-10` dla innej metryki.

12. Następnie postaw nową Auto Scaling Groupę, i w jej właściwościach wybierz zakładkę `Monitoring` i kliknij w `Enable Group Metrics Collection`.

13. Wejdź w dowolną EC2, która jest częscią EC2 i wybierz zakładkę `Monitoring`.

14. Kliknij w `Enable Detailed Monitoring` (próbkowanie co 1 minutę).

<br>

---

#### Alarmy

1. Alarm najwygodniej jest ustawić z opcji `Auto Scaling Group`y.  Jeśli nie masz ASG, postaw jak w Module 3 / Zadaniu 1.

Wybieramy zakładę `Automatic scaling`.

2. Kliknij `Add policy` po prawej stronie.

3. Z opcji `Policy type`, wybierz `Step scaling`.

4. Nadaj dowolną nazwę, np.  `panda-step-scaling policy`.

5. Kliknij w `Create CloudWatch alarm`.

6. W `Select metric` wybierz `CPU Utilization` z EC2 ASG.

7. Dalej, w `Conditions` , wybierz `Static` / `Greater` than... `70`.

8. W `Auto Scaling action`wybierz rodzaj triggera `In alarm`, a poniżej jako `Resource type` -> EC2 Auto Scaling group, wybierz `ASG` stowrzoną w `1`.

9. Nadaj nazwę i stwórz alram.

10. Wracjąc do `Step scaling policy` (2~3). Wybieramy nowo stwrzony alarm. Możemy tutaj dołoży warunki (`step`y), ale przymijmy, żeby warunke był `CPU Util > 70`

11. Naciskamy `Create`.

12. Logujemy się poprzez `SSH` na instancje `EC2` i puszczamy komendę:

        sudo stress --cpu 8 --vm-bytes $(awk '/MemAvailable/{printf "%d\n", $2 * 0.9;}' < /proc/meminfo)k --vm-keep -m 1

<br>

---

#### Logi

1. W serwisie `IAM` stwórz nową rolę dla `EC2` i dodaj jej `IAM` polisę:

        {
            "Version": "2012-10-17",
            "Statement": [
                {
                    "Effect": "Allow",
                    "Action": [
                        "logs:CreateLogGroup",
                        "logs:CreateLogStream",
                        "logs:PutLogEvents",
                        "logs:DescribeLogStreams"
                    ],
                    "Resource": [
                        "*"
                    ]
                }
            ]
        }

2. Postaw instancję EC2 bezpośrednio, albo z ASG.

3. Zaloguj się do instacji poprzez SSH.

4. W sesji instancji wykonaj komendy:

        sudo yum update -y
        sudo yum install -y awslogs
        sudo systemctl start awslogsd
        sudo chkconfig awslogs on
        sudo systemctl enable awslogsd.service

5. Znawiguj do serwisu `CloudWatch`.

6. Z ToCa wybierz `Logs / Log groups`

## Compute

### Zadanie nr 1

1. Stwórz instancję EC2 typu t2.micro, używając domyślnych ustawień.:
* AMI : wybierz `Amazon Linux 2 AMI (HVM), SSD Volume Type` w architekturze `x86`.
​
2. Użyj poniższego skryptu ​do umieszczenia go w sekcji user data. ​

```
#!/bin/bash​

sudo su​

yum update -y​

yum install -y httpd.x86_64​

systemctl start httpd.service​

systemctl enable httpd.service​

echo " " > /var/www/html/index.html ​

curl -s http://169.254.169.254/latest/meta-data/public-ipv4 > /var/www/html/index.html​
```

3. Zapisz nowe klucze `key-pair` w formacie `.pem`
​
4. Połącz się z nią używając ssh. W tym celu z terminala na swoim PC, wykonaj:

```
chmod 400 ./<sciezka>/<nazwa-klucza>.pem
ssh -i ./<sciezka>/<nazwa-klucza>.pem ec2-user@<public-ip>
```

5. Znawiguj do dysku EBS podpiętego do instancji EC2 i sprwadź w jakieś ścieżce jest zamontowany.

6. W instancji, stwórz na tej ścieżce pliki, np.

        echo "abc" > plik.txt

7. Zrób snapshot swojego dysku.

8. Usuń instancje EC2.

9. Sprawdź czy dysk EBS też został usunięty.

10. Stwórz nową instancję EC2 i wybierz snapshot EBS stworzony z `7` jak dodatkowy volument

12. Połącz się do instancji poprzez SSH i sprawdź gdzie jest plik stworzony z `6`.
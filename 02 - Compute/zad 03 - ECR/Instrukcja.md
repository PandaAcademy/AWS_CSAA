## Compute

### Zadanie nr 3

#### zadanie opcjonale jeśli ma zainstalowanego dockera

1. Przejdź do serwisu `ECR - Elastic Container Registry`.

2. Wybierz `Get Started`, albo z ToCa: `Amazon ECR/Repositories` . i kliknij `Create repository`.

3. Upewnij się, że będziesz tworzył prywatne repozytortium - wybierz `Private`.

4. Nazwe reposutorium podaj: `panda-ecr-registry`.

5. `Tag immutability`, `Image scan settings` i `Encryption settings` pozostaw wyłączone.

6. Ściągnij najnowszy obraz dockerowy, applikacji `httpd` z dockerhub.io, w tym celu, wykonaj polecenie:

        docker pull httpd

7. Następnie, upewnij się, że masz zainstalowne `AWS CLI` i posiadasz klucze IAM, jeśli nie to:

    * odwiedź https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html i wykonaj polecnia dla Twojego systemu operacyjnego

    * po zainstalowanym `AWS CLI` wykonaj:

            aws configure --profile panda-admin

            AWS Access Key ID: <nazwa-Twojeg-klucza-Access-Key-id>
            AWS Secret Access Key: <nazwa-Twojeg-klucza-Secret-Access-Key>
            Default region name: us-east-1
            Default output format: json

            aws sts get-caller-identity --profile panda-admin

8. Wróć do serwisu `ECR` i zapoznaj się z komendami do wypchnięcia obrazu dockerowego do Twojego repozytorium -- kliknij `View push commands`.

9. Zaloguj się do swojego ECR:

        aws ecr get-login-password --region us-east-1 --profile panda-admin | docker login --username AWS --password-stdin <numer-Twojego-konta-AWS>.dkr.ecr.us-east-1.amazonaws.com

10. Otaguj ściągnięty obraz dockerowy na tag kompatybilny z Twoim ECR:

        docker tag httpd:latest <numer-Twojego-konta-AWS>.dkr.ecr.us-east-1.amazonaws.com/panda-ecr-registry:latest

11. Wypchnij obraz do ECR:

        docker push <numer-Twojego-konta-AWS>.dkr.ecr.us-east-1.amazonaws.com/panda-ecr-registry:latest

12. Wróc do serwisu ECR i zobacz czy obraz znajduje się w repo.
## Managed Services

### Zadanie nr 3 - KMS

1. Przejdź do serwisu `KMS`.

2.  Z lewego `ToC`a wybierz `AWS managed keys` i zapoznaj się z dostępnymi kluczami od AWS.

3. W kolejnej opcji `Customer managed keys` kliknij w `Create keys`.

4. Step 1 - `Configure key`: 

    * w `Key type` wybierz `Symmetric`
    * w `Key material origin` wybierz `KMS`
    * naciśnij `Next`

5. Step 2 - `Add labels`:

    * podaj jakiś `alias` np. `panda-kms-key`
    * naciśnij `Next`

6. Step 3 - `Definie key administrative permissions`:

    * zostaw puste, tylko Ty będziesz adminem klucza
    *  naciśnij `Next`

7. Step 4 - `Definie key usage permissions`. Podobnie jak poprzedni krok, zostaw puste, wskazjąc zaraz tylko na siebie.

8. Step 5 - `Review and edit key policy`. Zobacz `key policy`, zapoznaj się z nim i naciśnij `Finish`.

9. Rozwiń opcje nowo stworzonego klucza i zapoznaj się z nimi.

10. Stwórz dowolną tajną treść i umieść ją w pliku `secret-plain-value.txt`

11. Zaenkryptuj ten plik, przy pomoc `AWS KMS CLI`:

        aws kms encrypt \
            --key-id alias/panda-kms-key \
            --plaintext fileb://secret-plain-value.txt \
            --output text \
            --query CiphertextBlob \
            --region us-east-1 \
            > secret-plain-value--encrypted.base64

12. Teraz musisz zdekodować treść wg standardu `base64`:

        ## Windows:
        certutil -decode .\secret-plain-value--encrypted.base64 .\secret-plain-value--encrypted

        ## Linux:
        cat secret-plain-value--encrypted.base64 | base64 -d > secret-plain-value--encrypted

13. Następnie zdekryptuj z powrotem do wartości wyjściowej, ale jeszcze zakodowanej:

        aws kms decrypt \
            --ciphertext-blob fileb://secret-plain-value--encrypted \
            --output text \
            --query Plaintext \
            > secret-plain-value--decrypted.base64 \
            --region us-east-1

14. Teraz zdekoduj już zdekrytpowaną treść:

        ## Windows:
        certutil -decode .\secret-plain-value--decrypted.base64 .\secret-plain-value--decrypted

        ## Linux:
        cat secret-plain-value--decrypted.base64 | base64 -d > secret-plain-value--decrypted

`BONUS`: spróbuj powtórzyć te kroki przy pomocy `AWS SDK Encryption CLI` : https://docs.aws.amazon.com/encryption-sdk/latest/developer-guide/crypto-cli-install.html , wg jego API.
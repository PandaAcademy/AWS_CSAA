## Storage

### Zadanie nr 3

1. Przejdź do serwisu RDS - Relational Databases.

2. Po lewej stronie z TOCa (tabel of content) wybierz `Databases`.

3. W sekcji `Choose a database creation method` wybierz `Standard Create`.

4. W sekcji `Enginie options`:
* `Enginte type `- wybierz `MySQL`
* `Edition `- wybierz `MySQL Community`
* `Version` - wybierz najnowszą, powinno być domyślnie, jak nie to rozwiń dropdown i wybierz pierwszy z górnym

5. W sekcji `Templates` wybierz `Free Tier`.

6. W sekcji `Settings`:
* `DB instance identifier` - wybierz dowolną nazwę
* `Credential Settings` - `Master username` : `pandasuperadmin` | `Master password` i `Confirm password` : `panda`

7. W secji `DB instance size`:
* `DB instance class` - będzie wybrane za Ciebie, jeśli wybrałeś `FreeTier` w kroku `5`, powinno być `db.t2.micro`

8. W sekcji`Storage`:
*  `Storage type` : `Generale Purpose (SSD)` | `Allocated storages` : `20` | `Storage autoscaling` : odznacz

9. W sekcji `Connectivity` 
* wybierz `default`owe `VPC`
* `Publicly accessible` - wybierz `Yes`
* `VPC security group` wybierz `Create new`
* `New VPC security group name` wybierz dowolną nazwę
* `Availability zone` może być `No preference` albo `us-east-1a`
* `Database port` - zostaw `3306`

10. W sekcji `Additional configuration`:
* `Initial database name` - pandy
* `DB parameter group` - wybierz `default.mysql5.7`
* `Option group` - wybierz `default:mysq-5-7`
* `IAM db authenitcation` - zostaw odznaczone `Enable IAM DB authentication`
* `Backup retention period` wybierz `7 days`
* `Backup window` - wybierz no `No preferences`
* zostaw odznaczone sekcje `Monitoring` , `Log exports`
* `Maintance` - zostaw zaznaczone `Enable auto minor version upgrade`, a `Maintainance window` - `No preference`

11. Wreszcie wybierz `Create database`

12. Wygoogluj i ściągnij `SQLectron`, klienta do podłączenia się do Twojej bazy danych. 
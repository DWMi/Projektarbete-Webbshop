# Projektarbete-Webbshop


Hello and welcome to Sneakers! This is a web shop made as an assignment for Medie Institutet. 

We are five guys who together have developed this site from scratch. The project has been a great way to learn how to plan and execute a full scale project. There has been a couple of setbacks during the time of the project but one by one we have been able to solve it and move on.

The requirements of the assignment is as follows (in Swedish):

[X] Alla sidor ska vara responsiva.
[X] Arbetet ska implementeras med objektorienterade principer.
[X] Skapa ett konceptuellt ER diagram, detta ska lämnas in vid idégodkännandet.
[X] Beskriv er företagsidé i en kort muntlig presentation vid idégodkännandet.
[X] Det ska finnas en kortare text som beskriver erat projekt i er readme.md.
[X] All data som programmet utnyttjar ska vara sparat i en MYSQL databas (produkter, beställningar, konton, mm. ej kundvagn).
[X] Det ska finnas ett normaliserat diagram över databasen i ert GitHub-Repo.
[X] Man ska kunna logga in som administratör i systemet.
[X] Inga lösenord får sparas i klartext i databasen.
[] En besökare ska kunna beställa produkter från sidan, detta ska uppdatera lagersaldot i databasen. 
- Detta är inte gjort då vi har valt att användaren måste vara inloggad för att få göra köp.
[X] Administratörer ska kunna uppdatera antalet produkter i lager från admin-delen av sidan.
[X] Administratörer ska kunna se en lista på alla gjorda beställningar. 
[X] Sidans produkter ska delas upp i kategorier, en produkt ska tillhöra minst en kategori, men kan tillhöra flera.
[X] Från hemisdan ska man kunna se en lista över alla produkter, och man ska kunna lista bara dom produkter som tillhör en kategori.
[X] Kunder ska kunna lägga produkterna i en kundkorg, som är sparad i session på servern.
[X] Man ska från hemsidan kunna skriva upp sig för att få butikens nyhetsbrev genom att ange sitt namn och epostadress.
[X] Administratörer ska kunna se en lista över personer som vill ha nyhetsbrevet och deras epostadresser.
[X] Alla kunder ska sparas i databasen och innehålla minst Förnamn (string), Efternamn (string), Adress (string) och om hen godkänner köpvillkoren (boolean).
[X] Kunder ska kunna välja ett av flera fraktalternativ.
[X] Tillgängliga fraktalternativ ska vara hämtade från databasen.
[X] När man gör en beställning ska kunden också få chansen att skriva upp sid för nyhetsbrevet.
[X] Kunden måste ha ett registrerat konto för att få göra ett köp (registreringsfunktion ska finnas). Tänk på att en administratör också kan vara en kund.
[X] När man är inloggad som kund ska man kunna se sina gjorda beställningar och om de är skickade eller inte.
[X] Man ska kunna ansöka om att bli administratör på sidan, endast befintliga administratörer kan godkänna dessa (måste finnas ett gränssnitt för detta).
[X] En administratör behöver godkännas av en tidigare administratör innan man kan logga in som administratör.
[X] Administratörer ska kunna redigera vilka kategorier en produkt tillhör.
[X] Administratörer ska kunna skicka nyhetsbrev från sitt gränssnitt, nyhetsbrevet ska sparas i databasen samt innehålla en titel och en brödtext.
[X] Som inloggad kund ska man kunna markera sin beställning som mottagen, detta ska sparas i databasen.
[X] Administratörer ska kunna lägga till och ta bort produkter.
[X] Om en produkt är slut i saldo ska detta visas på sidan. Kunden ska inte heller kunna köpa denna produkt tills ett positivt saldo finns.
[X] Administratörer ska kunna markera beställningar som skickade och se vilka ordrar som blivit mottagna. 
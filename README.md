# ArtPage - Adams Eple (intro-prosjekt)

Nettsiden er et morsomt lite galleri, som er en viss interaktivtitet. 
Ved å bruke teknologiene SVG og Canvas fremstiller jeg to like bilder. 
Ved å hovre over eplet kan du får det til å falle ned fra stammen. Ved å klikke på blomsten endrer den sin fargefremkomst.
Denne nettsiden var et morsomt prosjekt som introduserte meg til javascript, jQuery, SVG og Canvas. 
Føl deg fri til å teste ut nettside Adams eple!

![image](https://user-images.githubusercontent.com/69898083/96386149-1088c780-1199-11eb-8074-7eeb060a7d94.png)

## Dokumentasjon

### CSS-Grid

Jeg valgte å bruke CSS-grid i prosjektet mitt, 
fordi det ga meg mulighet til å plassere elementene der jeg ønsket de skulle være. 
Selv om det hadde gått fint å bruke Flexbox, hadde jeg hørt anbefalinger om Grid og tok derfor i bruk det. 
Jeg brukte Grid til å plassere tekst som skulle ligge på samme rad, samt bilder som skulle stå ved siden av hverandre. 
Ved å først samle elementene/teksten med div, kunne jeg deretter med Grid gi canvas-boksen halvparten av siden og SVG-boksen den andre halvparten. 
Slik ville boksene tilpasse seg ved krymping og utvidelse av vinduet.

### SVG og CANVAS

For å tegne figurene i SVG bruke jeg circle og rect. 
Siden det var lite kode valgte jeg å skrive SVG-elementene inne 
i HTML-filen. Fargen på elementene bestemte jeg i SVG, 
mens jeg brukte CSS for farge av bakgrunn samt logikk for når jeg hovret over. 
Logikken for bytting av farge ved klikk brukte jeg funksjonen animate, som jeg skrev 
under SVG-en i body. Group (g) ble brukt for å samle elementene og jeg ga dem ID for å kunne implementere logikk til bestemte deler. 

I HTML-filen har jeg et canvas element som spesifiserer størrelse på boksen. 
Jeg lenker deretter til en egen canvas-fil hvor jeg har alle tegningene mine. 
For å kunne implementere logikk ved hover over lagde jeg en funksjon for hvert 
element som ble tegnet og samlet alle under drawCanvas(). For å få eple til å falle 
lagde jeg en animate() funksjon som kallet på funksjonen clear() og drawCanvas(). 
Clear() funksjonen sletter hele tegningen. For hver gang det ble tegnet på nytt ble 
y-koordinaten til eple endret. Dette skapte animasjonen. “Onclick” og if-funksjon inne 
drawFlower() ble brukt for å kunne endre farge på blomsten ved klikk på canvas-boksen.

### jQuery

Hentet inn src med jQuery i script i HTML. Jeg brukte jQuery til canvas.js filen, 
samt for klikking for dokumentasjon. SlideToggle("slow") 
gjorde det mulig å få opp dokumentasjonen ved klikk, 
og fjerne den igjen ved nytt klikk. Jeg brukte ikke jQuery for logikk 
til SVG, fordi jeg følte jeg kunne løse det på andre måter. 
Om jeg skulle gjort prosjektet igjen hadde jeg nok brukt jQuery til all logikk, ettersom det var et godt verktøy.

### Testing

Testingen ble gjort manuelt ved at jeg åpnet nettsiden med 
siste versjon av Crome og Safari. Utseende er 
likt og oppførselen er lik i begge nettleserne, 
bort sett fra når man tar vekk musen fra SVG-boksen 
i Safari så stopper eple, mens i Crome går den til toppen av treet igjen. Alle interaksjonen ble ellers som forventet.







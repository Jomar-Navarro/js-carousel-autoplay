js-carousel-autoplay
===

Riprendendo il carousel realizzato in passato  e con le Timeng Function rendete lo scroll automatico ogni 3 secondi.
Attenzione: dopo l’ultima slide deve riapparire la prima e così via

**BONUS**

Per evitare conflitti con lo scroll manuale, quando il mouse si trova sopra lo slider lo scroll automatico si interrompe per poi ripartire all’uscita del mouse.

## SVOLGIMENTO

1. Ho creato una costante che richiama una funzione ad uno specifico intervallo di tempo (3 secondi);
2. Ho creato una funzione che include tutte i comandi di funzione dei bottoni;
3. Per non creare rindondanze nel codice ho cancellato le ripetizioni all'interno degli eventi.
4. Negli eventi click ho ripreso il l'argomento della funzione;
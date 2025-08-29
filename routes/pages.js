// src/routes/pages.js
const express = require('express');
const router = express.Router();

// Endpoint Visione e Missione
router.get('/visionemissione', (req, res) => {
  res.json({
    titolo: "La Nostra Visione e Missione",
    principiIspiratori: {
      titolo: "Principi Ispiratori",
      paragrafi: [
        "L’Associazione IncontRho nasce nel 2001 per sostenere chi, nella vita, ha incontrato il dolore della mente in tutte le sue forme, disturbi passeggeri o patologie psichiatriche. Il sostegno è rivolto alle persone che ne soffrono e ai loro famigliari.",
        "IncontRho è un’associazione composta da: famiglie coinvolte nell’assistenza al disagio mentale; da chi è personalmente in cura; da volontari e cittadini di buona volontà; da formatori e specialisti.",
        "L’obiettivo dell’associazione è quello di sostenere persone e famiglie gravate dalla malattia mentale. IncontRho incoraggia le persone in cura e i cittadini più sensibili a frequentarsi e a trascorrere insieme momenti di svago e di crescita culturale.",
        "IncontRho, come incontro. Perché siamo costantemente aperti al dialogo, all’incontro autentico, all’amicizia.",
        "L’associazione IncontRho Onlus difende i principi introdotti nella legislazione italiana dalla legge 180/1978, la ‘Legge Basaglia’, che consegna il tema della Salute Mentale alle cure e alla prevenzione sul Territorio.",
        "Come scritto nella “Dichiarazione sulla Salute Mentale per l’Europa” (Conferenza Ministeriale Europea dell’OMS sulla Salute Mentale, gennaio 2005): LA SALUTE MENTALE E IL BENESSERE SONO FONDAMENTALI PER LA QUALITA’ DELLA VITA.",
        "La promozione e la tutela della salute mentale migliorano la qualità della vita e il benessere di tutta la popolazione, dando luogo a coesione sociale, pace e produttività."
      ]
    },
    obiettivi: {
      titolo: "I Nostri Obiettivi",
      punti: [
        "Favorire il benessere delle persone con disagio psichico e/o psicologico, attraverso l’ascolto e l’accoglienza. IncontRho offre attività ricreative e servizi di ascolto psicologico gratuito, consulenza sul tema dell’Amministratore di Sostegno.",
        "Sostenere i percorsi di guarigione delle persone affette da disturbi psichici e/o psicologici, fornendo indicazioni concrete e servizi di accompagnamento alla cura in collaborazione con Enti Sociali e Sanitari.",
        "Sostenere la tenacia dei famigliari delle persone affette da disagio patologico.",
        "Combattere lo stigma e il pregiudizio, promuovendo comprensione e accoglienza attraverso campagne di sensibilizzazione."
      ]
    },
    visioneFinale: "La nostra visione è un futuro in cui la salute mentale sia riconosciuta e supportata in ogni aspetto della vita."
  });
});


router.get('/volontariato', (req, res) => {
    res.json({
      titolo: "Unisciti al Nostro Volontariato",
      introduzione: {
        titolo: "Fai la Differenza con il Tuo Tempo e la Tua Sensibilità",
        testo: "Il volontariato è il cuore pulsante di IncontRho. Il tuo tempo, la tua sensibilità ed esperienza possono diventare un aiuto prezioso per la nostra associazione e i nostri familiari. Cerchiamo persone di buona volontà, aperte al dialogo e all'amicizia, che vogliano contribuire attivamente al benessere delle persone con disagio psichico."
      },
      comeContribuire: {
        titolo: "Come Puoi Contribuire",
        descrizione: "Le nostre attività e i nostri laboratori ti offrono un ventaglio di scelta ampio in cui applicare le tue attitudini di volontario. Puoi impegnarti in diverse aree:",
        punti: [
          {
            titolo: "Sportello Accoglienza e Primo Ascolto",
            dettagli: "Per offrire supporto e consulenza (se sei un volontario esperto o psicologo/consulente familiare)."
          },
          {
            titolo: "Laboratori Ricreativi e Formativi",
            dettagli: [
              "Gruppo Musicale Poetico “Canta che ti passa”",
              "Orticoltura “La Terra l’è bassa”",
              "Laboratorio Artistico - Espressivo",
              "Corso base Computer e Smartphone",
              "Laboratorio Alimentazione e Salute",
              "Creazione candele artigianali, pittura su tela, pittura su vetro, realizzazione di scatolette in legno e altre attività"
            ],
            nota: "In queste attività, il tuo ruolo può essere quello di affiancare gli utenti, insegnare una competenza, o semplicemente partecipare e favorire la socializzazione."
          },
          {
            titolo: "Attività di Socializzazione",
            dettagli: "Accompagnare alle 'Serate Bowling', partecipare alle uscite per le partite o concerti a San Siro."
          },
          {
            titolo: "Attività di Supporto e Inclusione Sociale",
            dettagli: [
              "Distribuzione di opuscoli e locandine",
              "Invio della corrispondenza ai soci",
              "Attività di promozione presso feste ed eventi",
              "Offrire passaggi in auto verso i servizi ai pazienti e/o ai famigliari meno autonomi",
              "Presenza e mediazione tra medico e paziente"
            ]
          },
          {
            titolo: "Supporto alla Gestione Associativa",
            dettagli: "Aiuto nell'organizzazione di riunioni, segreteria, comunicazione."
          }
        ]
      },
      comeDiventareVolontario: {
        titolo: "Come Diventare Volontario per la Salute Mentale",
        descrizione: "Se sei interessato/a a dedicare parte del tuo tempo e delle tue energie alla nostra causa, ti invitiamo a contattarci. Puoi frequentarci per un certo periodo per conoscere quello che facciamo, senza impegno.",
        contatti: {
          email: "infoincontrho@gmail.com",
          riferimento: "Oppure ai numeri dell'Organismo Direttivo in Accoglienza e Ascolto"
        }
      },
      footer: "Unisciti a noi e contribuisci a costruire un mondo più accogliente e inclusivo per tutti!"
    });
  });


  router.get('/attivismo', (req, res) => {
    res.json({
      titolo: "Unisciti al Nostro Attivismo",
      introduzione: {
        titolo: "La Nostra Lotta Contro lo Stigma e il Pregiudizio",
        testo: "IncontRho è in prima linea per combattere lo stigma e il pregiudizio che purtroppo connota il mondo della salute mentale. Chi ha problemi di ordine psicologico e/o psichiatrico tende a isolarsi e a rendersi vulnerabile, perché ciò che gli succede è difficile da capire. Il nostro attivismo mira a promuovere la comprensione e l’accoglienza verso chi soffre di disagio interiore."
      },
      campagneSensibilizzazione: {
        titolo: "Campagne di Sensibilizzazione e Informazione",
        descrizione: "Realizziamo e partecipiamo attivamente a campagne di sensibilizzazione e informazione in diversi contesti:",
        esempi: [
          "Presso Scuole Superiori, in collaborazione con psicologi e assistenti sociali",
          "Nelle Comuni e in Regione, per diffondere cultura della salute mentale",
          "In piazze e convegni, per raggiungere un pubblico ampio"
        ]
      },
      partecipazioneRete: {
        titolo: "Partecipazione e Lavoro di Rete",
        descrizione: "Il nostro attivismo si esprime anche attraverso il costante lavoro di rete e la partecipazione a organismi chiave:",
        punti: [
          "Partecipazione agli Organismi di Coordinamento per la Salute Mentale nell'ASL MI 1 e ai Tavoli Distrettuali",
          "Collaborazione con i Servizi Sociali del Rhodense, Consultori ASL e unità operative di Psichiatria",
          "Partecipazione a organismi regionali (URASAM) e nazionali (UNASAM)",
          "Animazione della rete di cittadinanza attiva F@re Diversamente, promuovendo solidarietà e attività gratuite",
          "Partecipazione a tavoli di coordinamento istituzionale presso ASST e SerCoP"
        ]
      },
      footer: "Unisciti al nostro impegno per un cambiamento culturale profondo. Ogni voce è importante per costruire una società più inclusiva e informata sulla salute mentale."
    });
  });


  router.get('/trasparenza', (req, res) => {
    res.json({
      titolo: "Trasparenza e Governance",
      portatoriInteresse: {
        titolo: "I Nostri Portatori di Interesse",
        testo: "L’associazione IncontRho è punto di incontro tra chi opera per attivare e strutturare le attività associative e chi vi affluisce tra i cittadini del territorio."
      },
      organismiAssociativi: {
        titolo: "Organismi Associativi",
        assemblea: "L’Assemblea è il massimo organo deliberante dell’Associazione.",
        consiglioDirettivo: {
          descrizione: "Composto da un massimo di 11 membri che durano in carica 3 anni:",
          membri: [
            "Chiara Vassallo",
            "Luisa Mariotti",
            "Alberto Savoia",
            "Michela La Pica",
            "Patrizia Levrè",
            "Cristina Proietti",
            "Barbara Bari",
            "Emanuela Mandelli",
            "Amedeo Montiglio",
            "Franco De Leo",
            "Rosaria Viola"
          ],
          nomine: {
            presidente: "Chiara Vassallo",
            vicepresidente: "Luisa Mariotti",
            segretarioEVicepresidente: "Franco De Leo",
            tesoriereEVicesegretario: "Amedeo Montiglio"
          }
        },
        comitatoPresidenza: "Composto dal presidente, dai vicepresidenti, dal segretario e dal tesoriere.",
        soci: "I Soci sono tutti coloro che aderiscono all’associazione."
      },
      soggettiServizi: {
        titolo: "Soggetti che fruiscono dei nostri servizi",
        punti: [
          "Utenti dei servizi di psichiatria del DSM del Rhodense",
          "Persone affette da disagio psicologico accolte presso lo Sportello",
          "Persone/famiglie che necessitano supporto sull’Amministratore di Sostegno",
          "Operatori del Dipartimento di Salute Mentale che collaborano con i volontari"
        ]
      },
      footer: "Crediamo in una governance trasparente, partecipata e vicina ai bisogni del territorio."
    });
  });


  router.get('/sostegno', (req, res) => {
    res.json({
      titolo: "Sostegno al Recupero",
      percorsiReintegrazione: {
        titolo: "Percorsi di Reintegrazione e Autonomia",
        testo: "IncontRho supporta attivamente le persone con disagio psichico nel loro percorso di recupero e reintegrazione sociale. Il nostro obiettivo è favorire lo sviluppo delle autonomie personali e migliorare la qualità della vita, promuovendo l'inclusione e la partecipazione attiva nella comunità."
      },
      percorsiGuarigione: {
        titolo: "Sostenere i Percorsi di Guarigione",
        testo: "Sosteniamo i percorsi di guarigione delle persone affette da disturbi psichici e/o psicologici: attraverso la nostra disponibilità e competenza nel fornire indicazioni concrete offriamo servizi di accompagnamento alla cura. Ciò è possibile grazie al nostro costante lavorare in rete con gli Enti erogatori di Servizi Sociali e Sanitari, quali il Dipartimento di Salute Mentale, i Servizi Sociali dei Comuni del Rhodense, la ASL Milano 1. Inoltre, offriamo presenza e mediazione, dove necessario, tra il medico e il paziente presso i vari presidi residenziali o ambulatoriali del dipartimento di psichiatria."
      },
      inclusioneSociale: {
        titolo: "Opportunità di Inclusione Sociale",
        testo: "Organizziamo presso la nostra sede, per i pazienti di tutte le età, attività mattutine e pomeridiane a cadenza settimanale, gratuite e aperte a tutti, sia per chi è in cura psichiatrica sia per chi non lo è. Offriamo agli utenti dell’associazione l’opportunità di cimentarsi con piccole attività, come la distribuzione di opuscoli e locandine, l’invio della corrispondenza ai soci, l’attività di promozione presso feste ed eventi. Tutte occasione di ‘palestra’ verso l’inserimento lavorativo. Organizziamo momenti per il tempo libero, dal biliardino alla lettura dei giornali o il gioco a carte. Organizziamo gite e momenti di svago, nella natura o per conoscere le belle città d’Italia. I momenti ricreativi sono aperti a tutti, pazienti, famigliari, volontari, cittadini interessati."
      },
      footer: "Crediamo nel potenziale di ogni individuo e lavoriamo per un futuro di maggiore autonomia e benessere."
    });
  });


  router.get('/formazione', (req, res) => {
    res.json({
      titolo: "Programmi di Formazione",
      corsiApprendimento: {
        titolo: "Corsi e Percorsi di Apprendimento per la Salute Mentale",
        testo: "IncontRho offre e promuove programmi di formazione volti a sensibilizzare, informare e fornire strumenti pratici per affrontare il disagio psichico, sia per le famiglie e i caregiver, sia per la comunità in generale. Crediamo che la conoscenza sia un passo fondamentale per ridurre lo stigma e migliorare il supporto alle persone con difficoltà psicologiche."
      },
      formazioneTempoLibero: {
        titolo: "Formazione e Tempo Libero",
        testo: "L’Associazione propone laboratori ricreativi e formativi aperti a tutti, gratuiti, allo scopo di insegnare e di apprendere nuove pratiche utili nella vita quotidiana. L’obiettivo di fondo è incentivare le relazioni benefiche tra cittadini, creando occasioni di integrazione per chi è in cura psicologica e/o psichiatrica.",
        laboratori: [
          "Orticoltura: pratica nell’orto e lezioni teoriche.",
          "Computer Corso Base: per imparare o perfezionare l'uso di computer e smartphone.",
          "Laboratorio Alimentazione e Salute: con attività pratiche in cucina.",
          "Altre attività di cui informiamo di volta in volta (creazione candele artigianali, attività in rete con le altre associazioni rhodensi)."
        ],
        nota: "La frequentazione ai Laboratori Formazione e Tempo Libero è gratuita."
      },
      formazioneTerritorioFamiliari: {
        titolo: "Formazione sul Territorio e per Familiari",
        punti: [
          "Nel campo della formazione, partecipiamo alla realizzazione di seminari e conferenze sul tema del disagio psichico, beneficiando della preziosa assistenza di Ciessevi, Centro Servizi Volontariato.",
          "Proponiamo formazione e informazione sul tema ‘Amministrazione di Sostegno e Rete di Servizi’, e su altri temi di interesse per la famiglia gravata da disabilità e disagio psichico.",
          "Ci formiamo e informiamo su ruolo e azione degli psicofarmaci, sulla necessità della contenzione negli SPDC, sul futuro degli OPG, e su altri temi sanitari in collaborazione con URASAM, il referente regionale per le associazioni famiglie e volontari in psichiatria."
        ]
      },
      footer: "Per informazioni sui prossimi programmi di formazione o per proporre nuove iniziative, contattaci."
    });
  });


  router.get('/progetti-attivita', (req, res) => {
    res.json({
      titolo: "Progetti e Attività",
      introduzione: "L’Associazione IncontRho è attiva sul territorio rhodense da 20 anni nel campo della salute mentale, in stretta collaborazione con l’Unità Operativa di Psichiatria.",
      proposteFamiglia: {
        titolo: "Le Proposte alla Famiglia e alla Persona",
        descrizione: "Al fine di migliorare la quotidianità delle famiglie che hanno in casa un malato psichico:",
        punti: [
          "Proponiamo gruppi di Auto Mutuo Aiuto, guidati da una consulente famigliare.",
          "Offriamo consulenza sui servizi territoriali, pratiche burocratiche, amministrazione di sostegno e accesso al lavoro protetto.",
          "Offriamo colloqui psicologici e di consulenza famigliare gratuiti."
        ]
      },
      laboratori: {
        titolo: "Formazione e Tempo Libero",
        descrizione: "Laboratori ricreativi e formativi aperti a tutti, gratuiti.",
        esempi: [
          "Gruppo Musicale Poetico Kanta Chetipassa",
          "Arte e Orticoltura La Terra l’è bassa",
          "Gruppo per hobby e socialità Amicizia e Creatività",
          "Computer Corso Base",
          "Laboratorio Alimentazione e Salute",
          "Creazione candele artigianali, pittura su tela e su vetro, scatolette in legno"
        ],
        note: "La frequentazione ai laboratori è gratuita. Iscrizione facoltativa."
      },
      tempoLibero: {
        titolo: "Momenti per il Tempo Libero e Socializzazione",
        attività: [
          "Serate Bowling una volta al mese a Garbagnate Milanese",
          "Andiamo insieme a San Siro per partite o concerti"
        ]
      },
      proposteTerritorio: {
        titolo: "Le Proposte al Territorio: In Rete per Fare Meglio",
        punti: [
          "Partecipazione agli Organismi di Coordinamento per la Salute Mentale",
          "Collaborazione con Servizi Sociali e Consultori ASL",
          "Partecipazione a URASAM e UNASAM",
          "Formazione e seminari per famiglie",
          "Promozione rete La Rete del F@re Diversamente",
          "Formazione e informazione su Amministrazione di Sostegno"
        ]
      },
      collaborazioneServizi: {
        titolo: "Collaborazione con i Servizi Socio Sanitari",
        punti: [
          "Collaborazione con Dipartimento di Salute Mentale",
          "Partecipazione a tavoli di coordinamento istituzionale",
          "Formazione su psicofarmaci, contenzione SPDC, futuro OPG",
          "Presenza e mediazione tra medico e paziente",
          "Supporto ai pazienti meno autonomi"
        ]
      },
      inclusioneSociale: {
        titolo: "Opportunità di Inclusione Sociale",
        punti: [
          "Attività mattutine e pomeridiane gratuite aperte a tutti",
          "Piccole attività pratiche per inclusione e inserimento lavorativo",
          "Accoglienza di famiglie, operatori e cittadini",
          "Accoglienza dei giovani per alternanza scuola-lavoro"
        ]
      }
    });
  });


  router.get('/prevenire-proteggere', (req, res) => {
    res.json({
      titolo: "Prevenire è Proteggere",
      introduzione: "La prevenzione è un pilastro fondamentale della nostra missione. IncontRho si impegna a promuovere la salute mentale e a prevenire l'insorgenza di disagio psichico attraverso attività di sensibilizzazione e informazione rivolte a tutta la comunità.",
      principi: [
        "Crediamo che un ambiente informato e supportivo possa fare la differenza nel ridurre i fattori di rischio e nel favorire il benessere psicologico."
      ],
      campagne: {
        titolo: "Campagne di Sensibilizzazione e Informazione",
        descrizione: "Al fine di prevenire il disagio psichico in tutte le persone:",
        punti: [
          "Offriamo a tutti i cittadini un servizio gratuito di orientamento psicologico e di consulenza famigliare.",
          "Entriamo nelle scuole superiori per parlare di salute mentale, come riconoscere il disagio, a chi rivolgersi. Gli incontri sono condotti nelle scuole in collaborazione con la psicologa e con l’assistente sociale dell’equipe TAG (Team Accesso Giovani) interna al dipartimento di psichiatria territoriale.",
          "Animiamo concretamente la rete di cittadinanza attiva F@re Diversamente, in sinergia con il dipartimento di psichiatria e con il progetto Oltre i perimetri. La rete promuove solidarietà e attività gratuite per tutti, per prevenire l’isolamento e per creare occasioni di amicizia tra cittadini.",
          "Attraverso campagne di sensibilizzazione (presso Scuole, Comuni, Regione, piazze e convegni e altri luoghi) promuoviamo la comprensione e l’accoglienza verso chi soffre di disagio interiore, combattendo lo stigma e il pregiudizio."
        ]
      },
      callToAction: "Unisciti a noi per costruire una comunità più consapevole e attenta alla salute mentale!"
    });
  });


  router.get('/partnership-collaborazioni', (req, res) => {
    res.json({
      titolo: "Partnership e Collaborazioni",
      introduzione: "IncontRho crede fermamente nel valore della rete e della collaborazione per massimizzare l'impatto delle proprie azioni. Lavoriamo attivamente con enti pubblici, istituzioni, altre associazioni e il settore privato per promuovere la salute mentale e il benessere sociale.",
      collaborazioni: {
        titolo: "Le Nostre Collaborazioni sul Territorio",
        descrizione: "L’Associazione IncontRho opera in stretta collaborazione con l’Unità Operativa di Psichiatria del territorio, i presidi socio sanitari di Rho e Settimo Milanese e i seguenti enti:",
        enti: [
          "Organismi di Coordinamento per la Salute Mentale nell'ASL MI 1 e Tavoli Distrettuali per la Salute Mentale.",
          "Servizi Sociali dei Comuni del Rhodense.",
          "Consultori ASL.",
          "Unità Operativa di Psichiatria di Rho e Settimo Mil.se, inclusi Centro Psico Sociale, Centri Diurni e Comunità Alloggio.",
          "Organismi di livello regionale come URASAM (Unione Regionale Associazioni per la Salute Mentale) e UNASAM (Unione Nazionale delle Associazioni per la Salute Mentale).",
          "Ciessevi, Centro Servizi Volontariato, per la realizzazione di seminari e conferenze.",
          "La Rete del F@re Diversamente, che coinvolge numerose associazioni e cooperative sociali del Rhodense, di cui siamo fondatori insieme ad associazioni come Sesamo di Rho e Nazaret di Arese."
        ],
        note: [
          "Collaboriamo attivamente con gli enti socio sanitari locali, soprattutto con il Dipartimento di Salute Mentale che ci invia costantemente pazienti idonei a frequentare le nostre attività.",
          "Partecipiamo a tavoli di coordinamento istituzionale sui nuovi progetti e sulla situazione esistente, come quelli presso ASST e SerCoP, al fine di rappresentare il punto di vista di utenti, famigliari e volontari."
        ]
      },
      invito: {
        titolo: "Invito alla Collaborazione",
        descrizione: "Se la tua organizzazione, azienda o ente desidera esplorare opportunità di partnership o collaborazione con IncontRho per progetti legati alla salute mentale e al benessere della comunità, ti invitiamo a contattarci. Siamo sempre aperti a nuove sinergie per ampliare il nostro impatto."
      },
      callToAction: [
        "Insieme possiamo costruire una rete più forte e inclusiva a sostegno della salute mentale.",
        "Contattaci per discutere le possibili sinergie: infoincontrho@gmail.com"
      ]
    });
  });


  router.get('/carta-dei-servizi', (req, res) => {
    res.json({
      titolo: "La Carta dei Servizi",
      introduzione: "La Carta dei Servizi è uno strumento di dialogo e di trasparenza, atto a illustrare con chiarezza i servizi che l’Associazione IncontRho offre sul territorio e ad accogliere proposte e suggerimenti da Enti e Cittadini.",
      descrizione: [
        "La Carta dei Servizi consente agli Enti che collaborano con l’Associazione di apprendere chiaramente servizi e attività della stessa, espressamente dichiarati allo scopo di divulgare l’offerta e di renderla facilmente monitorabile.",
        "Inoltre, la carta dei servizi è una valida “cartina di tornasole” per la stessa Associazione, che potrà verificare costantemente l’adesione tra servizi annunciati e operato concreto."
      ],
      callToAction: "Per maggiori dettagli o per consultare la versione completa della Carta dei Servizi, contattaci o scarica il documento completo (se disponibile)."
    });
  });


  router.get('/supporto', (req, res) => {
    res.json({
      titolo: "Il Tuo Supporto per IncontRho",
      introduzione: "Il tuo contributo è fondamentale per permetterci di continuare a sostenere chi ha incontrato il dolore della mente e le loro famiglie. Ogni gesto di supporto ci aiuta a portare avanti le nostre attività e i nostri progetti sul territorio.",
      donazioni: {
        bonifico: {
          banca: "BPM",
          iban: "IT70 P0503 43244 00000 00015",
          intestatario: "IncontRho APS"
        },
        cinqueX1000: {
          codiceFiscale: "93529140159",
          spiegazione: "È sufficiente la tua firma e il nostro codice fiscale nel riquadro “Sostegno degli enti del Terzo Settore” della dichiarazione dei redditi."
        },
        linkBeneficiFiscali: "/benefici-fiscali-delle-donazioni"
      },
      volontariato: {
        descrizione: "Il tuo tempo, la tua sensibilità ed esperienza possono diventare un aiuto prezioso per la nostra associazione e i nostri familiari. Le nostre attività e i nostri laboratori ti offrono un ventaglio di scelta ampio in cui applicare le tue attitudini di volontario.",
        linkPagina: "/unisciti-al-nostro-volontariato"
      },
      footer: "Grazie per il tuo prezioso sostegno. Insieme possiamo fare la differenza!"
    });
  });


 
router.get('/home', (req, res) => {
    res.json({
      titolo: "Famiglie e Volontari del Rhodense per la Salute Mentale",
      sottotitolo: "L’associazione IncontRho è attiva sul territorio Rhodense da 20 anni nel campo della salute mentale, in stretta collaborazione con il Dipartimento Salute Mentale e Dipendenze",
      linkMissione: "/visione-missione"
    });
  });
  

  router.get('/contatti', (req, res) => {
    res.json({
      sedi: [
        {
          nome: "Sede 1",
          indirizzo: "Piazza Chiesa, 20, 20017 Rho MI",
          mappaEmbedUrl: "https://www.google.com/maps/d/u/0/embed?mid=1GneUAQvdOte9rtI0szf2VSoIc7r10PM&ehbc=2E312F"
        },
        {
          nome: "Sede 2",
          indirizzo: "Via Antonio Gramsci, 63, 20044 Arese MI",
          mappaEmbedUrl: "https://www.google.com/maps/d/u/0/embed?mid=1GBXYjxNfBSgBTaVHFGflQWGkPEeTvwk&ehbc=2E312F"
        }
      ],
      contatti: [
        { tipo: "Sportello Amministrazione di Sostegno", telefono: "+39 380 217 7967", email: "ads.incontrho@gmail.com" },
        { tipo: "Sportello di ascolto psicologico e consulenza familiare", telefono: "+39 333 839 5158" },
        { tipo: "Segreteria IncontRho", telefono: "+39 340 534 8353", email: "infoincontrho@gmail.com" },
        { tipo: "Amministrazione", telefono: "+39 333 225 8026", email: "segreteria.incontrho@gmail.com" }
      ]
    });
  });


  router.get('/benefici-fiscali', (req, res) => {
    res.json({
      personeFisiche: {
        detrazione: "Detrazione 30% fino a 30.000€ (art. 83, comma 1 D.Lgs. 117/2017)",
        deduzione: "Deduzione fino al 10% del reddito complessivo dichiarato (art. 83, comma 2 D.Lgs. 117/2017)"
      },
      entiNonCommerciali: {
        deduzione: "Deduzione fino al 10% del reddito complessivo dichiarato (art. 83, comma 2 D.Lgs. 117/2017)"
      },
      cinqueX1000: {
        codiceFiscale: "93529140159",
        info: "Il 5x1000 non è una donazione, ma quota IRPEF a cui lo Stato rinuncia per sostenere il Terzo Settore."
      }
    });
  });
  
module.exports = router;

var PROJECTS = {

    "asti-cuneo": {
        titleIt: "Autostrada Asti-Cuneo",
        titleEn: "Asti-Cuneo Motorway",
        updateIt: "ULTIMO AGGIORNAMENTO: 12/2025",
        updateEn: "LAST UPDATE: 12/2025",
        sectorIt: "SETTORE: VIABILITÀ",
        sectorEn: "SECTOR: ROADS",
        image: "images/Asti-Cuneo.jpg",
        startYear: 1998,
        endYear: 2026,
        faseIt: "Esecutivo",        faseEn: "Executive",
        costiTotali: "€ 348.000.000,00",
        statoIt: "In corso",        statoEn: "In progress",
        finanziamenti: "€ 348.000.000,00",
        rispettoIt: "In ritardo",   rispettoEn: "Delayed",
        fabbisogno: "0,00%",
        descIt: [
            "L'opera è inserita nell'Allegato al Documento di Economia e Finanza (DEF) 2021 tra gli \"Interventi prioritari e autostradali\".",
            "Il collegamento autostradale Asti-Cuneo presenta una lunghezza complessiva di 90 km e si divide in due tronchi, interconnessi da un tratto dell'autostrada A6 Torino-Savona:",
            "- tronco n. 1, costituito da n. 5 lotti, lunghezza complessiva: 32 km (tra svincolo di Massimini e Cuneo);",
            "- tronco n. 2 , costituito da n. 10 lotti, lunghezza complessiva: 58 km (tra svincolo di Marene e svincolo di Asti-est).",
            "Il primo tronco è stato interamente realizzato nel Febbraio 2012, mentre il secondo tronco ha registrato finalizzazione definitiva con il completamento del lotto 2.6B (Roddi- Verduno), aperto al traffico il 3 Aprile 2023, e del lotto 2.6A (Verduno-Cherasco) inaugurato a fine Dicembre 2025.",
            "L'autostrada A33 di collegamento tra i capoluoghi Asti-Cuneo è quindi percorribile nella sua interezza con configurazione di cantiere (carreggiate provvisorie e corsie ridotte) e sarà oggetto di ultimazione definitiva con opere complementari accessorie con previsione di completamento Aprile 2026.",
            "Con la conclusione del percorso relativo alla realizzazione dell'autostrada A33 Asti-Cuneo, prenderà quindi avvio la fase di completamento funzionale dell'infrastruttura attraverso le opere di adduzione e di collegamento con il territorio. A fine Dicembre 2025 è stato presentato il protocollo d'intesa tra Regione Piemonte, Provincia di Cuneo, i Comuni di Alba, Bra, Cherasco, La Morra, Roddi e Verduno e Autostrada Asti Cuneo S.p.A., propedeutico alla realizzazione delle opere di adduzione al lotto II.6A (ultimo tratto completato ad ultimazione dell'intera tratta autostradale A33 Asti-Cuneo), per un investimento complessivo di 43,149 milioni di euro.",
            "Tra gli interventi previsti a protocollo rivestono importanza strategica: l'adeguamento della SP 7 (tratto Roddi - svincolo Alba Ovest - rotatoria Ospedale di Verduno - Pollenzo, con ampliamento e consolidazione della sede stradale) ed il consolidamento dell'attuale ponte di Pollenzo sul Tanaro in previsione di un raddoppio."
        ],
        descEn: [
            "The project is included in the Annex to the Document of Economy and Finance (DEF) 2021 among the \"Priority and motorway interventions\".",
            "The Asti-Cuneo motorway connection has a total length of 90 km and is divided into two sections, interconnected by a stretch of the A6 Turin-Savona motorway:",
            "- Section no. 1, consisting of 5 lots, total length: 32 km (between Massimini junction and Cuneo);",
            "- Section no. 2, consisting of 10 lots, total length: 58 km (between Marene junction and Asti-east junction).",
            "The first section was fully completed in February 2012, while the second section was definitively finalised with the completion of lot 2.6B (Roddi-Verduno), opened to traffic on 3 April 2023, and lot 2.6A (Verduno-Cherasco) inaugurated at the end of December 2025.",
            "The A33 motorway connecting the capitals Asti-Cuneo is therefore driveable in its entirety with construction site configuration (temporary carriageways and reduced lanes) and will undergo final completion with complementary accessory works with an expected completion date of April 2026.",
            "With the conclusion of the construction of the A33 Asti-Cuneo motorway, the functional completion phase of the infrastructure will begin through the supply and territorial connection works. At the end of December 2025, the memorandum of understanding was presented between Regione Piemonte, Provincia di Cuneo, the Municipalities of Alba, Bra, Cherasco, La Morra, Roddi and Verduno and Autostrada Asti Cuneo S.p.A., preparatory to the realisation of the supply works for lot II.6A (last completed section finalising the entire A33 Asti-Cuneo motorway route), for a total investment of €43.149 million.",
            "Among the interventions planned under the protocol of strategic importance are: the upgrading of SP 7 (Roddi - Alba West junction - Verduno Hospital roundabout - Pollenzo, with widening and consolidation of the road surface) and the consolidation of the existing Pollenzo bridge over the Tanaro River in anticipation of a doubling."
        ]
    }

};

/* Name-to-ID mapping for all projects in the panel */
var PROJECT_NAME_MAP = {
    "A33 (tronco I A6-Cuneo)":          "asti-cuneo",
    "Linea Torino-Savona":               "linea-torino-savona",
    "Linea Fossano-Cuneo":               "linea-fossano-cuneo",
    "Variante di Demonte":               "variante-demonte",
    "SS21":                              "ss21",
    "Traforo Armo-Cantarana (SS28)":     "traforo-armo-cantarana",
    "Traforo di Tenda":                  "traforo-tenda",
    "SS20 - Colle di Tenda":             "ss20-colle-tenda",
    "SS28 - Colle di Nava":              "ss28-colle-nava",
    "Autoporto di Cuneo":                "autoporto-cuneo",
    "Interporto di Rivalta Scrivia":     "interporto-rivalta",
    "Aeroporto di Cuneo":                "aeroporto-cuneo",
    "Porto di Savona":                   "porto-savona",
    "Ferrovia Cuneo-Ventimiglia-Nizza":  "ferrovia-cuneo-ventimiglia",
    "SS231 - Tangenziale di Alba":       "ss231-tangenziale-alba"
};

/* Default placeholder used for any project without full data */
var PROJECT_DEFAULT = {
    titleIt: "Scheda in elaborazione",
    titleEn: "Project sheet in progress",
    updateIt: "ULTIMO AGGIORNAMENTO: —",
    updateEn: "LAST UPDATE: —",
    sectorIt: "SETTORE: —",
    sectorEn: "SECTOR: —",
    image: "",
    startYear: "—",
    endYear: "—",
    faseIt: "—",      faseEn: "—",
    costiTotali: "—",
    statoIt: "—",     statoEn: "—",
    finanziamenti: "—",
    rispettoIt: "—",  rispettoEn: "—",
    fabbisogno: "—",
    descIt: ["Le informazioni dettagliate per questo progetto saranno disponibili a breve."],
    descEn: ["Detailed information for this project will be available soon."]
};

function getProject(id) {
    return PROJECTS[id] || PROJECT_DEFAULT;
}

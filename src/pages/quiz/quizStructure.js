const quizStructure = [
    {
        id: 1,
        title: "Skal tabeller styre layout?",
        alternatives: [
            {
                id: 1,
                title: "Alternativ 1",
                content: "Tabeller skal aldri brukes for å styre layout",
                correct: true,
            },
            {
                id: 2,
                title: "Alternativ 2",
                content: "Tabeller skal alltids brukes for å styre layout",
                correct: false,
            },
        ],
        answer: "Informasjon, struktur og relasjoner som formidles via presentasjonen, kan bestemmes programmeringsmessig eller gjøres tilgjengelig(e) som tekst.",
    },
    {
        id: 2,
        title: "Hvordan skal man bruke <h1>?",
        alternatives: [
            {
                id: 1,
                title: "Alternativ 1",
                content: "Det skal kun være en <h1> på en side",
                correct: true,
            },
            {
                id: 2,
                title: "Alternativ 2",
                content:
                    "Man kan bruke så mange <h1> elementer man vil på en side",
                correct: false,
            },
            {
                id: 3,
                title: "Alternativ 2",
                content: "Breadcrums skal alltids være <h1>",
                correct: false,
            },
        ],
        answer: "Hovedinnholdets tittel skal være den første overskriften i koden, og skal være på nivå 1 ved hjelp av elementet <h1>",
    },
    {
        id: 3,
        title: "Velg riktig alternativ",
        alternatives: [
            {
                id: 1,
                title: "Alternativ 1",
                content:
                    "Man må ikke bruke ledertekster på skjemaelementer som input, radiobutton, checkbox, osv",
                correct: false,
            },
            {
                id: 2,
                title: "Alternativ 2",
                content:
                    "Alle skjemaelementer skal ha en ledertekst eller en instruksjon for hva brukeren skal fylle inn",
                correct: true,
            },
        ],
        answer: "Alle skjemaelement skal ha en tilknyttet ledetekst eller instruksjon slik at brukeren forstår hvordan skjemaet skal fylles ut. Dette gjelder også informasjon om at et skjemaelement er obligatorisk.",
    },
];

export default quizStructure;

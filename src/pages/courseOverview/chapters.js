const chapters = [
    {
        id: 1,
        title: "1. Mulig å oppfatte",
        progression: 60,
        subChapters: [
            {
                id: 1,
                title: "1.0 Introduksjon",
                completed: true,
            },
            {
                id: 2,
                title: "1.1 Tekstalternativ",
                completed: true,
            },
            {
                id: 3,
                title: "1.2 Tidsbaserte medier",
                completed: true,
            },
            {
                id: 4,
                title: "1.3 Mulig å tilpasse",
                completed: false,
                linkTo: "/chapter",
            },
            {
                id: 5,
                title: "1.4 Mulig å skille",
                completed: false,
            },
        ],
    },
    {
        id: 2,
        title: "2. Mulig å betjene",
        progression: null,
        subChapters: [
            { id: 1, title: "2.0 Introduksjon", completed: false },
            { id: 2, title: "2.1 Tastatustilgjengelighet", completed: false },
            { id: 3, title: "2.2 Nok tid", completed: false },
            { id: 4, title: "2.3 Anfall", completed: false },
            { id: 5, title: "2.4 Navigerbar", completed: false },
        ],
    },
    {
        id: 3,
        title: "3. Forståelig",
        progression: null,
        subChapters: [
            { id: 1, title: "3.0 Introduksjon", completed: false },
            { id: 2, title: "3.1 Forutsigbar", completed: false },
            { id: 3, title: "3.2 Inndatahjelp", completed: false },
        ],
    },
    {
        id: 4,
        title: "4. Robust",
        progression: null,
        subChapters: [
            { id: 1, title: "4.0 Introduksjon", completed: false },
            { id: 2, title: "4.1 Kompatibel", completed: false },
        ],
    },
];

export default chapters;

const actionsENG = [
    "I build ",
    "I translate ",
    "I curate ",
    "I question ",
    "I research ",
    "I write "
  ];
  const objectsENG = [
    "architecture",
    "language",
    "art",
    "gender",
    "research",
    "text"
  ];
  
  const actionsFRN = [
    "Je construis ",
    "Je traduis ",
    "Je cure ",
    "Je questionne ",
    "Je recherche ",
    "J'écris "
  ];
  const objectsFRN = [
    "l'architecture",
    "le langage",
    "l'art",
    "le genre",
    "la recherche",
    "des textes"
  ];
  
  const actionsSPA = [
    "Construyo ",
    "Traduzco ",
    "Comisario ",
    "Cuestiono ",
    "Investigo ",
    "Escribo "
  ];
  const objectsSPA = [
    "arquitectura",
    "el lenguaje",
    "el arte",
    "el género",
    "la investigación",
    "textos"
  ];
  
  const ActionLangList = [actionsENG, actionsFRN, actionsSPA];
  const ObjectLangList = [objectsENG, objectsFRN, objectsSPA];

  exports.langList = {ActionLangList, ObjectLangList};
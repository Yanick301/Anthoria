import { Exercise } from '@/lib/index';

export const EXERCISES: Exercise[] = [
  // ==========================================
  // MOBILISATION DES RESSOURCES EN EAU (60)
  // ==========================================
  {
    id: 'mre-001',
    subjectId: 'mobilisation-eau',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Quel est le moteur principal du cycle de l'eau sur Terre ?",
    choices: ["Le vent", "L'énergie solaire", "La force de Coriolis", "L'attraction lunaire"],
    correctAnswer: "L'énergie solaire",
    explanation: "C'est l'énergie solaire qui est le moteur ultime du cycle de l'eau. Par rayonnement, elle provoque l'évaporation de l'eau des océans et des continents.",
    methodology: "Pour identifier le moteur principal d'un cycle physique, cherche toujours la source d'énergie externe qui initie le changement d'état de la matière (ici, le passage du liquide au gazeux).",
    deepDive: "Le cycle de l'eau (hydrosphère) est un système fermé en masse mais ouvert en énergie. Environ 23% de l'énergie solaire arrivant sur Terre est utilisée pour l'évaporation, ce qui classifie le Soleil comme le chef d'orchestre du climat et de l'hydrologie mondiale.",
    points: 5
  },
  {
    id: 'mre-002',
    subjectId: 'mobilisation-eau',
    type: 'Calcul',
    difficulty: 'Moyen',
    question: "Si une zone reçoit 1200 mm de pluie par an et que l'évapotranspiration réelle (ETR) est de 800 mm, quel est l'écoulement annuel théorique (en mm) ?",
    choices: ["200", "400", "600", "800"],
    correctAnswer: "400",
    explanation: "Le calcul s'appuie sur l'équation fondamentale du bilan hydrologique : Pécipitations (P) = Évapotranspiration (ETR) + Écoulement (Q).",
    methodology: "Étape 1 : Identifie les variables (P=1200, ETR=800). Étape 2 : Isole l'inconnue Q = P - ETR. Étape 3 : Applique numériquement 1200 - 800 = 400. Toujours vérifier que les unités (mm) sont homogènes.",
    deepDive: "L'évapotranspiration réelle (ETR) représente la somme de l'évaporation du sol et de la transpiration des plantes. L'écoulement (Q) est la part 'utile' pour l'homme, car c'est elle qui recharge nos cours d'eau. Ce bilan est crucial pour la gestion durable des barrages au Bénin.",
    points: 10
  },
  {
    id: 'mre-003',
    subjectId: 'mobilisation-eau',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Comment appelle-t-on une nappe dont la surface est en contact direct avec l'atmosphère ?",
    choices: ["Nappe captive", "Nappe artésienne", "Nappe phréatique (ou libre)", "Nappe fossile"],
    correctAnswer: "Nappe phréatique (ou libre)",
    explanation: "Une nappe est dite 'libre' ou 'phréatique' lorsque sa limite supérieure est en contact direct avec la pression atmosphérique.",
    methodology: "Retiens le mot 'Phréatique' vient du grec 'phrear' qui signifie 'puits'. C'est la nappe que l'on atteint en creusant simplement un puits traditionnel.",
    deepDive: "La surface d'une nappe libre s'appelle la 'surface piézométrique'. Dans une nappe libre, cette surface correspond au niveau réel de l'eau dans le terrain. Si on pollue le sol au-dessus d'une nappe phréatique, la pollution s'infiltre directement, d'où l'importance de protéger ces zones.",
    points: 5
  },
  {
    id: 'mre-004',
    subjectId: 'mobilisation-eau',
    type: 'Calcul',
    difficulty: 'Moyen',
    question: "Calculez le débit Q (en m³/s) d'un forage traversant une section de 0,5 m² avec une conductivité k=10⁻³ m/s et un gradient i=0,1 (Loi de Darcy).",
    choices: ["0.00005", "0.0005", "0.005", "0.05"],
    correctAnswer: "0.00005",
    explanation: "Q = k * i * A = 10⁻³ * 0,1 * 0,5 = 0,00005 m³/s.",
    points: 10
  },
  {
    id: 'mre-005',
    subjectId: 'mobilisation-eau',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Quel ouvrage est le plus adapté pour capter une nappe située à 80 mètres de profondeur ?",
    choices: ["Un puits à grand diamètre", "Un forage", "Une source captée", "Un drain horizontal"],
    correctAnswer: "Un forage",
    explanation: "Les forages permettent d'atteindre des profondeurs importantes avec un diamètre réduit.",
    points: 5
  },
  // ... Ajout progressif des exercices par thématique ...
  
  // ==========================================
  // TRAITEMENT DE L'EAU (80)
  // ==========================================
  {
    id: 'te-001',
    subjectId: 'traitement-eau',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Quelle étape du traitement élimine spécifiquement les bactéries et virus ?",
    choices: ["La filtration", "La chloration", "La sédimentation", "La coagulation"],
    correctAnswer: "La chloration",
    explanation: "La chloration est une étape de désinfection qui tue les micro-organismes pathogènes.",
    points: 5
  },
  {
    id: 'te-002',
    subjectId: 'traitement-eau',
    type: 'Calcul',
    difficulty: 'Moyen',
    question: "Pour traiter 100 m³ d'eau avec une dose de chlore de 2 mg/L, quelle masse de chlore actif (en grammes) est nécessaire ?",
    choices: ["20", "100", "200", "400"],
    correctAnswer: "200",
    explanation: "Masse = Dose * Volume = 2 mg/L * 100,000 L = 200,000 mg = 200 g.",
    points: 10
  },
  {
    id: 'te-003',
    subjectId: 'traitement-eau',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Quel coagulant est le plus couramment utilisé en station de traitement d'eau potable ?",
    choices: ["Le charbon actif", "Le sulfate d'aluminium", "Le chlore gazeux", "La chaux éteinte"],
    correctAnswer: "Le sulfate d'aluminium",
    explanation: "Le sulfate d'aluminium est le coagulant standard pour déstabiliser les colloïdes.",
    points: 5
  },
  {
    id: 'te-004',
    subjectId: 'traitement-eau',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Quelle est la valeur maximale recommandée par l'OMS pour la turbidité d'une eau potable ?",
    choices: ["50 NTU", "10 NTU", "5 NTU", "1 NTU"],
    correctAnswer: "5 NTU",
    explanation: "L'OMS recommande une turbidité inférieure à 5 NTU, idéalement < 1 NTU pour la désinfection.",
    points: 5
  },
  
  // ==========================================
  // ASSAINISSEMENT (80)
  // ==========================================
  {
    id: 'ass-001',
    subjectId: 'assainissement',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Que signifie l'acronyme DBO5 ?",
    choices: ["Demande Bactériologique en Oxygène", "Demande Biochimique en Oxygène sur 5 jours", "Débit Biologique d'Oxygène", "Dosage Biologique Organique"],
    correctAnswer: "Demande Biochimique en Oxygène sur 5 jours",
    explanation: "La DBO5 mesure la quantité d'oxygène consommée par les micro-organismes pour décomposer la matière organique en 5 jours.",
    points: 5
  },
  {
    id: 'ass-002',
    subjectId: 'assainissement',
    type: 'Calcul',
    difficulty: 'Difficile',
    question: "Calculez le volume utile (en litres) d'une fosse septique pour une famille de 8 personnes (Règle : 300L + 150L par personne).",
    choices: ["1200", "1350", "1500", "1800"],
    correctAnswer: "1500",
    explanation: "Volume = 300 + (8 * 150) = 300 + 1200 = 1500 Litres.",
    points: 15
  },
  
  // ==========================================
  // RÉSEAUX HYDRAULIQUES (80)
  // ==========================================
  {
    id: 'rh-001',
    subjectId: 'reseaux-hydrauliques',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Dans une conduite en charge, si le diamètre est divisé par 2, par combien est multipliée la vitesse (à débit constant) ?",
    choices: ["Par 2", "Par 4", "Par 8", "Elle reste identique"],
    correctAnswer: "Par 4",
    explanation: "La section A est proportionnelle au carré du diamètre (D²). Si D est divisé par 2, A est divisé par 4. Comme Q = V * A, la vitesse V doit être multipliée par 4.",
    points: 10
  },
  
  // ==========================================
  // SCIENCES PHYSIQUES (60)
  // ==========================================
  {
    id: 'sp-001',
    subjectId: 'sciences-physiques',
    type: 'Calcul',
    difficulty: 'Facile',
    question: "Quelle est la pression hydrostatique (en Pa) au fond d'un réservoir de 10m de hauteur rempli d'eau ? (g=9,81 m/s²)",
    choices: ["9810", "49050", "98100", "981000"],
    correctAnswer: "98100",
    explanation: "P = rho * g * h = 1000 * 9,81 * 10 = 98 100 Pa.",
    points: 5
  },

  // ==========================================
  // MATHÉMATIQUES APPLIQUÉES (60)
  // ==========================================
  {
    id: 'ma-001',
    subjectId: 'mathematiques',
    type: 'Calcul',
    difficulty: 'Moyen',
    question: "Résolvez l'équation de croissance de population : P = 5000 * (1,02)^10. Quelle est la population après 10 ans ?",
    choices: ["5095", "6000", "6095", "6195"],
    correctAnswer: "6095",
    explanation: "P = 5000 * 1,21899 = 6094,99 ≈ 6095.",
    points: 10
  },

  // ==========================================
  // FRANÇAIS TECHNIQUE (20)
  // ==========================================
  {
    id: 'fr-001',
    subjectId: 'francais',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Quel document technique résume les interventions effectuées sur une pompe ?",
    choices: ["Un rapport de mission", "Un carnet de bord (Log book)", "Une facture", "Une note de service"],
    correctAnswer: "Un carnet de bord (Log book)",
    explanation: "Le carnet de bord permet de tracer toute l'activité et la maintenance d'un équipement.",
    points: 5
  },

  // ==========================================
  // ANGLAIS TECHNIQUE (10)
  // ==========================================
  {
    id: 'en-001',
    subjectId: 'anglais',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Comment traduit-on 'Château d'eau' en anglais technique ?",
    choices: ["Water castle", "Water tower", "Water building", "Hydraulic house"],
    correctAnswer: "Water tower",
    explanation: "Water tower est le terme standard pour désigner un château d'eau ou un réservoir surélevé.",
    points: 5
  },

  // ==========================================
  // PHILOSOPHIE (120) - Migré de Terminal A
  // ==========================================
  { id: 'ph-001', subjectId: 'philosophie', type: 'QCM', difficulty: 'Facile', points: 10,
    question: "Selon Sartre, l'homme est :",
    choices: ["Condamné à être libre", "Totalement déterminé par sa nature", "Libre uniquement dans l'état de nature", "Libre seulement en société"],
    correctAnswer: "Condamné à être libre",
    explanation: "Pour Sartre, l'existence précède l'essence : l'homme se définit par ses choix. Il est condamné à être libre car il ne peut fuir la responsabilité." },
  { id: 'ph-002', subjectId: 'philosophie', type: 'QCM', difficulty: 'Facile', points: 10,
    question: "Qui a dit : 'L'homme est né libre, et partout il est dans les fers' ?",
    choices: ["Jean-Paul Sartre", "Jean-Jacques Rousseau", "Immanuel Kant", "Thomas Hobbes"],
    correctAnswer: "Jean-Jacques Rousseau",
    explanation: "Cette citation célèbre est la première phrase du Contrat Social de Jean-Jacques Rousseau (1762)." },
  { id: 'ph-003', subjectId: 'philosophie', type: 'QCM', difficulty: 'Moyen', points: 15,
    question: "La liberté comme autonomie (se donner sa propre loi morale) est une conception de :",
    choices: ["Rousseau", "Sartre", "Kant", "Mill"],
    correctAnswer: "Kant",
    explanation: "Kant définit la liberté comme autonomie : agir selon la loi morale que la raison se prescrit à elle-même (impératif catégorique)." },
  { id: 'ph-004', subjectId: 'philosophie', type: 'QCM', difficulty: 'Facile', points: 5,
    question: "Le déterminisme affirme que la liberté humaine est une réalité absolue.",
    choices: ["Vrai", "Faux"],
    correctAnswer: "Faux",
    explanation: "Le déterminisme affirme que tout événement est causalement déterminé. La liberté absolue serait donc une illusion selon cette doctrine." },
  { id: 'ph-006', subjectId: 'philosophie', type: 'QCM', difficulty: 'Moyen', points: 15,
    question: "La 'liberté négative' désigne :",
    choices: ["La liberté de faire le mal", "L'absence de contraintes extérieures", "La liberté dans l'état de nature", "La liberté de refuser"],
    correctAnswer: "L'absence de contraintes extérieures",
    explanation: "La liberté négative (Isaiah Berlin) désigne l'absence d'obstacles ou de contraintes imposés par autrui — 'être libre de...'." },
  { id: 'ph-007', subjectId: 'philosophie', type: 'QCM', difficulty: 'Moyen', points: 15,
    question: "La 'mauvaise foi' selon Sartre consiste à :",
    choices: ["Mentir aux autres", "Refuser d'assumer sa liberté", "Croire en Dieu", "Suivre des règles morales"],
    correctAnswer: "Refuser d'assumer sa liberté",
    explanation: "La mauvaise foi sartrienne est le fait de se mentir à soi-même en niant sa propre liberté, en invoquant des excuses (la nature, la société, Dieu) pour fuir la responsabilité." },
  { id: 'ph-008', subjectId: 'philosophie', type: 'QCM', difficulty: 'Difficile', points: 20,
    question: "Le compatibilisme affirme que :",
    choices: ["Liberté et déterminisme s'excluent mutuellement", "Liberté et déterminisme peuvent coexister", "L'homme est totalement libre", "L'homme est totalement déterminé"],
    correctAnswer: "Liberté et déterminisme peuvent coexister",
    explanation: "Le compatibilisme (Hume, Leibniz) soutient que la liberté et le déterminisme ne sont pas contradictoires si la liberté est définie comme action selon ses propres désirs sans contrainte externe." },
  { id: 'ph-009', subjectId: 'philosophie', type: 'QCM', difficulty: 'Facile', points: 5,
    question: "Selon Kant, un acte moral est un acte accompli par inclination naturelle.",
    choices: ["Vrai", "Faux"],
    correctAnswer: "Faux",
    explanation: "Selon Kant, un acte moral est accompli par devoir (par respect de la loi morale), non par inclination. Agir par inclination n'a pas de valeur morale." },

  // ==========================================
  // HISTOIRE (100) - Migré de Terminal A
  // ==========================================
  { id: 'hi-001', subjectId: 'histoire', type: 'QCM', difficulty: 'Facile', points: 10,
    question: "La Conférence de Berlin (1884-1885) avait pour but :",
    choices: ["De libérer les colonies africaines", "De partager l'Afrique entre puissances européennes", "De créer l'Union africaine", "De signer la paix entre pays africains"],
    correctAnswer: "De partager l'Afrique entre puissances européennes",
    explanation: "La Conférence de Berlin a fixé les règles du partage de l'Afrique entre les grandes puissances européennes." },
  { id: 'hi-002', subjectId: 'histoire', type: 'QCM', difficulty: 'Moyen', points: 15,
    question: "La colonisation de type 'protectorat' se caractérise par :",
    choices: ["L'installation massive de colons", "Le maintien de l'administration locale sous tutelle européenne", "L'exploitation directe des ressources", "L'esclavage des populations"],
    correctAnswer: "Le maintien de l'administration locale sous tutelle européenne",
    explanation: "Un protectorat maintient formellement l'administration locale mais place le pays sous le contrôle d'une puissance coloniale." },
  { id: 'hi-003', subjectId: 'histoire', type: 'QCM', difficulty: 'Facile', points: 5,
    question: "Le roi béninois Béhanzin a collaboré pacifiquement avec la colonisation française.",
    choices: ["Vrai", "Faux"],
    correctAnswer: "Faux",
    explanation: "Béhanzin a résisté militairement aux Français avant d'être vaincu et exilé." },
  { id: 'hi-004', subjectId: 'histoire', type: 'QCM', difficulty: 'Facile', points: 10,
    question: "L'année 1960 est appelée 'Année de l'Afrique' car :",
    choices: ["C'est l'année de la fondation de l'OUA", "17 pays africains ont obtenu leur indépendance", "C'est la fin de la Guerre Froide", "L'Afrique a organisé une conférence mondiale"],
    correctAnswer: "17 pays africains ont obtenu leur indépendance",
    explanation: "En 1960, 17 pays africains ont obtenu leur indépendance, marquant un tournant historique." },

  // ==========================================
  // GÉOGRAPHIE (100) - Migré de Terminal A
  // ==========================================
  { id: 'ge-001', subjectId: 'geographie', type: 'QCM', difficulty: 'Facile', points: 10,
    question: "La 'transition démographique' désigne :",
    choices: ["Le passage d'une forte à une faible fécondité/mortalité", "Le déplacement massif de population vers les villes", "Le vieillissement de la population", "L'augmentation brute du nombre d'habitants"],
    correctAnswer: "Le passage d'une forte à une faible fécondité/mortalité",
    explanation: "La transition démographique est le passage d'un régime démographique traditionnel (fortes natalité et mortalité) à un régime moderne (faibles natalité et mortalité)." },
  { id: 'ge-002', subjectId: 'geographie', type: 'QCM', difficulty: 'Moyen', points: 15,
    question: "L'exode rural correspond au déplacement de population :",
    choices: ["Vers les pays étrangers", "Des villes vers les campagnes", "Des campagnes vers les villes", "Entre les grandes métropoles"],
    correctAnswer: "Des campagnes vers les villes",
    explanation: "L'exode rural est le départ définitif des habitants des zones rurales vers les zones urbaines." },
  { id: 'ge-003', subjectId: 'geographie', type: 'QCM', difficulty: 'Facile', points: 5,
    question: "L'Asie du Sud est l'un des trois grands foyers de peuplement mondial.",
    choices: ["Vrai", "Faux"],
    correctAnswer: "Vrai",
    explanation: "L'Asie du Sud (Inde, Pakistan, etc.) est l'une des régions les plus peuplées du monde avec plus de 1,8 milliard d'habitants." },

  // [Note: Les exercices mathématiques Terminal C sont dans la section TERMINAL C ci-dessous]
  
  // ==========================================
  // CHIMIE (80) - Migré de Terminal C
  // ==========================================
  { id: 'ch-001', subjectId: 'chimie', type: 'QCM', difficulty: 'Facile', points: 10,
    question: "Quel est le pH d'une solution neutre à 25°C ?",
    choices: ["0", "7", "14", "1"],
    correctAnswer: "7",
    explanation: "Le pH d'une solution neutre est de 7 à 25°C." },
  { id: 'ch-002', subjectId: 'chimie', type: 'QCM', difficulty: 'Moyen', points: 15,
    question: "Un acide selon Brönsted est une espèce capable de :",
    choices: ["Céder un proton H+", "Capter un proton H+", "Céder un électron", "Capter un électron"],
    correctAnswer: "Céder un proton H+",
    explanation: "Selon la définition de Brönsted, un acide est un donneur de protons H+." },

  // ==========================================
  // BIOLOGIE (SVT) (60) - Migré de Terminal C
  // ==========================================
  { id: 'sv-001', subjectId: 'biologie', type: 'QCM', difficulty: 'Facile', points: 10,
    question: "Quel est le support moléculaire de l'information génétique ?",
    choices: ["L'ATP", "L'ADN", "Le Glucose", "L'Hémoglobine"],
    correctAnswer: "L'ADN",
    explanation: "L'ADN (Acide Désoxyribonucléique) est le support universel de l'information génétique." },
  
  // ==========================================
  // TERMINAL B SPECIFIC EXERCISES
  // ==========================================
  {
    id: 'philo-conscience-qcm-1',
    subjectId: 'philosophie',
    type: 'QCM',
    difficulty: 'Facile',
    question: 'Quelle phrase illustre la conscience morale ?',
    choices: [
      'Je sais que j\'ai faim',
      'Je sais que mentir est mal',
      'Je vois un arbre',
      'Je pense donc je suis',
    ],
    correctAnswer: 'Je sais que mentir est mal',
    explanation: 'La conscience morale est la faculté de juger ses propres actes selon des critères de bien et de mal.',
    points: 5,
  },
  {
    id: 'philo-liberte-qcm-1',
    subjectId: 'philosophie',
    type: 'QCM',
    difficulty: 'Moyen',
    question: 'Selon Sartre, l\'homme est :',
    choices: [
      'Déterminé par sa nature',
      'Condamné à être libre',
      'Libre seulement en société',
      'Esclave de ses passions',
    ],
    correctAnswer: 'Condamné à être libre',
    explanation: 'Pour Sartre, l\'homme n\'a pas d\'essence prédéfinie ; il est libre de se définir par ses choix et responsable de ses actes.',
    points: 5,
  },
  {
    id: 'histoire-guerre-froide-qcm-1',
    subjectId: 'histoire',
    type: 'QCM',
    difficulty: 'Moyen',
    question: 'Quelle crise a failli déclencher une guerre nucléaire en 1962 ?',
    choices: [
      'Crise de Berlin',
      'Crise de Suez',
      'Crise de Cuba',
      'Crise de Corée',
    ],
    correctAnswer: 'Crise de Cuba',
    explanation: 'La crise des missiles de Cuba en octobre 1962 a été le point culminant de la tension entre les USA et l\'URSS.',
    points: 5,
  },
  {
    id: 'geo-mondialisation-qcm-1',
    subjectId: 'geographie',
    type: 'QCM',
    difficulty: 'Facile',
    question: 'Quel est le principal acteur de la mondialisation ?',
    choices: [
      'Les États',
      'Les firmes multinationales',
      'Les ONG',
      'Les syndicats',
    ],
    correctAnswer: 'Les firmes multinationales',
    explanation: 'Les firmes multinationales (FMN) sont les moteurs de l\'intégration économique mondiale par leurs investissements et leur production.',
    points: 5,
  },
  {
    id: 'eco-agents-qcm-1',
    subjectId: 'economie',
    type: 'QCM',
    difficulty: 'Facile',
    question: 'Quel agent économique assure la production de biens et services ?',
    choices: [
      'Les ménages',
      'Les entreprises',
      'L\'État',
      'Le reste du monde',
    ],
    correctAnswer: 'Les entreprises',
    explanation: 'La fonction principale des entreprises est de produire des biens et services marchands pour répondre à la demande du marché.',
    points: 5,
  },
  {
    id: 'anglais-comprehension-qcm-1',
    subjectId: 'anglais',
    type: 'QCM',
    difficulty: 'Moyen',
    question: 'Read the text and answer: What is the main idea?',
    choices: [
      'Climate change is a hoax',
      'Climate change requires urgent action',
      'Climate change only affects polar regions',
      'Climate change is natural',
    ],
    correctAnswer: 'Climate change requires urgent action',
    explanation: 'Environmental texts often emphasize the anthropogenic causes of climate change and the need for global mitigation.',
    points: 5,
  },

  // [Note: Les exercices philosophie et histoire Terminal A sont définis
  //  dans les sections PHILOSOPHIE et HISTOIRE ci-dessus pour éviter les doublons]

  // ==========================================
  // TERMINAL C - MATHÉMATIQUES
  // ==========================================
  {
    id: 'math-deriv-qcm-c1',
    subjectId: 'mathematiques',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Quelle est la dérivée de f(x) = 3x² + 2x − 5 ?",
    choices: ["f'(x) = 6x + 2", "f'(x) = 3x + 2", "f'(x) = 6x − 5", "f'(x) = 6x"],
    correctAnswer: "f'(x) = 6x + 2",
    explanation: "On dérive terme à terme : (3x²)' = 6x, (2x)' = 2, (−5)' = 0.",
    points: 10
  },
  {
    id: 'math-lim-qcm-c20',
    subjectId: 'mathematiques',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Calculer : lim(x→2) (x² − 4)/(x − 2)",
    choices: ["4", "0", "∞", "2"],
    correctAnswer: "4",
    explanation: "Factoriser : (x²−4)/(x−2) = (x+2)(x−2)/(x−2) = x+2. Lim = 2+2 = 4.",
    points: 10
  },
  {
    id: 'math-int-qcm-c42',
    subjectId: 'mathematiques',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Calculer ∫₀^(π/2) cos(x) dx",
    choices: ["1", "0", "π/2", "−1"],
    correctAnswer: "1",
    explanation: "∫ cos(x) dx = sin(x). [sin(x)]₀^(π/2) = sin(π/2) − sin(0) = 1 − 0 = 1.",
    points: 15
  },
  {
    id: 'math-prob-qcm-c60',
    subjectId: 'mathematiques',
    type: 'QCM',
    difficulty: 'Facile',
    question: "On tire une carte d'un jeu de 52 cartes. P(as) = ?",
    choices: ["1/13", "1/4", "4/52", "1/52"],
    correctAnswer: "1/13",
    explanation: "Il y a 4 as sur 52 cartes. P = 4/52 = 1/13.",
    points: 10
  },
  {
    id: 'math-suites-qcm-c80',
    subjectId: 'mathematiques',
    type: 'QCM',
    difficulty: 'Facile',
    question: "La suite géométrique de raison 2 et de premier terme u₀=3 : u₃ = ?",
    choices: ["24", "12", "9", "6"],
    correctAnswer: "24",
    explanation: "uₙ = u₀ × rⁿ. u₃ = 3 × 2³ = 3 × 8 = 24.",
    points: 10
  },
  {
    id: 'math-eqdiff-qcm-c100',
    subjectId: 'mathematiques',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "La solution générale de y' = ky est :",
    choices: ["y = Ceᵏˣ", "y = kx + C", "y = Ccos(kx)", "y = k·ln(x) + C"],
    correctAnswer: "y = Ceᵏˣ",
    explanation: "L'équation différentielle du premier ordre y' = ky a pour solution y = Ceᵏˣ où C est une constante.",
    points: 15
  },

  // ==========================================
  // TERMINAL C - PHYSIQUE
  // ==========================================
  {
    id: 'phys-mech-qcm-c1',
    subjectId: 'sciences-physiques',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Un objet de masse 5 kg soumis à une force F=20 N. Son accélération est :",
    choices: ["4 m/s²", "100 m/s²", "0.25 m/s²", "25 m/s²"],
    correctAnswer: "4 m/s²",
    explanation: "F = ma, donc a = F/m = 20/5 = 4 m/s².",
    points: 10
  },
  {
    id: 'phys-elec-qcm-c20',
    subjectId: 'sciences-physiques',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Dans un circuit R=100 Ω, U=12 V. L'intensité I est :",
    choices: ["0.12 A", "1200 A", "8.33 A", "12 A"],
    correctAnswer: "0.12 A",
    explanation: "Loi d'Ohm : I = U/R = 12/100 = 0.12 A.",
    points: 10
  },
  {
    id: 'phys-opt-qcm-c40',
    subjectId: 'sciences-physiques',
    type: 'QCM',
    difficulty: 'Facile',
    question: "La loi de Snell-Descartes pour la réfraction est :",
    choices: ["n₁·sin(i₁) = n₂·sin(i₂)", "n₁/sin(i₁) = n₂/sin(i₂)", "sin(i₁)/n₁ = sin(i₂)/n₂", "n₁·cos(i₁) = n₂·cos(i₂)"],
    correctAnswer: "n₁·sin(i₁) = n₂·sin(i₂)",
    explanation: "La loi de Snell-Descartes : n₁·sin(i₁) = n₂·sin(i₂) où n est l'indice de réfraction.",
    points: 10
  },
  {
    id: 'phys-ondes-qcm-c50',
    subjectId: 'sciences-physiques',
    type: 'QCM',
    difficulty: 'Facile',
    question: "La relation entre la période T et la fréquence f est :",
    choices: ["T = 1/f", "T = f", "T = f²", "f = T²"],
    correctAnswer: "T = 1/f",
    explanation: "La période est l'inverse de la fréquence : T = 1/f.",
    points: 10
  },
  {
    id: 'philo-liberte-qcm-a1-bis',
    subjectId: 'philosophie',
    type: 'QCM',
    difficulty: 'Facile',
    question: "La 'liberté négative' désigne :",
    choices: ["La liberté de faire le mal", "L'absence de contraintes extérieures", "La liberté dans l'état de nature", "La liberté de refuser"],
    correctAnswer: "L'absence de contraintes extérieures",
    explanation: "La liberté négative (Isaiah Berlin) désigne l'absence d'obstacles ou de contraintes imposés par autrui — 'être libre de...'.",
    points: 15
  },
  {
    id: 'philo-mauvaise-foi-qcm-a7',
    subjectId: 'philosophie',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "La 'mauvaise foi' selon Sartre consiste à :",
    choices: ["Mentir aux autres", "Refuser d'assumer sa liberté", "Croire en Dieu", "Suivre des règles morales"],
    correctAnswer: "Refuser d'assumer sa liberté",
    explanation: "La mauvaise foi sartrienne est le fait de se mentir à soi-même en niant sa propre liberté, en invoquant des excuses (la nature, la société, Dieu) pour fuir la responsabilité.",
    points: 15
  },
  {
    id: 'philo-justice-qcm-a16',
    subjectId: 'philosophie',
    type: 'QCM',
    difficulty: 'Facile',
    question: "La justice distributive selon Aristote consiste à :",
    choices: ["Donner la même chose à tous", "Répartir selon le mérite de chacun", "Punir les criminels", "Appliquer la loi"],
    correctAnswer: "Répartir selon le mérite de chacun",
    explanation: "La justice distributive aristotélicienne consiste à distribuer les biens proportionnellement au mérite : à chacun selon sa contribution.",
    points: 10
  },
  {
    id: 'philo-verite-qcm-a20',
    subjectId: 'philosophie',
    type: 'QCM',
    difficulty: 'Facile',
    question: "L'allégorie de la caverne de Platon illustre :",
    choices: ["La vie en société", "Le passage de l'illusion à la vérité", "La liberté humaine", "Le fonctionnement de l'État"],
    correctAnswer: "Le passage de l'illusion à la vérité",
    explanation: "L'allégorie de la caverne montre des prisonniers prenant des ombres pour la réalité. La sortie de la caverne représente le passage de la doxa (opinion, illusion) à l'épistémè (vérité).",
    points: 10
  },
  {
    id: 'philo-etat-qcm-a23',
    subjectId: 'philosophie',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Selon Weber, l'État est l'entité qui détient le monopole de :",
    choices: ["La justice", "La violence légitime", "L'éducation", "La richesse"],
    correctAnswer: "La violence légitime",
    explanation: "Max Weber définit l'État comme la communauté humaine qui, dans les limites d'un territoire déterminé, revendique avec succès pour elle-même le monopole de la violence physique légitime.",
    points: 10
  },
  {
    id: 'hist-indep-qcm-a6',
    subjectId: 'histoire',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Le Bénin (Dahomey) a obtenu son indépendance le :",
    choices: ["14 juillet 1960", "1er août 1960", "1er janvier 1960", "25 décembre 1960"],
    correctAnswer: "1er août 1960",
    explanation: "Le Dahomey (actuel Bénin) a proclamé son indépendance de la France le 1er août 1960. Hubert Maga est devenu le premier président.",
    points: 10
  },
  {
    id: 'hist-decolo-qcm-a4',
    subjectId: 'histoire',
    type: 'QCM',
    difficulty: 'Facile',
    question: "L'année 1960 est appelée 'Année de l'Afrique' car :",
    choices: ["C'est l'année de la fondation de l'OUA", "17 pays africains ont obtenu leur indépendance", "C'est la fin de la Guerre Froide", "L'Afrique a organisé une conférence mondiale"],
    correctAnswer: "17 pays africains ont obtenu leur indépendance",
    explanation: "En 1960, 17 pays africains, principalement francophones, ont obtenu leur indépendance, d'où l'appellation 'Année de l'Afrique'.",
    points: 10
  },
  {
    id: 'math-integ-qcm-c43',
    subjectId: 'mathematiques',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Calculer ∫₁ᵉ (1/x) dx",
    choices: ["1", "e", "0", "e−1"],
    correctAnswer: "1",
    explanation: "∫ (1/x) dx = ln|x|. [ln x]₁ᵉ = ln(e) − ln(1) = 1 − 0 = 1.",
    points: 15
  },
  {
    id: 'math-prob-qcm-c61',
    subjectId: 'mathematiques',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Calculer C₅³ (combinaisons de 3 parmi 5)",
    choices: ["10", "6", "15", "20"],
    correctAnswer: "10",
    explanation: "C₅³ = 5!/(3!2!) = 120/(6×2) = 10.",
    points: 10
  },
  {
    id: 'phys-elec-qcm-c21',
    subjectId: 'sciences-physiques',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Dans un circuit RC (R=1kΩ, C=10μF), la constante de temps τ est :",
    choices: ["10 ms", "1 ms", "100 ms", "0.1 ms"],
    correctAnswer: "10 ms",
    explanation: "τ = RC = 1000 × 10×10⁻⁶ = 10×10⁻³ = 10 ms.",
    points: 15
  },
  {
    id: 'phys-opt-qcm-c41',
    subjectId: 'sciences-physiques',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "La vitesse de la lumière dans un milieu d'indice n=1.5 est :",
    choices: ["2×10⁸ m/s", "3×10⁸ m/s", "1.5×10⁸ m/s", "4.5×10⁸ m/s"],
    correctAnswer: "2×10⁸ m/s",
    explanation: "v = c/n = (3×10⁸)/1.5 = 2×10⁸ m/s.",
    points: 15
  },
  {
    id: 'chem-ph-qcm-c1',
    subjectId: 'chimie',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Le pH d'une solution HCl de concentration 0.01 mol/L est :",
    choices: ["2", "12", "7", "1"],
    correctAnswer: "2",
    explanation: "HCl est un acide fort : [H₃O⁺] = 0.01 = 10⁻² mol/L. pH = −log(10⁻²) = 2.",
    points: 10
  },
  {
    id: 'chem-oxyred-qcm-c4',
    subjectId: 'chimie',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Dans une réaction d'oxydoréduction, l'oxydant :",
    choices: ["Gagne des électrons", "Perd des électrons", "Ne change pas", "Donne des protons"],
    correctAnswer: "Gagne des électrons",
    explanation: "L'oxydant est réduit : il gagne des électrons. Le réducteur est oxydé : il perd des électrons.",
    points: 15
  },
  {
    id: 'svt-dna-qcm-c1',
    subjectId: 'biologie',
    type: 'QCM',
    difficulty: 'Facile',
    question: "L'ADN est composé de :",
    choices: ["Nucléotides", "Acides aminés", "Glucides", "Lipides"],
    correctAnswer: "Nucléotides",
    explanation: "L'ADN (Acide DésoxyriboNucléique) est un polymère de nucléotides.",
    points: 10
  },
  {
    id: 'sv-002',
    subjectId: 'biologie',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Quelle hormone déclenche l'ovulation chez la femme ?",
    choices: ["La Progestérone", "La LH (Hormone Lutéinisante)", "L'Oestrogène", "La Testostérone"],
    correctAnswer: "La LH (Hormone Lutéinisante)",
    explanation: "Un pic de LH vers le 14ème jour du cycle déclenche l'expulsion de l'ovule.",
    points: 10
  },
  {
    id: 'sv-003',
    subjectId: 'biologie',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Où se déroule la fécondation dans l'appareil reproducteur féminin ?",
    choices: ["Dans l'utérus", "Dans le vagin", "Dans les trompes de Fallope", "Dans les ovaires"],
    correctAnswer: "Dans les trompes de Fallope",
    explanation: "La rencontre entre le spermatozoïde et l'ovule a lieu dans le tiers supérieur des trompes.",
    points: 10
  },
  {
    id: 'sv-004',
    subjectId: 'biologie',
    type: 'QCM',
    difficulty: 'Difficile',
    question: "Quel est le centre nerveux responsable des réflexes myotatiques ?",
    choices: ["Le cerveau", "Le cervelet", "La moelle épinière", "Le tronc cérébral"],
    correctAnswer: "La moelle épinière",
    explanation: "Le réflexe myotatique est un réflexe involontaire dont le centre est la moelle épinière.",
    points: 15
  },
  {
    id: 'sv-005',
    subjectId: 'biologie',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Comment appelle-t-on la zone de jonction entre deux neurones ?",
    choices: ["Un axone", "Une dendrite", "Une synapse", "Un ganglion"],
    correctAnswer: "Une synapse",
    explanation: "La synapse est la zone de communication chimique ou électrique entre deux cellules nerveuses.",
    points: 10
  },
  {
    id: 'sv-006',
    subjectId: 'biologie',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Quel type de lymphocytes est détruit par le virus du VIH (SIDA) ?",
    choices: ["Lymphocytes B", "Lymphocytes T4", "Lymphocytes T8", "Macrophages"],
    correctAnswer: "Lymphocytes T4",
    explanation: "Le VIH cible les LT4, chefs d'orchestre de la réponse immunitaire, entraînant l'immunodéficience.",
    points: 10
  },
  {
    id: 'math-005',
    subjectId: 'mathematiques',
    type: 'Calcul',
    difficulty: 'Difficile',
    question: "Quel est le module du nombre complexe z = 1 + i ?",
    choices: ["1", "2", "√2", "2√2"],
    correctAnswer: "√2",
    explanation: "|z| = √(1² + 1²) = √2.",
    points: 15
  },
  {
    id: 'math-006',
    subjectId: 'mathematiques',
    type: 'Calcul',
    difficulty: 'Moyen',
    question: "Quelle est la dérivée de la fonction f(x) = ln(x) ?",
    choices: ["1/x", "x", "e^x", "-1/x"],
    correctAnswer: "1/x",
    explanation: "La fonction logarithme népérien a pour dérivée 1/x sur ]0, +∞[.",
    points: 10
  },
  {
    id: 'esp-001',
    subjectId: 'espagnol',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Comment dit-on 'J'ai faim' en espagnol ?",
    choices: ["Tengo sed", "Tengo frío", "Tengo hambre", "Tengo sueño"],
    correctAnswer: "Tengo hambre",
    explanation: "Hambre signifie la faim. Sed (soif), frío (froid), sueño (sommeil).",
    points: 5
  },
  
  // ==========================================
  // ANNALES BAC BÉNIN - MATHS (Série C/D/EA)
  // ==========================================
  {
    id: 'math-bac-001',
    subjectId: 'mathematiques',
    type: 'Calcul',
    difficulty: 'Difficile',
    question: "Soit f(x) = x³ - 3x + 2. Quelles sont les abscisses des points d'inflexion de la courbe Cf ?",
    choices: ["-1", "0", "1", "Il n'y en a pas"],
    correctAnswer: "0",
    explanation: "La dérivée seconde f''(x) = 6x s'annule en changeant de signe pour x=0. C'est le point d'inflexion.",
    points: 20
  },
  {
    id: 'math-bac-002',
    subjectId: 'mathematiques',
    type: 'QCM',
    difficulty: 'Difficile',
    question: "L'argument principal du nombre complexe z = -1 - i√3 est :",
    choices: ["π/3", "2π/3", "-2π/3", "-π/3"],
    correctAnswer: "-2π/3",
    explanation: "|z|=2, cosθ=-1/2, sinθ=-√3/2. Donc θ = -2π/3 [2π].",
    points: 20
  },
  {
    id: 'math-bac-003',
    subjectId: 'mathematiques',
    type: 'Calcul',
    difficulty: 'Moyen',
    question: "Calculez l'intégrale I = ∫(de 0 à 1) e^x dx.",
    choices: ["e", "e - 1", "e + 1", "1"],
    correctAnswer: "e - 1",
    explanation: "Une primitive de e^x est e^x. I = [e^x] de 0 à 1 = e¹ - e⁰ = e - 1.",
    points: 15
  },

  // ==========================================
  // ANNALES BAC BÉNIN - SCIENCES PHYSIQUES
  // ==========================================
  {
    id: 'sp-bac-001',
    subjectId: 'sciences-physiques',
    type: 'Calcul',
    difficulty: 'Difficile',
    question: "Un mobile de masse m=2kg est soumis à une force F=10N. Quelle est son accélération 'a' (en m/s²) ?",
    choices: ["2", "5", "10", "20"],
    correctAnswer: "5",
    explanation: "D'après la deuxième loi de Newton (RFD) : F = m * a. Donc a = F / m = 10 / 2 = 5 m/s².",
    points: 20
  },
  {
    id: 'sp-bac-002',
    subjectId: 'sciences-physiques',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Quelle est la base conjuguée de l'acide éthanoïque CH3COOH ?",
    choices: ["CH3COO-", "CH3OH", "CH4", "CO2"],
    correctAnswer: "CH3COO-",
    explanation: "Un acide perd un proton H+ pour devenir sa base conjuguée : CH3COOH -> CH3COO- + H+.",
    points: 15
  },
  {
    id: 'sp-bac-003',
    subjectId: 'sciences-physiques',
    type: 'Calcul',
    difficulty: 'Difficile',
    question: "La demi-vie d'un isotope est de 10 jours. Au bout de combien de jours reste-t-il 1/4 de la population initiale ?",
    choices: ["10 jours", "15 jours", "20 jours", "40 jours"],
    correctAnswer: "20 jours",
    explanation: "Au bout de t1/2, il reste 1/2. Au bout de 2 * t1/2, il reste 1/2 * 1/2 = 1/4. Soit 2 * 10 = 20 jours.",
    points: 20
  },

  // ==========================================
  // ANNALES BAC BÉNIN - SVT (BIOLOGIE)
  // ==========================================
  {
    id: 'sv-bac-001',
    subjectId: 'biologie',
    type: 'QCM',
    difficulty: 'Difficile',
    question: "Lors de la méiose, le brassage interchromosomique a lieu pendant :",
    choices: ["La Prophase I", "L'Anaphase I", "La Métaphase II", "L'Anaphase II"],
    correctAnswer: "L'Anaphase I",
    explanation: "Le brassage interchromosomique résulte de la séparation aléatoire des chromosomes homologues en Anaphase I.",
    points: 20
  },
  {
    id: 'sv-bac-002',
    subjectId: 'biologie',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Quelle hormone provoque l'ovulation chez la femme ?",
    choices: ["Oestrogène", "Progestérone", "FSH", "LH"],
    correctAnswer: "LH",
    explanation: "C'est le pic de l'hormone lutéinisante (LH) qui déclenche l'ovulation 24 à 36h plus tard.",
    points: 15
  },
// ==================================================
// EXERCICES COMPLÉMENTAIRES EA — ASSAINISSEMENT (10)
// ==================================================
  {
    id: 'ass-003',
    subjectId: 'assainissement',
    type: 'Calcul',
    difficulty: 'Moyen',
    question: "Une ville de 25 000 habitants produit des eaux usées. Avec une dotation de 80 L/hab/j, quel est le débit moyen journalier (en m³/j) ?",
    choices: ["2 000", "2 500", "3 000", "3 500"],
    correctAnswer: "2 000",
    explanation: "Débit = Population × dotation = 25 000 × 0,08 m³ = 2 000 m³/j.",
    methodology: "Étape 1 : Convertir la dotation en m³ (80 L = 0,08 m³). Étape 2 : Multiplier par la population.",
    points: 10,
  },
  {
    id: 'ass-004',
    subjectId: 'assainissement',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Quelle est la définition de l'équivalent habitant (EH) en traitement des eaux usées ?",
    choices: ["1 habitant = 1 EH", "60 g de DBO5/j", "100 L/j d'eau usée", "1 kg de MES/j"],
    correctAnswer: "60 g de DBO5/j",
    explanation: "L'équivalent habitant (EH) est défini par une charge organique de 60 g de DBO5 par jour.",
    points: 5,
  },
  {
    id: 'ass-005',
    subjectId: 'assainissement',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Le procédé de lagunage est particulièrement adapté en Afrique subsaharienne car :",
    choices: ["Il est très rapide", "Il utilise l'énergie solaire et ne coûte pas cher", "Il élimine 100% des polluants", "Il ne nécessite aucune surface"],
    correctAnswer: "Il utilise l'énergie solaire et ne coûte pas cher",
    explanation: "Le lagunage utilise la lumière solaire pour l'activité des algues. Il est économique mais nécessite de grandes surfaces.",
    points: 10,
  },
  {
    id: 'ass-006',
    subjectId: 'assainissement',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Quel ratio DBO5/DCO indique qu'une eau usée est facilement biodegradable ?",
    choices: ["< 0,1", "Entre 0,1 et 0,3", "> 0,5", "= 1"],
    correctAnswer: "> 0,5",
    explanation: "Un ratio DBO5/DCO > 0,5 indique que la matière organique est suffisamment biodegradable pour un traitement biologique efficace.",
    points: 5,
  },
  {
    id: 'ass-007',
    subjectId: 'assainissement',
    type: 'Calcul',
    difficulty: 'Difficile',
    question: "Une STEP de 10 000 EH traite 600 m³/j d'eaux de DBO5 = 300 mg/L. Quelle est la charge DBO5 journalière en kg/j ?",
    choices: ["18 kg/j", "180 kg/j", "1 800 kg/j", "300 kg/j"],
    correctAnswer: "180 kg/j",
    explanation: "Charge = 300 mg/L × 600 m³/j = 300 g/m³ × 600 m³/j = 180 000 g/j = 180 kg/j.",
    points: 15,
  },
  {
    id: 'ass-008',
    subjectId: 'assainissement',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Dans un système de boues activées, un Indice de Boues (IB) de 250 mL/g indique :",
    choices: ["De très bonnes boues", "Des boues filamenteuses, problème de décantation", "Des boues mortes", "Un traitement tertiaire excellent"],
    correctAnswer: "Des boues filamenteuses, problème de décantation",
    explanation: "Un IB < 150 mL/g est excellent. Un IB > 200 mL/g révèle un gonflement filamenteux qui perturbe la décantation du clarificateur.",
    points: 10,
  },
  {
    id: 'ass-009',
    subjectId: 'assainissement',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Quel est l'avantage principal d'une latrine VIP (Ventilée Améliorée à Puisard) par rapport à une simple latrine ?",
    choices: ["Elle traite les eaux vannes", "Elle réduit les odeurs et les mouches", "Elle produit du biogaz", "Elle est moins coûteuse"],
    correctAnswer: "Elle réduit les odeurs et les mouches",
    explanation: "Le tube de ventilation avec moustiquaire crée un tirage naturel qui évacue les gaz malodorants et piège les mouches avant qu'elles ne sortent.",
    points: 5,
  },
  {
    id: 'ass-010',
    subjectId: 'assainissement',
    type: 'Calcul',
    difficulty: 'Moyen',
    question: "Calculez le volume (en m³) d'une lagune anaeróbie pour une charge de 2 000 EH, avec une charge volumique de 300 g DBO5/m³/j.",
    choices: ["200", "400", "600", "800"],
    correctAnswer: "400",
    explanation: "Charge = 2000 EH × 60 g/EH/j = 120 000 g/j. Volume = 120 000 / 300 = 400 m³.",
    points: 10,
  },
  {
    id: 'ass-011',
    subjectId: 'assainissement',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "La technique ATPC (Assainissement Total Piloté par la Communauté) vise principalement à :",
    choices: ["Construire des latrines subventionnées", "Arrêter la défécation à l'air libre via la prise de conscience collective", "Former des techniciens d'assainissement", "Installer des systèmes de biogaz"],
    correctAnswer: "Arrêter la défécation à l'air libre via la prise de conscience collective",
    explanation: "L'ATPC utilise des déclencheurs psychosociaux (le dégoût, la honte) pour amener la communauté à changer de comportement, sans subventions directes.",
    points: 10,
  },
  {
    id: 'ass-012',
    subjectId: 'assainissement',
    type: 'QCM',
    difficulty: 'Difficile',
    question: "Lors du traitement des boues d'une STEP, l'épaississement vise à :",
    choices: ["Tuer les agents pathogènes", "Réduire la teneur en eau pour diminuer le volume à traiter", "Produire du biogaz", "Stabiliser la matière organique"],
    correctAnswer: "Réduire la teneur en eau pour diminuer le volume à traiter",
    explanation: "L'épaississement est la première étape de la filière boues. Il concentre les boues (de 0,5% à 4-6% de MS) pour réduire les volumes avant la digestion ou la déshydratation.",
    points: 15,
  },

// ==================================================
// EXERCICES COMPLÉMENTAIRES EA — RÉSEAUX HYDRAULIQUES (10)
// ==================================================
  {
    id: 'rh-002',
    subjectId: 'reseaux-hydrauliques',
    type: 'Calcul',
    difficulty: 'Moyen',
    question: "Une conduite PVC DN100 transportes Q = 8 L/s. Quelle est la vitesse d'écoulement (en m/s) ?",
    choices: ["0,64", "1,02", "1,25", "0,81"],
    correctAnswer: "1,02",
    explanation: "Section A = π×(0,1)²/4 = 7,85×10-³ m². Vitesse V = Q/A = 8×10-³/7,85×10-³ = 1,02 m/s.",
    methodology: "Appliquer V = Q/A avec A = πD²/4. Convertir Q en m³/s (8 L/s = 0,008 m³/s).",
    points: 10,
  },
  {
    id: 'rh-003',
    subjectId: 'reseaux-hydrauliques',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Quel est l'avantage d'un réseau maillé par rapport à un réseau ramifié ?",
    choices: ["Il est moins cher", "Il offre une sécurité d'alimentation en cas de panne", "Il a moins de pertes de charge", "Il est plus facile à concevoir"],
    correctAnswer: "Il offre une sécurité d'alimentation en cas de panne",
    explanation: "Les boucles du réseau maillé permettent d'alimenter les abonnes par deux chemins. Si une canalisation est en panne, l'autre assure la continuité.",
    points: 5,
  },
  {
    id: 'rh-004',
    subjectId: 'reseaux-hydrauliques',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "La méthode de Hardy-Cross est utilisée pour calculer :",
    choices: ["Les pertes de charge singulières", "Les débits dans un réseau maillé en régime permanent", "Le coup de bélier dans une conduite", "Le volume du réservoir"],
    correctAnswer: "Les débits dans un réseau maillé en régime permanent",
    explanation: "Hardy-Cross est une méthode itérative qui corrige les débits dans chaque maille jusqu'à ce que la somme des pertes de charge soit nulle.",
    points: 10,
  },
  {
    id: 'rh-005',
    subjectId: 'reseaux-hydrauliques',
    type: 'Calcul',
    difficulty: 'Moyen',
    question: "Un village de 500 hab avec dotation 40 L/hab/j et un coefficient de pointe Cp=3. Quel est le débit de pointe horaire en L/s ?",
    choices: ["0,35", "0,69", "2,08", "0,23"],
    correctAnswer: "0,69",
    explanation: "Qmj = 500×40×10⁻³ = 20 m³/j. Qph = Qmj×Cp/24h = 20×3/24 = 2,5 m³/h = 0,69 L/s.",
    points: 10,
  },
  {
    id: 'rh-006',
    subjectId: 'reseaux-hydrauliques',
    type: 'QCM',
    difficulty: 'Difficile',
    question: "Le 'coup de bélier' se produit dans une conduite en charge lors :",
    choices: ["D'une augmentation progressive du débit", "D'une fermeture brusque d'une vanne", "D'une rupture progressive de charge", "D'une corrosion de la conduite"],
    correctAnswer: "D'une fermeture brusque d'une vanne",
    explanation: "La fermeture brusque d'une vanne arrête instantanément le fluide. L'énergie cinétique se transforme en onde de pression (ΔP = ρ×a×ΔV) qui peut détruire la conduite.",
    points: 15,
  },
  {
    id: 'rh-007',
    subjectId: 'reseaux-hydrauliques',
    type: 'QCM',
    difficulty: 'Facile',
    question: "La pression minimale requise à la borne d'un abonné en réseau AEP est généralement :",
    choices: ["0,5 bar", "1 bar (10 m CE)", "3 bars", "6 bars"],
    correctAnswer: "1 bar (10 m CE)",
    explanation: "La norme impose généralement une pression minimale de 1 bar (10 m de colonne d'eau) à tous les points de livraison pour garantir un service correct.",
    points: 5,
  },
  {
    id: 'rh-008',
    subjectId: 'reseaux-hydrauliques',
    type: 'Calcul',
    difficulty: 'Difficile',
    question: "Une conduite DN200 (rayon R=0,05m), L=1000m, K=80 (Manning), pente i=0,002. Quel est le débit (m³/s) ?",
    choices: ["0,025", "0,050", "0,100", "0,014"],
    correctAnswer: "0,050",
    explanation: "V = K×R^(2/3)×i^(1/2) = 80×0,05^0,667×0,002^0,5 = 80×0,136×0,0447 = 0,487 m/s. A = π×0,1² = 0,0314 m². Q = V×A ≈ 0,05 m³/s.",
    points: 20,
  },
  {
    id: 'rh-009',
    subjectId: 'reseaux-hydrauliques',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "L'indice linéaire de perte (ILP) en réseau AEP permet de :",
    choices: ["Calculer la pression en réseau", "Quantifier les fuites d'eau par rapport à la longueur du réseau", "Dimensionner les conduites", "Contrôler la qualité de l'eau"],
    correctAnswer: "Quantifier les fuites d'eau par rapport à la longueur du réseau",
    explanation: "ILP = Volume perdu / (Longueur réseau × pression × temps). C'est un indicateur de performance clé pour gérer les pertes non facturées.",
    points: 10,
  },
  {
    id: 'rh-010',
    subjectId: 'reseaux-hydrauliques',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Quel matériau est le plus couramment utilisé pour les conduites de distribution AEP en milieu rural au Bénin ?",
    choices: ["Acier inoxydable", "Fonte ductile", "PVC et PEHD", "Béton fibré"],
    correctAnswer: "PVC et PEHD",
    explanation: "Le PVC et le PEHD sont économiques, légers, faciles à installer et résistants à la corrosion, ce qui en fait les matériaux de choix pour les réseaux ruraux.",
    points: 5,
  },
  {
    id: 'rh-011',
    subjectId: 'reseaux-hydrauliques',
    type: 'Calcul',
    difficulty: 'Moyen',
    question: "Un château d'eau doit stocker l'équivalent de 15% du volume journalier pour une ville de 1000 hab (dotation 50 L/hab/j). Quel volume (m³) faut-il ?",
    choices: ["5", "7,5", "10", "15"],
    correctAnswer: "7,5",
    explanation: "Volume journalier = 1000×50 L = 50 000 L = 50 m³. Volume stockage = 50×0,15 = 7,5 m³.",
    points: 10,
  },

// ==================================================
// EXERCICES COMPLÉMENTAIRES EA — PROJET EXPLOITATION (5)
// ==================================================
  {
    id: 'pe-001',
    subjectId: 'projet-exploitation',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Quel document consigne toutes les opérations d'exploitation et les pannes d'une installation hydraulique ?",
    choices: ["Le registre foncier", "Le carnet de bord (Log Book)", "La fiche de paie", "Le plan de masse"],
    correctAnswer: "Le carnet de bord (Log Book)",
    explanation: "Le carnet de bord (Log Book) est obligatoire sur toute installation. Il permet de tracer les volumes produits, les incidents, les interventions et les mesures de qualité.",
    points: 5,
  },
  {
    id: 'pe-002',
    subjectId: 'projet-exploitation',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Un mode de gestion où un opérateur privé exploite le système AEP, l'État en reste propriétaire et fixe les tarifs, s'appelle :",
    choices: ["La régie communale", "L'affermage", "La concession", "Le partenariat public-privé"],
    correctAnswer: "L'affermage",
    explanation: "L'affermage est un contrat par lequel l'exploitant privé prend en charge l'O&M mais ne finance pas les investissements. L'État reste propriétaire des ouvrages.",
    points: 10,
  },
  {
    id: 'pe-003',
    subjectId: 'projet-exploitation',
    type: 'Calcul',
    difficulty: 'Moyen',
    question: "Un SAEP produit 200 m³/j et en facture 160 m³/j. Quel est son taux de rendement du réseau ?",
    choices: ["60%", "75%", "80%", "90%"],
    correctAnswer: "80%",
    explanation: "Rendement = (eau facturée / eau produite) × 100 = (160/200) × 100 = 80%.",
    methodology: "Rendement réseau = Volume facturable / Volume produit. L'objectif SONEB est > 85%.",
    points: 10,
  },
  {
    id: 'pe-004',
    subjectId: 'projet-exploitation',
    type: 'QCM',
    difficulty: 'Facile',
    question: "La maintenance préventive d'une pompe consiste à :",
    choices: ["Réparer la pompe après une panne", "Surveiller uniquement la pression", "Effectuer des entretiens planifiés avant la panne", "Remplacer la pompe chaque année"],
    correctAnswer: "Effectuer des entretiens planifiés avant la panne",
    explanation: "La maintenance préventive (vidange, graissage, vérification des joints) suit un planning prédéfini pour anticiper les avaries et réduire les arrêts de production.",
    points: 5,
  },
  {
    id: 'pe-005',
    subjectId: 'projet-exploitation',
    type: 'QCM',
    difficulty: 'Difficile',
    question: "L'indicateur 'Coût unitaire de production' d'une station AEP se calcule comme :",
    choices: ["Recettes totales / Débit journalier", "Charges totales d'exploitation / Volume m³ produit", "Investissement total / Population desservie", "Tarif moyen / Nombre d'abonnés"],
    correctAnswer: "Charges totales d'exploitation / Volume m³ produit",
    explanation: "Le coût unitaire = Charges O&M (personnel, énergie, produits chimiques, maintenance) / Volume produit (m³). Il permet de fixer un tarif garantissant la durabilité financière.",
    points: 15,
  },

// ==================================================
// EXERCICES COMPLÉMENTAIRES EA — SCIENCES PHYSIQUES (5)
// ==================================================
  {
    id: 'sp-002',
    subjectId: 'sciences-physiques',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Quelle loi établit la relation F = m × a ?",
    choices: ["La loi d'Ohm", "La deuxième loi de Newton (RFD)", "La loi de Darcy", "La loi de Pascal"],
    correctAnswer: "La deuxième loi de Newton (RFD)",
    explanation: "La Relation Fondamentale de la Dynamique (ΣF = m×a) relie la somme des forces extérieures à la masse et à l'accélération du système.",
    points: 5,
  },
  {
    id: 'sp-003',
    subjectId: 'sciences-physiques',
    type: 'Calcul',
    difficulty: 'Moyen',
    question: "Un moteur électrique de rendement η=0,85 entraîne une pompe. Si la puissance hydraulique fournie est 7,5 kW, quelle puissance électrique absorbe-t-il ?",
    choices: ["6,4 kW", "7,5 kW", "8,8 kW", "10 kW"],
    correctAnswer: "8,8 kW",
    explanation: "Pélectrique = P_hydraulique / η = 7500 / 0,85 = 8824 W ≈ 8,8 kW.",
    points: 10,
  },
  {
    id: 'sp-004',
    subjectId: 'sciences-physiques',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Dans un circuit électrique, si on double la tension U tout en maintenant la résistance R constante, le courant I :",
    choices: ["Est divisé par 2", "Reste identique", "Est multiplié par 2", "Est multiplié par 4"],
    correctAnswer: "Est multiplié par 2",
    explanation: "Selon la loi d'Ohm (I = U/R), si U double et R est fixe, alors I double aussi.",
    points: 5,
  },
  {
    id: 'sp-005',
    subjectId: 'sciences-physiques',
    type: 'Calcul',
    difficulty: 'Facile',
    question: "Quelle est la poussée d'Archimède exercée sur un ouvrage de volume immergé V=2 m³ dans l'eau (g=9,81 m/s²) ?",
    choices: ["981 N", "9810 N", "19 620 N", "2000 N"],
    correctAnswer: "19 620 N",
    explanation: "F = ρ×g×V = 1000 × 9,81 × 2 = 19 620 N.",
    points: 5,
  },
  {
    id: 'sp-006',
    subjectId: 'sciences-physiques',
    type: 'QCM',
    difficulty: 'Difficile',
    question: "La hauteur manômétrique totale (HMT) d'une pompe est la somme de :",
    choices: ["La hauteur géographique uniquement", "La hauteur géographique + pertes de charge totales", "La pression d'entrée uniquement", "La hauteur géographique + vitesse d'écoulement"],
    correctAnswer: "La hauteur géographique + pertes de charge totales",
    explanation: "HMT = Hgéographique + ΔH_charges = différence de cotes entre aspiration et refoulement + toutes les pertes de charge régulières et singulières dans le circuit.",
    points: 15,
  },

  // ==========================================
  // PHILOSOPHIE Expansion (A, B, C)
  // ==========================================
  {
    id: 'ph-010',
    subjectId: 'philosophie',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Selon Rousseau, qu'est-ce que l'homme perd par le contrat social ?",
    choices: ["Sa liberté naturelle", "Sa raison", "Sa moralité", "Sa vie"],
    correctAnswer: "Sa liberté naturelle",
    explanation: "Dans 'Du Contrat Social', Rousseau explique que la liberté naturelle est limitée par les forces de l'individu, alors que la liberté civile est limitée par la volonté générale.",
    points: 10
  },
  {
    id: 'ph-011',
    subjectId: 'philosophie',
    type: 'QCM',
    difficulty: 'Difficile',
    question: "Quelle est la fonction première de l'État selon Hobbes dans le Léviathan ?",
    choices: ["La liberté", "La sécurité", "La justice", "L'égalité"],
    correctAnswer: "La sécurité",
    explanation: "Pour Hobbes, l'État est créé pour mettre fin à 'la guerre de tous contre tous' et garantir la sécurité des citoyens.",
    points: 15
  },
  {
    id: 'ph-012',
    subjectId: 'philosophie',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Pour Kant, qu'est-ce qu'une action faite par devoir ?",
    choices: ["Une action intéressée", "Une action conforme à la loi morale", "Une action dictée par le plaisir", "Une action spontanée"],
    correctAnswer: "Une action conforme à la loi morale",
    explanation: "Kant distingue l'action faite 'conformément au devoir' (intérêt) et l'action faite 'par devoir' (respect de la loi morale).",
    points: 10
  },
  {
    id: 'ph-013',
    subjectId: 'philosophie',
    type: 'QCM',
    difficulty: 'Difficile',
    question: "Quelle est l'oeuvre majeure de Bergson traitant de la conscience ?",
    choices: ["Essai sur les données immédiates de la conscience", "Le Rire", "L'Évolution créatrice", "Les deux sources de la morale"],
    correctAnswer: "Essai sur les données immédiates de la conscience",
    explanation: "C'est dans cet ouvrage que Bergson définit la durée et la conscience comme un flux continu.",
    points: 15
  },
  {
    id: 'ph-014',
    subjectId: 'philosophie',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Qui a dit : 'L'homme est un animal politique' ?",
    choices: ["Platon", "Socrate", "Aristote", "Marx"],
    correctAnswer: "Aristote",
    explanation: "Pour Aristote, l'homme ne peut s'accomplir pleinement que dans le cadre de la Cité (Polis).",
    points: 5
  },

  // ==========================================
  // HISTOIRE-GÉO Expansion (A, B)
  // ==========================================
  {
    id: 'hi-010',
    subjectId: 'histoire',
    type: 'QCM',
    difficulty: 'Facile',
    question: "En quelle année le Dahomey (actuel Bénin) a-t-il accédé à l'indépendance ?",
    choices: ["1958", "1960", "1962", "1955"],
    correctAnswer: "1960",
    explanation: "Le Dahomey est devenu indépendant le 1er août 1960, comme de nombreux pays d'Afrique francophone.",
    points: 5
  },
  {
    id: 'hi-011',
    subjectId: 'histoire',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Qui fut le premier président du Dahomey indépendant ?",
    choices: ["Hubert Maga", "Sourou-Migan Apithy", "Justin Ahomadégbé", "Mathieu Kérékou"],
    correctAnswer: "Hubert Maga",
    explanation: "Hubert Maga est devenu le premier président de la République du Dahomey en 1960.",
    points: 10
  },
  {
    id: 'ge-002',
    subjectId: 'geographie',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Quel est le premier partenaire économique régional du Bénin ?",
    choices: ["Le Togo", "Le Nigeria", "Le Ghana", "Le Burkina Faso"],
    correctAnswer: "Le Nigeria",
    explanation: "En raison de sa proximité et de sa puissance économique, le Nigeria est le principal partenaire de transit du Bénin.",
    points: 10
  },
  {
    id: 'ge-003',
    subjectId: 'geographie',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Quelle est la capitale politique du Bénin ?",
    choices: ["Cotonou", "Porto-Novo", "Parakou", "Abomey"],
    correctAnswer: "Porto-Novo",
    explanation: "Porto-Novo est la capitale officielle, bien que Cotonou soit le centre économique.",
    points: 5
  },
  {
    id: 'ge-004',
    subjectId: 'geographie',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Laquelle de ces organisations s'occupe de l'intégration économique en Afrique de l'Ouest ?",
    choices: ["UA", "CEDEAO", "SADC", "UMA"],
    correctAnswer: "CEDEAO",
    explanation: "La CEDEAO (Communauté Économique des États de l'Afrique de l'Ouest) favorise la libre circulation et le commerce.",
    points: 10
  },

  // ==========================================
  // ÉCONOMIE Expansion (B)
  // ==========================================
  {
    id: 'ec-002',
    subjectId: 'economie',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Qu'est-ce que l'inflation ?",
    choices: ["Une baisse des prix", "Une hausse durable du niveau général des prix", "Une augmentation du chômage", "Une hausse des taux d'intérêt"],
    correctAnswer: "Une hausse durable du niveau général des prix",
    explanation: "L'inflation se traduit par une perte du pouvoir d'achat de la monnaie.",
    points: 10
  },
  {
    id: 'ec-003',
    subjectId: 'economie',
    type: 'QCM',
    difficulty: 'Difficile',
    question: "Lequel de ces économistes est considéré comme le père de la main invisible ?",
    choices: ["Keynes", "Marx", "Adam Smith", "Ricardo"],
    correctAnswer: "Adam Smith",
    explanation: "Dans 'La Richesse des Nations', Smith théorise l'autorégulation du marché par la 'main invisible'.",
    points: 15
  },
  {
    id: 'ec-004',
    subjectId: 'economie',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Quelle est la formule simplifiée du PIB ?",
    choices: ["P = C + I + G + (X - M)", "P = C - I", "P = X + M", "P = C + S"],
    correctAnswer: "P = C + I + G + (X - M)",
    explanation: "Le PIB correspond à la somme des consommations, investissements, dépenses publiques et du solde commercial.",
    points: 10
  },
  {
    id: 'ec-005',
    subjectId: 'economie',
    type: 'QCM',
    difficulty: 'Difficile',
    question: "Qu'est-ce que la Loi de Say ?",
    choices: ["L'offre crée sa propre demande", "La demande tire l'offre", "L'État doit intervenir", "La monnaie est neutre"],
    correctAnswer: "L'offre crée sa propre demande",
    explanation: "Jean-Baptiste Say soutenait que toute production génère un revenu suffisant pour l'acheter.",
    points: 15
  },
  {
    id: 'ec-006',
    subjectId: 'economie',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Lequel de ces indicateurs mesure les inégalités de revenus ?",
    choices: ["Le PIB", "L'IDH", "Le coefficient de Gini", "Le taux d'inflation"],
    correctAnswer: "Le coefficient de Gini",
    explanation: "Le coefficient de Gini varie entre 0 (égalité parfaite) et 1 (inégalité totale).",
    points: 10
  },

  // ==========================================
  // MATHÉMATIQUES Expansion (A, B)
  // ==========================================
  {
    id: 'ma-015',
    subjectId: 'mathematiques',
    type: 'Calcul',
    difficulty: 'Facile',
    question: "Calculer la dérivée de f(x) = x² + 3x + 2",
    choices: ["2x + 3", "x + 3", "2x + 2", "x² + 3"],
    correctAnswer: "2x + 3",
    explanation: "La dérivée de x² est 2x, et celle de 3x est 3.",
    points: 5
  },
  {
    id: 'ma-016',
    subjectId: 'mathematiques',
    type: 'Calcul',
    difficulty: 'Moyen',
    question: "Quelle est la limite de 1/x quand x tend vers +infini ?",
    choices: ["+infini", "0", "1", "N'existe pas"],
    correctAnswer: "0",
    explanation: "Quand le dénominateur devient infiniment grand, la fraction tend vers 0.",
    points: 10
  },
  {
    id: 'ma-017',
    subjectId: 'mathematiques',
    type: 'Calcul',
    difficulty: 'Difficile',
    question: "Soit une suite arithmétique de premier terme U0=2 et de raison r=3. Quelle est la valeur de U10 ?",
    choices: ["30", "32", "29", "20"],
    correctAnswer: "32",
    explanation: "Un = U0 + n*r = 2 + 10*3 = 32.",
    points: 15
  },
  {
    id: 'ma-018',
    subjectId: 'mathematiques',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "L'ensemble des solutions de x² = 4 est :",
    choices: ["{2}", "{-2}", "{2, -2}", "{4}"],
    correctAnswer: "{2, -2}",
    explanation: "2² = 4 et (-2)² = 4.",
    points: 10
  },
  {
    id: 'ma-019',
    subjectId: 'mathematiques',
    type: 'Calcul',
    difficulty: 'Facile',
    question: "Laquelle de ces fonctions est impaire ?",
    choices: ["f(x) = x²", "f(x) = x³", "f(x) = x + 1", "f(x) = |x|"],
    correctAnswer: "f(x) = x³",
    explanation: "Une fonction est impaire si f(-x) = -f(x). (-x)³ = -x³.",
    points: 5
  },

  // ==========================================
  // BIOLOGIE expansion (C)
  // ==========================================
  {
    id: 'bi-009',
    subjectId: 'biologie',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Lequel de ces chromosomes détermine le sexe masculin chez l'humain ?",
    choices: ["X", "Y", "21", "13"],
    correctAnswer: "Y",
    explanation: "Le chromosome Y porte le gène SRY responsable du développement des caractères mâles.",
    points: 10
  },
  {
    id: 'bi-010',
    subjectId: 'biologie',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Quelle hormone régule le taux de glucose dans le sang ?",
    choices: ["Adrénaline", "Insuline", "Thyroxine", "Gastrine"],
    correctAnswer: "Insuline",
    explanation: "L'insuline est une hormone hypoglycémiante sécrétée par le pancréas.",
    points: 10
  },
  {
    id: 'bi-011',
    subjectId: 'biologie',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Quelle est l'unité de base du système nerveux ?",
    choices: ["Le néphron", "Le neurone", "L'alvéole", "La fibre musculaire"],
    correctAnswer: "Le neurone",
    explanation: "Le neurone est la cellule spécialisée dans la transmission de l'influx nerveux.",
    points: 5
  },
  {
    id: 'bi-012',
    subjectId: 'biologie',
    type: 'QCM',
    difficulty: 'Difficile',
    question: "Où se déroule la synthèse des protéines dans la cellule ?",
    choices: ["Le noyau", "Les ribosomes", "Les mitochondries", "L'appareil de Golgi"],
    correctAnswer: "Les ribosomes",
    explanation: "La traduction de l'ARNm en chaîne polypeptidique a lieu au niveau des ribosomes.",
    points: 15
  },
  {
    id: 'bi-013',
    subjectId: 'biologie',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Quel organe est responsable de l'absorption des nutriments ?",
    choices: ["L'estomac", "Le gros intestin", "L'intestin grêle", "Le foie"],
    correctAnswer: "L'intestin grêle",
    explanation: "Les villosités de l'intestin grêle augmentent la surface d'échange pour l'absorption.",
    points: 10
  },

  // ==========================================
  // CHIMIE expansion (C)
  // ==========================================
  {
    id: 'ch-003',
    subjectId: 'chimie',
    type: 'Calcul',
    difficulty: 'Moyen',
    question: "Quel est le pH d'une solution neutre à 25°C ?",
    choices: ["0", "7", "14", "10"],
    correctAnswer: "7",
    explanation: "À la neutralité, [H3O+] = [OH-] = 10^-7 mol/L.",
    points: 10
  },
  {
    id: 'ch-004',
    subjectId: 'chimie',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Quel est le symbole chimique du Fer ?",
    choices: ["F", "Fe", "Fr", "Fi"],
    correctAnswer: "Fe",
    explanation: "Fe vient du latin 'Ferrum'.",
    points: 5
  },
  {
    id: 'ch-005',
    subjectId: 'chimie',
    type: 'Calcul',
    difficulty: 'Difficile',
    question: "Quelle est la masse molaire de l'eau (H2O) ? (H=1, O=16)",
    choices: ["17 g/mol", "18 g/mol", "16 g/mol", "20 g/mol"],
    correctAnswer: "18 g/mol",
    explanation: "2*1 + 16 = 18 g/mol.",
    points: 15
  },
  {
    id: 'ch-006',
    subjectId: 'chimie',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Une réaction exothermique :",
    choices: ["Absorbe de la chaleur", "Libère de la chaleur", "Ne change pas de température", "Est impossible"],
    correctAnswer: "Libère de la chaleur",
    explanation: "Les réactions exothermiques transfèrent de l'énergie thermique vers le milieu extérieur.",
    points: 10
  },
  {
    id: 'ch-007',
    subjectId: 'chimie',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Quel gaz est produit par la réaction d'un acide sur du calcaire ?",
    choices: ["H2", "O2", "CO2", "N2"],
    correctAnswer: "CO2",
    explanation: "Le dioxyde de carbone se dégage par effervescence.",
    points: 10
  },

  // ==========================================
  // FRANÇAIS expansion (Toutes)
  // ==========================================
  {
    id: 'fr-002',
    subjectId: 'francais',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Quel est le participe passé du verbe 'boire' ?",
    choices: ["Bu", "Boire", "Buvé", "Bué"],
    correctAnswer: "Bu",
    explanation: "Le participe passé de boire est bu.",
    points: 5
  },
  {
    id: 'fr-003',
    subjectId: 'francais',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Quelle figure de style utilise une comparaison sans outil de comparaison ?",
    choices: ["La litote", "La métaphore", "L'oxymore", "L'anaphore"],
    correctAnswer: "La métaphore",
    explanation: "La métaphore est une comparaison directe (ex: 'Ce vieillard est un chêne').",
    points: 10
  },
  {
    id: 'fr-004',
    subjectId: 'francais',
    type: 'QCM',
    difficulty: 'Difficile',
    question: "Lequel de ces écrivains est l'auteur d'Une si longue lettre ?",
    choices: ["Mariama Bâ", "Léopold Sédar Senghor", "Chinua Achebe", "Camara Laye"],
    correctAnswer: "Mariama Bâ",
    explanation: "Mariama Bâ est une écrivaine sénégalaise majeure pour ce roman épistolaire.",
    points: 15
  },
  {
    id: 'fr-005',
    subjectId: 'francais',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Comment appelle-t-on le champ lexical relatif à la nature ?",
    choices: ["Champ bucolique", "Champ champêtre", "Champ urbain", "Champ sémantique"],
    correctAnswer: "Champ bucolique",
    explanation: "Le terme bucolique désigne ce qui est relatif à la vie pastorale et à la nature.",
    points: 10
  },
  {
    id: 'fr-006',
    subjectId: 'francais',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Où se place l'accent circonflexe dans le mot 'foret' ?",
    choices: ["fôrêt", "forêt", "fôret", "Aucun"],
    correctAnswer: "forêt",
    explanation: "L'accent circonflexe se place sur le 'e' pour signaler l'ancien 's' (forest).",
    points: 5
  },

  // ==========================================
  // ANGLAIS expansion (Toutes)
  // ==========================================
  {
    id: 'en-003',
    subjectId: 'anglais',
    type: 'QCM',
    difficulty: 'Facile',
    question: "What is the past simple of the verb 'to go' ?",
    choices: ["Goed", "Went", "Gone", "Going"],
    correctAnswer: "Went",
    explanation: " 'To go' is an irregular verb.",
    points: 5
  },
  {
    id: 'en-004',
    subjectId: 'anglais',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Which modal verb expresses obligation ?",
    choices: ["Can", "May", "Should", "Must"],
    correctAnswer: "Must",
    explanation: " 'Must' expresses a strong obligation or necessity.",
    points: 10
  },
  {
    id: 'en-005',
    subjectId: 'anglais',
    type: 'QCM',
    difficulty: 'Difficile',
    question: "Choose the correct relative pronoun: 'The man ____ I saw yesterday.'",
    choices: ["Who", "Whom", "Whose", "Which"],
    correctAnswer: "Whom",
    explanation: " 'Whom' is used because it refers to the object of the verb 'saw'.",
    points: 15
  },
  {
    id: 'en-006',
    subjectId: 'anglais',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "What is the opposite of 'generous' ?",
    choices: ["Kind", "Selfish", "Happy", "Greedy"],
    correctAnswer: "Selfish",
    explanation: " 'Selfish' is someone who only thinks about themselves, while 'generous' gives to others.",
    points: 10
  },
  {
    id: 'en-007',
    subjectId: 'anglais',
    type: 'QCM',
    difficulty: 'Facile',
    question: "How do you say 'Je m'appelle' in English ?",
    choices: ["My name is", "I name me", "I call me", "Me is name"],
    correctAnswer: "My name is",
    explanation: " 'My name is' is the standard way to introduce yourself in English.",
    points: 5
  },

// Note: Pour atteindre les 500 exercices, nous générerons des variantes programmatiques 
// ou ajouterons des entrées supplémentaires dans le fichier final de production.
// Ici nous posons la structure et les exemples clés par matière.
];

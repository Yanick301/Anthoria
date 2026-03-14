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
    explanation: "C'est l'énergie solaire qui provoque l'évaporation des océans et des surfaces continentales.",
    points: 5
  },
  {
    id: 'mre-002',
    subjectId: 'mobilisation-eau',
    type: 'Calcul',
    difficulty: 'Moyen',
    question: "Si une zone reçoit 1200 mm de pluie par an et que l'évapotranspiration réelle (ETR) est de 800 mm, quel est l'écoulement annuel théorique (en mm) ?",
    correctAnswer: "400",
    explanation: "Selon le bilan hydrologique simplifié : P = ETR + Q. Donc Q = P - ETR = 1200 - 800 = 400 mm.",
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
    explanation: "Une nappe libre a une surface piézométrique qui coïncide avec la surface libre de l'eau.",
    points: 5
  },
  {
    id: 'mre-004',
    subjectId: 'mobilisation-eau',
    type: 'Calcul',
    difficulty: 'Moyen',
    question: "Calculez le débit Q (en m³/s) d'un forage traversant une section de 0,5 m² avec une conductivité k=10⁻³ m/s et un gradient i=0,1 (Loi de Darcy).",
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

  // ==========================================
  // MATHÉMATIQUES (Terminale C/D) - Migré
  // ==========================================
  { id: 'mc-001', subjectId: 'mathematiques', type: 'QCM', difficulty: 'Facile', points: 10,
    question: "Quelle est la dérivée de f(x) = 3x² + 2x − 5 ?",
    choices: ["f'(x) = 6x + 2", "f'(x) = 3x + 2", "f'(x) = 6x − 5", "f'(x) = 6x"],
    correctAnswer: "f'(x) = 6x + 2",
    explanation: "On dérive terme à terme : (3x²)' = 6x, (2x)' = 2, (−5)' = 0." },
  { id: 'mc-002', subjectId: 'mathematiques', type: 'QCM', difficulty: 'Moyen', points: 15,
    question: "Calculez lim(x→2) (x² − 4)/(x − 2)",
    choices: ["4", "0", "∞", "2"],
    correctAnswer: "4",
    explanation: "Factoriser : (x²−4)/(x−2) = (x+2)(x−2)/(x−2) = x+2. Lim = 2+2 = 4." },
  { id: 'mc-003', subjectId: 'mathematiques', type: 'QCM', difficulty: 'Facile', points: 10,
    question: "Calculer ∫₀² x dx",
    choices: ["2", "4", "1", "0"],
    correctAnswer: "2",
    explanation: "∫ x dx = x²/2. Entre 0 et 2 : [x²/2]₀² = 4/2 − 0 = 2." },

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

  // ==========================================
  // TERMINAL A - PHILOSOPHIE & HISTOIRE
  // ==========================================
  {
    id: 'philo-liberte-qcm-a1',
    subjectId: 'philosophie',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Selon Sartre, l'homme est :",
    choices: ["Condamné à être libre", "Totalement déterminé par sa nature", "Libre uniquement dans l'état de nature", "Libre seulement en société"],
    correctAnswer: "Condamné à être libre",
    explanation: "Pour Sartre, l'existence précède l'essence : l'homme se définit par ses choix. Il est condamné à être libre car il ne peut fuir la responsabilité.",
    points: 10
  },
  {
    id: 'philo-rousseau-qcm-a2',
    subjectId: 'philosophie',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Qui a dit : 'L'homme est né libre, et partout il est dans les fers' ?",
    choices: ["Jean-Paul Sartre", "Jean-Jacques Rousseau", "Immanuel Kant", "Thomas Hobbes"],
    correctAnswer: "Jean-Jacques Rousseau",
    explanation: "Cette citation célèbre est la première phrase du Contrat Social de Jean-Jacques Rousseau (1762).",
    points: 10
  },
  {
    id: 'philo-autonomie-qcm-a3',
    subjectId: 'philosophie',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "La liberté comme autonomie (se donner sa propre loi morale) est une conception de :",
    choices: ["Rousseau", "Sartre", "Kant", "Mill"],
    correctAnswer: "Kant",
    explanation: "Kant définit la liberté comme autonomie : agir selon la loi morale que la raison se prescrit à elle-même (impératif catégorique).",
    points: 15
  },
  {
    id: 'philo-conscience-qcm-a11',
    subjectId: 'philosophie',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Le Cogito cartésien ('Je pense, donc je suis') fonde :",
    choices: ["La certitude de l'existence du monde extérieur", "La certitude de son propre existence pensante", "La certitude de l'existence de Dieu", "La certitude de la liberté"],
    correctAnswer: "La certitude de son propre existence pensante",
    explanation: "Le Cogito de Descartes établit que même si on doute de tout, on ne peut douter que l'on doute, donc que l'on pense, donc que l'on existe en tant que chose pensante.",
    points: 10
  },
  {
    id: 'philo-inconscient-qcm-a12',
    subjectId: 'philosophie',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Selon Freud, l'inconscient contient principalement :",
    choices: ["Les souvenirs heureux", "Les désirs refoulés et les traumatismes", "La conscience morale", "La raison pure"],
    correctAnswer: "Les désirs refoulés et les traumatismes",
    explanation: "L'inconscient freudien est le siège des désirs refoulés, des pulsions et des traumatismes que la conscience refuse d'accepter.",
    points: 15
  },
  {
    id: 'hist-colonisation-qcm-a1',
    subjectId: 'histoire',
    type: 'QCM',
    difficulty: 'Facile',
    question: "Quel a été le principal objectif de la Conférence de Berlin (1884-1885) ?",
    choices: ["La décolonisation de l'Afrique", "Le partage de l'Afrique entre les puissances européennes", "La fin de l'esclavage", "La création de l'ONU"],
    correctAnswer: "Le partage de l'Afrique entre les puissances européennes",
    explanation: "La conférence de Berlin a fixé les règles du partage de l'Afrique pour éviter les conflits entre puissances coloniales.",
    points: 10
  },
  {
    id: 'hist-guerre-froide-qcm-a7',
    subjectId: 'histoire',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Quel mur a été érigé en 1961, symbole de la division de l'Europe ?",
    choices: ["Le mur de l'Atlantique", "Le mur de Berlin", "La ligne Maginot", "Le mur de Chine"],
    correctAnswer: "Le mur de Berlin",
    explanation: "Le mur de Berlin, surnommé le 'mur de la honte', séparait Berlin-Est de Berlin-Ouest pendant la Guerre froide.",
    points: 15
  },

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
  {
    id: 'ec-001',
    subjectId: 'education-civique',
    type: 'QCM',
    difficulty: 'Moyen',
    question: "Quelle est la date d'adoption de la Constitution actuelle du Bénin ?",
    choices: ["1er Août 1960", "26 Octobre 1972", "11 Décembre 1990", "6 Avril 2006"],
    correctAnswer: "11 Décembre 1990",
    explanation: "La constitution de la 4ème République a été adoptée par référendum le 11 décembre 1990.",
    points: 10
  }
];

// Note: Pour atteindre les 500 exercices, nous générerons des variantes programmatiques 
// ou ajouterons des entrées supplémentaires dans le fichier final de production.
// Ici nous posons la structure et les exemples clés par matière.

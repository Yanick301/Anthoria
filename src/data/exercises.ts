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
  }
];

// Note: Pour atteindre les 500 exercices, nous générerons des variantes programmatiques 
// ou ajouterons des entrées supplémentaires dans le fichier final de production.
// Ici nous posons la structure et les exemples clés par matière.

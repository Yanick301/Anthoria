import type { Subject } from '@/lib/index';

export const SUBJECTS: Subject[] = [
  {
    id: 'mobilisation-eau',
    name: 'Mobilisation des Ressources en Eau',
    shortName: 'Ressources Eau',
    icon: '💧',
    color: '#0A4DA6',
    gradient: 'from-blue-700 to-blue-500',
    description: 'Cycle hydrologique, eaux souterraines, captages, barrages et systèmes d\'adduction.',
    totalExercises: 60,
    chapters: [
      {
        id: 'cycle-eau',
        title: 'Le Cycle de l\'Eau',
        content: `Le cycle hydrologique (ou cycle de l'eau) est le trajet continu de l'eau à travers différents réservoirs terrestres et atmosphériques. Il comprend les processus d'évaporation, condensation, précipitation, ruissellement et infiltration.

**Principaux réservoirs :**
- Océans : 97% de l'eau totale (salée)
- Glaces et glaciers : 2,1%
- Eaux souterraines : 0,6%
- Eaux de surface (lacs, rivières) : 0,013%
- Atmosphère : 0,001%

**Processus clés :**
1. **Évaporation** : L'eau des surfaces liquides se transforme en vapeur d'eau sous l'effet de l'énergie solaire
2. **Évapotranspiration** : Combinaison de l'évaporation et de la transpiration des végétaux
3. **Condensation** : La vapeur d'eau se transforme en gouttelettes formant les nuages
4. **Précipitations** : Pluie, neige, grêle selon les conditions atmosphériques
5. **Ruissellement** : L'eau de pluie s'écoule en surface vers les cours d'eau
6. **Infiltration** : L'eau s'infiltre dans le sol pour alimenter les nappes souterraines`,
        examples: [
          'En zone tropicale (Bénin), l\'évapotranspiration peut atteindre 1200-1500 mm/an.',
          'Le bassin versant de l\'Ouémé couvre 50 000 km² et alimente la lagune de Porto-Novo.',
          'La nappe phréatique du Continental Terminal au Bénin est une importante ressource en eau potable.'
        ],
        keyPoints: [
          'L\'eau douce représente seulement 2,5% de l\'eau totale sur Terre',
          'Le bilan hydrologique : P = ETR + Q ± ΔS (P=précipitations, ETR=évapotranspiration réelle, Q=débit, ΔS=variation stockage)',
          'Coefficient de ruissellement Cr = Q/P (rapport débit/précipitation)',
          'La perméabilité du sol conditionne l\'infiltration (k en m/s, loi de Darcy)'
        ]
      },
      {
        id: 'eaux-souterraines',
        title: 'Eaux Souterraines et Aquifères',
        content: `Les eaux souterraines constituent une ressource majeure pour l'alimentation en eau potable, notamment dans les zones rurales du Bénin.

**Types d'aquifères :**
- **Aquifère libre (nappe phréatique)** : Surface libre, en contact avec l'atmosphère via la zone non saturée. Recharge directe par les précipitations.
- **Aquifère captif (artésien)** : Confiné entre deux couches imperméables. Sous pression, peut être artésien.
- **Aquifère semi-captif** : Entre les deux, avec une couche semi-perméable.

**Loi de Darcy :**
Q = k × i × A
Où k = conductivité hydraulique (m/s), i = gradient hydraulique, A = section (m²)

**Paramètres hydrogéologiques :**
- Transmissivité T = k × e (m²/s), où e = épaisseur saturée
- Coefficient d'emmagasinement S (sans dimension)
- Porosité effective ne = volume des vides/volume total

**Méthodes d'exploitation :**
- Puits traditionnels (profondeur < 20m)
- Forages (profondeur 30-150m)
- Sources captées
- Drains horizontaux`,
        examples: [
          'T = 10⁻³ m²/s et S = 10⁻⁴ : aquifère captif productif dans le bassin sédimentaire côtier du Bénin',
          'Débit d\'un forage AEP type Bénin : 1-5 m³/h selon la lithologie',
          'Nappe du Continental Terminal : profondeur 5-50m, débit 1-10 m³/h'
        ],
        keyPoints: [
          'Équation de Theis pour régime transitoire : s = Q/(4πT) × W(u)',
          'Méthode de Cooper-Jacob pour régime pseudo-permanent',
          'Rabattement spécifique qs = s/Q (m/(m³/h))',
          'Pompage d\'essai pour déterminer T et S'
        ]
      },
      {
        id: 'captages-ouvrages',
        title: 'Captages et Ouvrages Hydrauliques',
        content: `Le captage est l'ensemble des ouvrages permettant de prélever l'eau dans une ressource naturelle (souterraine ou de surface) pour son exploitation.

**Captage des eaux souterraines :**
1. **Puits** : Ouvrage vertical de grand diamètre (0,8-3m), profondeur < 30m
   - Cuvelage en béton ou maçonnerie
   - Crépines et massif filtrant
2. **Forages** : Ouvrage de petit diamètre (6-30 pouces), profondeur > 30m
   - Tubage PVC ou acier inoxydable
   - Crépines filtrantes
   - Pompe immergée
3. **Sources** : Émergence naturelle, captage par drain ou chambre

**Captage des eaux de surface :**
- Prise d'eau en rivière (prise par gravité, par pompage)
- Barrages et retenues (régularisation du débit)
- Pompage direct en cours d'eau

**Barrages :**
- Barrage en terre (le plus courant en Afrique)
- Barrage en béton (poids, voûte, contreforts)
- Déversoir et évacuateur de crues

**Protection des captages (périmètres de protection) :**
- PP immédiat : 10-50m, propriété exclusive
- PP rapproché : 50-500m, activités réglementées
- PP éloigné : Tout le bassin versant`,
        examples: [
          'Forage AEP village au Bénin : diamètre 6", profondeur 60m, débit 3 m³/h, pompe immergée 220V',
          'Barrage de Nangbéto sur la rivière Mono : puissance 64 MW, réservoir 1,7 km³',
          'Périmètre immédiat d\'un forage : rayon 10m, clôturé et planté de haies'
        ],
        keyPoints: [
          'Débit nominal d\'exploitation ≤ 80% du débit critique',
          'Équipement électromécanique : pompe centrifuge + moteur + tableau électrique',
          'Analyse bactériologique obligatoire après tout captage',
          'Déclaration d\'utilité publique (DUP) pour les périmètres de protection'
        ]
      }
    ]
  },
  {
    id: 'traitement-eau',
    name: 'Traitement de l\'Eau',
    shortName: 'Traitement',
    icon: '🔬',
    color: '#0891B2',
    gradient: 'from-cyan-700 to-cyan-500',
    description: 'Filières de traitement, coagulation, floculation, décantation, filtration, désinfection.',
    totalExercises: 80,
    chapters: [
      {
        id: 'qualite-eau',
        title: 'Qualité de l\'Eau et Normes',
        content: `La qualité de l'eau est définie par ses paramètres physico-chimiques et bactériologiques qui doivent répondre aux normes de potabilité.

**Paramètres organoleptiques :**
- Couleur (< 15 UCV), Turbidité (< 5 NTU pour eau potable)
- Odeur, Goût

**Paramètres physico-chimiques :**
- pH (6,5 - 8,5), Température (< 25°C)
- Dureté totale TH (< 50°F), Alcalinité TAC
- Conductivité, Minéralisation totale (< 1500 mg/L)
- Nitrates (< 50 mg/L), Nitrites (< 0,1 mg/L)
- Fer (< 0,3 mg/L), Manganèse (< 0,05 mg/L)
- Fluorures (< 1,5 mg/L), Chlorures (< 250 mg/L)

**Paramètres bactériologiques (OMS/Bénin) :**
- Coliformes totaux : 0 UFC/100mL
- Escherichia coli : 0 UFC/100mL
- Entérocoques : 0 UFC/100mL
- Germes totaux à 22°C : < 100 UFC/mL

**Paramètres de pollution :**
- DBO5 (Demande Biochimique en Oxygène) : pour eaux usées
- DCO (Demande Chimique en Oxygène)
- MES (Matières En Suspension)`,
        examples: [
          'Eau du robinet Cotonou : pH=7,2, turbidité=1,2 NTU, conductivité=450 µS/cm, conforme',
          'Eau de forage avec Fe=2 mg/L > norme (0,3) → nécessite traitement de déferrisation',
          'DBO5/DCO = 0,5 indique une eau biodégradable (eau usée domestique typique)'
        ],
        keyPoints: [
          'Directives OMS 2017 pour l\'eau potable (4ème édition)',
          'Normes béninoises basées sur les normes OMS avec adaptations locales',
          'Test H2S sur terrain : rapide et économique pour détecter contamination fécale',
          'Chlore résiduel libre en réseau : 0,2 - 0,5 mg/L recommandé'
        ]
      },
      {
        id: 'filiere-traitement',
        title: 'Filières de Traitement',
        content: `Une filière de traitement est l'enchaînement des opérations unitaires permettant de produire une eau répondant aux normes de qualité à partir d'une eau brute.

**Filière eau de surface (turbide) :**
Eau brute → Prétraitement → Coagulation-Floculation → Décantation → Filtration → Désinfection → Eau traitée

**Filière eau souterraine (fer et manganèse) :**
Eau brute → Aération → Filtration → Désinfection → Eau traitée

**Opérations unitaires :**
1. **Prétraitement** : Dégrillage, dessablage, dégraissage
2. **Coagulation** : Déstabilisation des colloïdes (sulfate d'aluminium Al₂(SO₄)₃)
3. **Floculation** : Agglomération des flocs (agitation douce)
4. **Décantation** : Séparation solide/liquide par gravité
5. **Filtration** : Passage à travers un média filtrant (sable, charbon actif)
6. **Désinfection** : Élimination des micro-organismes (chlore, UV)
7. **Correction pH** : Chaux, soude
8. **Déferrisation** : Oxydation + filtration du fer

**Doses typiques de réactifs :**
- Sulfate d'aluminium : 10-80 mg/L selon turbidité
- Chlore actif : 1-5 mg/L
- Chaux : 10-50 mg/L pour correction pH
- Permanganate de potassium : 1-3 mg/L pour oxydation Fe/Mn`,
        examples: [
          'Station de traitement SONEB Cotonou : eau du lac Nokoué, filière complète, capacité 200 000 m³/j',
          'Jar test : 4 béchers, doses Al₂(SO₄)₃ croissantes → dose optimale = turbidité résiduelle minimale',
          'Vitesse de floculation : rapide (60 tr/min) puis lente (20 tr/min) pendant 20-30 min'
        ],
        keyPoints: [
          'Potentiel Zéta : colloïdes chargés négativement (-30 à -50 mV), coagulant ajoute charges positives',
          'Vitesse de décantation de Stokes : v = g(ρp-ρe)d²/(18µ)',
          'Indice de Langelier IL = pH mesuré - pH saturation (corrosivité)',
          'FILTRE LENT : vitesse 0,1-0,3 m/h vs FILTRE RAPIDE : 5-15 m/h'
        ]
      },
      {
        id: 'desinfection',
        title: 'Désinfection de l\'Eau',
        content: `La désinfection est l'opération unitaire qui élimine ou inactive les micro-organismes pathogènes présents dans l'eau.

**Agents désinfectants :**
1. **Chlore gazeux (Cl₂)** : très efficace, économique, mais dangereux
2. **Hypochlorite de sodium (NaOCl)** : eau de Javel, facile d'emploi
3. **Hypochlorite de calcium Ca(OCl)₂** : HTH, usage courant en Afrique
4. **Dioxyde de chlore (ClO₂)** : efficace sur Cryptosporidium
5. **Rayonnement UV** : 254 nm, sans résidu chimique
6. **Ozone (O₃)** : très oxydant, coûteux

**Cinétique de désinfection (loi de Chick-Watson) :**
ln(N/N₀) = -k × C^n × t
Où N = germes résiduels, C = concentration désinfectant, t = temps contact

**CT (Concentration × Temps) :**
- CT = C × t (mg/L × min)
- Pour 3 log de réduction des virus : CT = 15 mg.min/L (chlore libre, pH 6-7)
- Pour Giardia 3 log : CT = 165 mg.min/L

**Chloration pratique :**
- Point de rupture (break-point) : destruction des chloramines
- Chlore résiduel libre = chlore total - chloramines
- Demande en chlore = chlore injecté - chlore résiduel

**Sous-produits de la chloration :**
- Trihalométhanes (THM) : cancérigènes, formés si matière organique
- Haloacides (HAA)
- Seuil THM : < 100 µg/L (norme OMS)`,
        examples: [
          'Dose de chlore pour village (population 500, débit 5 m³/h) : C = 2 mg/L → débit injecteur = 10 g/h',
          'HTH à 70% de chlore actif : pour C = 2 mg/L dans 1 m³ → m = 2,86 g de HTH',
          'Temps de contact minimum avec chlore résiduel 0,5 mg/L : T = 30 min dans le réservoir'
        ],
        keyPoints: [
          'pH optimal chloration : 6-7 (HOCl actif > OCl⁻ inactif)',
          'Turbidité doit être < 1 NTU avant désinfection pour efficacité optimale',
          'Chloramines = nuisibles mais persistent plus longtemps que chlore libre',
          'UV : 40 mJ/cm² pour 4 log réduction des bactéries'
        ]
      }
    ]
  },
  {
    id: 'assainissement',
    name: 'Assainissement',
    shortName: 'Assainissement',
    icon: '🏗️',
    color: '#0D9488',
    gradient: 'from-teal-700 to-teal-500',
    description: 'Collecte et traitement des eaux usées, boues, assainissement autonome et collectif.',
    totalExercises: 80,
    chapters: [
      {
        id: 'eaux-usees',
        title: 'Eaux Usées et Caractéristiques',
        content: `Les eaux usées sont l'ensemble des eaux ayant subi une dégradation de leur qualité après utilisation domestique, industrielle ou pluviale.

**Types d'eaux usées :**
1. **Eaux usées domestiques (EUD)** :
   - Eaux ménagères (cuisine, salle de bain) : 70% du total
   - Eaux vannes (toilettes) : 30% du total
   - Production : 80-120 L/hab/j en Afrique subsaharienne

2. **Eaux industrielles** : très variables selon l'activité
3. **Eaux pluviales** : ruissellement urbain
4. **Eaux parasites** : infiltrations dans le réseau

**Caractéristiques des eaux usées domestiques :**
- DBO5 : 200-350 mg/L (pollué)
- DCO : 400-600 mg/L
- MES : 200-350 mg/L
- NH4+ : 30-60 mg/L
- Phosphore total : 10-25 mg/L
- Coliformes fécaux : 10⁶-10⁹ UFC/100mL
- pH : 7-8

**Ratio DBO5/DCO :**
- > 0,5 : eau biodégradable (traitement biologique efficace)
- < 0,3 : eau difficilement biodégradable

**Flux polluants :**
Charge unitaire par habitant (Bénin) :
- DBO5 : 40-60 g/hab/j
- MES : 50-80 g/hab/j
- Azote total : 8-12 g/hab/j`,
        examples: [
          'Ville de 10 000 hab : Q = 10 000 × 100 = 1 000 m³/j, DBO5 = 10 000 × 50 = 500 kg/j',
          'Coefficient de pointe Cp = Qmax/Qmoy ≈ 3-5 pour eaux usées urbaines',
          'Débit de temps sec (DTS) = Débit sanitaire + Eaux parasites'
        ],
        keyPoints: [
          'Temps de séjour dans réseau : < 4h pour éviter fermentation septique',
          'Autoépuration : processus naturel de dégradation dans les milieux naturels',
          'Demande en O₂ = DBO5 × 1,4 (pour nitrification)',
          'Potentiel de minéralisation : rapport C/N doit être 20-30 pour bon compostage'
        ]
      },
      {
        id: 'assainissement-autonome',
        title: 'Assainissement Autonome',
        content: `L'assainissement autonome (non collectif) est le système de traitement des eaux usées à la parcelle, sans raccordement à un réseau collectif d'égouts.

**Systèmes courants :**

1. **Fosse septique + épandage :**
   - Volume fosse : V = 300 L + n × 150 L (n = habitants)
   - Rétention des matières solides, liquide clarifié en épandage
   - Vidange : tous les 2-4 ans

2. **Fosse septique toutes eaux (FSTE) :**
   - Reçoit toutes les eaux usées (ménagères + vannes)
   - Volume minimum : 3 m³ pour 5 personnes
   - Compartiments 2/3 + 1/3

3. **Puits perdu (puits absorbant) :**
   - Simple et économique mais pollue la nappe
   - INTERDIT dans zones à nappe peu profonde

4. **Latrines améliorées à ventilation (VIP) :**
   - Tube de ventilation avec moustiquaire
   - Réduction odeurs et mouches
   - Standard minimum en zone rurale

5. **Toilettes écologiques (ECOSAN) :**
   - Séparation urines/fèces
   - Valorisation agronomique
   - Adapté aux zones à faible consommation d'eau

**Dimensionnement fosse septique :**
V (m³) = 300 + n × 150 (en litres, n = habitants)
Ou V = Q × ts (Q = débit journalier, ts = temps de séjour 24-72h)`,
        examples: [
          'Fosse septique pour 6 personnes : V = 300 + 6×150 = 1200 L = 1,2 m³',
          'Largeur tranchée d\'épandage = L × 300 + A × 0,02 (L=personnes, A=surface)',
          'Latrines VIP : diamètre trou ventilation = 0,11m, hauteur = 2m minimum'
        ],
        keyPoints: [
          'Distance puits/fosse septique : > 30m en terrain perméable, > 50m en terrain imperméable',
          'Boues de vidange = dangereux, traitement avant valorisation agricole',
          'WASH (Water, Sanitation, Hygiene) : approche intégrée OMS/UNICEF',
          'ATPC (Assainissement Total Piloté par la Communauté) : méthode de sensibilisation'
        ]
      },
      {
        id: 'traitement-eaux-usees',
        title: 'Traitement des Eaux Usées',
        content: `Le traitement des eaux usées vise à éliminer la pollution avant rejet dans le milieu naturel, selon les niveaux primaire, secondaire et tertiaire.

**Niveaux de traitement :**

**Niveau primaire (traitement physique) :**
- Dégrillage grossier (mailles > 50mm)
- Dégrillage fin (mailles 6-25mm)
- Dessablage : vitesse 0,3 m/s, élimination sables > 200µm
- Dégraissage : bullage d'air, élimination huiles et graisses
- Décantation primaire : TSH = 1,5-2h, élimination 60% MES, 30-35% DBO5

**Niveau secondaire (traitement biologique) :**
1. **Boues activées** :
   - Bassin d'aération (24-36h) + clarificateur
   - Charge massique Cm = DBO5/(MVS × ts) = 0,1-0,3 kg/kg/j
   - Rendement DBO5 > 90%
2. **Lagunage (adapté Afrique) :**
   - Lagune anaérobie (3-5j) + facultative (5-30j) + aérobie (5-10j)
   - Peu coûteux, utilise l'énergie solaire
   - Surface importante : 10-100 ha pour villes moyennes
3. **Lit bactérien** : support fixe, film biologique

**Niveau tertiaire :**
- Élimination azote, phosphore
- Désinfection pour réutilisation
- Filtration membranaire

**Paramètres de contrôle boues activées :**
- IB (Indice de Boues) = volume 30min/MES × 1000 : IB < 150 = bonne décantabilité
- MVS/MES > 0,7 = boues actives bien minéralisées`,
        examples: [
          'STEP de Cotonou (Ouèdo) : capacité 150 000 EH, procédé boues activées + désinfection UV',
          'Lagune de Parakou : 3 lagunes en série, charge 50 000 EH, rendement DBO5 = 85%',
          'IB = 200 mL/g → boues filamenteuses, problème de décantation'
        ],
        keyPoints: [
          'EH (Équivalent Habitant) = 60 g DBO5/j, 120 L/j, 55 g MES/j',
          'Rapport DBO5/MES dans boues = 0,5 indique bonne activité biologique',
          'Recirculation boues : taux R = 50-100% du débit entrant',
          'Traitement des boues : épaississement → digestion → déshydratation → valorisation'
        ]
      }
    ]
  },
  {
    id: 'reseaux-hydrauliques',
    name: 'Réseaux Hydrauliques',
    shortName: 'Réseaux',
    icon: '🔧',
    color: '#0369A1',
    gradient: 'from-sky-700 to-sky-500',
    description: 'Hydraulique en charge, pertes de charge, AEP, réseaux d\'irrigation et d\'assainissement.',
    totalExercises: 80,
    chapters: [
      {
        id: 'hydraulique-charge',
        title: 'Hydraulique en Charge',
        content: `L'hydraulique en charge concerne l'écoulement de l'eau dans des conduites complètement remplies, sous pression.

**Équation de continuité :**
Q = V × A = constante (débit volumique = vitesse × section)
Pour une conduite : Q = V₁ × A₁ = V₂ × A₂

**Équation de Bernoulli (sans pertes) :**
z₁ + P₁/(ρg) + V₁²/(2g) = z₂ + P₂/(ρg) + V₂²/(2g) = constante
- z : côte géométrique (m)
- P/ρg : hauteur de pression (m)
- V²/2g : hauteur cinétique (m)

**Avec pertes de charge :**
H₁ = H₂ + ΔH
Où ΔH = pertes régulières + pertes singulières

**Pertes de charge régulières (Darcy-Weisbach) :**
ΔHr = λ × (L/D) × V²/(2g)
λ = coefficient de Darcy (Moody), L = longueur, D = diamètre

**Formule de Hazen-Williams (pratique) :**
V = 0,8492 × C × R^0,63 × i^0,54
Où C = coefficient HW (130 pour PVC neuf), R = rayon hydraulique, i = pente

**Formule de Manning-Strickler (gravitaire) :**
V = K × R^(2/3) × i^(1/2)
Où K = coefficient Strickler (80-100 pour PVC)

**Régimes d'écoulement :**
- Re = VD/ν (nombre de Reynolds)
- Re < 2000 : régime laminaire
- Re > 4000 : régime turbulent
- ν = 10⁻⁶ m²/s pour l'eau à 20°C`,
        examples: [
          'Conduite PVC DN100, L=500m, Q=5 L/s → V=0,64 m/s, Re=64 000 (turbulent), ΔH=5,2m',
          'Pression amont 3 bar, altitude +10m → Pression aval = 3×10⁴ - 10×9810 Pa = 1,02×10⁵ Pa',
          'Pompe centrifuge Qn=10 m³/h, Hn=25m, puissance absorbée P = ρgQH/η = 0,9 kW'
        ],
        keyPoints: [
          'Vitesse recommandée : 0,5 - 1,5 m/s en réseau AEP pour éviter dépôts et coups de bélier',
          'Pression minimale au robinet : 1 bar (10 m CE)',
          'Coup de bélier : ΔP = ρ × a × ΔV (a = célérité onde, 1200 m/s pour PVC)',
          'Protection anti-bélier : ventouse, soupape, vase d\'expansion'
        ]
      },
      {
        id: 'reseau-aep',
        title: 'Réseaux d\'Adduction d\'Eau Potable (AEP)',
        content: `Un réseau AEP est l'ensemble des ouvrages permettant d'amener l'eau de la source au consommateur en quantité suffisante et sous pression adéquate.

**Composantes d'un réseau AEP :**
1. **Adduction** : Transport de l'eau de la source jusqu'au réservoir (gravitaire ou par pompage)
2. **Stockage** : Réservoirs, châteaux d'eau
3. **Distribution** : Réseau de canalisations pour alimenter les abonnés

**Types de réseaux de distribution :**
- **Réseau ramifié** : Arborescent, économique mais vulnérable
- **Réseau maillé** : Boucles, sécurité mais coûteux
- **Réseau mixte** : Combinaison des deux

**Besoins en eau (dotations) :**
- Usage domestique urbain Bénin : 50-150 L/hab/j
- Usage domestique rural : 20-50 L/hab/j
- Hôpital : 200-400 L/lit/j
- École : 15-30 L/élève/j
- Marché, mosquée : selon fréquentation

**Calcul du débit de dimensionnement :**
- Débit journalier moyen Qmj = population × dotation
- Débit de pointe horaire Qph = Qmj × Cp (Cp ≈ 2-4)
- Débit d'incendie Qi = 17 L/s (norme française, 2h)

**Dimensionnement des canalisations :**
- Diamètre minimal distribution : DN 63 (PE) ou DN 60 (PVC)
- Diamètre desserte intérieure : DN 32 minimum
- Pression mini : 10 m CE (1 bar)
- Pression maxi : 60 m CE (6 bars)

**Matériaux de canalisation :**
- PVC (Chlorure de polyvinyle) : courant, économique
- PEHD (Polyéthylène haute densité) : flexible, résistant
- Fonte ductile : robuste, joints à emboîtement
- Acier : grandes conduites, zones difficiles`,
        examples: [
          'Village 1000 hab, dotation 40 L/hab/j : Qmj = 40 m³/j, Qph = 40×3/24 = 5 m³/h = 1,4 L/s',
          'Château d\'eau bétonné : volume V = Qmj × (12-16%) = 40 × 15% = 6 m³ minimum',
          'Dimensionnement conduite : Q=5 L/s, V=1 m/s → A = Q/V = 5×10⁻³ m², D = √(4A/π) = 0,08m → DN80'
        ],
        keyPoints: [
          'Méthode de Hardy-Cross pour calcul réseaux maillés (itérative)',
          'Indice linéaire de perte (ILP) = volume perdu/(longueur réseau × pression × temps)',
          'Pertes non facturées (PNF) < 15% objectif SONEB Bénin',
          'Plan de gestion des crises : plans de secours en cas de coupure'
        ]
      }
    ]
  },
  {
    id: 'projet-exploitation',
    name: 'Projet d\'Exploitation',
    shortName: 'Exploitation',
    icon: '📋',
    color: '#4338CA',
    gradient: 'from-indigo-700 to-indigo-500',
    description: 'Gestion de systèmes, maintenance, plans de gestion, rapports techniques.',
    totalExercises: 50,
    chapters: [
      {
        id: 'gestion-systemes',
        title: 'Gestion des Systèmes d\'Eau',
        content: `La gestion d'un système d'alimentation en eau potable (AEP) comprend l'ensemble des activités opérationnelles, administratives et financières permettant son fonctionnement optimal.

**Organisation de la gestion :**
1. **Gestion directe (régie)** : Collectivité gère directement
2. **Délégation partielle** : Opérateur privé sous contrôle public
3. **Délégation totale (affermage)** : Opérateur privé exploite, État propriétaire
4. **Concession** : Opérateur investit et exploite

**Au Bénin :**
- SONEB (Société Nationale des Eaux du Bénin) : villes et centres semi-urbains
- ANAEPMR (Agence Nationale AEP Milieu Rural) : zones rurales
- Comités de gestion : villages, petits centres

**Plan de Gestion et d'Entretien (PGE) :**
Contenu obligatoire :
- Description des ouvrages et équipements
- Procédures d'exploitation quotidienne
- Planning de maintenance préventive
- Budget d'exploitation prévisionnel
- Indicateurs de performance

**Maintenance des équipements :**
- **Préventive** : Entretien planifié avant panne (vidanges, graissages, vérifications)
- **Corrective** : Intervention après panne (réparation)
- **Prédictive** : Surveillance paramètres pour anticiper pannes

**Indicateurs de performance (KPI) :**
- Taux de panne = nb pannes × 100 / jours ouvrés
- Taux de rendement = eau facturée × 100 / eau produite
- Coût unitaire = charges totales / m³ produit
- Taux recouvrement = montant encaissé × 100 / montant facturé`,
        examples: [
          'SONEB Bénin : rendement réseau 72%, objectif 85% à 2025, pertes 28 000 m³/j',
          'Entretien préventif pompe : vidange huile toutes 500h, vérification vibrations mensuellement',
          'Coût exploitation SAEP rural : 200-500 FCFA/m³, prix vente : 300-800 FCFA/m³'
        ],
        keyPoints: [
          'Principe de recouvrement des coûts : l\'eau a un prix, doit couvrir les coûts O&M',
          'Log Book : carnet de bord obligatoire pour toute installation (débits, pannes, interventions)',
          'Rapport mensuel : volumes produits, consommés, facturés, recouvrés, pannes',
          'Analyse financière : cash-flow, compte d\'exploitation prévisionnel sur 5-10 ans'
        ]
      }
    ]
  },
  {
    id: 'sciences-physiques',
    name: 'Sciences Physiques Appliquées',
    shortName: 'Physique',
    icon: '⚡',
    color: '#7C3AED',
    gradient: 'from-purple-700 to-purple-500',
    description: 'Mécanique des fluides, électricité, thermodynamique appliquées au génie sanitaire.',
    totalExercises: 60,
    chapters: [
      {
        id: 'mecanique-fluides',
        title: 'Mécanique des Fluides',
        content: `La mécanique des fluides étudie le comportement des fluides (liquides et gaz) au repos (hydrostatique) et en mouvement (hydrodynamique).

**HYDROSTATIQUE :**

**Pression hydrostatique :**
P = ρ × g × h
Où ρ = 1000 kg/m³ (eau), g = 9,81 m/s², h = profondeur (m)
1 bar = 10⁵ Pa = 10,2 m CE

**Poussée d'Archimède :**
F = ρ × g × V
Où V = volume immergé du corps

**Force de pression sur surface plane :**
F = ρ × g × hG × A
Où hG = profondeur du centre de gravité de la surface, A = aire

**HYDRODYNAMIQUE :**

**Équation de continuité :**
Q = A₁V₁ = A₂V₂ = constante

**Théorème de Bernoulli :**
P₁ + ½ρV₁² + ρgz₁ = P₂ + ½ρV₂² + ρgz₂

**Venturi (mesure de débit) :**
Q = Cd × A₂ × √(2g × ΔH / (1 - (A₂/A₁)²))

**Déversoir rectangulaire :**
Q = (2/3) × Cd × L × √(2g) × h^(3/2)
Cd ≈ 0,63 pour déversoir à mince paroi

**Viscosité :**
- Dynamique µ (Pa.s) = 10⁻³ Pa.s pour l'eau à 20°C
- Cinématique ν = µ/ρ = 10⁻⁶ m²/s`,
        examples: [
          'Pression au fond d\'un réservoir de 5m de hauteur : P = 1000×9,81×5 = 49 050 Pa ≈ 0,5 bar',
          'Diamètre Venturi : D₁=100mm, D₂=50mm, ΔH=2m → Q = Cd×A₂×√(2g×ΔH/((D₁/D₂)⁴-1)) = 3,5 L/s',
          'Déversoir L=0,5m, H=0,3m : Q = 0,667×0,63×0,5×√(2×9,81)×0,3^1,5 = 19,5 L/s'
        ],
        keyPoints: [
          'Conditions d\'application Bernoulli : fluide parfait, incompressible, écoulement permanent',
          'Perte de charge singulière : ΔHs = ξ × V²/(2g), ξ = coefficient local',
          'Coup de bélier : problème majeur en hydraulique, protéger par anti-bélier',
          'Similitude hydraulique : modèle réduit, critère de Froude Fr = V/√(gL)'
        ]
      }
    ]
  },
  {
    id: 'mathematiques',
    name: 'Mathématiques Appliquées',
    shortName: 'Mathématiques',
    icon: '📐',
    color: '#EA580C',
    gradient: 'from-orange-600 to-orange-400',
    description: 'Algèbre, analyse, statistiques, probabilités et géométrie appliquées au génie sanitaire.',
    totalExercises: 60,
    chapters: [
      {
        id: 'algebre',
        title: 'Algèbre et Équations',
        content: `L'algèbre est fondamentale pour résoudre les problèmes de dimensionnement hydraulique, de calcul de débits et de doses de traitement.

**Équations du premier degré :**
ax + b = c → x = (c - b)/a

**Équations du second degré :**
ax² + bx + c = 0
Discriminant : Δ = b² - 4ac
Solutions : x = (-b ± √Δ) / (2a)

**Systèmes d'équations :**
Méthodes : substitution, addition, Cramer (déterminants)

**Logarithmes et exponentielles :**
- log₁₀(x) : base 10, noté log
- ln(x) : base e = 2,718
- log(a×b) = log(a) + log(b)
- log(aⁿ) = n × log(a)

**Application en désinfection :**
Abattement bactérien : log₁₀(N₀/N) = nombre de log de réduction
4 log = 99,99% de destruction

**Règle de 3 et proportionnalité :**
Si Q₁ → C₁, alors Q₂ → C₂ = C₁ × Q₂/Q₁

**Pourcentages :**
% = (partie/tout) × 100
Variation % = (nouvelle-ancienne)/ancienne × 100`,
        examples: [
          'Dose de chlore : 2 mg/L dans 50 m³ → m = 2×10⁻³ × 50×10³ = 100 g de chlore actif',
          'Dilution : C₁V₁ = C₂V₂ → V₁ = C₂V₂/C₁ = (50×1000)/120 = 417 mL de solution mère',
          'Augmentation de population : P(t) = P₀ × (1+r)^t → P(10) = 5000 × 1,02^10 = 6095 hab'
        ],
        keyPoints: [
          'Notation scientifique : 2,5 × 10⁻³ = 0,0025 = 2,5 mg/L si unité mg/L',
          'Conversions : 1 bar = 10⁵ Pa = 10,2 m CE = 100 kPa',
          'Facteur d\'émission : m³/j → L/s : diviser par 86,4',
          'Formule de calcul de pente : i = ΔH/L (sans unité, ou en m/m ou en pour mille ‰)'
        ]
      },
      {
        id: 'statistiques',
        title: 'Statistiques et Probabilités',
        content: `Les statistiques sont utilisées pour analyser les données de qualité d'eau, les débits fluviaux, les performances des stations de traitement.

**Statistiques descriptives :**

**Moyenne arithmétique :**
x̄ = (Σxᵢ) / n

**Médiane :** valeur centrale (50ème percentile)

**Mode :** valeur la plus fréquente

**Variance :**
σ² = Σ(xᵢ - x̄)² / n

**Écart-type :**
σ = √(variance) - mesure de dispersion

**Coefficient de variation :**
CV = σ/x̄ × 100%

**Représentations graphiques :**
- Histogramme : distribution de fréquences
- Courbe des fréquences cumulées
- Boxplot (boîte à moustaches)
- Diagramme de Pareto

**Applications hydrologiques :**
- Distribution de Gumbel (crues et étiages)
- Période de retour T = 1/p (p = probabilité dépassement)
- Crue centennale : T = 100 ans
- Analyse en fréquence des débits (hydrologie statistique)

**Corrélation et régression :**
- Coefficient de Pearson r (-1 à 1)
- Droite de régression y = ax + b
- R² = coefficient de détermination`,
        examples: [
          'Débits mesurés (m³/s) : 2,1 ; 3,5 ; 1,8 ; 4,2 ; 2,7 → x̄ = 2,86, σ = 0,89, CV = 31%',
          'Turbidité sur 30 jours : médiane = 8 NTU, mois pluvieux → Q90 = 25 NTU pour dimensionner',
          'Corrélation turbidité/pluviométrie : r = 0,85 → forte corrélation positive'
        ],
        keyPoints: [
          'Loi de Poisson : modélise les pannes aléatoires dans le temps',
          'Probabilité de Weibull : P(X≤x) = 1 - e^(-x/λ)^k',
          'Test de χ² (chi-carré) : teste l\'adéquation à une loi théorique',
          'Intervalle de confiance : x̄ ± 1,96 × σ/√n pour 95% de confiance'
        ]
      }
    ]
  },
  {
    id: 'francais',
    name: 'Français',
    shortName: 'Français',
    icon: '📝',
    color: '#BE185D',
    gradient: 'from-rose-700 to-rose-500',
    description: 'Expression écrite, rédaction technique, résumé, analyse de texte.',
    totalExercises: 20,
    chapters: [
      {
        id: 'expression-ecrite',
        title: 'Expression Écrite Technique',
        content: `L'expression écrite technique est essentielle dans les métiers de l'eau et de l'assainissement pour rédiger des rapports, des comptes rendus et des procédures.

**Types de documents techniques :**
1. **Rapport de mission** : Structure INTRODUCTION – DÉVELOPPEMENT – CONCLUSION
2. **Compte rendu** : Objectif, fidèle, sans interprétation
3. **Procédure** : Instructions étape par étape, numérotées
4. **Fiche technique** : Description synthétique d'un équipement
5. **Note de service** : Communication interne brève
6. **Lettre administrative** : Formelle, objet précis, signature

**Structure d'un rapport technique :**
- Page de garde (titre, auteur, date)
- Résumé (Abstract)
- Sommaire
- Introduction (contexte, problématique, objectifs)
- Méthodologie
- Résultats et analyse
- Conclusion et recommandations
- Bibliographie
- Annexes

**Vocabulaire technique de l'eau :**
- Débit, pression, turbidité, potabilité
- Adduction, distribution, branchement
- Rendement, performance, efficacité
- Dimensionnement, calcul, vérification

**Résumé et synthèse :**
- Dégager l'idée principale de chaque paragraphe
- Reformuler sans interpréter
- Longueur : 1/4 du texte original environ
- Éviter les citations directes`,
        examples: [
          'Introduction rapport : "La ville de X fait face à un déficit en eau potable de 30%. Notre étude vise à identifier les solutions pour améliorer l\'accès à l\'eau d\'ici 2027."',
          'Résumé analytique : identifier thème, thèse, arguments principaux, conclusion',
          'Note de service modèle : À l\'attention de... / Objet : ... / Suite à... / Il est demandé de...'
        ],
        keyPoints: [
          'Eviter les anglicismes : "drinking water" → "eau potable", "pipeline" → "conduite"',
          'Actif vs Passif : "On a installé la pompe" (actif) ou "La pompe a été installée" (passif)',
          'Connecteurs logiques : cependant, néanmoins, de plus, en outre, par conséquent',
          'Orthographe technique : vérifier les accords et les terminaisons verbales'
        ]
      }
    ]
  },
  {
    id: 'anglais',
    name: 'Anglais Technique',
    shortName: 'Anglais',
    icon: '🌍',
    color: '#059669',
    gradient: 'from-green-700 to-green-500',
    description: 'Vocabulaire technique, lecture de textes en anglais sur l\'eau et l\'assainissement.',
    totalExercises: 10,
    chapters: [
      {
        id: 'technical-vocabulary',
        title: 'Technical Vocabulary – Water & Sanitation',
        content: `Technical English is essential for reading international documents, manuals, and working with international organizations in the water sector.

**Key Vocabulary – Water Supply:**
- Water treatment plant (WTP) = Station de traitement d'eau potable
- Drinking water = Eau potable
- Groundwater = Eau souterraine
- Surface water = Eau de surface
- Borehole / Well = Forage / Puits
- Water table / Water level = Niveau de la nappe / Niveau d'eau
- Flow rate / Discharge = Débit
- Pipe network = Réseau de canalisations
- Pump = Pompe / Motor pump = Motopompe
- Chlorination = Chloration / Disinfection = Désinfection

**Key Vocabulary – Sanitation:**
- Wastewater = Eaux usées
- Sewage = Eaux d'égout
- Sewer network = Réseau d'assainissement
- Wastewater treatment plant (WWTP) = Station d'épuration
- Septic tank = Fosse septique
- Pit latrine = Latrine à fosse
- Sludge = Boues
- BOD (Biochemical Oxygen Demand) = DBO5
- COD (Chemical Oxygen Demand) = DCO
- TSS (Total Suspended Solids) = MES

**Reading Comprehension Strategy:**
1. Read title and headings first
2. Identify key technical terms
3. Use context to understand unknown words
4. Answer wh-questions: Who? What? Where? When? Why? How?

**Writing a Technical Email:**
Subject: Request for information / Report on...
Dear Sir/Madam,
I am writing to... / Further to... / I would like to...
Please find attached... / I look forward to hearing from you.
Yours sincerely, [Name]`,
        examples: [
          '"The borehole has a yield of 5 m³/h at a depth of 60 m." → Le forage a un débit de 5 m³/h à 60 m de profondeur.',
          '"Apply chlorine at a dose of 2 mg/L to ensure safe drinking water." → Appliquer du chlore à une dose de 2 mg/L.',
          '"The wastewater treatment efficiency reached 92% BOD removal." → Rendement épuration = 92% en DBO5.'
        ],
        keyPoints: [
          'WHO = World Health Organization = OMS',
          'NGO = Non-Governmental Organization = ONG',
          'WASH = Water, Sanitation and Hygiene (key acronym in international development)',
          'PPM = Parts Per Million = mg/L for water quality parameters'
        ]
      }
    ]
  }
];

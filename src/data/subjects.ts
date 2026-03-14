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
    totalExercises: 69,
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
    totalExercises: 68,
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
    totalExercises: 25,
    chapters: [
      {
        id: 'francais-dissertation',
        title: 'La Dissertation littéraire',
        content: `**I. DÉFINITION ET NATURE**
La dissertation est un exercice de réflexion argumentée sur une problématique littéraire. Elle nécessite une culture littéraire solide et une rigueur dans la démonstration.

**II. LA STRUCTURE TYPE**
- **Introduction** : Accroche, sujet amené, problématique, annonce du plan.
- **Développement** : 3 parties (Thèse, Antithèse, Synthèse) avec arguments et exemples.
- **Conclusion** : Bilan, réponse à la problématique, ouverture.

**III. ANALYSE DU SUJET**
- Identifier les mots-clés et les présupposés.
- Reformuler le sujet pour dégager une tension.`,
        examples: [
          'Sujet : "La littérature doit-elle être engagée ?"',
          'Plan : 1. L\'engagement comme devoir, 2. L\'art pour l\'art, 3. La synthèse.',
          'Exemple : Zola et le naturalisme (engagement), Gautier et l\'esthétisme (art pour l\'art).'
        ],
        keyPoints: [
          'La problématique est le fil conducteur.',
          'Chaque argument doit être illustré par un exemple précis.',
          'Utiliser des connecteurs logiques pour la fluidité.',
          'Éviter le résumé d\'œuvre.'
        ]
      },
      {
        id: 'francais-commentaire',
        title: 'Le Commentaire de texte',
        content: `**I. DÉFINITION**
Analyse organisée d'un extrait littéraire visant à dégager son sens et ses procédés d'écriture.

**II. MÉTHODOLOGIE**
1. **Lecture et repérage** : Thèmes, registres, figures de style.
2. **Problématique** : Quel est l'enjeu principal du texte ?
3. **Axes de lecture** : 2 ou 3 grandes parties analytiques.

**III. RÉDACTION**
- Introduction (présentation, situation, axes).
- Développement (analyse + citation + interprétation).
- Conclusion (bilan et ouverture).`,
        examples: [
          'Commentaire d\'un poème de Baudelaire sur le Spleen.',
          'Axe 1 : La souffrance physique. Axe 2 : La prison mentale.'
        ],
        keyPoints: [
          'Ne pas paraphraser le texte.',
          'Toujours lier la forme (procédé) au fond (sens).',
          'Citer le texte entre guillemets.'
        ]
      },
      {
        id: 'francais-resume',
        title: 'Le Résumé de texte',
        content: `**I. DÉFINITION**
Reformulation concise d'un texte argumentatif respectant l'ordre des idées et le ton de l'auteur.

**II. LES CONTRAINTES**
- Respecter le nombre de mots (± 10%).
- Ne pas introduire d'idées personnelles.
- Ne pas citer le texte original.

**III. ÉTAPES**
1. Découpage en unités de sens.
2. Identification de la thèse et des arguments.
3. Rédaction synthétique.`,
        examples: [
          'Texte original de 800 mots → Résumé de 200 mots.',
          'Utilisation de termes englobants (ex: "les fruits" pour "pommes, poires, raisins").'
        ],
        keyPoints: [
          'Fidélité absolue à la pensée de l\'auteur.',
          'Usage de connecteurs logiques personnels.',
          'Mentionner le compte de mots à la fin.'
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
    totalExercises: 15,
    chapters: [
      {
        id: 'anglais-comprehension-ecrite',
        title: 'Reading Comprehension',
        content: `**I. STRATEGIES**
- **Skimming** : Reading quickly to get the main idea.
- **Scanning** : Looking for specific information (names, dates, numbers).
- **Detailed reading** : Understanding every sentence and nuance.

**II. CONTEXT CLUES**
Don't panic over unknown words! Use the words around them, the prefixes/suffixes, and the general meaning of the paragraph to guess.

**III. TYPES OF QUESTIONS**
- **Multiple choice** : Select the best answer.
- **True/False with justification** : Quote the text to prove your point.
- **Open questions** : Answer in your own words or using specific quotes.`,
        examples: [
          'Question: "Where does the scene take place?" Answer: quote "In the streets of London".',
          'Context: "The dilapidated house was falling apart." (dilapidated = in bad condition).'
        ],
        keyPoints: [
          'Always read the title and source first.',
          'Read the questions before reading the text.',
          'Justify your answers by quoting the text.',
          'Pay attention to connectors (However, although, because).'
        ]
      },
      {
        id: 'anglais-expression-ecrite',
        title: 'Writing Skills',
        content: `**I. TYPES OF WRITING**
- **Formal Letter/Email** : Application, complaint, request.
- **Essay** : Argumentative text (Pros and Cons).
- **Article** : Reporting or sharing an opinion.

**II. STRUCTURE**
1. **Introduction** : Define the topic and state your position.
2. **Body Paragraphs** : One idea per paragraph with examples.
3. **Conclusion** : Summary of main points and final thought.

**III. USEFUL CONNECTORS**
- **Addition** : Furthermore, moreover, in addition.
- **Contrast** : However, on the other hand, nevertheless.
- **Result** : Therefore, as a result, consequently.`,
        examples: [
          'Essay Topic: "Should social media be banned for teenagers?"',
          'Introduction: "In today\'s digital world, social media plays a huge role..."'
        ],
        keyPoints: [
          'Use varied vocabulary (avoid repeating "big", "good").',
          'Check your tenses (Present Perfect vs Simple Past).',
          'Respect the word count.',
          'Stay formal in letters to authorities.'
        ]
      }
    ]
  },
  {
    id: 'philosophie',
    name: 'Philosophie',
    shortName: 'Philo',
    icon: '🧠',
    color: '#A78BFA',
    gradient: 'from-violet-600 to-violet-400',
    description: 'La Conscience, L\'Inconscient, La Liberté, Le Devoir, La Justice...',
    totalExercises: 135,
    chapters: [
      {
        id: 'philo-conscience',
        title: 'La Conscience',
        content: `**I. DÉFINITION ET NATURE DE LA CONSCIENCE**

La conscience est la faculté par laquelle l'homme se connaît lui-même et connaît le monde qui l'entoure. Elle désigne à la fois :
- La conscience immédiate : perception directe de nos états intérieurs
- La conscience réflexive : capacité de se prendre soi-même comme objet de pensée
- La conscience morale : faculté de distinguer le bien du mal

**II. LES DIFFÉRENTS TYPES DE CONSCIENCE**

1. **Conscience psychologique** : Connaissance immédiate que nous avons de nos pensées, sentiments et sensations
2. **Conscience de soi** : Capacité de se reconnaître comme sujet pensant distinct du monde extérieur
3. **Conscience morale** : Faculté de juger nos actes selon des critères de bien et de mal

**III. LA CONSCIENCE SELON DESCARTES**

René Descartes (1596-1650) fait de la conscience le fondement de toute certitude :
- Le cogito : "Je pense donc je suis" (cogito ergo sum)
- La conscience est transparente à elle-même
- Elle est la marque de la substance pensante (res cogitans)
- Distinction âme/corps : dualisme cartésien

**IV. CRITIQUES DE LA CONSCIENCE TRANSPARENTE**

1. **Freud et l'inconscient** : La conscience n'est que la partie émergée de l'iceberg psychique
2. **Marx et l'idéologie** : "Ce n'est pas la conscience qui détermine la vie, mais la vie qui détermine la conscience"
3. **Nietzsche** : La conscience est une construction tardive et superficielle

**V. CONSCIENCE ET LIBERTÉ**

- La conscience est-elle condition de la liberté ?
- Sartre : "L'homme est condamné à être libre" - la conscience révèle notre liberté
- Déterminisme vs libre arbitre : débat philosophique majeur

**VI. CONSCIENCE ET AUTRUI**

- Hegel : La conscience de soi naît de la reconnaissance par autrui
- Dialectique du maître et de l'esclave
- L'intersubjectivité comme fondement de la conscience

**MÉTHODOLOGIE :**
- Distinguer les trois types de conscience (psychologique, de soi, morale)
- Analyser le cogito cartésien et ses implications
- Comprendre les critiques de la conscience transparente (Freud, Marx, Nietzsche)
- Étudier la relation conscience-liberté chez Sartre
- Examiner la dialectique hégélienne de la reconnaissance`,
        examples: [
          'Conscience immédiate : "J\'ai mal à la tête", "Je ressens de la joie"',
          'Conscience réflexive : "Je pense que je pense", introspection philosophique',
          'Conscience morale : Remords après avoir menti, sentiment du devoir',
          'Cogito cartésien : Même si je doute de tout, je ne peux douter que je doute',
          'Mauvaise foi sartrienne : Se mentir à soi-même pour éviter l\'angoisse de la liberté',
          'Conscience de classe (Marx) : Prise de conscience des ouvriers de leur condition',
        ],
        keyPoints: [
          'Descartes : "Je pense donc je suis" - la conscience comme certitude première',
          'Freud : L\'inconscient remet en question la transparence de la conscience',
          'Sartre : La conscience révèle notre liberté et notre responsabilité',
          'Hegel : La conscience de soi naît de la reconnaissance mutuelle',
          'Distinction fondamentale : conscience psychologique vs conscience morale',
          'Problème philosophique : La conscience est-elle source de liberté ou d\'illusion ?',
        ],
      },
      {
        id: 'philo-inconscient',
        title: 'L\'Inconscient',
        content: `**I. DÉFINITION DE L'INCONSCIENT**

L'inconscient désigne l'ensemble des phénomènes psychiques qui échappent à la conscience mais qui influencent nos pensées, émotions et comportements. Concept révolutionnaire introduit par Sigmund Freud.

**II. L'INCONSCIENT AVANT FREUD**

1. **Leibniz** : Les "petites perceptions" - perceptions inconscientes qui s'accumulent
2. **Schopenhauer** : La volonté inconsciente comme force fondamentale
3. **Nietzsche** : Les pulsions inconscientes qui gouvernent l'homme

**III. LA RÉVOLUTION FREUDIENNE**

**A. Les trois topiques freudiennes :**

1. **Première topique** (1900) :
   - Conscient : ce dont nous sommes actuellement conscients
   - Préconscient : ce qui peut devenir conscient facilement
   - Inconscient : ce qui est refoulé et résiste à la conscience

2. **Seconde topique** (1920) :
   - **Le Ça** : réservoir des pulsions (principe de plaisir)
   - **Le Moi** : instance de réalité et d'adaptation
   - **Le Surmoi** : instance morale et critique

**B. Les mécanismes de l'inconscient :**
- **Le refoulement** : mécanisme de défense qui repousse dans l'inconscient les représentations pénibles
- **La sublimation** : transformation des pulsions en activités socialement valorisées
- **La projection** : attribution à autrui de ses propres sentiments

**IV. LES MANIFESTATIONS DE L'INCONSCIENT**

1. **Les rêves** : "voie royale vers l'inconscient"
   - Contenu manifeste vs contenu latent
   - Mécanismes : condensation, déplacement, symbolisation

2. **Les lapsus** : erreurs révélatrices de désirs inconscients

3. **Les actes manqués** : oublis, erreurs qui trahissent l'inconscient

4. **Les symptômes névrotiques** : expression déguisée de conflits inconscients

**V. CRITIQUES ET DÉBATS**

1. **Sartre** : Critique de l'inconscient freudien - "mauvaise foi" plutôt qu'inconscient
2. **Philosophie analytique** : Remise en question de la scientificité de la psychanalyse
3. **Neurosciences** : Nouvelles approches de l'inconscient cognitif

**VI. IMPLICATIONS PHILOSOPHIQUES**

- Remise en question du cogito cartésien
- Problème de la responsabilité morale
- Critique de l'illusion de la conscience transparente

**MÉTHODOLOGIE :**
- Expliquer les deux topiques freudiennes
- Analyser les mécanismes de défense (refoulement, sublimation, projection)
- Interpréter les manifestations de l'inconscient (rêves, lapsus, actes manqués)`,
        examples: [
          'Rêve d\'examen raté révélant l\'angoisse de l\'échec',
          'Lapsus : dire "Freud" au lieu de "joie" en parlant de psychanalyse',
          'Acte manqué : oublier un rendez-vous avec quelqu\'un qu\'on n\'aime pas',
          'Phobie des araignées cachant un traumatisme infantile refoulé',
          'Sublimation : artiste transformant sa souffrance en œuvre d\'art',
          'Transfert en psychanalyse : patient reproduisant avec l\'analyste des relations passées',
        ],
        keyPoints: [
          'Freud : "Le moi n\'est pas maître dans sa propre maison"',
          'L\'inconscient est structuré comme un langage (Lacan)',
          'Première topique : Conscient/Préconscient/Inconscient',
          'Seconde topique : Ça (pulsions)/Moi (réalité)/Surmoi (morale)',
          'Le refoulement : mécanisme fondamental de formation de l\'inconscient',
          'Débat philosophique : L\'inconscient remet-il en question la liberté humaine ?',
        ],
      },
      {
        id: 'philo-liberte',
        title: 'La Liberté',
        content: `La liberté est le pouvoir de choisir et d'agir selon sa volonté. On distingue la liberté naturelle (absence de contraintes physiques) et la liberté morale (capacité de choisir le bien).

**MÉTHODOLOGIE :**
- Distinguer liberté et licence (liberté sans limites)
- Analyser les obstacles à la liberté (déterminisme, aliénation)
- Relier liberté et responsabilité
- Citer Sartre : "L'homme est condamné à être libre"`,
        examples: [
          'Liberté de pensée : exprimer ses opinions',
          'Liberté d\'action : choisir son métier',
          'Liberté politique : voter, manifester',
          'Libre arbitre : choisir entre le bien et le mal',
        ],
        keyPoints: [
          'La liberté implique la responsabilité',
          'Sartre : l\'existence précède l\'essence',
          'La liberté des uns s\'arrête où commence celle des autres',
          'Liberté et déterminisme sont-ils compatibles ?',
        ],
      },
      {
        id: 'philo-devoir',
        title: 'Le Devoir',
        content: `Le devoir est une obligation morale, une responsabilité éthique envers soi-même et autrui. Kant distingue le devoir (agir par respect de la loi morale) de l'inclination (agir par intérêt).

**MÉTHODOLOGIE :**
- Expliquer l'impératif catégorique de Kant
- Distinguer devoir et inclination
- Analyser les conflits de devoirs
- Relier devoir et liberté`,
        examples: [
          'Devoir moral : dire la vérité même si c\'est difficile',
          'Devoir civique : respecter les lois, payer ses impôts',
          'Devoir familial : s\'occuper de ses parents âgés',
          'Devoir professionnel : respecter le secret médical',
        ],
        keyPoints: [
          'Kant : "Agis de telle sorte que tu traites l\'humanité comme une fin"',
          'Le devoir est universel et inconditionnel',
          'Faire son devoir c\'est être libre',
          'Le devoir peut entrer en conflit avec le bonheur',
        ],
      },
      {
        id: 'philo-bonheur',
        title: 'Le Bonheur',
        content: `Le bonheur est un état de satisfaction complète et durable. Il se distingue du plaisir (satisfaction ponctuelle) et de la joie (émotion passagère). Aristote le définit comme l'accomplissement de soi.

**MÉTHODOLOGIE :**
- Distinguer bonheur, plaisir et joie
- Analyser les conditions du bonheur
- Comparer les conceptions philosophiques
- Questionner : le bonheur est-il le but de la vie ?`,
        examples: [
          'Bonheur épicurien : absence de douleur et de trouble',
          'Bonheur stoïcien : acceptation sereine du destin',
          'Bonheur aristotélicien : vie vertueuse et contemplative',
          'Bonheur moderne : réalisation personnelle et professionnelle',
        ],
        keyPoints: [
          'Aristote : le bonheur est l\'activité de l\'âme selon la vertu',
          'Épicure : le bonheur est l\'absence de souffrance',
          'Le bonheur dépend-il de nous ou des circonstances ?',
          'Bonheur et devoir peuvent-ils coexister ?',
        ],
      },
      {
        id: 'philo-verite',
        title: 'La Vérité',
        content: `La vérité est l'adéquation de la pensée avec la réalité. On distingue la vérité scientifique (démontrable) de la vérité morale (valeurs). La recherche de la vérité est au cœur de la philosophie.

**MÉTHODOLOGIE :**
- Distinguer vérité et opinion
- Analyser les critères de vérité (cohérence, correspondance)
- Questionner : peut-on atteindre la vérité absolue ?
- Citer Platon (allégorie de la caverne)`,
        examples: [
          'Vérité scientifique : la Terre tourne autour du Soleil',
          'Vérité mathématique : 2+2=4',
          'Vérité morale : il faut respecter la dignité humaine',
          'Vérité historique : reconstruction du passé',
        ],
        keyPoints: [
          'La vérité s\'oppose à l\'erreur et au mensonge',
          'Platon : la vérité est dans le monde des Idées',
          'Descartes : le doute méthodique mène à la vérité',
          'La vérité scientifique est provisoire et révisable',
        ],
      },
      {
        id: 'philo-raison',
        title: 'La Raison',
        content: `La raison est la faculté de penser logiquement, de juger et d'argumenter. Elle permet de distinguer le vrai du faux, le bien du mal. Elle s'oppose à la passion et à l'instinct.

**MÉTHODOLOGIE :**
- Distinguer raison théorique et raison pratique
- Analyser les limites de la raison
- Comparer raison et foi, raison et passion
- Citer Kant : "Sapere aude" (Ose savoir)`,
        examples: [
          'Raisonnement déductif : tous les hommes sont mortels, Socrate est un homme, donc Socrate est mortel',
          'Raisonnement inductif : observation de cas particuliers pour en tirer une loi générale',
          'Raison pratique : délibération morale',
          'Raison théorique : connaissance scientifique',
        ],
        keyPoints: [
          'La raison est universelle et commune à tous les hommes',
          'Descartes : la raison est le bon sens',
          'Kant : la raison a des limites (phénomènes vs noumènes)',
          'La raison peut-elle tout expliquer ?',
        ],
      },
      {
        id: 'philo-science',
        title: 'La Science',
        content: `La science est une connaissance méthodique et démontrable du réel. Elle repose sur l'observation, l'expérimentation et la vérification. Elle se distingue de l'opinion et de la croyance.

**MÉTHODOLOGIE :**
- Expliquer la démarche scientifique
- Analyser les critères de scientificité
- Distinguer science et technique
- Questionner : la science peut-elle tout expliquer ?`,
        examples: [
          'Sciences exactes : mathématiques, physique',
          'Sciences expérimentales : biologie, chimie',
          'Sciences humaines : sociologie, psychologie',
          'Méthode scientifique : hypothèse, expérience, vérification',
        ],
        keyPoints: [
          'La science cherche des lois universelles',
          'Popper : une théorie scientifique doit être réfutable',
          'La science progresse par révolutions (Kuhn)',
          'Science et éthique : les limites de la recherche',
        ],
      },
      {
        id: 'philo-justice',
        title: 'La Justice',
        content: `La justice est le principe de droit et d'équité dans les relations sociales. Elle vise à donner à chacun ce qui lui est dû. On distingue justice distributive (répartition des biens) et justice corrective (réparation des torts).

**MÉTHODOLOGIE :**
- Distinguer justice et égalité
- Analyser les théories de la justice (Platon, Rawls)
- Questionner : qu'est-ce qu'une société juste ?
- Relier justice et liberté`,
        examples: [
          'Justice légale : application des lois',
          'Justice sociale : réduction des inégalités',
          'Justice distributive : impôts progressifs',
          'Justice corrective : sanctions pénales',
        ],
        keyPoints: [
          'Platon : la justice est l\'harmonie de l\'âme et de la cité',
          'Aristote : la justice est une vertu',
          'Rawls : la justice comme équité',
          'Justice et vengeance ne sont pas synonymes',
        ],
      },
      {
        id: 'philo-langage',
        title: 'Le Langage',
        content: `Le langage est un système de signes permettant la communication et l'expression de la pensée. Il est propre à l'homme et structure notre rapport au monde.

**MÉTHODOLOGIE :**
- Analyser les fonctions du langage (communication, expression, représentation)
- Distinguer langage humain et communication animale
- Questionner : le langage trahit-il la pensée ?
- Citer Saussure : signifiant et signifié`,
        examples: [
          'Langage verbal : parole, écriture',
          'Langage non-verbal : gestes, expressions',
          'Langage symbolique : mathématiques, musique',
          'Langage et pensée : peut-on penser sans mots ?',
        ],
        keyPoints: [
          'Le langage est conventionnel et arbitraire',
          'Hegel : l\'homme pense dans et par le langage',
          'Wittgenstein : les limites de mon langage sont les limites de mon monde',
          'Le langage peut être source de malentendus',
        ],
      },
      {
        id: 'philo-nature-technique',
        title: 'Nature et Technique',
        content: `La nature désigne ce qui existe indépendamment de l'homme. La technique est l'ensemble des procédés et savoir-faire permettant de transformer la nature. La technique prolonge-t-elle ou dénature-t-elle la nature ?

**MÉTHODOLOGIE :**
- Distinguer nature et culture
- Analyser les rapports homme-nature-technique
- Questionner : la technique libère-t-elle ou aliène-t-elle ?
- Citer Heidegger : l'essence de la technique`,
        examples: [
          'Technique agricole : domestication des plantes',
          'Technique médicale : prothèses, vaccins',
          'Technique industrielle : machines, robots',
          'Technique numérique : intelligence artificielle',
        ],
        keyPoints: [
          'La technique transforme la nature et l\'homme',
          'Bacon : savoir c\'est pouvoir',
          'Heidegger : la technique moderne arraisonne la nature',
          'Écologie : repenser notre rapport à la nature',
        ],
      },
      {
        id: 'philo-temps-travail',
        title: 'Le Temps et le Travail',
        content: `Le temps est la dimension dans laquelle se succèdent les événements. Le travail est l'activité par laquelle l'homme transforme la nature et se transforme lui-même. Temps et travail structurent la vie humaine.

**MÉTHODOLOGIE :**
- Distinguer temps objectif et temps subjectif
- Analyser les dimensions du travail (contrainte, libération)
- Questionner : le travail humanise-t-il ?
- Citer Marx : le travail aliéné`,
        examples: [
          'Temps vécu : durée bergsonienne',
          'Temps objectif : temps des horloges',
          'Travail manuel : artisanat, agriculture',
          'Travail intellectuel : enseignement, recherche',
        ],
        keyPoints: [
          'Bergson : le temps est durée, non succession d\'instants',
          'Marx : le travail est l\'essence de l\'homme',
          'Le travail peut être aliénant (division du travail)',
          'Temps libre et loisir : libération ou nouvelle aliénation ?',
        ],
      },
      {
        id: 'philo-art-religion',
        title: 'L\'Art et la Religion',
        content: `L'art est l'expression symbolique de la beauté et de l'émotion. La religion est un système de croyances et de pratiques reliant l'homme au sacré. Art et religion témoignent de la transcendance humaine.

**MÉTHODOLOGIE :**
- Analyser les fonctions de l'art (expression, représentation, provocation)
- Distinguer foi et raison
- Questionner : l'art a-t-il une fonction sociale ?
- Citer Kant : le beau et le sublime`,
        examples: [
          'Art plastique : peinture, sculpture',
          'Art littéraire : poésie, roman',
          'Art musical : symphonie, chanson',
          'Religion monothéiste : christianisme, islam',
        ],
        keyPoints: [
          'L\'art révèle une vérité sur le monde',
          'Hegel : l\'art est manifestation sensible de l\'Idée',
          'La religion donne sens à l\'existence',
          'Art et religion : expression du sacré',
        ],
      }
    ]
  },
  {
    id: 'histoire',
    name: 'Histoire',
    shortName: 'Hist.',
    icon: '📜',
    color: '#F87171',
    gradient: 'from-red-600 to-red-400',
    description: 'Colonisation, Décolonisation, Guerre Froide, Indépendances Africaines...',
    totalExercises: 109,
    chapters: [
      {
        id: 'hist-relations-1930-1945',
        title: 'Relations internationales 1930-1945',
        content: `**I. LA CRISE DES ANNÉES 1930 ET SES CONSÉQUENCES**

La période est marquée par la crise économique de 1929, la montée des régimes totalitaires (nazisme, fascisme, stalinisme) et les tensions internationales menant à la Seconde Guerre mondiale.

**A. La crise de 1929**
- Krach boursier de Wall Street
- Chômage massif et instabilité politique mondiale
- Échec de la coopération internationale

**B. Montée des régimes totalitaires**
- L'Italie fasciste (Mussolini, 1922)
- L'URSS stalinienne
- L'Allemagne nazie (Hitler, 1933) : expansionnisme et remise en question du traité de Versailles

**II. LA MARCHE VERS LA GUERRE**
- Remilitarisation de la Rhénanie (1936)
- Guerre d'Espagne (1936-1939)
- L'Anschluss (annexion de l'Autriche, 1938)
- Les accords de Munich et l'annexion de la Tchécoslovaquie (1938)
- Le pacte germano-soviétique (août 1939)`,
        examples: [
          'Krach de Wall Street (octobre 1929)',
          'Lois de Nuremberg en Allemagne (1935)',
          'Bombardement de Guernica (1937)',
          'Conférence de Munich (1938)'
        ],
        keyPoints: [
          'La crise de 1929 déstabilise l\'économie mondiale',
          'Les régimes totalitaires exploitent la crise sociale',
          'La SDN échoue à maintenir la paix',
          'L\'expansionnisme hitlérien mène au conflit'
        ]
      },
      {
        id: 'hist-seconde-guerre',
        title: 'La Seconde Guerre mondiale',
        content: `**I. UN CONFLIT PLANÉTAIRE (1939-1945)**

La Seconde Guerre mondiale oppose les puissances de l'Axe (Allemagne, Italie, Japon) aux Alliés (Royaume-Uni, URSS, États-Unis, France Libre).

**A. Les phases du conflit**
1. **1939-1942 : Les victoires de l'Axe**
   - Blitzkrieg (guerre éclair) en Europe
   - Invasion de l'URSS (juin 1941)
   - Attack de Pearl Harbor (décembre 1941) et entrée en guerre des USA
2. **1942-1945 : Le tournant et la victoire des Alliés**
   - Batailles d'El Alamein, Midway et Stalingrad
   - Débarquements en Afrique du Nord, Italie et Normandie (6 juin 1944)
   - Capitulation de l'Allemagne (8 mai 1945) et du Japon (2 septembre 1945)

**II. UNE GUERRE TOTALE ET D'ANÉANTISSEMENT**
- Mobilisation de toutes les ressources (humaines, industrielles, scientifiques)
- Crimes de guerre et contre l'humanité
- Le génocide des Juifs (Shoah) et des Tsiganes
- Bombardements atomiques de Hiroshima et Nagasaki`,
        examples: [
          'Appel du 18 juin 1940 par le général de Gaulle',
          'Bataille de Stalingrad (1942-1943) : tournant de la guerre',
          'Conférence de Yalta (1945) : partage des zones d\'influence',
          'Procès de Nuremberg (1945-1946)'
        ],
        keyPoints: [
          'Plus grand conflit de l\'histoire (60 millions de morts)',
          'Shoah : 6 millions de Juifs assassinés',
          'Usage de l\'arme atomique change la face du monde',
          'Création de l\'ONU en 1945'
        ]
      },
      {
        id: 'hist-guerre-froide',
        title: 'La Guerre froide',
        content: `**I. UN MONDE BIPOLAIRE (1947-1991)**

Affrontement idéologique, politique et économique entre les USA (bloc de l'Ouest) et l'URSS (bloc de l'Est).

**A. La rupture et la formation des blocs**
- Doctrine Truman vs Doctrine Jdanov (1947)
- Plan Marshall et création de l'OTAN
- Création du Pacte de Varsovie

**B. Les crises majeures**
- Blocus de Berlin (1948-1949)
- Guerre de Corée (1950-1953)
- Crise de Cuba (1962) : le monde au bord de la guerre nucléaire
- Guerre du Vietnam (1955-1975)

**II. DÉTENTE ET FIN DE LA GUERRE FROIDE**
- Période de "coexistence pacifique" puis de "détente"
- Course aux armements et conquête spatiale
- Arrivée de Gorbatchev (Glastnost, Perestroïka)
- Chute du mur de Berlin (1989) et éclatement de l'URSS (1991)`,
        examples: [
          'Le Rideau de Fer (Churchill, 1946)',
          'Construction du mur de Berlin (1961)',
          'Crise des missiles de Cuba (1962)',
          'Guerre des étoiles (IDS) sous Reagan (1983)'
        ],
        keyPoints: [
          'Équilibre de la terreur (dissuasion nucléaire)',
          'Conflits périphériques par alliés interposés',
          'Bipolarisation totale de la planète',
          'Fin de l\'URSS marque la fin d\'une époque'
        ]
      },
      {
        id: 'hist-colonisation',
        title: 'La Colonisation en Afrique',
        content: `**I. LES CAUSES ET LES JUSTIFICATIONS**

La colonisation de l'Afrique s'accélère à la fin du XIXe siècle, portée par des ambitions multiples.

**A. Les causes**
- **Économiques** : Recherche de matières premières, débouchés pour l'industrie
- **Politiques** : Prestige national, rivalités de puissance en Europe
- **Démographiques** : Déversoir pour la population européenne en croissance
- **Idéologiques** : "Mission civilisatrice", diffusion du christianisme

**B. La Conférence de Berlin (1884-1885)**
- Fixation des règles du partage de l'Afrique pour éviter les conflits entre Européens

**II. LES FORMES DE DOMINATION**
- **Colonisation directe** : Administration par la métropole (AOF, AEF)
- **Protectorat** : Maintien d'une façade locale (Maroc, Tunisie)
- **Dominion** : Autonomie interne (colonies britanniques)

**III. RÉSISTANCES ET CONSÉQUENCES**
- Résistances militaires (Béhanzin au Dahomey, Samory Touré)
- Bouleversements sociaux, économiques et culturels
- Tracé artificiel des frontières actuelles`,
        examples: [
          'Résistance de Samory Touré contre les Français (1882-1898)',
          'Le Congo belge sous Léopold II : exploitation extrême',
          'Le Dahomey (Bénin) : résistance du roi Béhanzin'
        ],
        keyPoints: [
          'Partage de l\'Afrique à Berlin sans les Africains',
          'Exploitation économique au profit des métropoles',
          'Destruction des structures traditionnelles',
          'L\'indigénat : système juridique discriminatoire'
        ]
      },
      {
        id: 'hist-decolonisation',
        title: 'La Décolonisation',
        content: `**I. LES CAUSES DE LA DÉCOLONISATION**

Processus d'émancipation des colonies accéléré après 1945.

**A. Facteurs internes**
- Montée des nationalismes et des élites instruites
- Participation des colonisés aux deux guerres mondiales
- Influence des idéologies (panafricanisme, socialisme)

**B. Contexte international**
- Affaiblissement des puissances européennes
- Pressions des deux superpuissances (USA et URSS) anti-coloniales
- Rôle de l'ONU et de la Charte de l'Atlantique
- Conférence de Bandung (1955) : solidarité du Tiers-Monde

**II. LES MODALITÉS DE L'INDÉPENDANCE**
- **Voie pacifique/négociée** : Afrique noire francophone et britannique (Ghana 1957, Dahomey 1960)
- **Voie violente/guerres** : Algérie (1954-1962), Indochine, colonies portugaises

**III. LES DÉFIS DES NOUVEAUX ÉTATS**
- Construction de l'unité nationale (frontières héritées)
- Développement économique et lutte contre le sous-développement
- Instabilité politique et enjeux de la démocratisation`,
        examples: [
          'Indépendance du Ghana (1957) sous Kwame Nkrumah',
          'L\'année 1960 : "Année de l\'Afrique" (17 indépendances)',
          'Guerre d\'Algérie (1954-1962)',
          'Indépendance du Dahomey le 1er août 1960'
        ],
        keyPoints: [
          'Passage de la dépendance à la souveraineté',
          'Émergence du Tiers-Monde sur la scène internationale',
          'Le défi de la construction de l\'État-nation',
          'Le néocolonialisme : maintien de liens de dépendance'
        ]
      },
      {
        id: 'hist-organisations-internationales',
        title: 'Organisations internationales',
        content: `**I. L'ONU ET LE SYSTÈME INTERNATIONAL**

Créée en 1945 pour maintenir la paix et la sécurité mondiales.

**A. Objectifs et principes**
- Maintien de la paix, défense des droits de l'homme
- Égalité des États, coopération internationale

**B. Fonctionnement et limites**
- Organes : Assemblée générale, Conseil de sécurité (5 membres permanents avec droit de veto)
- Limites : Blocages liés à la Guerre froide, manque de puissance propre

**II. LES ORGANISATIONS RÉGIONALES AFRICAINES**
- **OUA (1963)** : Unité africaine et lutte contre le colonialisme
- **Union Africaine (2002)** : Plus grande intégration politique et économique
- **CEDEAO** : Intégration régionale en Afrique de l'Ouest`,
        examples: [
          'Conseil de sécurité de l\'ONU (New York)',
          'Siège de l\'UA à Addis-Abeba',
          'Interventions des Casques bleus',
          'Lutte de l\'OUA contre l\'apartheid'
        ],
        keyPoints: [
          'L\'ONU comme forum mondial incontournable',
          'Droit de veto : puissance et blocage du système',
          'UA : vers une intégration continentale',
          'CEDEAO : modèle de coopération régionale'
        ]
      },
      {
        id: 'hist-mutations-politiques',
        title: 'Mutations politiques et sociales',
        content: `**I. DÉMOCRATISATION ET DROITS HUMAINS**

Le monde post-1945 est marqué par une poussée démocratique et la reconnaissance des libertés fondamentales.

**A. L'essor de la démocratie**
- Chute des régimes autoritaires en Europe (Espagne, Portugal, Grèce)
- Vagues de démocratisation en Afrique et Amérique latine (années 1990)

**B. La lutte pour les droits civiques**
- Mouvements contre la ségrégation (Martin Luther King aux USA)
- Lutte contre l'apartheid en Afrique du Sud (Nelson Mandela)

**II. LES TRANSFORMATIONS SOCIALES**
- Émancipation des femmes et féminisme
- Mouvements de jeunesse (Mai 1968)
- Révolution numérique et société de l'information`,
        examples: [
          'Prix Nobel de la paix pour Martin Luther King (1964)',
          'Libération de Nelson Mandela (1990)',
          'Chute du mur de Berlin (1989)',
          'Printemps arabe (2011)'
        ],
        keyPoints: [
          'Généralisation du suffrage universel',
          'Affirmation de la société civile',
          'Rôle croissant des médias et des réseaux sociaux',
          'Défis des populismes et des nouvelles menaces'
        ]
      },
      {
        id: 'hist-nouvelles-puissances',
        title: 'Émergence de nouvelles puissances',
        content: `**I. UN MONDE MULTIPOLAIRE**

Fin de l'hégémonie absolue des anciennes superpuissances au profit d'acteurs émergents.

**A. L'affirmation de l'Asie**
- Ascension de la Chine (2e puissance mondiale)
- Émergence de l'Inde (géant démographique et technologique)

**B. Les BRICS et l'ordre mondial**
- BRICS : Brésil, Russie, Inde, Chine, Afrique du Sud
- Volonté de rééquilibrer les relations Nord-Sud

**II. L'AFRIQUE DANS LE NOUVEAU SIÈCLE**
- L'Afrique comme futur pôle de croissance
- Enjeux des matières premières et de la démographie
- Relations avec les nouvelles puissances (Chinoafrique)`,
        examples: [
          'Sommets des BRICS',
          'Expansion chinoise en Afrique',
          'Succès technologique de l\'Inde (spatial, informatique)',
          'Brésil : puissance agricole mondiale'
        ],
        keyPoints: [
          'Le déclin relatif de l\'Occident',
          'Multipolirisation des relations internationales',
          'Émergence économique vs défis sociaux',
          'L\'Afrique au centre des nouvelles convoitises'
        ]
      }
    ]
  },
  {
    id: 'geographie',
    name: 'Géographie',
    shortName: 'Géo',
    icon: '🌍',
    color: '#34D399',
    gradient: 'from-emerald-600 to-emerald-400',
    description: 'Population, Urbanisation, Mondialisation, Défis de l\'Afrique...',
    totalExercises: 105,
    chapters: [
      {
        id: 'geo-population-migrations',
        title: 'Population et migrations',
        content: `**I. LA DYNAMIQUE DÉMOGRAPHIQUE MONDIALE**

La population mondiale connaît des évolutions contrastées selon les régions.

**A. La transition démographique**
- Modèle de passage d'un régime traditionnel (forte natalité/mortalité) à un régime moderne (faible natalité/mortalité)
- L'Afrique en phase 2 : baisse de la mortalité, natalité encore forte (forte croissance)
- Les pays développés en phase de vieillissement

**B. Répartition et densités**
- Foyers de peuplement : Asie de l'Est et du Sud, Europe, Nord-Est des USA
- Déserts humains et zones de contraintes

**II. LES MOBILITÉS HUMAINES**
- **Migrations internationales** : Flux Sud-Nord, Sud-Sud, et Nord-Nord. Motifs économiques, politiques (réfugiés), et climatiques
- **Exode rural** : Déplacement massif vers les villes, particulièrement en Afrique
- **Remises de fonds** : Rôle crucial pour le développement des pays de départ`,
        examples: [
          'Transition démographique rapide au Nigeria',
          'Vieillissement de la population au Japon et en Italie',
          'Flux migratoires en Méditerranée',
          'L\'exode rural vers Cotonou au Bénin'
        ],
        keyPoints: [
          'Croissance démographique majeure en Afrique',
          'Urbanisation galopante (métropolisation)',
          'L\'immigration comme enjeu politique mondial',
          'Importance du solde naturel et du solde migratoire'
        ]
      },
      {
        id: 'geo-mondialisation',
        title: 'La Mondialisation',
        content: `**I. UN MONDE INTERCONNECTÉ**

Processus d'intensification des échanges à l'échelle planétaire.

**A. Les différents flux**
- **Marchandises** : Rôle des transports maritimes (conteneurisation)
- **Capitaux** : Marchés financiers, investissements directs étrangers (IDE)
- **Informations** : Révolution numérique et réseaux sociaux
- **Personnes** : Tourisme, migrations, élites mondialisées

**B. Les acteurs principaux**
- Firmes Multinationales (FMN)
- États et organisations internationales (OMC, FMI)
- ONG et société civile (altermondialisme)

**II. UN ESPACE MONDIAL HIÉRARCHISÉ**
- Centres d'impulsion (Triade élargie : USA, Europe, Asie de l'Est)
- Pays émergents (BRICS)
- Périphéries intégrées et pays marginalisés`,
        examples: [
          'Le trajet d\'un iPhone : conception aux USA, composants d\'Asie, assemblage en Chine',
          'Le port de Cotonou intégré au commerce mondial',
          'L\'influence culturelle globale (Hollywood, K-pop, réseaux sociaux)'
        ],
        keyPoints: [
          'Uniformisation culturelle vs résistances identitaires',
          'Inégalités croissantes entre gagnants et perdants de la mondialisation',
          'Interdépendance économique totale',
          'Défis de la régulation mondiale'
        ]
      },
      {
        id: 'geo-dynamiques-territoires',
        title: 'Dynamiques des territoires',
        content: `**I. LA MÉTROPOLISATION**

Concentration des hommes et des activités dans les grandes villes.

**A. L'essor des métropoles**
- Villes globales et réseaux urbains
- Centres de décision, d'innovation et de culture
- Phénomène de périurbanisation (étalement urbain)

**B. Les défis urbains**
- Logement, transports, pollutions
- Ségrégation socio-spatiale (quartiers riches vs bidonvilles)

**II. LES ESPACES RURAUX EN MUTATION**
- Agriculture productiviste vs agriculture vivrière
- Tourisme vert et nouvelles fonctions de la campagne
- Déclin des espaces isolés par l'exode rural`,
        examples: [
          'Lagos (Nigeria) : mégapole africaine en pleine mutation',
          'Cotonou et son agglomération : étalement vers Calavi et Sèmè-Kpodji',
          'Les zones agro-industrielles au Bénin (GDIZ)'
        ],
        keyPoints: [
          'Plus de 50% de l\'humanité vit en ville',
          'La métropole comme moteur de l\'économie mondiale',
          'Inégalités entre quartiers intégrés et délaissés',
          'Enjeux de l\'aménagement du territoire'
        ]
      },
      {
        id: 'geo-ressources-environnement',
        title: 'Ressources naturelles et environnement',
        content: `**I. DES RESSOURCES SOUS TENSION**

Répartition inégale et consommation croissante des ressources planétaires.

**A. L'eau : un enjeu vital**
- Stress hydrique dans certaines régions
- Conflits pour l'usage et le partage de l'eau (grands barrages)

**B. Énergie et matières premières**
- Dépendance aux énergies fossiles (pétrole, gaz, charbon)
- Enjeux des minerais critiques pour la transition énergétique (cobalt, lithium)

**II. LES DÉFIS ENVIRONNEMENTAUX**
- Changement climatique et ses impacts (montée des eaux, sécheresses)
- Déforestation et perte de biodiversité
- Pollutions des sols, de l'air et des océans`,
        examples: [
          'Le barrage de la Renaissance sur le Nil (tensions Éthiopie/Égypte)',
          'L\'exploitation minière dans le bassin du Congo',
          'L\'érosion côtière au Bénin (Grand-Popo, Cotonou)'
        ],
        keyPoints: [
          'Rareté croissante des ressources non renouvelables',
          'Géopolitique des ressources (conflits d\'accès)',
          'Urgence de la transition écologique',
          'Responsabilité des différents acteurs (États, entreprises, citoyens)'
        ]
      },
      {
        id: 'geo-developpement-durable',
        title: 'Développement durable et inégalités',
        content: `**I. LE CONCEPT DE DÉVELOPPEMENT DURABLE**

Un développement qui répond aux besoins du présent sans compromettre ceux des générations futures.

**A. Les trois piliers**
- **Économique** : Création de richesse et viabilité
- **Social** : Équité, justice et bien-être pour tous
- **Environnemental** : Préservation des ressources et du climat

**B. Les Objectifs de Développement Durable (ODD)**
- Agenda 2030 de l'ONU pour éradiquer la pauvreté et protéger la planète

**II. DES INÉGALITÉS PERSISTANTES**
- Contraste Nord-Sud et émergence de nouveaux clivages
- Inégalités de richesse, d'éducation et de santé (IDH)
- Fracture numérique`,
        examples: [
          'L\'utilisation de l\'énergie solaire dans les villages reculés du Bénin',
          'Comparaison de l\'IDH entre la Norvège et le Bénin',
          'Programmes de microcrédit pour l\'autonomisation des femmes'
        ],
        keyPoints: [
          'Le développement ne se limite pas à la croissance économique',
          'L\'IDH comme mesure plus humaine du progrès',
          'Nécessité d\'une solidarité internationale',
          'Changer nos modes de production et de consommation'
        ]
      },
      {
        id: 'geo-afrique-benin',
        title: 'Afrique et Bénin',
        content: `**I. L'AFRIQUE DANS LA MONDIALISATION**

Un continent aux multiples visages et au potentiel immense.

**A. Atouts et défis duc continent**
- Richesse en ressources naturelles et jeunesse de la population
- Défis d'infrastructures, de gouvernance et de stabilité
- Insertion croissante dans les échanges mondiaux

**B. Urbanisation et développement**
- Croissance rapide des villes et émergence d'une classe moyenne

**II. LA GÉOGRAPHIE DU BÉNIN**
- Situation en Afrique de l'Ouest (pays côtier)
- Organisation administrative (12 départements)
- Économie : Rôle central du Port Autonome de Cotonou, agriculture (coton, cajou), commerce de transit vers le Nigeria et l'Hinterland`,
        examples: [
          'Le corridor Abidjan-Lagos passante par Cotonou',
          'La culture du coton comme moteur de l\'économie rurale béninoise',
          'Le développement touristique (Abomey, Ouidah, Pendjari)'
        ],
        keyPoints: [
          'Le Bénin : "Quartier Latin" de l\'Afrique et porte d\'entrée régionale',
          'Diversité des paysages (côte au sud, collines au centre, savane au nord)',
          'Enjeux de la décentralisation',
          'Défis de l\'industrialisation (zone de Glo-Djigbé)'
        ]
      },
      {
        id: 'geo-integration-regionale',
        title: 'Intégration régionale africaine',
        content: `**I. LES ORGANISATIONS D'INTÉGRATION**

Volonté des États africains de s'unir pour être plus forts économiquement.

**A. La CEDEAO (Afrique de l'Ouest)**
- Libre circulation des personnes et des biens
- Projets de monnaie commune (Eco)
- Médiation politique et force d'intervention (Ecomog)

**B. L'UEMOA**
- Union monétaire (Franc CFA) et harmonisation des politiques économiques

**II. ENJEUX ET LIMITES**
- Marché commun et zone de libre-échange continentale (ZLECAF)
- Obstacles : Manque d'infrastructures de connexion, disparités économiques, crises politiques`,
        examples: [
          'Le passeport CEDEAO permettant de voyager sans visa dans 15 pays',
          'Le tarif extérieur commun (TEC) de l\'UEMOA',
          'La ZLECAF : plus grande zone de libre-échange au monde'
        ],
        keyPoints: [
          'L\'union fait la force face à la mondialisation',
          'Nécessité de développer le commerce intra-africain',
          'Paix et sécurité comme socles de l\'intégration',
          'Solidarité régionale face aux défis globaux'
        ]
      },
      {
        id: 'geo-tourisme-patrimoine',
        title: 'Tourisme et patrimoine',
        content: `**I. LE POTENTIEL TOURISTIQUE AFRICAIN**

Valorisation des richesses naturelles et culturelles pour le développement.

**A. Types de tourisme**
- **Tourisme balnéaire** : Côte ouest-africaine, îles
- **Écotourisme/Safari** : Parcs nationaux et réserves (Afrique de l'Est et Australe, Pendjari au Bénin)
- **Tourisme culturel et mémoriel** : Sites historiques, route de l'esclave

**II. PATRIMOINE ET IDENTITÉ**
- Sites classés au patrimoine mondial de l'UNESCO
- Préservation des traditions et de l'artisanat
- Enjeux économiques : création d'emplois et revenus en devises`,
        examples: [
          'Les palais royaux d\'Abomey au Bénin (UNESCO)',
          'La ville historique de Ouidah et la Porte du Non-Retour',
          'Le parc national de la Pendjari : fleuron de l\'écotourisme en Afrique de l\'Ouest'
        ],
        keyPoints: [
          'Le tourisme comme moteur de croissance durable',
          'Nécessité de préserver l\'authenticité face au tourisme de masse',
          'Formation aux métiers du tourisme et de l\'hôtellerie',
          'Le patrimoine comme levier de fierté nationale et d\'attractivité'
        ]
      }
    ]
  },
  {
    id: 'chimie',
    name: 'Chimie',
    shortName: 'Chimie',
    icon: '🧪',
    color: '#10B981',
    gradient: 'from-emerald-600 to-emerald-400',
    description: 'Acides-Bases, Cinétique Chimique, Chimie Organique, Solutions aqueuses...',
    totalExercises: 82,
    chapters: [
      {
        id: 'chimie-acides-bases',
        title: 'Acides et Bases',
        content: `L'étude des acides et des bases est fondamentale pour comprendre la chimie des solutions et le traitement des eaux.

**Définitions**
Acide de Brönsted : espèce capable de céder un proton H+. Base de Brönsted : espèce capable de capter un proton H+. Couple acide/base A/B : A = B + H+.

**pH et pKa**
Le pH mesure l'acidité d'une solution : pH = -log[H3O+]. Le pKa caractérise la force d'un acide : pKa = -log Ka. Plus le pKa est petit, plus l'acide est fort.

**Réactions Acide-Base**
La réaction entre un acide fort et une base forte est totale. Les solutions tampons maintiennent un pH quasi constant malgré l'ajout d'acide ou de base.`,
        examples: [
          'Calcul du pH d\'une solution de HCl 0,1 M → pH = 1',
          'Utilisation de la chaux pour neutraliser l\'acidité de l\'eau',
          'Le système tampon bicarbonate dans le sang'
        ],
        keyPoints: [
          'pH : Indice d\'hydrogène',
          'Autoprotolyse de l\'eau : 2H2O = H3O+ + OH-',
          'Ke : Produit ionique de l\'eau (10^-14 à 25°C)',
          'Solution tampon : pH stable'
        ]
      }
    ]
  },
  {
    id: 'biologie',
    name: 'Sciences de la Vie',
    shortName: 'SVT',
    icon: '🧬',
    color: '#EC4899',
    gradient: 'from-pink-600 to-pink-400',
    description: 'Génétique, Immunologie, Physiologie Nerveuse...',
    totalExercises: 66,
    chapters: [
      {
        id: 'svt-genetique',
        title: 'Génétique et Hérédité',
        content: `La génétique étudie la transmission des caractères héréditaires et le fonctionnement des gènes.

**L\'ADN et l\'Information Génétique**
L'ADN est le support de l'hérédité. Sa structure en double hélice permet la duplication et la transmission de l'information. Un gène est un fragment d'ADN codant pour une protéine.

**La Mutation**
Une mutation est une modification de la séquence d'ADN. Elle peut être silencieuse, bénéfique ou néfaste. Elle est le moteur de l'évolution.

**Hérédité humaine**
Transmission des caractères dominants et récessifs. Chromosomes sexuels (X, Y) et maladies liées au sexe.`,
        examples: [
          'La transmission de la couleur des yeux',
          'La drépanocytose comme exemple de mutation génétique',
          'Le clonage thérapeutique'
        ],
        keyPoints: [
          'Allèle : Version d\'un gène',
          'Génotype : Ensemble des gènes',
          'Phénotype : Caractères observables',
          'Chromosomes : Supports de l\'ADN'
        ]
      }
    ]
  },
  {
    id: 'economie',
    name: 'Économie',
    shortName: 'Éco',
    icon: '📈',
    color: '#0EA5E9',
    gradient: 'from-sky-600 to-sky-400',
    description: 'Analyse des systèmes économiques, marchés, croissance et développement.',
    totalExercises: 120,
    chapters: [
      {
        id: 'eco-agents-economiques',
        title: 'Les Agents économiques',
        content: `**I. DÉFINITION ET CLASSIFICATION DES AGENTS ÉCONOMIQUES**

Les agents économiques sont les acteurs qui participent à l'activité économique. Ils prennent des décisions de production, de consommation, d'épargne et d'investissement.

**II. LES QUATRE AGENTS ÉCONOMIQUES PRINCIPAUX**

**A. LES MÉNAGES**
- **Fonction principale** : Consommation finale
- **Ressources** : Revenus du travail (salaires), du capital (dividendes, loyers), transferts sociaux

**B. LES ENTREPRISES**
- **Fonction principale** : Production de biens et services marchands

**C. L'ÉTAT (Administrations publiques)**
- **Fonctions** : Régulation, redistribution, production de services non marchands

**D. LE RESTE DU MONDE**
- **Fonction** : Échanges internationaux (Importations, Exportations)

**III. LE CIRCUIT ÉCONOMIQUE**
- **Flux réels** : Biens, services, travail
- **Flux monétaires** : Salaires, prix, impôts`,
        examples: [
          'Un ménage béninois consommant du riz local',
          'Une PME de transformation d\'ananas au Bénin',
          'L\'État finançant la construction de routes',
          'Exportation de coton vers l\'Asie'
        ],
        keyPoints: [
          'Interdépendance totale entre les agents',
          'Rôle central de l\'État dans la régulation',
          'Importance du circuit économique',
          'Spécificité de l\'économie béninoise'
        ]
      },
      {
        id: 'eco-production',
        title: 'La Production',
        content: `**I. DÉFINITION ET TYPES DE PRODUCTION**
- **Production marchande** : Vendue sur un marché
- **Production non marchande** : Fournie gratuitement ou quasi-gratuitement

**II. LES FACTEURS DE PRODUCTION**
- **Le Travail** : Activité humaine rémunérée
- **Le Capital** : Capital fixe et capital circulant

**III. MESURE DE LA PRODUCTION**
- **Valeur Ajoutée (VA)** : VA = Production - Consommations intermédiaires
- **Produit Intérieur Brut (PIB)** : Somme des VA`,
        examples: [
          'Production marchande : Une boulangerie',
          'Production non marchande : Un cours public',
          'VA d\'un menuisier : Prix du meuble - Coût du bois'
        ],
        keyPoints: [
          'La VA mesure la richesse réellement créée',
          'Le PIB comme indicateur de croissance',
          'Importance des gains de productivité'
        ]
      },
      {
        id: 'eco-marches-prix',
        title: 'Marchés et Prix',
        content: `**I. LE MÉCANISME DU MARCHÉ**
- **La demande** : Acheteurs (baisse quand le prix monte)
- **L'offre** : Vendeurs (monte quand le prix monte)

**II. LA FORMATION DU PRIX**
- **Prix d'équilibre** : Offre = Demande
- **Loi de l'offre et de la demande** : Ajustement automatique

**III. LES STRUCTURES DE MARCHÉ**
- **Concurrence Pure et Parfaite**
- **Monopole** et **Oligopole**`,
        examples: [
          'Marché du maïs à Dantokpa',
          'Monopole : La SBEE au Bénin',
          'Oligopole : Téléphonie mobile'
        ],
        keyPoints: [
          'Le prix comme signal de rareté',
          'Flexibilité des prix nécessaire',
          'Rôle de la concurrence'
        ]
      },
      {
        id: 'eco-monnaie-banques',
        title: 'Monnaie et Banques',
        content: `**I. LES FONCTIONS ET FORMES**
- **Fonctions** : Échange, unité de compte, réserve
- **Formes** : Fiduciaire et scripturale

**II. LE SYSTÈME BANCAIRE**
- **Banques commerciales** : Épargne et crédits
- **Banque Centrale (BCEAO)** : Émission et régulation

**III. LA CRÉATION MONÉTAIRE**
- Création par le crédit bancaire`,
        examples: [
          'Utilisation du Franc CFA au Bénin',
          'Contrat de prêt pour un commerçant',
          'Rôle de la BCEAO dans la stabilité'
        ],
        keyPoints: [
          'Confiance comme socle de la valeur',
          'Crédit vital pour l\'investissement',
          'Contrôle de la masse monétaire'
        ]
      },
      {
        id: 'eco-croissance-developpement',
        title: 'Croissance et Développement',
        content: `**I. LA CROISSANCE ÉCONOMIQUE**
- Augmentation durable du PIB
- Sources : Travail, capital, progrès technique

**II. LE DÉVELOPPEMENT**
- Transformation sociale et humaine
- Indicateur : IDH (Indice de Développement Humain)

**III. LE DÉVELOPPEMENT DURABLE**
- Économie, Social, Environnement`,
        examples: [
          'Croissance du PIB béninois',
          'Amélioration de l\'accès à la santé',
          'Différence entre PIB et IDH'
        ],
        keyPoints: [
          'Croissance nécessaire mais non suffisante',
          'Importance du capital humain',
          'Défi du développement durable'
        ]
      },
      {
        id: 'eco-inflation-chomage',
        title: 'Inflation et Chômage',
        content: `**I. L'INFLATION**
- Hausse durable et généralisée des prix
- Baisse du pouvoir d'achat

**II. LE CHÔMAGE**
- Sans emploi, apte et en recherche
- Types : Frictionnel, structurel, conjoncturel`,
        examples: [
          'Hausse du prix des produits importés',
          'Chômage des jeunes diplômés',
          'Arbitrage inflation/chômage'
        ],
        keyPoints: [
          'Impact social de l\'inflation',
          'Défis de l\'emploi en Afrique',
          'Politiques de formation'
        ]
      },
      {
        id: 'eco-politiques-economiques',
        title: 'Politiques économiques',
        content: `**I. OBJECTIFS**
- Croissance, Emploi, Prix stables, Équilibre extérieur

**II. POLITIQUES CONJONCTURELLES**
- **Budgétaire** : Budget de l'État
- **Monétaire** : Taux d'intérêt

**III. POLITIQUES STRUCTURELLES**
- Éducation, Infrastructures, Réformes`,
        examples: [
          'Grands travaux (Asphaltage) au Bénin',
          'Action de la BCEAO sur les taux',
          'Réformes du climat des affaires'
        ],
        keyPoints: [
          'Coordination au sein de l\'UEMOA',
          'Dette publique comme levier',
          'Lutte contre la pauvreté'
        ]
      },
      {
        id: 'eco-commerce-international',
        title: 'Commerce international',
        content: `**I. POURQUOI ÉCHANGER ?**
- Avantages comparatifs et spécialisation
- Diversité des produits

**II. LIBRE-ÉCHANGE VS PROTECTIONNISME**
- Suppression des barrières vs protection des industries

**III. LA BALANCE COMMERCIALE**
- Exportations - Importations`,
        examples: [
          'Spécialisation dans le coton (Bénin)',
          'Importation de technologies',
          'Rôle de l\'OMC'
        ],
        keyPoints: [
          'Compétitivité des entreprises africaines',
          'Valeur ajoutée des exportations',
          'Impact des taux de change'
        ]
      },
      {
        id: 'eco-integration-economique',
        title: 'Intégration économique régionale',
        content: `**I. ÉTAPES DE L'INTÉGRATION**
- Libre-échange, Union douanière, Marché commun, Union monétaire

**II. EN AFRIQUE DE L'OUEST**
- **CEDEAO** (Large)
- **UEMOA** (Monétaire - Franc CFA)`,
        examples: [
          'Libre circulation CEDEAO',
          'Tarif Extérieur Commun UEMOA',
          'Projet ZLECAF'
        ],
        keyPoints: [
          'Levier de puissance économique',
          'Commerce intra-africain',
          'Convergence des économies'
        ]
      },
      {
        id: 'eco-economie-benin',
        title: 'Économie du Bénin',
        content: `**I. STRUCTURE**
- Primaire : Agriculture (Coton)
- Secondaire : Bâtiment, Agro-industrie (GDIZ)
- Tertiaire : Port de Cotonou, Commerce

**II. DÉFIS**
- Dépendance Nigeria, Informalité, Emploi des jeunes`,
        examples: [
          'Port de Cotonou : poumon de l\'économie',
          'Production record de coton',
          'Zone industrielle de Glo-Djigbé'
        ],
        keyPoints: [
          'Transformation structurelle en cours',
          'Industrialisation locale',
          'Hub régional logistique'
        ]
      },
      {
        id: 'eco-institutions-economiques',
        title: 'Institutions économiques africaines',
        content: `**I. FINANCIÈRES**
- BCEAO, BAD, BOAD

**II. RÉGULATION**
- ZLECAF, OHADA (Droit des affaires)`,
        examples: [
          'Financement BAD pour les routes',
          'Sécurité juridique via OHADA',
          'Stabilité monétaire (BCEAO)'
        ],
        keyPoints: [
          'Stabilité et développement',
          'Coopération internationale',
          'Harmonisation des normes'
        ]
      },
      {
        id: 'eco-entrepreneuriat',
        title: 'Entrepreneuriat et PME',
        content: `**I. IMPORTANCE**
- 90% du tissu économique, source d'emplois

**II. ESPRIT D'ENTREPRENDRE**
- Risque, gestion, innovation

**III. ACCOMPAGNEMENT**
- Incubateurs, Financement, Appui État`,
        examples: [
          'Startups AgriTech béninoises',
          'Transformation locale de produits',
          'Expansion du e-commerce'
        ],
        keyPoints: [
          'Réponse au chômage des jeunes',
          'Formalisation nécessaire',
          'Innovation locale'
        ]
      }
    ]
  }
];

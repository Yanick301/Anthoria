export interface Flashcard {
  id: string;
  subjectId: string;
  question: string;
  answer: string;
  hint?: string;
}

export const FLASHCARDS: Flashcard[] = [
  // MOBILISATION DE L'EAU (EA)
  {
    id: 'ea-mob-1',
    subjectId: 'mobilisation-eau',
    question: "Qu'est-ce que le cycle de l'eau ?",
    answer: "C'est l'ensemble des transformations et des mouvements de l'eau sur Terre (évaporation, condensation, précipitations, ruissellement).",
    hint: "Pense au trajet de la goutte d'eau."
  },
  {
    id: 'ea-mob-2',
    subjectId: 'mobilisation-eau',
    question: "Définition d'un bassin versant ?",
    answer: "Espace drainé par un cours d'eau et ses affluents, délimité par des lignes de partage des eaux.",
    hint: "C'est une surface de collecte."
  },
  {
    id: 'ea-mob-3',
    subjectId: 'mobilisation-eau',
    question: "Citez 3 types de captage d'eau souterraine.",
    answer: "Puits, forage, source aménagée.",
    hint: "On cherche l'eau sous terre."
  },

  // TRAITEMENT DE L'EAU (EA)
  {
    id: 'ea-tra-1',
    subjectId: 'traitement-eau',
    question: "Quel est le but de la coagulation-floculation ?",
    answer: "Rassembler les particules en suspension trop fines pour décanter en 'flocs' plus lourds.",
    hint: "Agglomération des impuretés."
  },
  {
    id: 'ea-tra-2',
    subjectId: 'traitement-eau',
    question: "Pourquoi désinfecter l'eau ?",
    answer: "Pour éliminer les micro-organismes pathogènes (bactéries, virus) et rendre l'eau potable.",
    hint: "Santé publique."
  },

  // MATHÉMATIQUES
  {
    id: 'math-1',
    subjectId: 'mathematiques',
    question: "Dérivée de f(x) = x² ?",
    answer: "f'(x) = 2x",
    hint: "n * x^(n-1)"
  },
  {
    id: 'math-2',
    subjectId: 'mathematiques',
    question: "Valeur de ln(1) ?",
    answer: "0",
    hint: "e^0 = ?"
  },
  {
    id: 'math-3',
    subjectId: 'mathematiques',
    question: "Théorème de Pythagore ?",
    answer: "a² + b² = c² dans un triangle rectangle.",
    hint: "Relation des côtés d'un triangle."
  },

  // PHYSIQUE
  {
    id: 'phys-1',
    subjectId: 'sciences-physiques',
    question: "Formule de la vitesse ?",
    answer: "v = d / t (vitesse = distance / temps)",
    hint: "m/s"
  },
  {
    id: 'phys-2',
    subjectId: 'sciences-physiques',
    question: "Loi d'Ohm ?",
    answer: "U = R * I",
    hint: "Relation tension, résistance, courant."
  }
];

export function getFlashcardsBySubject(subjectId: string): Flashcard[] {
  return FLASHCARDS.filter(card => card.subjectId === subjectId);
}

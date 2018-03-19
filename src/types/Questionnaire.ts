export interface QuestionnaireType {
  title: string;
  description: string;
  questions: QuestionType[];
  interpretations: InterpretationType[];
}

export interface QuestionType {
  title: string;
  variants: VariantType[];
  disorder: string;
}

export interface InterpretationType {
  disorder: string;
  scores: number[];
  description: string;
}

export interface VariantType {
  text: string;
  selected?: boolean;
  score: number;
}

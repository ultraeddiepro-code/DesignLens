export interface PaletteColor {
  hex: string;
  rgb: number[];
  name: string;
}

export interface AnalysisResult {
  filename: string;

  palette: PaletteColor[];

  content_type: string;

  mood: string;

  design_score: number;

  layout: {
    layout: string;
  };

  accessibility: {
    score: number;
    suggestions: string[];
  };

  harmony: {
  scheme: string;
  score: number;
  description: string;
  };

  style: {
    style: string;
    keywords: string[];
    brightness: number;
    saturation: number;
    summary: string;
  };
    composition: {
    symmetry: number;
    balance: number;
    rule_of_thirds: boolean;
    focus_point: {
      x: number;
      y: number;
    };

    hierarchy: {
      primary_focus: string;
      secondary_focus: string;
      reading_order: string[];
      score: number;
      suggestions: string[];
    };
    suggestions: string[];
  };
}
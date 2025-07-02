export interface ChallengeCard {
  id: number;
  title: string;
  difficulty: "Très Facile" | "Facile" | "Moyen" | "Difficile";
}

export interface ArticleCardTypes {
  id: number;
  title: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  challenge?: ChallengeCard[];
}

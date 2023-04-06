export const getLeaderScore = (scores: number[]) =>
  Math.floor(scores.reduce((acc, score) => acc + score, 0) / scores.length);

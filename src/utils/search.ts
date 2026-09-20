import { emergencies, emergencyOrder } from '@/data/emergencies';
import { emergenciesFa } from '@/data/emergenciesFa';

function normalize(s: string): string {
  return s.toLowerCase().trim().replace(/\s+/g, ' ');
}

function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  return dp[m][n];
}

function fuzzyMatch(query: string, text: string): boolean {
  if (text.includes(query)) return true;
  const queryWords = query.split(' ');
  const textWords = text.split(' ');
  for (const qw of queryWords) {
    if (qw.length < 2) continue;
    let found = false;
    for (const tw of textWords) {
      if (tw.includes(qw)) {
        found = true;
        break;
      }
      const dist = levenshtein(qw, tw);
      if (dist <= 1 && qw.length >= 3) {
        found = true;
        break;
      }
    }
    if (!found) return false;
  }
  return true;
}

export interface SearchResult {
  id: string;
  score: number;
}

export function searchEmergencies(query: string): string[] {
  const q = normalize(query);
  if (!q) return emergencyOrder;

  const results: SearchResult[] = [];

  for (const id of emergencyOrder) {
    const en = emergencies[id];
    const fa = emergenciesFa[id];
    let score = 0;

    const enTitle = normalize(en.title);
    const enSubtitle = normalize(en.subtitle);
    const enKeywords = en.keywords.map(normalize);

    if (enTitle.includes(q)) score += 100;
    if (enSubtitle.includes(q)) score += 50;
    if (enKeywords.some((k) => k.includes(q) || q.includes(k))) score += 80;
    if (fuzzyMatch(q, enTitle)) score += 30;
    if (fuzzyMatch(q, enKeywords.join(' '))) score += 40;

    const faTitle = normalize(fa.title);
    const faSubtitle = normalize(fa.subtitle);
    if (faTitle.includes(q)) score += 100;
    if (faSubtitle.includes(q)) score += 50;
    if (fuzzyMatch(q, faTitle)) score += 30;

    if (score > 0) {
      results.push({ id, score });
    }
  }

  results.sort((a, b) => b.score - a.score);
  return results.map((r) => r.id);
}

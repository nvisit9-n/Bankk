/**
 * Utilities for cleaning and deduplicating Speech-to-Text (Nepali and English)
 * Eliminates repeated words (e.g. "नेपाल नेपाल..."), sentence fragment echoes,
 * and overlapping token boundaries when appending to existing input.
 */

/**
 * Deduplicates immediate consecutive words and 2-word repeated phrases in speech input.
 * Handles both Devanagari (Nepali) unicode scripts and Latin alphabets.
 */
export function cleanNepaliSpeechTranscript(raw: string): string {
  if (!raw) return '';

  // 1. Normalize whitespace
  let text = raw.replace(/\s+/g, ' ').trim();
  if (!text) return '';

  // 2. Split into words preserving Unicode boundaries
  const words = text.split(' ').filter(w => w.trim().length > 0);
  if (words.length <= 1) return text;

  const dedupedWords: string[] = [];

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i].trim();
    if (!currentWord) continue;

    // A. Eliminate immediate single-word repetition:
    // e.g. "नेपाल" followed immediately by "नेपाल" -> keep one
    if (
      dedupedWords.length > 0 &&
      dedupedWords[dedupedWords.length - 1].toLowerCase() === currentWord.toLowerCase()
    ) {
      continue;
    }

    // B. Eliminate immediate 2-word phrase repetition:
    // e.g. "नेपाल राष्ट्र" followed by "नेपाल राष्ट्र" -> keep one
    if (
      dedupedWords.length >= 2 &&
      i + 1 < words.length &&
      dedupedWords[dedupedWords.length - 2].toLowerCase() === currentWord.toLowerCase() &&
      dedupedWords[dedupedWords.length - 1].toLowerCase() === words[i + 1].trim().toLowerCase()
    ) {
      continue;
    }

    dedupedWords.push(currentWord);
  }

  return dedupedWords.join(' ').trim();
}

/**
 * Seamlessly appends a newly finalized transcript chunk to an existing input query,
 * detecting and stripping any overlapping word boundary between the end of the existing
 * text and the start of the new transcript.
 * 
 * Example:
 * existing: "नेपाल राष्ट्र"
 * incoming: "राष्ट्र बैंक ऐन"
 * output: "नेपाल राष्ट्र बैंक ऐन" (avoiding "नेपाल राष्ट्र राष्ट्र बैंक ऐन")
 */
export function appendSpeechTranscriptSafely(existingText: string, incomingTranscript: string): string {
  const cleanExisting = (existingText || '').trim();
  const cleanIncoming = cleanNepaliSpeechTranscript(incomingTranscript);

  if (!cleanExisting) return cleanIncoming;
  if (!cleanIncoming) return cleanExisting;

  // If already identical or existing ends with incoming
  if (cleanExisting === cleanIncoming || cleanExisting.endsWith(cleanIncoming)) {
    return cleanExisting;
  }

  // If incoming already starts with existing
  if (cleanIncoming.startsWith(cleanExisting)) {
    return cleanIncoming;
  }

  const existingWords = cleanExisting.split(' ').filter(w => w.length > 0);
  const incomingWords = cleanIncoming.split(' ').filter(w => w.length > 0);

  // Check overlap of up to 4 words at the boundary
  let maxOverlap = 0;
  const maxCheck = Math.min(existingWords.length, incomingWords.length, 4);

  for (let k = maxCheck; k > 0; k--) {
    const existingTail = existingWords.slice(-k).join(' ').toLowerCase();
    const incomingHead = incomingWords.slice(0, k).join(' ').toLowerCase();

    if (existingTail === incomingHead) {
      maxOverlap = k;
      break;
    }
  }

  if (maxOverlap > 0) {
    const nonOverlappingIncoming = incomingWords.slice(maxOverlap).join(' ');
    if (!nonOverlappingIncoming) return cleanExisting;
    return `${cleanExisting} ${nonOverlappingIncoming}`;
  }

  return `${cleanExisting} ${cleanIncoming}`;
}

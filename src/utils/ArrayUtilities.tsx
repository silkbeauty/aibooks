// shuffleArray.ts
export function shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// chunkArray.ts
export function chunkArray<T>(array: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, size + i));
    }
    return result;
}

// // Step 1: Convert rawList to an array
// export function processRawList(rawList: string): string[] {
//     return rawList
//         .trim()
//         .split('\n')
//         .map(item => item.trim())
//         .filter(item => item.length > 0);
// }

import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
export const countVowels: (s: string) => {} = R.pipe(
    R.toLower,
    stringToArray,
    R.filter((c) => c == 'a' ||c == 'e'|| c == 'i'|| c == 'o'|| c == 'u'),
    R.length  
);


/* Question 2 */
const openingBrackets = ['(', '{', '['];
const closingBrackets = [')', '}', ']'];
const matchingBrackets: { [key: string]: string } = { '(': ')', '{': '}', '[': ']' };

const opening = (char: string): boolean =>
    openingBrackets.includes(char)

const closing = (char: string): boolean =>
    closingBrackets.includes(char)

const check = (stack: string[], c: string): string[] =>
    opening(c) ? R.append(c, stack) :
    closing(c) ? (matchingBrackets[R.last(stack) as string] === c ? R.init(stack): R.append(c, stack) )
    : stack;


export const isPaired: (s: string) => boolean = R.pipe(
    stringToArray,
    R.reduce(check, []),
    R.isEmpty
);


/* Question 3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence  = (tree: WordTree): string => 
    (tree.root + tree.children.reduce((acc, curr) =>  acc + " " + treeToSentence(curr) , "")).trim();
    


 

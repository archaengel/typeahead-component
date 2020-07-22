interface ITrieNode {
  last: boolean;
  children: Map<string, TrieNode>;
}

interface ITrie {
  root: TrieNode;
  wordList: string[];
}

class TrieNode implements ITrieNode {
  last: boolean;
  children: Map<string, TrieNode>;

  constructor(last = false) {
    this.last = last;
    this.children = new Map();
  }
}

export class Trie implements ITrie {
  root: TrieNode;
  wordList: string[];

  constructor() {
    this.root = new TrieNode();
    this.wordList = [];
  }

  insert(word: string) {
    if (word.length === 0) {
      return;
    }

    let node = this.root;
    for (const c of word) {
      if (!node.children.has(c)) {
        node.children.set(c, new TrieNode());
      }

      node = node.children.get(c) as TrieNode;
    }

    node.last = true;
  }

  formTrie(words: string[]) {
    for (const word of words) {
      this.insert(word);
    }
  }

  getValidPrefixes(prefix: string): [string, TrieNode][] {
    let result: [string, TrieNode][] = [];

    const findValidPrefixesDFS = (
      tempWord: string,
      start: number,
      curr: TrieNode
    ): void => {
      if (start === prefix.length) {
        result.push([tempWord, curr]);
        return;
      }

      const char = prefix[start];
      const lowerChar = char.toLowerCase();
      const upperChar = char.toUpperCase();

      if (curr.children.has(lowerChar)) {
        const nextNode = curr.children.get(lowerChar) as TrieNode;
        findValidPrefixesDFS(tempWord + lowerChar, start + 1, nextNode);
      }

      if (curr.children.has(upperChar)) {
        const nextNode = curr.children.get(upperChar) as TrieNode;
        findValidPrefixesDFS(tempWord + upperChar, start + 1, nextNode);
      }
    };

    findValidPrefixesDFS('', 0, this.root);
    return result;
  }

  getSuggestionsRec(curr: TrieNode, word: string): void {
    if (curr.last) {
      this.wordList.push(word);
    }

    for (const [char, node] of curr.children.entries()) {
      this.getSuggestionsRec(node, word + char);
    }
  }

  getSuggestions(prefix: string): string[] {
    this.wordList = [];

    const prefixes = this.getValidPrefixes(prefix);
    for (const [prefix, node] of prefixes) {
      this.getSuggestionsRec(node, prefix);
    }

    return this.wordList;
  }
}

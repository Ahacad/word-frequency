

##  word-frequency

Get word frequencies from a string text in one function.

### Install

```
npm install @ahacad/word-frequency
```

or

```
yarn add @ahacad/word-frequency
```

### Parameters

| Parameter     | Type                                 | Default  | Description                                                                                                                                                              |
| ---           | ---                                  | ---      | ---                                                                                                                                                                      |
| text          | String                               | null     | the text to be processed                                                                                                                                                 |
| caseSensitive | Boolean                              | true     | when set false, ignore case differences between words                                                                                                                    |
| letter        | "normal" / "upperCase" / "lowerCase" | "normal" | whether to convert all words to lower/uppercase, has higher priority then caseSensitive                                                                                  |
| noPunctuation | Boolean                              | true     | when set to true replace all punctuations by empty string, otherwise do nothing and keep them (which will lead to some words and punctuations be together when counting) |


```js
import wordFrequency from "@ahacad/word-frequency"

wordFrequency(text, caseSensitive, letter, noPunctuation)
```

### Examples

```js
import wordFrequency from "@ahacad/word-frequency"

console.log(wordFrequency("hello world"));

/*
  { hello: 1, world 1 }
*/
```

Refer to `test/main.test.ts` for more usage examples.

### Complexity

The package uses an object (as dictionary) to store all value changes, and time complexity is $O(n)$.

### More

License is MIT. Any comment is welcome, feel free to start an issue or pull request.

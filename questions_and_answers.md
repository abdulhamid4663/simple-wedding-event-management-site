<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>i think the answer is "A" because we know when we call a variable it should have with exact name of the variable is declared with, and here we can see that the variable is called with "greeting" and another global variable is declared with "greetign" with an empty object on the value and when called with console the variable name was "greetign" so my answer is "A" an empty object.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>i think the answer is "C" because when the function is called they passed first parameter 1 as a number on the second parameter they passed 2 as a string as we know if we do math job like plus 1 + 2 it should be 3 but here because of the types of data passed they can't do the math job as it expected like 1+2=3 and if any parameter is a string then on the result it will be returned as a string so my answer is "C" it's 12</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>i think my answer is "A" because here declared 2 variables, one is an array with 4 items in it and second one is an object with one property and value is the first array's first index and after that it's updated the second variable which is an object its updated with another value on the first property and when consoled with first variable it didn't changed anything. so my answer is "A".</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>i think my answer is "B" because here a function that takes a parameter named "name" and it returns "Hi there, and the parameter" and here we can see that when the function is called with console it didn't pass anything as a parameter so the parameter was undefined so that's why i think the answer is "B".</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ?

<i>i think the answer is "C" because here what we can see a variable is declared with "count" and value is 0 and another variable is declared with name "nums" an array with 4 number in it beginning with 0 to 4 and used forEach loop on nums variable so it will be run 4 times because of the 4 items in the variable named "nums" but in the loop there was a condition if num is truthy then count will be 1+ on every loop and we know "0" is falsy number so it didn't get through at the first time so my answer is "C".</i>

</p>
</details>

# full-stack-1

# JavaScript Basics Practice

This project demonstrates basic **JavaScript programming concepts** such as conditional statements, loops, arithmetic operations, and simple algorithms including factorial, palindrome checking, and star pattern printing.

The program is written using **HTML and JavaScript** and prints the output directly in the browser using `document.write()`.

---

# Concepts Used

* Conditional Statements (`if-else`)
* For Loops
* Nested Loops
* Arithmetic Operations
* Modulus Operator (`%`)
* Number Manipulation
* String Conversion
* Basic Algorithm Logic

---

# Program Approaches

## 1. Adult or Minor Check

### Approach

A variable `n` represents the age.
Using an `if-else` condition:

* If age is greater than 18 → Adult
* Otherwise → Minor

### Code

```html
var n = 5;

if(n > 18){
    document.write("you are adult.<br>");
}
else{
    document.write("you are minor.<br>");
}
```

---

# 2. Multiplication Table

### Approach

Use a `for` loop from **1 to 10** and multiply each number with `n`.

### Code

```html
for(let i = 1; i <= 10; i++){
    document.write(`${n} x ${i} = ${n*i} <br>`);
}
```

---

# 3. Print Numbers from 1 to 10

### Approach

Loop from **1 to 10** and print each number.

### Code

```html
for(let i = 1; i <= 10; i++){
    document.write(`${i} <br>`);
}
```

---

# 4. Print Numbers Between Two Values

### Approach

Two variables `a` and `b` represent the range.
Loop from `a` to `b`.

### Code

```html
var a = 5;
var b = 15;

for(let i = a; i <= b; i++){
    document.write(`${i} <br>`);
}
```

---

# 5. Print Numbers in Reverse

### Approach

Start from `n` and decrease the number until `0`.

### Code

```html
for(let i = n; i >= 0; i--){
    document.write(`${i} <br>`);
}
```

---

# 6. Odd and Even Numbers

### Approach

Use the modulus operator `%`:

* If `number % 2 == 0` → Even
* Else → Odd

### Code

```html
for(let i = a; i <= b; i++){
    if(i % 2 == 0){
        document.write(`${i} even <br>`);
    }
    else{
        document.write(`${i} odd <br>`);
    }
}
```

---

# 7. Factorial of a Number

### Approach

Initialize `fact = 1`.
Multiply numbers from **1 to m**.

### Code

```html
let m = 5;
let fact = 1;

for(let i = 1; i <= m; i++){
    fact *= i;
}

document.write(`${fact} <br>`);
```

Example
5! = 120

---

# 8. Sum of First N Numbers

### Approach

Initialize `sum = 0` and add numbers from **1 to k**.

### Code

```html
let k = 5;
let sum = 0;

for(let i = 1; i <= k; i++){
    sum += i;
}

document.write(`${sum} <br>`);
```

Example
1 + 2 + 3 + 4 + 5 = 15

---

# 9. Palindrome Number

### Approach

1. Store the original number.
2. Reverse the number using modulus `%`.
3. Compare reversed number with original number.

If both are equal → Palindrome.

### Code

```html
let l = 12121;
let j = l;
let p = l.toString().length;
let pal = 0;

for(let i = 0; i < p; i++){
    let digit = l % 10;
    pal = pal * 10 + digit;
    l = Math.floor(l / 10);
}

if(j == pal){
    document.write(`${pal} palindrome <br>`);
}
else{
    document.write(`${pal} not palindrome <br>`);
}
```

Example
12121 → Palindrome

---

# 10. Star Pattern

### Approach

Use **nested loops**.

Outer loop → rows
Inner loop → stars per row

### Code

```html
for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= i; j++){
        document.write("*");
    }
    document.write("<br>");
}
```

### Output

```
*
**
***
****
*****
```

---

# Full Program Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>JavaScript Practice</title>
</head>
<body>

<script>

// conditional statement
var n = 5;
var a = 5;
var b = 15;

if(n > 18){
    document.write("you are adult.<br>");
}
else{
    document.write("you are minor.<br>");
}

// table
for(let i = 1; i <= 10; i++){
    document.write(`${n} x ${i} = ${n*i} <br>`);
}

// print numbers
for(let i = 1; i <= 10; i++){
    document.write(`${i} <br>`);
}

// numbers between a and b
for(let i = a; i <= b; i++){
    document.write(`${i} <br>`);
}

// reverse numbers
for(let i = n; i >= 0; i--){
    document.write(`${i} <br>`);
}

// odd even
for(let i = a; i <= b; i++){
    if(i % 2 == 0){
        document.write(`${i} even <br>`);
    }
    else{
        document.write(`${i} odd <br>`);
    }
}

// factorial
let m = 5;
let fact = 1;

for(let i = 1; i <= m; i++){
    fact *= i;
}

document.write(`${fact}<br>`);

// sum
let k = 5;
let sum = 0;

for(let i = 1; i <= k; i++){
    sum += i;
}

document.write(`${sum}<br>`);

// palindrome
let l = 12121;
let j = l;
let p = l.toString().length;
let pal = 0;

for(let i = 0; i < p; i++){
    let digit = l % 10;
    pal = pal * 10 + digit;
    l = Math.floor(l / 10);
}

if(j == pal){
    document.write(`${pal} palindrome <br>`);
}
else{
    document.write(`${pal} not palindrome <br>`);
}

// pattern
for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= i; j++){
        document.write("*");
    }
    document.write("<br>");
}

</script>

</body>
</html>
```

---

# Purpose

This project helps beginners practice:

* JavaScript fundamentals
* Loop logic
* Problem solving
* Basic algorithm implementation

---

⭐ Perfect for beginners learning **JavaScript logic building**.

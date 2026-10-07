**Задание #3**

Напишите и типизируйте функцию, выполняющую запрос за данными по переданному URL. Выведите их в консоль в формате: "ID: id, Email: email".

```typescript
const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

const getData = (url) => {
  // Your code here...
};

getData(COMMENTS_URL).then((data) => {
  // Your code here...
});

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
```

`tsc; node ./dist/app`

**Задание #1**

Напишите и типизируйте функцию, рассчитывающую стоимость с учетом скидки и рассрочки на заданное количество месяцев:

```typescript
const totalPrice = ({ price, discount, isInstallment, months }) => {
  // Your code here...
};

const price = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
});
console.log(price); // 6250
```

`tsc; node ./dist/app`

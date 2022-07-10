# useLayoutEffect

<div dir="rtl">

useLayoutEffect דומה מאוד ל useEffect, ההבדל הוא ש useLayoutEffect רץ בצורה סנכונית, והוד שירוץ בפונקציה ירוץ לפני
הדינדור של הדום למסך.

נשתמש בזה כדי לקרוא נתונים מה-DOM, וכדי לבצע בו שינויים בצורה סינכורנית.


> תמיד עדיף לנסות את מה שרוצים עם useEffect, אבל אם צריכים שהדברים יתצעו בצורה סנכרונית נשתמש ב useLayoutEffect

בעצם useLayoutEffect הוא שווה ל componentDidMount ו- componentDidUpdate.

גם useLayoutEffect וגם useEffect לא יכולים לחכות לבקשות מהשרת. לכן אם נרצה שחלק בקוד לא ירונדר עד שתתקבל תשובה מהשרת
נוכל לעשות משהו כזה:    

<div dir="ltr">

```jsx
const [showChild, setShowChild] = useState(false)

useEffect(() => {
  setShowChild(true);
}, [])

return (
  <div>
    {showChild && <Child/>}
  </div>
)
```
</div>

</div>
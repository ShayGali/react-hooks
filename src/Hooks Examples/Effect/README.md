# useEffect

<div dir="rtl">
useEffect הוא אחד מהhook הכי חזקים ושימישים בריאקט.

אפשר להשתמש בו לכמה דברים שונים.

השימושים ההעיקריים של useEffect הם בדיוק כמו השם של ה hook - לטיפול ב"תופעות לוואי" (כמו משיכה של מידע, subscription,
שינוי של ה DOM).

אפשר לחשוב על useEffect כ componentDidMount, componentDidUpdate, componentWillUnmount ביחד.
> **_הערה:_** בניגוד ל componentDidMount ו- componentDidUpdate הפונקציה שלנו לא חוסמת את הדפדפן מלהמשיך את הרינודר. זה גורם לאפליקציה להרגיש יותר רספונסיבית. אם כן נרצה שזה יחסום נצטרך להשתמש ב useLayoutEffect

## הדוקומנציה שלו

<div dir="ltr">

    useEffect(effect: EffectCallback,deps?: DependencyList): void
    
    Accepts a function that contains imperative, possibly effectful code.
    Params:
        effect – Imperative function that can return a cleanup function
        deps – If present, effect will only activate if the values in the list change.

</div>
בעצם אנחנו רואים שהפונקציה מקבלת שני ערכים:

1. effect - פונקציה, היא יכולה להחזיר פונקציית ניקיון
2. deps - מערך תלויות, הוא משתנה אופציונאלי, אם הוא הועבר לפונקציה הפונקציה שעברנו ב effect תרוץ רק כאשר יש שינוי באחד
   מהערכים מהרשימה.

אז מה אפשר לעשות עם useEffect?

### ריצה בכל פעם שהקונפוננטה מתרנדרת

עם useEffect אפשר להריץ פונקציה בכל פעם שהקומפוננטה מתרנדרת.

<div dir="ltr">

```js
useEffect(() => {
  console.log("every time that the func render");
});
```

</div>

### ריצה רק כאשר הפונקציה עולה

אפשר להשיג את הפונקציונאליות של componentDidMount מ class component בעזרת useEffect.

אם נעביר במערך תלויות מערך ריק, אז הפונקציה תרוץ רק כאשר ה component עולה וזהו.

התנהגות הזאת טובה לנו לתהליכים שנרצה שיקרו פעם אחד בלבד, לדוגמא משיכה של מידע מ api.
<div dir="ltr">

```js
useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/todos/1}`)
    .then((response) => response.json())
    .then((json) => console.log(json));
}, []);
```

</div>

### ריצה כאשר משתנה משנה את הערך שלו

עוד כח חזק של useEffect הוא ריצה בכל פעם שיש שינוי בערך של משתנה, לדוגמא אם נרצה לעשות בקשה של מידע לפי סוגים שונים,
נוכל לבצע את זה עם useEffect.
<div dir="ltr">

```js
const [resource, setResource] = useState("posts");
const [items, setItems] = useState([]);

useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/${resource}`)
    .then((response) => response.json())
    .then((json) => setItems(json));
}, [resource]);
```

</div>

### componentWillUnmount

כדי לקבל את הפונציונאליות של componentWillUnmount אנחנו יכולים להחזיר פונקציה מהuseEffect והיא תרוץ בכל פעם שה useEffect
רץ, ולפני שהקומפוננטה יורדת מהמסך (unMount). לדוגמא אם נרצה להאזין לשינוי על רוחב החלון אז יהיה אפשר להוסיף לו מאזין,
והלחזיר פונקציה שהיא תדאג שלפני שהפונקציה תרד מהDOM, אנחנו נסיר את המאזין
<div dir="ltr">

```js
const [windowWidth, setWindowWidth] = useState(window.innerWidth);

function handleResize() {
  setWindowWidth(window.innerWidth);
}

useEffect(() => {
  window.addEventListener("resize", handleResize);
  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```

</div>

> **_הערה:_**  הפונקציית ניקוי תרוץ כל פעם שה useEffect ירוץ עוד פעם

</div>

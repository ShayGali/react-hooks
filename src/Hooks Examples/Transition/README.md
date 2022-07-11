# useTransition

<div dir="rtl">

מאפשר לנו, להריץ setState בחלקים שונים.

בעצם אנחנו יכולים להעביר ל useTransition פונקציה, שבה יהיה עדכון שהוא יידחה עד לזמן המתאים.

ככה בעצם אנחנו נותנים עדיפות לעדכונים.

## שימוש

<div dir="ltr">

```js
import {useTransition} from "react";

export default function SomeComponent() {
  const [isPending, startTransition] = useTransition();
}
```

</div>

### isPending

משתנה בולאני שאומר לנו האם הוא סיים את העדכון או לא.

### startTransition

פונקציה שמקבלת פונקצית callback,ששם נשים את הדברים שהם בעדיפות **נמוכה** יותר.

### דוגמא

נגיד בדוגמא יש לנו input, שבכל שינוי הוא ירנדר למסך מערך בגדול 20000 עם אותו הערך של הinput.

אם ננסה לרשום ב input נראה שלוקח לכתב להופיע בתוך ה input תוך כמה שניות, וזה ממש תוקע את האפליקציה וזה נראה שאנחנו לא
כותבים.

לכן אפשר להגיד לו שהעדכון של הרשימה הוא פחות חשוב ושיעשה את זה ברקע - אחרי שהוא יעדכן את הדברים החשובים.

כל עוד הוא לא סיים אנחנו נדפיס במסך את המילה `Loading...`
<div dir="ltr">

```js
import {useState, useTransition} from "react";

export default function UseTransitionExample() {
  const [isPending, startTransition] = useTransition();

  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const LIST_SIZE = 20000;

  function handleChange(e) {
    setInput(e.target.value);

    startTransition(() => {
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }

  return (
    <div align="center">
      <input type="text" value={input} onChange={handleChange}/>
      {isPending
        ? "Loading..."
        : list.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
    </div>
  );
}
```

</div>

> צריך לשים לב שזה גורם לאפליקציה שלנו להתרנדר יותר, לכן צריך להיזר, ולהשתמש ב useTransition רק כשצריך.
</div>
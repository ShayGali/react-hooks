# useDeferredValue

```js
const deferredValue = useDeferredValue(valueToDefer)
```

<div dir="rtl">

מקבל ערך, ומחזיר עותק של הערך שידחה לעדכונים, אם הרינדור הוא תוצאה של הערך הדחוף - כמו קלט, ריאקט תחזיר את הערך הקודם
והוא יעבד את העדכון של הקלט, ורק אחרי זה את הערך מה-useDeferredValue.

נוכל לדחות את העדכונים ע"י useMemo שיזכור את הערך שחוזר מה-useDeferredValue, וככה זזה יעבוד הכי טוב.

## דוגמא

יש לנו קלט מהשתמש, ואנחנו לא רוצים שכל תו שהוא מקליד זה באמת יעשה בקשה לשרת, אלא רק כשאר הוא מסיים להקליד, בשביל זה נוכל
להשתמש ב useDeferredValue.

<div dir="ltr">

### input component

```js
import {useState} from "react";
import List from "./components/List";

export default function App() {
  const [input, setInput] = useState("");
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <List input={input}/>
    </div>
  );
}
```

### render input changes

```js
import {useMemo, useDeferredValue, useEffect} from "react";

export default function List({input}) {
  const LIST_SIZE = 20000;

  const deferredValue = useDeferredValue(input);

  const list = useMemo(() => { // memoizing the list, will change only when the deferredValue will cahnge
    const l = [];

    for (let i = 0; i < LIST_SIZE; i++)
      l.push(<div key={i}>{deferredValue}</div>);

    return l;
  }, [deferredValue]);

  useEffect( // for see the changes in the input value and the deferred value
    () => console.log(`input=${input}\ndeferredValue=${deferredValue}`),
    [input, deferredValue]
  );
  
  return list; // the JSX
}
```
</div>


</div>
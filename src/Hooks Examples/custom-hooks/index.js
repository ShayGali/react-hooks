import useLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";

export default function App() {
  // const [name, setName] = useState("");
  // const [name, setName] = useLocalStorage("name", ()=>"");
  const [name, setName] = useLocalStorage("name", "");
  useUpdateLogger(name);

  return (
    <div align="center">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

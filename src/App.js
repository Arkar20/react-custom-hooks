import "./styles.css";
import useLocalStorage from "./useLoalStorage";
import useLocalLogger from "./useLocalLogger";
export default function App() {
  const [name, setName] = useLocalStorage("name", "");
  useLocalLogger(name);
  return (
    <>
      <lable>Name</lable>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </>
  );
}

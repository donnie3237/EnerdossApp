import { APi1 } from "@/config/api";
import { numStore } from "@/lib/state";
import { useEffect } from "react";

function One() {
  const increase = numStore((state) => state.increase);
  const decrease = numStore((state) => state.decrease);
  const remove = numStore((state) => state.remove);
  const bears = numStore((state) => state.bears);

  useEffect(() => {
    const fetchData = async () => {
      const data = await APi1.get("1");
      const data2 = await APi1.get("2");
      console.log(data.data);
      console.log(data2.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Hi im page 1 with Global state</h1>
      <h1>{bears}</h1>
      <button onClick={decrease}>-1</button>
      <button onClick={remove}>set 0</button>
      <button onClick={increase}>+1</button>
    </>
  );
}

export default One;

import { numStore } from "@/lib/state";

function Main() {
  const bears = numStore((state) => state.bears);

  return (
    <div>
      <h1>{bears}</h1>
    </div>
  );
}

export default Main;

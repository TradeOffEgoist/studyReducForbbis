import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};
const countStore = createStore(countModifier);
countStore.subscribe(() => {
  number.innerText = countStore.getState();
});

const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
  console.log(countStore.getState());
};

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
  console.log(countStore.getState());
};

plus.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

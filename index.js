// ====== Definir Reducer e Estado Inicial ==========
const initialState = {
  counter: 0,
};
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'increment':
      return {
        ...state,
        counter: state.counter += 1
      }
    case 'decrement':
      return {
        ...state,
        counter: state.counter -= 1
      }
    default:
      return state;
  }
};

// ====== Criar a Store ==========
const store = Redux.createStore(reducer);

// ====== Lendo e reagindo a mudanças do Estado Global ==========
// Descomente abaixo:

store.subscribe(() => {
//   // Leia a variável do estado global
  const { counter } = store.getState();

//   // atualizar
  const h1Element = document.getElementById("counter");
  h1Element.innerText = counter;
});

const actionIncrement = {
  type: 'increment',
}

const actionDecrement = {
  type: 'decrement',
}

// ========== Disparar as Actions ==========
const incrementButton = document.getElementById("inc");
const decrementButton = document.getElementById("dec");

incrementButton.addEventListener("click", () => {
  // dispare sua action aqui.
  store.dispatch(actionIncrement);
});
decrementButton.addEventListener("click", () => {
  // dispare sua action aqui.
  store.dispatch(actionDecrement);
});

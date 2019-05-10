export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("user");
    console.log(JSON.parse(serializedState));
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  console.log(state);
  try {
    const serializedState = JSON.stringify(state);
    console.log(serializedState);
    localStorage.setItem("user", serializedState);
    console.log('Setou');
  } catch(err) {
    console.log(err);
    alert("Erro ao salvar dados");
  }
};

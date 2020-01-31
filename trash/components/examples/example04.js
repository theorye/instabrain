const initialState = "";
const reducer = (state, action) => action;

const Example04 = () => {
  const [firstName, changeFirstName] = useReducer(reducer, initialState);
  const [lastName, changeLastName] = useReducer(reducer, initialState);
  return (
    <>
      <div>
        First Name:
        <TextInput value={firstName} onChangeText={changeFirstName} />
      </div>
      <div>
        Last Name:
        <TextInput value={lastName} onChangeText={changeLastName} />
      </div>
    </>
  );
};

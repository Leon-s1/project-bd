import React, { useState } from 'react'

//создадим свой хук useInputValue
function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue)

  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(''),
    value: () => value,
  }
}

function AddUser({ onCreate }) {
  // const [value, setValue] = useState('') состояние перенесли в свой созданный хук useInputValue
  const input = useInputValue('') //передаем в input объект со значениями value, onChange

  function submitHandler(event) {
    event.preventDefault()

    if (input.value().trim()) {
      onCreate(input.value()) //добавляем новый todo в todoList
      // setValue('') //очищаем поле input от введенного текста
      input.clear()
    }
  }

  return (
    <form style={{ marginBottom: '1rem' }} onSubmit={submitHandler}>
      <input {...input.bind} />
      <button type="submit">Add todo</button>
    </form>
  )
}
export default AddUser

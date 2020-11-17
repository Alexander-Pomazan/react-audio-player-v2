import React, { useEffect, useState } from 'react'

type Subscriber<T> = (publishedValue: T) => void
type Unsubscribe = () => void

type StateJar<T> = {
  read: () => T
  write: (value: T) => void
  subscribe: (subscriber: Subscriber<T>) => Unsubscribe
}

const createStateJar = <T,>(initialState: T): StateJar<T> => {
  let subscribers: Subscriber<T>[] = []

  let stateValue = initialState

  const publishValue = (value: T) => {
    subscribers.forEach((send) => send(value))
  }

  const write = (newValue: T) => {
    stateValue = newValue

    publishValue(newValue)
  }

  const subscribe = (subscriber: Subscriber<T>) => {
    subscribers = [...subscribers, subscriber]

    const unsubscribe = () => subscribers.filter((sub) => sub !== subscriber)

    return unsubscribe
  }

  return {
    read: () => stateValue,
    write,
    subscribe,
  }
}

const useStateJar = <T,>(stateJar: StateJar<T>) => {
  const { read, subscribe } = stateJar

  const [state, setState] = useState(read)

  // because we know that subscribe never changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => subscribe(setState), [])

  return state
}

// TEST

type EmailInputValue = string

type Email = string

const emailInputJar = createStateJar<EmailInputValue>('')

const submittedEmailJar = createStateJar('')

const createFormUseCases = () => {
  const getEmailInputValue = () => emailInputJar.read()

  const setEmailInputValue = (value: EmailInputValue) => {
    emailInputJar.write(value)
  }

  const setSubmittedEmail = (value: Email) => submittedEmailJar.write(value)

  const submitEmailForm = () => {
    const emailInputValue = getEmailInputValue()

    setSubmittedEmail(emailInputValue)

    setEmailInputValue('')
  }

  return {
    setEmailInputValue,
    submitEmailForm,
  }
}

const formUseCases = createFormUseCases()

export const TestStateJar = () => {
  const inputValue = useStateJar(emailInputJar)
  const submittedEmail = useStateJar(submittedEmailJar)

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          formUseCases.submitEmailForm()
        }}
      >
        <h2>Form</h2>
        <input
          type='text'
          name='email'
          value={inputValue}
          placeholder='email'
          onChange={(e) =>
            formUseCases.setEmailInputValue(e.currentTarget.value)
          }
        />
      </form>
      <div>Submitted value: {submittedEmail}</div>
    </div>
  )
}

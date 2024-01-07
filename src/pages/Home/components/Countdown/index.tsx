import { useContext, useEffect } from 'react'
import { CountdownContainer, Separator } from './styles'
import { differenceInSeconds } from 'date-fns'
import { CycleContext } from '../..'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSecondPassed,
  } = useContext(CycleContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  useEffect(() => {
    let interval: number
    if (activeCycle) {
      interval = setInterval(() => {
        const SecondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (SecondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()
          setSecondPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondPassed(SecondsDifference)
        }
      }, 1000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCurrentCycleAsFinished,
    setSecondPassed,
  ])

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  // conversão final para exibição usando metodo floor,
  // para arredondar o valor para baixo

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  // converter para string e inserir 0 como caracter extra se menor que 2 caracteres.
  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}

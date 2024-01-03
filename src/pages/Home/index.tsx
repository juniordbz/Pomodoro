import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmont: zod
    .number()
    .min(5, 'O ciclo é de no mímino 5 minutos')
    .max(60, 'O ciclo é de no máximo 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
  const { register, handleSubmit, watch } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmont: 0,
    },
  })

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data)
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome ao seu projeto"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 01"></option>
            <option value="Projeto 02"></option>
            <option value="Projeto 03"></option>
            <option value="Projeto 04"></option>
          </datalist>

          <label htmlFor="minutesAmont">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmont"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmont', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}

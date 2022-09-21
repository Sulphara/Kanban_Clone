import React, { ReactNode } from 'react';
import { taskProps } from '../helpers/task'
import * as S from './style'


type Props = {
  item: taskProps
  handleNext?: (id: number) => void

}


const NewTaskArea = ({ item, handleNext }: Props) => {
  return (
    <S.Container>
      <S.textArea>{item.title}</S.textArea>
      <S.buttonArea>
        {handleNext ? (
          <button onClick={() => handleNext(item.id)}>Next</button>
        ) : (
          <button>Next</button>
        )}
      </S.buttonArea>
    </S.Container>
  )
}

export default NewTaskArea;
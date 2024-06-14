import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CounterAction } from '../Store/Counterslice'

export default function Counter() {
    const Counter = useSelector(state => state.cart.counter)

    const dispatch = useDispatch();

    const oneInc = () =>{
      // alert('hg')
      dispatch(CounterAction.oneInc({
        inc:1
      }))
    }
    const oneDec = () =>{
      // alert('hg')
      dispatch(CounterAction.oneDec({
        dec:1
      }))
    }
    const twoInc = () =>{
      // alert('hg')
      dispatch(CounterAction.twoInc({
        inc:2
      }))
    }
    const twoDec = () =>{
      // alert('hg')
      dispatch(CounterAction.twoDec({
        dec:2
      }))
    }
  return (
    <div>
      <h1 style={{ textAlign: 'center',paddingTop: '80px', paddingBottom: '80px'}}>{Counter}</h1>

      <div className='d-flex justify-content-around'>
        <button className='btn btn-primary' onClick={oneInc}>+1</button>
        <button className='btn btn-primary' onClick={oneDec}>-1</button>
        <button className='btn btn-primary' onClick={twoInc}>+2</button>
        <button className='btn btn-primary' onClick={twoDec}>-2</button>
      </div>
    </div>
  )
}

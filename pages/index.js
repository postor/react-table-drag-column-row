import { useState } from 'react'
import ReactTableDragColumnRow from '../components/ReactTableDragColumnRow'


export default () => {
  let [data, setData] = useState({
    heads: ['a', 'b', 'c', 'd', 'e', 'f'],
    rows: [
      [1, 2, 3, 1, 2, 3],
      [11, 2, 3, 11, 2, 3],
      [1, 22, 3, 1, 22, 3],
      [1, 2, 33, 1, 2, 33],
    ]
  })
  return (<div>
    <h1>react table drag column row</h1>
    <ReactTableDragColumnRow
      heads={data.heads}
      rows={data.rows}
      onDragEnd={(type, from, to, newData) => {
        console.log({
          type, from, to, newData
        })
        setData(newData)
      }} />
  </div>)
}
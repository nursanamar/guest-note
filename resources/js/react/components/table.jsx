import React from 'react'

export default function table({children,headers = []}) {
  return (
    <table border={1}>
        <thead>
            {headers.map(name => {
                return <th>{name}</th>
            })}
        </thead>
        <tbody>
            {children}
        </tbody>
    </table>
  )
}

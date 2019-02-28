import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Ticket = (props) => (
  <div>
    <h1>{props.ticket.alias} - {props.ticket.subject}</h1>
    <p>Department: {props.ticket.department.name}</p>
    <p>User: {props.ticket.user.firstName} {props.ticket.user.lastName}</p>
    <p>{props.ticket.description}</p>
  </div>
)

Ticket.getInitialProps = async function(context) {
  const { id } = context.query
  const res = await fetch(`http://localhost:3333/ticket/${id}`)
  const data = await res.json()

  return {
    ticket: data
  }
}

export default Ticket
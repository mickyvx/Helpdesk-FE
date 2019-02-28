import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Tickets = (props) => (
  <div>
    <h1>Ticket List</h1>
    <ul>
      {props.tickets.map(({id, alias, subject, department}) => (
          <li key={id}>
            <Link href={`/tickets/view/${id}`}>
              <a>{alias} - {subject} - {department.name}</a>
            </Link>
          </li>
        ))}
    </ul>
  </div>
)

Tickets.getInitialProps = async function() {
  const res = await fetch('http://localhost:3333/ticket/list')
  const data = await res.json()

  return {
    tickets: data
  }
}

export default Tickets
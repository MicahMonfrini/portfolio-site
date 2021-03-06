import { withRouter } from 'next/router';

const ActiveLink = ({ children, router, href }) => {
  const style = {
    boxSizing: 'border-box',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 100,
    margin: 15,
    paddingBottom: 0,
    position: 'relative',
    color: 'white',
    borderBottom: router.pathname === href ? '2px solid #af0101' : 'none'
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}

export default withRouter(ActiveLink);

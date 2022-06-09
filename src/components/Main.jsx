import Contacts from './Contacts'
import Posts from './Posts'
import Counter from './Counter'

const Main = () => {
  return (
    <div>
      <Counter />
      <Posts />
      <Contacts name={'Petras'} />
    </div>
  )
}

export default Main

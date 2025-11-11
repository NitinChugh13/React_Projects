import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center gap-6 p-6 flex-wrap">
        <Card subject={"Maths"}  price={"$200"} cart={"ADD TO CART"} image={"https://m.media-amazon.com/images/I/61u4ETU+ksL._AC_UF1000,1000_QL80_.jpg"}/>
        <Card subject={"Physics"}  price={"$300"} cart={"ADD TO CART"} image={"https://m.media-amazon.com/images/I/71zIDc0j0OL.jpg"}/>
        <Card subject={"Biology"}  price={"$400"} cart={"ADD TO CART"} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt9XGY6aS1a7aWVlW7NYY60z_HeWwdn6UFyw&s"}/>
        <Card subject={"Chemistry"}  price={"$100"} cart={"ADD TO CART"} image={"https://m.media-amazon.com/images/I/61GmK-tpSxL._AC_UF1000,1000_QL80_.jpg"}/>
</div>
    </>
  )
}

export default App

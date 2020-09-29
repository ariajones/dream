import React, { useContext } from 'react'
import MiscShoppingListItem from './MiscShoppingListItem'
import { clearShoppingList } from '../utils'

import { ShoppingListContext } from './context/ShoppingListContext'

function ShoppingList () {
  const [shoppingList] = useContext(ShoppingListContext)

  return (
    <div className="ShoppingList">
      <button onClick={() => clearShoppingList()}>Clear Shopping List</button>
      <MiscShoppingListItem />
      <ul>
        {shoppingList.map(shoppingListItem =>
          <li key={shoppingListItem.id}>
            {shoppingListItem.ingredients.map((ingredient, index) => (
              <h5 key={index}> {ingredient}</h5>
            ))}
          </li>
        )}
      </ul>
    </div>
  )
}

export default ShoppingList

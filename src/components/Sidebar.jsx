import { set } from "mongoose"
import { useState, useCallback } from "react"
/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar({ initialMenuItems }) {
  let [newMenuItem, setNewMenuItem] = useState("")
  // TODO: 2 Using a state hook, maintain the current menu items as an array state.
  let [menuItems, setMenuItems] = useState(initialMenuItems)
  let [filter, setFilter] = useState("")

  // Adds a single string passed in as parameter to the state element
  // "menuItems" that holds the set of current menu items.
  let addMenuItem = useCallback(() => {
    if (newMenuItem.trim ()) {
      setMenuItems((prevItems) => [newMenuItem, ...prevItems]) 
      setNewMenuItem("")
    }
  }, [newMenuItem])
      //   // TODO: 3. Add a new menu item to the correct variable associated with this class.
    //   // This involves adding a parameter and changing a class instance variable (props).
    //   setMenuItems([item, ...menuItems])
 
  // TODO: 4. Display ONLY the menu items that contain the filter element value
  // "term" in them. Each menu item should be an unordered list item wrapped in an unordered list (ul) element.
 
  const filteredItems = menuItems.filter((item) =>
    item.toLowerCase().includes(filter.toLowerCase()) // Case-insensitive filtering
  )

  // TODO: 1 Render inside the outer div an unordered list of the menu items, with each string in the array
  // its own item.
  return (
    <div>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>

      <br />
<ul> 
{filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
</ul>

      <button onClick={addMenuItem}>Add Item</button>
      <br />
      <input
       id="filter"
       type="text"
       value={filter}
       onChange={(event) => setFilter(event.target.value)}
       placeholder="Filter by..."
      ></input>
    </div>
  )
}
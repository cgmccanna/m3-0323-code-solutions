import './AppDrawer.css';

export default function MenuItems({items, onShow}) {
  const listItems = items.map(item =>
      <li key={item.id} onClick={onShow}>{item.title}</li>
      );
  return (
    <ul>{listItems}</ul>
  )
}

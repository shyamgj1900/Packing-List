export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 👝</em>
      </footer>
    );
  }

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You have packed everything! Ready to go ✈️</em>
      ) : (
        <em>
          💼 You have {numItems} items on your list, and already packed{" "}
          {numPackedItems} ({percentage})%
        </em>
      )}
    </footer>
  );
}

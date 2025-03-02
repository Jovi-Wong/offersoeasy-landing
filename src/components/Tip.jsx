export default function Tip({ message }) {
  return (
    <div
      className="bg-blue-100 border-l-4 border-blue-500 text-yellow-700 p-4 mb-4"
      role="alert"
    >
      <p className="font-bold">温馨提示</p>
      <p>{message}</p>
    </div>
  );
}

export default function Info({ heading, children }) {
  return (
    <div className="w-96">
      <h1 className="text-4xl font-bold">{heading}</h1>
      <p>{children}</p>
    </div>
  );
}

export default function DisplayComponent({ name, children }) {
  return (
    <div className="p-6 text-center max-w-full gap-y-8">
      <h3 className="text-4xl font-semibold mb-4">{ name }</h3>
      {children}
    </div>
  )
}

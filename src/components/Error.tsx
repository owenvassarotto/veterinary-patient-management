
export default function Error({ children } : { children: React.ReactNode }) {
  return (
    <p className="bg-red-600 text-white text-center my-2 font-bold uppercase p-2 text-xs">
        {children}
    </p>
  )
}

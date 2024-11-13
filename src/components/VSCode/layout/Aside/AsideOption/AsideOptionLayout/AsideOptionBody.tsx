

export default function AsideOptionBody({ children }: { children?: React.ReactNode }){

  return (
    <div className=" flex flex-col min-w-52 bg-accent/10 overflow-y-auto overflow-x-hidden">
      {children}
    </div>
  )

}
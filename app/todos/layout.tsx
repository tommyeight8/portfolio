import Todolist from "./todolist";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <div className="flex">
        <div className="">
            <Todolist />
        </div>
        <div className="flex-2">
            {children}
        </div>
    </div>
}
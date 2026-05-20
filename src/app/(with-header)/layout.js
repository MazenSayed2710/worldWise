import Header from "@/components/Header";

export default function layout({ children }) {
  return (
    <>
      <Header />
      <main className="h-full">{children}</main>
    </>
  );
}

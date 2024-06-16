import { notFound } from "next/navigation"; //not nessary for custom error

export default function NotFound() {
  return notFound(); // not useful in custom error
  // return <div>Any custom error page can be done here</div>
}

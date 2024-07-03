import { Spinner } from "@/components/ui/icons";

export default function Loading() {
  return (
    <div className="grid place-content-center h-screen text-primary">
      <Spinner className="animate-spin size-8" />
    </div>
  )
}

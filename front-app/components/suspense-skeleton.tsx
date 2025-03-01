import SuspenseSkeletonType from "@/types/suspense-skeleton.type";

export default function SuspenseSkeleton({ skeleton, children, loading }: SuspenseSkeletonType) {
  return (loading ? <>{ skeleton }</> : <>{ children }</>);
}

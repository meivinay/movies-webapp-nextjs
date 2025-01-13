export default function DashboardLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return <main className="flex grow gap-x-4 max-h-full my-4">{children}</main>;
}

export default function HomeStatus(props: { title: string; message: string }) {
  return (
    <div className="flex flex-col items-center px-2 py-12 text-white">
      <h4 className="mb-1 text-2xl">{props.title}</h4>
      <span className="text-sm">{props.message}</span>
    </div>
  );
}

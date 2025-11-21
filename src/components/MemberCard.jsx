export default function MemberCard({ data }) {
  const { url, name, title } = data;
  return (
    <div className="flex flex-col gap-y-2 items-start">
      <img src={url} alt="" className="rounded-sm"/>
      <span className="text-ebonyClay text-xl font-semibold">{name}</span>
      <span className="text-xs text-doveGray font-semibold">{title}</span>
    </div>
  );
}

interface IBadge {
  title: string;
  backgroundColor: string;
}

const Badge: React.FC<IBadge> = ({ title, backgroundColor }) => (
  <div
    className={`rounded-full px-2 py-1 text-sm font-medium text-white ${backgroundColor}`}
  >
    {title}
  </div>
);

export { Badge };

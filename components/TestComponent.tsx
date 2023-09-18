interface Props {
  title: string;
}

export default function TestComponent({ title }: Props) {
  return <div className='text-7xl'>{title}</div>;
}

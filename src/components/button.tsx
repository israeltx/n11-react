type Props = {
  name: string
}

export function Button(props: Props) {
  return <button>{props.name}</button>
}
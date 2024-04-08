import { FC } from 'react'

type HeadingProps = {
  text: string
  level: 1 | 2 | 3 | 4 | 5 | 6
}
export const Heading: FC<HeadingProps> = ({ text, level }) => {
  switch (level) {
    case 1:
      return <h1 className="text-5xl font-bold">{text}</h1>
    case 2:
      return <h2 className="text-4xl font-bold">{text}</h2>
    case 3:
      return <h3 className="text-3xl font-bold">{text}</h3>
    case 4:
      return <h4 className="text-2xl font-bold">{text}</h4>
    case 5:
      return <h5 className="text-xl font-bold">{text}</h5>
    case 6:
      return <h6 className="text-lg font-bold">{text}</h6>
  }
}

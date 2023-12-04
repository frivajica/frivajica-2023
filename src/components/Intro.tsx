import { AnimatedLine } from './AnimatedLine'

const lines = [
  'Hello there',
  'You can call me Fran',
  'I love my job',
  'Building things, optimizing stuff',
  'Thanks for comming'
]

export const Intro = () => {
  return (
    <>
      <AnimatedLine text={lines[0]} />
      <AnimatedLine text={lines[1]} delay={2} />
    </>
  )
}

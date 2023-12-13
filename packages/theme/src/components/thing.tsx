export interface IHelloWorld {
  text: string;
}
export const Helloworld = ({ text }: IHelloWorld) => {
  return <div className="text-red-500">This is test text: {text}</div>;
};

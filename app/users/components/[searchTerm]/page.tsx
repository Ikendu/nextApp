//tsrfc

type Props = {
  params: {
    searchTerms: string;
  };
};
export default function page({ params: { searchTerms } }: Props) {
  return <div>page</div>;
}

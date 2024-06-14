type Params = {
  params: {
    userId: string;
  };
};

export default function UserPage({ params: { userId: string } }: Params) {
  return <div>page</div>;
}

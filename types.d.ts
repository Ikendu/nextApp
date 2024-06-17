//Assign types to the post Object properties
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

//Asign types to the Users Object properties
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

// seart term types for the wikipedia search
type Result = {
  padgid: string;
  title: string;
  extract: string;
  thumbnails?: {
    source: string;
    width: number;
    height: number;
  };
};

//searchTerm for the search reslt
type SearchResult = {
  query?: {
    pages?: Result[];
  };
};

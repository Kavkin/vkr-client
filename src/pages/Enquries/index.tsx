import React, { FC } from "react";

interface Enqury {
  id: number;
  name: string;
  age: number;
  done: boolean;
}

const Enquries: FC = (props): JSX.Element => {
  const [enquryList, setEnquryList] = React.useState<Enqury[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");

  React.useEffect(() => {
    getEnquryList();
  }, []);

  async function getEnquryList() {
    setIsLoading(true);
    try {
      const res = await fetch("/enquiries", {
        method: "Post",
        headers: { "Content-Type": "application/json", Accept: "*/*" },
      });
      const data = await res.json();
      setEnquryList(data);
    } catch (e) {
      if (e instanceof Error) {
        setErrorMessage(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="Enquries">
      {errorMessage}
      {isLoading && "loading..."}
      {enquryList.map((enquiry) => {
        return <div key={enquiry.id}>{enquiry.name}</div>;
      })}
    </div>
  );
};

export default Enquries;
